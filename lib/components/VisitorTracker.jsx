import { useEffect, useRef } from "react";
import { generateFingerprint } from "../utils/fingerprint";

const VisitorTracker = () => {
	const hasTracked = useRef(false);

	useEffect(() => {
		// Only track once per page load
		if (hasTracked.current) return;
		hasTracked.current = true;

		// Check if we've already tracked this session
		const sessionKey = "visitor_tracked_session";
		const trackedThisSession = sessionStorage.getItem(sessionKey);

		if (trackedThisSession) {
			return; // Already tracked in this session
		}

		// Generate fingerprint
		const { fingerprint, details } = generateFingerprint();

		// Track visitor
		const trackVisitor = async () => {
			try {
				const response = await fetch("/api/visitors/track", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						fingerprint,
						browserDetails: details,
					}),
				});

				if (response.ok) {
					// Mark as tracked for this session
					sessionStorage.setItem(sessionKey, "true");
				}
			} catch (error) {
				console.error("Error tracking visitor:", error);
				// Silently fail - don't interrupt user experience
			}
		};

		// Small delay to ensure page is fully loaded
		setTimeout(trackVisitor, 1000);
	}, []);

	return null; // This component doesn't render anything
};

export default VisitorTracker;

