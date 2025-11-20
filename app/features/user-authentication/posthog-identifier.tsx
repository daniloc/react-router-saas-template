import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

interface PostHogIdentifierProps {
	userId: string;
	email: string;
	name?: string | null;
}

/**
 * Component that identifies users in PostHog when they're authenticated.
 * Should be mounted in authenticated routes to track user sessions.
 */
export function PostHogIdentifier({ userId, email, name }: PostHogIdentifierProps) {
	const posthog = usePostHog();

	useEffect(() => {
		if (posthog && userId) {
			posthog.identify(userId, {
				email,
				...(name && { name }),
			});
		}
	}, [posthog, userId, email, name]);

	return null;
}
