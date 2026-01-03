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

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { fingerprint, browserDetails } = req.body;

		if (!fingerprint) {
			return res.status(400).json({
				error: "Fingerprint is required",
			});
		}

		// Get IP address and request headers
		const ipAddress = getClientIP(req);
		const headers = getRequestHeaders(req);

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

