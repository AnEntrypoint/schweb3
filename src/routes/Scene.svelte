<script>
	import { T, useTask } from '@threlte/core';
	import {
		ContactShadows,
		Float,
		Grid,
		interactivity
	} from '@threlte/extras';
	import {
		Color,
		IcosahedronGeometry,
		MeshStandardMaterial,
		Vector3,
		CatmullRomCurve3
	} from 'three';
	import Camera from '../lib/components/camera.svelte';
	import { cameraControls } from '../lib/stores';

	import Column from '../lib/components/Assets/column.svelte';

	import Weareone from '../lib/components/Assets/weareone.svelte';
	import Freedomfirst from '../lib/components/Assets/freedomfirst.svelte';
	import Anentrypoint from '../lib/components/Assets/anentrypoint.svelte';
	import Numbers from '../lib/components/Assets/numbers.svelte';
	import Heclgang from '../lib/components/Assets/heclgang.svelte';

	// import { Project, Sheet, SheetObject } from '@threlte/theatre';

	//Camera-Controls
	let camera;
	$: if ($cameraControls) {
		camera = $cameraControls._camera;
	}

	interactivity();
</script>

<!-- Camera -->
<Camera />
<!-- Lights -->
<T.DirectionalLight intensity={20} color="#420247" position={[10, 10, 10]} />
<T.AmbientLight intensity={1} />
<!-- Fog not sure this works but eh -->
<T.FogExp2 color="#cccccc" density={1} />
<!-- GridFloor -->
<Grid
	sectionThickness={1}
	infiniteGrid
	cellColor="#247420"
	sectionColor="#420247"
	sectionSize={10}
	cellSize={2}
/>
<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
<Heclgang/>
<Freedomfirst/>
<Weareone />
<Anentrypoint />
<Numbers />