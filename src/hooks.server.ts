import type { Handle } from '@sveltejs/kit';
import superuserClient from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = superuserClient;

	const response = await resolve(event);
	return response;
};
