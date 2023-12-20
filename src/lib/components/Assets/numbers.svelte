<script>
	import { T, useTask } from '@threlte/core';
	import { MeshLineGeometry, MeshLineMaterial, Float, Text } from '@threlte/extras';
	import { Color, Vector3, CatmullRomCurve3 } from 'three';
	import Column from './column.svelte';

	// create a smooth curve from 4 points
	const curve = new CatmullRomCurve3([
		new Vector3(-3, 0, 0),
		new Vector3(-1, 1, -1),
		new Vector3(1, -1, 1),
		new Vector3(3, 0, 0)
	]);

	// convert curve to an array of 100 points
	const points = curve.getPoints(100);
	let width = 0.1;
	let dashOffset = 0;
	let color = new Color();
	const green = new Color('#247420');
	const purp = new Color('#420247');

	useTask((delta) => {
		// every frame we:
		// increase the dash offset
		dashOffset += delta / 2;
		// transition between two colors
		color.lerpColors(green, purp, Math.sin(dashOffset * 2) / 2 + 0.5);
		// shrink and grow the line width
		width = Math.sin(dashOffset * 2) / 5 + 0.3;
	});
</script>

<T.Group>
	<Float floatIntensity={1} floatingRange={[1, 1.3]}>
		<!-- Text -->
		<Text text="247" color="#247420" fontSize="1" anchorX="100%" anchorY="200%" />
		<Text text="420" color="#420247" fontSize="1" anchorX="0%" anchorY="200%" />
		<!-- MeshLine Animation -->
		<T.Mesh position={[0, 2, 0]} scale={1}>
			<MeshLineGeometry {points} />
			<MeshLineMaterial
				{width}
				{color}
				dashArray={0.3}
				dashRatio={0.5}
				{dashOffset}
				transparent
				depthTest={true}
			/>
		</T.Mesh>
	</Float>
	<Column />
</T.Group>
