<script>
	import { spring } from 'svelte/motion';
	import { T, useTask } from '@threlte/core';
	import { MeshLineGeometry, MeshLineMaterial, Float, Text, HTML } from '@threlte/extras';
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
	// 42024everCLOCK logic
	// Set the date we're counting down to
	const countDownDate = new Date('Apr 20, 2024 16:20:00').getTime();

	// Update the count down every 1 second
	let x = setInterval(function () {
		// Get today's date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="permahigh"
		document.getElementById('permahigh').innerHTML =
			days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById('permahigh').innerHTML = '247420';
		}
	}, 1000);

	let isHovering = false;
	let isPointerDown = false;
	let htmlPosZ = spring(0);
	$: htmlPosZ.set(isPointerDown ? -0.15 : isHovering ? -0.075 : 0, {
		hard: isPointerDown
	});
</script>

<T.Group>
	<Float floatIntensity={1} floatingRange={[1, 1.3]}>
		<!-- 42024ever CLOCK  -->
		<HTML position.y={1} position.z={$htmlPosZ} transform>
			<p id="permahigh" />
		</HTML>
		<!-- Text -->
		<!-- <Text text="247" color="#247420" fontSize="1" anchorX="100%" anchorY="200%" />
		<Text text="420" color="#420247" fontSize="1" anchorX="0%" anchorY="200%" /> -->
		<!-- MeshLine Animation -->
		<!-- <T.Mesh position={[0, 2, -1]} scale={1}>
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
		</T.Mesh> -->
	</Float>
	<Column />
</T.Group>
