import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { POCKETBASE_SUPERUSER_EMAIL, POCKETBASE_SUPERUSER_PASS } from '$env/static/private';

const superuserClient = new PocketBase(PUBLIC_POCKETBASE_URL);
superuserClient.autoCancellation(false);

await superuserClient
	.collection('_superusers')
	.authWithPassword(POCKETBASE_SUPERUSER_EMAIL, POCKETBASE_SUPERUSER_PASS, {
		autoRefreshThreshold: 30 * 60
	});

if (!superuserClient.health) {
	throw new Error('Failed to authenticate superuser');
}

export default superuserClient;
