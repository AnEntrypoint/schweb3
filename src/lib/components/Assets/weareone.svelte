<script>
	import { T } from '@threlte/core';
	import { Float, Text } from '@threlte/extras'
	import Column from './column.svelte';
</script>
<T.Group position={[-5, 0, 5]}>
	<Float floatIntensity={1} floatingRange={[1.9, 2]}>
		<Text text="weareone" fontSize=".5" anchorX="center" anchorY="middle" />
	</Float>
	<Column />
</T.Group>