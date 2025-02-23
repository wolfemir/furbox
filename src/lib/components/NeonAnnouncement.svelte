<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import NeonButton from './NeonButton.svelte';

	let showAnnouncement = $state(false);

	let {
		class: className,
		buttonText,
		announcementHeading,
		children,
		...restProps
	}: HTMLButtonAttributes & {
		buttonText: string;
		announcementHeading: string;
	} = $props();
</script>

<NeonButton
	onclick={() => {
		showAnnouncement = !showAnnouncement;
	}}
	class={cn('font-bold', className)}
	{...restProps}
>
	{buttonText}
</NeonButton>

{#if showAnnouncement}
	<button
		class="animate-fade-in fixed inset-0 flex items-center justify-center backdrop-blur-sm"
		onclick={() => {
			showAnnouncement = false;
		}}
	>
		<div
			class="bg-background text-foreground border-neon-green font-matrix max-w-lg border-4 p-8 xl:max-w-xl"
		>
			<h3 class="text-lg font-bold md:text-xl lg:text-2xl">{announcementHeading}</h3>

			{@render children?.()}
		</div>
	</button>
{/if}
