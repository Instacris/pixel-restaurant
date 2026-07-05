import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Modo "archivo unico": empaqueta todo (HTML+CSS+JS) en un solo index.html
// que se puede abrir con doble clic. Se activa con SINGLEFILE=1 (npm run build:single).
const singleFile = process.env.SINGLEFILE === '1';

export default defineConfig({
	base: './',
	plugins: [
		react(),
		...(singleFile ? [viteSingleFile()] : []),
	],
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
