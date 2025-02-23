<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = '', children, ...restProps } = $props();
</script>

<button class={cn('neon-button font-matrix tracking-wider uppercase', className)} {...restProps}>
	{@render children()}
</button>

<style>
	.neon-button {
		color: #00ff00;
		border: 4px solid #00ff00;
		border-radius: 4px;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		transition: box-shadow 0.2s;
		text-shadow:
			0 0 2px #00ff00,
			0 0 6px #00ff00;
	}

	.neon-button:hover {
		box-shadow:
			0 0 10px #00ff00,
			0 0 20px #00ff00;
	}
</style>
