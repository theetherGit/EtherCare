import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

let env = loadEnv('production', process.cwd());
/** @type {import('vite').UserConfig} */
const config = {
	server: {
		port: env.VITE_PORT
	},
	plugins: [sveltekit()]
};

export default config;
