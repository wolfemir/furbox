<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = '', children, ...restProps } = $props();
</script>

<span class={cn('neon-text font-matrix tracking-wider uppercase', className)} {...restProps}>
	{@render children()}
</span>

<style>
	.neon-text {
		color: #00ff00;
		text-shadow:
			0 0 5px #00ff00,
			0 0 10px #00ff00,
			0 0 20px #00ff00,
			0 0 40px #00ff00;
	}
</style>
