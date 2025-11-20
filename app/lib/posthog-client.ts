import posthog from "posthog-js";

// Initialize PostHog client-side
if (typeof window !== "undefined" && !posthog.__loaded) {
	posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY || "", {
		api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
		ui_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
		// Only identify users who have logged in
		person_profiles: "identified_only",
		// Enables capturing unhandled exceptions via Error Tracking
		capture_pageview: false, // Disable automatic pageview capture, we'll handle this manually
		capture_pageleave: true,
		capture_exceptions: true,
		// Turn on debug in development mode
		debug: import.meta.env.DEV,
	});
}

export default posthog;
