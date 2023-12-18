<script>
	import { Canvas } from '@threlte/core';
	import { Studio } from '@threlte/theatre';
	import Scene from './Scene.svelte';

	// Using SvelteKit
  import { dev } from '$app/environment'
</script>

<div class="h-screen w-auto">
	<!-- <Studio enabled={dev} /> -->
	
	<Canvas>
			<Scene />
	</Canvas>
	
</div>
