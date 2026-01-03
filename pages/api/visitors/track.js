import {
	getVisitorByFingerprint,
	createVisitor,
	updateVisitorVisit,
} from "../../../lib/api/visitors";

/**
 * Get client IP address from request headers
 * @param {Object} req - Next.js request object
 * @returns {string} IP address
 */
const getClientIP = (req) => {
	// Check various headers for IP address (for different hosting providers)
	const forwarded = req.headers["x-forwarded-for"];
	const realIP = req.headers["x-real-ip"];
	const cfConnectingIP = req.headers["cf-connecting-ip"]; // Cloudflare

	if (cfConnectingIP) {
		return cfConnectingIP;
	}

	if (forwarded) {
		// x-forwarded-for can contain multiple IPs, take the first one
		return forwarded.split(",")[0].trim();
	}

	if (realIP) {
		return realIP;
	}

	// Fallback to connection remote address
	return req.socket?.remoteAddress || req.connection?.remoteAddress || "unknown";
};

/**
 * Extract user agent and other headers
 */
const getRequestHeaders = (req) => {
	return {
		userAgent: req.headers["user-agent"] || "unknown",
		acceptLanguage: req.headers["accept-language"] || "unknown",
		acceptEncoding: req.headers["accept-encoding"] || "unknown",
		accept: req.headers["accept"] || "unknown",
		referer: req.headers["referer"] || req.headers["referrer"] || "direct",
		origin: req.headers["origin"] || "unknown",
	};
};

/**
 * Get location data from IP address using ip-api.com (free tier)
 * @param {string} ipAddress - IP address
 * @returns {Promise<Object|null>} Location data or null
 */
const getIPGeolocation = async (ipAddress) => {
	try {
		// Skip localhost/private IPs
		if (
			ipAddress === "unknown" ||
			ipAddress === "127.0.0.1" ||
			ipAddress.startsWith("192.168.") ||
			ipAddress.startsWith("10.") ||
			ipAddress.startsWith("172.16.") ||
			ipAddress === "::1"
		) {
			return null;
		}

		const response = await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`, {
			method: "GET",
			headers: {
				"Accept": "application/json",
			},
		});

		if (!response.ok) {
			return null;
		}

		const data = await response.json();

		if (data.status === "success") {
			return {
				latitude: data.lat,
				longitude: data.lon,
				country: data.country,
				countryCode: data.countryCode,
				region: data.region,
				regionName: data.regionName,
				city: data.city,
				zip: data.zip,
				timezone: data.timezone,
				isp: data.isp,
				org: data.org,
				as: data.as,
				source: "ip-api",
			};
		}

		return null;
	} catch (error) {
		console.error("Error getting IP geolocation:", error);
		return null;
	}
};

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { fingerprint, browserDetails, browserLocation } = req.body;

		if (!fingerprint) {
			return res.status(400).json({
				error: "Fingerprint is required",
			});
		}

		// Get IP address and request headers
		const ipAddress = getClientIP(req);
		const headers = getRequestHeaders(req);

		// Get IP-based geolocation
		const ipLocation = await getIPGeolocation(ipAddress);

		// Merge location data (browser location takes precedence if available)
		let locationData = {};
		if (browserLocation && browserLocation.latitude && browserLocation.longitude) {
			// Use browser geolocation (more accurate)
			locationData = {
				latitude: browserLocation.latitude,
				longitude: browserLocation.longitude,
				accuracy: browserLocation.accuracy,
				altitude: browserLocation.altitude,
				altitudeAccuracy: browserLocation.altitudeAccuracy,
				heading: browserLocation.heading,
				speed: browserLocation.speed,
				locationSource: "browser",
				// Merge IP location data for country/city if available
				...(ipLocation && {
					country: ipLocation.country,
					countryCode: ipLocation.countryCode,
					region: ipLocation.region,
					regionName: ipLocation.regionName,
					city: ipLocation.city,
					zip: ipLocation.zip,
					timezone: ipLocation.timezone,
					isp: ipLocation.isp,
				}),
			};
		} else if (ipLocation) {
			// Fallback to IP-based location
			locationData = {
				latitude: ipLocation.latitude,
				longitude: ipLocation.longitude,
				country: ipLocation.country,
				countryCode: ipLocation.countryCode,
				region: ipLocation.region,
				regionName: ipLocation.regionName,
				city: ipLocation.city,
				zip: ipLocation.zip,
				timezone: ipLocation.timezone,
				isp: ipLocation.isp,
				org: ipLocation.org,
				as: ipLocation.as,
				locationSource: "ip-api",
			};
		}

		// Check if visitor already exists
		const existingVisitor = await getVisitorByFingerprint(fingerprint);

		if (existingVisitor) {
			// Update existing visitor's last visit
			await updateVisitorVisit(existingVisitor.id);

			return res.status(200).json({
				success: true,
				message: "Visitor updated",
				visitorId: existingVisitor.id,
				isNew: false,
			});
		} else {
			// Create new visitor
			const visitorData = {
				fingerprint,
				ipAddress,
				...headers,
				browserDetails: browserDetails || {},
				// Location data
				...locationData,
				// Additional metadata
				host: req.headers["host"] || "unknown",
				protocol: req.headers["x-forwarded-proto"] || "unknown",
			};

			const visitorId = await createVisitor(visitorData);

			return res.status(200).json({
				success: true,
				message: "Visitor tracked",
				visitorId,
				isNew: true,
			});
		}
	} catch (error) {
		console.error("Error tracking visitor:", error);
		return res.status(500).json({
			error: "Internal server error",
			message: error.message,
		});
	}
}

