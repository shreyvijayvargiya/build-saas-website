/**
 * Get browser geolocation (requires user permission)
 * @returns {Promise<Object|null>} Location object with lat, lng, accuracy or null
 */
export const getBrowserGeolocation = () => {
	return new Promise((resolve) => {
		if (!navigator.geolocation) {
			resolve(null);
			return;
		}

		// Timeout after 5 seconds
		const timeout = setTimeout(() => {
			resolve(null);
		}, 5000);

		navigator.geolocation.getCurrentPosition(
			(position) => {
				clearTimeout(timeout);
				resolve({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					accuracy: position.coords.accuracy,
					altitude: position.coords.altitude,
					altitudeAccuracy: position.coords.altitudeAccuracy,
					heading: position.coords.heading,
					speed: position.coords.speed,
					timestamp: position.timestamp,
					source: "browser",
				});
			},
			(error) => {
				clearTimeout(timeout);
				// Silently fail - don't interrupt user experience
				resolve(null);
			},
			{
				enableHighAccuracy: false, // Faster, less accurate
				timeout: 5000,
				maximumAge: 60000, // Accept cached position up to 1 minute old
			}
		);
	});
};

