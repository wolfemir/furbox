<script lang="ts">
	import NeonText from '$lib/components/NeonText.svelte';
	import NeonButton from '$lib/components/NeonButton.svelte';
	import NeonAnnouncement from '$lib/components/NeonAnnouncement.svelte';

	let showAnnouncement = $state(false);
</script>

<svelte:head>
	<title>Furbox - Coming Soon</title>
	<meta name="description" content="MEOW MEOW MEOW! Furbox is coming soon!" />
</svelte:head>

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

	<div class="mt-8 flex max-w-lg flex-wrap items-center justify-center gap-4">
		<NeonAnnouncement buttonText="Announcement" announcementHeading="Welcome to Furbox!">
			<p class="mt-4 text-base md:text-lg lg:text-xl">
				We invite everyone to help shape this website into a vibrant, community-driven space. Have
				ideas, improvements, or new features in mind? Submit a Pull Request on our GitHub repository <a
					href="https://github.com/wolfemir/furbox"
					target="_blank"
					class="decoration-neon-green text-neon-green underline"
				>
					wolfemir/furbox
				</a>, and we&apos;ll do our best to incorporate the best contributions. Together, let&apos;s
				make Furbox great! as we work to bring you a better experience.
			</p>
		</NeonAnnouncement>
		<NeonAnnouncement buttonText="Subscriptions" announcementHeading="Subscriptions">
			<p class="mt-4 text-base md:text-lg lg:text-xl">
				Subscriptions coming soon! (We need to find a real payment vendor that accepts catnip.)
			</p>
		</NeonAnnouncement>

		<NeonAnnouncement buttonText="! Cat Torrent !" announcementHeading="Premium Content">
			<p class="mt-4 text-base md:text-lg lg:text-xl">Download awesome cat content!</p>

			<div class="mt-4 flex flex-col gap-2">
				<a href="/freaking_awesome_cat_videos_and_photos.torrent" target="_blank">
					<NeonButton class="w-full">Download Torrent</NeonButton>
				</a>
				<a
					href="https://drive.google.com/uc?export=download&id=1SC2753Z_te-jUKb_iczcJl5hbnhx6HdJ"
					target="_blank"
				>
					<NeonButton class="w-full">Direct Download</NeonButton>
				</a>
			</div>
		</NeonAnnouncement>
	</div>
</div>
