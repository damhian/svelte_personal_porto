import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';
import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

injectAnalytics({ mode: dev ? 'development' : 'production' });
export async function load() {
	const client = createClient();

	const settings = await client.getSingle('settings');
	return {
		settings
	};
}
