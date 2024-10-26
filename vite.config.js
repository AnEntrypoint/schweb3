import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'postprocessing']
	},
	server: {
    host: 'schwepe.247420.xyz'
  },
});
