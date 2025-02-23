<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="dark bg-background text-foreground font-sans">
	{@render children()}
</div>
