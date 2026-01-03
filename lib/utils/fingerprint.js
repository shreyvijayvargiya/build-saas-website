/**
 * Generate a browser fingerprint based on various browser characteristics
 * This creates a unique identifier for each browser/device combination
 */
export const generateFingerprint = () => {
	try {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		ctx.textBaseline = "top";
		ctx.font = "14px 'Arial'";
		ctx.textBaseline = "alphabetic";
		ctx.fillStyle = "#f60";
		ctx.fillRect(125, 1, 62, 20);
		ctx.fillStyle = "#069";
		ctx.fillText("Browser fingerprint", 2, 15);
		ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
		ctx.fillText("Browser fingerprint", 4, 17);

		const canvasFingerprint = canvas.toDataURL();

		// Collect browser characteristics
		const fingerprint = {
			userAgent: navigator.userAgent,
			language: navigator.language,
			languages: navigator.languages?.join(",") || "",
			platform: navigator.platform,
			cookieEnabled: navigator.cookieEnabled,
			doNotTrack: navigator.doNotTrack,
			hardwareConcurrency: navigator.hardwareConcurrency,
			maxTouchPoints: navigator.maxTouchPoints,
			screenWidth: screen.width,
			screenHeight: screen.height,
			screenColorDepth: screen.colorDepth,
			screenPixelDepth: screen.pixelDepth,
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			timezoneOffset: new Date().getTimezoneOffset(),
			canvasFingerprint: canvasFingerprint.substring(0, 100), // First 100 chars
		};

		// Create a hash from the fingerprint
		const fingerprintString = JSON.stringify(fingerprint);
		let hash = 0;
		for (let i = 0; i < fingerprintString.length; i++) {
			const char = fingerprintString.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32-bit integer
		}

		return {
			fingerprint: Math.abs(hash).toString(36),
			details: fingerprint,
		};
	} catch (error) {
		console.error("Error generating fingerprint:", error);
		// Fallback to a simple hash based on user agent and screen
		const fallback = `${navigator.userAgent}-${screen.width}-${screen.height}-${navigator.language}`;
		let hash = 0;
		for (let i = 0; i < fallback.length; i++) {
			const char = fallback.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash;
		}
		return {
			fingerprint: Math.abs(hash).toString(36),
			details: {
				userAgent: navigator.userAgent,
				screenWidth: screen.width,
				screenHeight: screen.height,
				language: navigator.language,
			},
		};
	}
};

