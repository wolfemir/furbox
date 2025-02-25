<script lang="ts">
	import type { PageData } from './$types';
	import NeonButton from '$lib/components/NeonButton.svelte';

	let { data }: { data: PageData } = $props();

	let perPage = $state(50);
	let page = $state(1);
	let totalPages = $derived.by(() => Math.ceil(data.totalItems / perPage));
	let items = $derived.by(() => data.items.slice((page - 1) * perPage, page * perPage));

	function loadMore() {
		page += 1;
	}
</script>

<svelte:head>
	<title>Catland Gallery</title>
</svelte:head>

<div class="flex min-h-dvh w-full flex-col p-8 md:px-24 lg:px-32 xl:px-40">
	<h1
		class="font-matrix text-neon-green mb-12 text-center text-4xl font-bold md:mb-14 md:text-5xl lg:mb-16 lg:text-6xl"
	>
		CATLAND
	</h1>
	<div class="mt-4 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
		{#each items as file, _}
			<div class="break-inside-avoid">
				{#if file.fileType === 'image'}
					<img
						src={`${file.baseUrl}/${file.fileName}`}
						alt="gallery item"
						class="w-full rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
						loading="lazy"
					/>
				{:else if file.fileType === 'video'}
					<video
						controls
						class="w-full rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
						preload="metadata"
					>
						<source src={`${file.baseUrl}/${file.fileName}`} type="video/mp4" />
						<source src={`${file.baseUrl}/${file.fileName}`} type="video/webm" />
						<track kind="captions" label="English captions" src="" />
						Your browser does not support the video tag.
					</video>
				{/if}
			</div>
		{/each}
	</div>
	
	{#if page < totalPages}
		<div class="text-center mt-8">
			<NeonButton onclick={loadMore} class="w-full max-w-lg">Load more</NeonButton>
		</div>
	{/if}
</div>
