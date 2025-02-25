import type { PageServerLoad } from './$types';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

interface Item {
	collectionId: string;
	collectionName: string;
	id: string;
	files: string[];
	created: string;
	updated: string;
}

interface Items {
	page: number;
	perPage: number;
	totalPages: number;
	totalItems: number;
	items: Item[];
}

interface GalleryFile {
	fileName: string;
	fileType: 'image' | 'video' | 'unknown' | string;
	collectionId: string;
	itemId: string;
	baseUrl: string;
}

const VIDEO_TYPES = ['mp4', 'webm'];
const IMAGE_TYPES = ['jpg', 'jpeg', 'png', 'gif'];

function getExtension(filename: string) {
	return filename.split('.').pop()?.toLowerCase() || '';
}

function getType(filename: string) {
	const extension = getExtension(filename);
	if (VIDEO_TYPES.includes(extension)) {
		return 'video';
	} else if (IMAGE_TYPES.includes(extension)) {
		return 'image';
	} else {
		return 'unknown';
	}
}

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

export const load = (async ({ locals }) => {
	const items = (await locals.pb.collection('bucket').getList(1, 500)) as Items;

	const galleryFiles: GalleryFile[] = items.items.reduce((acc, item) => {
		if (!item.files?.length) return acc;
		return acc.concat(
			item.files
				.map((file) => ({
					fileName: file,
					fileType: getType(file),
					collectionId: item.collectionId,
					itemId: item.id,
					baseUrl: `${PUBLIC_POCKETBASE_URL}/api/files/${item.collectionId}/${item.id}`
				}))
				.filter((file) => file.fileType !== 'unknown')
		);
	}, [] as GalleryFile[]);

	const shuffledFiles = shuffleArray(galleryFiles);
	return {
		items: shuffledFiles,
		totalItems: shuffledFiles.length
	};
}) satisfies PageServerLoad;
