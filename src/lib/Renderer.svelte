<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		element: string;
		children: Snippet;
	}

	const { children, element }: Props = $props();
</script>

<svelte:element this={element}>
	{@render children()}
</svelte:element>
