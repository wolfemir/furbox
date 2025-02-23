<script lang="ts">
	import NeonText from '$lib/components/NeonText.svelte';
	import NeonButton from '$lib/components/NeonButton.svelte';
</script>

<div class="flex h-full min-h-dvh w-full flex-col items-center justify-center gap-2 p-8">
	<div class="aspect-video w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
		<iframe
			title="cat"
			class="h-full w-full border-none"
			src="https://www.youtube-nocookie.com/embed/hvL1339luv0?autoplay=1&mute=0&modestbranding=1&iv_load_policy=3"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		>
		</iframe>
	</div>
	<h2
		class="font-matrix mt-8 text-center text-2xl font-bold tracking-wider uppercase md:text-3xl lg:text-4xl xl:text-5xl"
	>
		Welcome to
		<NeonText class="underline underline-offset-4">Furbox</NeonText>
	</h2>

	<NeonButton class="mt-8 font-bold">Announcement</NeonButton>
</div>
