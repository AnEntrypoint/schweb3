<script>
	import { forwardEventHandlers, T, useThrelte } from '@threlte/core';
	//Camera controls
	import CameraControls from './CameraControls/CameraControls.svelte'
	import { cameraControls } from '../stores';
	
	const startPos = [0, 3, 14];
</script>

<T.PerspectiveCamera
	makeDefault
	position={startPos}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
>
	<CameraControls
		on:create={({ ref }) => {
			$cameraControls = ref;
		}}
	/>
</T.PerspectiveCamera>