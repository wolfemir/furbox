<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-background font-sans text-white">
	{@render children()}
</div>
