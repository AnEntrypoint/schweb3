<script>
	import { Canvas } from '@threlte/core';
	import { Sky } from '@threlte/extras';
	import { Studio } from '@threlte/theatre';
	import Scene from './Scene.svelte';

	// Using SvelteKit
	import { dev } from '$app/environment';
</script>

<div class="h-screen w-auto">
	<!-- <Studio enabled={dev} /> -->

	<Canvas>
		<!-- <Sky 
			elevation={1} 
			rayleigh={0.01}
			turbidity={0}
			exposure={0.37}
		/> -->
		<Scene />
	</Canvas>
	<div class="absolute top-10 left-0">
		<div class="relative top-6 left-6">
			<div class="text-purple text-sm font-bold uppercase">point emerging</div>
			<div class="text-green text-3xl font-bold"><code>probably entering</code></div>
		</div>
	</div>
</div>
