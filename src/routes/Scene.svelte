<script>
	import { T, useFrame } from '@threlte/core';
	import {
		MeshLineGeometry,
		MeshLineMaterial,
		ContactShadows,
		Float,
		Grid,
		OrbitControls,
		Text,
		interactivity,
		useCursor
	} from '@threlte/extras';
	import {
		Color,
		IcosahedronGeometry,
		MeshStandardMaterial,
		Vector3,
		CatmullRomCurve3,
	} from 'three';
	// import { Project, Sheet, SheetObject } from '@threlte/theatre';

	let pos = {
		x: 0
	};
	// create a smooth curve from 4 points
	const curve = new CatmullRomCurve3([
		new Vector3(-3, 0, 0),
		new Vector3(-1, 1, -1),
		new Vector3(1, -1, 1),
		new Vector3(3, 0, 0)
	]);

	// convert curve to an array of 100 points
	const points = curve.getPoints(100);
	let width = 0.5;
	let dashOffset = 0;
	let color = new Color();
	const green = new Color('#247420');
	const purp = new Color('#420247');

	useFrame((state, delta) => {
		// every frame we:
		// increase the dash offset
		dashOffset += delta / 2;
		// transition between two colors
		color.lerpColors(green, purp, Math.sin(dashOffset * 2) / 2 + 0.5);
		// shrink and grow the line width
		width = Math.sin(dashOffset * 2) / 5 + 0.3;
		//float primitive buttons
		pos.x = Math.sin(Date.now() / 2000);
	});

	interactivity();

	const { onPointerEnter, onPointerLeave } = useCursor();
</script>

<T.DirectionalLight intensity={20} color={purp} position={[10,10,10]} />
<T.AmbientLight intensity={1} />

<T.PerspectiveCamera
	makeDefault
	fov={50}
	position={[0, 1, 20]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls enabled={true} autoRotateSpeed={0.5} enableDamping target.y={2} />
</T.PerspectiveCamera>

<Grid
	sectionThickness={1}
	infiniteGrid
	cellColor={green}
	sectionColor={purp}
	sectionSize={10}
	cellSize={2}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
<Text text="247" color="#247420" fontSize="4" anchorX="100%" anchorY="200%" />
<Text text="420" color="#420247" fontSize="4" anchorX="0%" anchorY="200%" />
<!-- <Float floatIntensity={1} floatingRange={[0, 1]}>
	<T.Mesh
		position.y={1.2}
		position.z={-0.75}
		geometry={new BoxGeometry(1, 1, 1)}
		material={new MeshStandardMaterial({
			color: new Color('#0059BA')
		})}
	/>
</Float>
<Float floatIntensity={1} floatingRange={[0, 1]}>
	<T.Mesh
		position={[1.2, 1.5, 0.75]}
		rotation.x={5}
		rotation.y={71}
		geometry={new TorusKnotGeometry(0.5, 0.15, 100, 12, 2, 3)}
		material={new MeshStandardMaterial({
			color: new Color('#F85122')
		})}
	/>
</Float> -->
<Float floatIntensity={1} floatingRange={[0, 1]}>
	<T.Mesh
		position={[0,0,0]}
		rotation={[-5, 128, 10]}
		geometry={new IcosahedronGeometry(1, 0)}
		material={new MeshStandardMaterial({
			color: new Color('#F8EBCE')
		})}
	/>
</Float>
<!-- <T.Mesh position.y={1}>
	<T.BoxGeometry args={[1, 2, 1]} />
	<T.MeshBasicMaterial color="hotpink" />
</T.Mesh> -->