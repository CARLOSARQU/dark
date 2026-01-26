/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'unap-blue': '#3351a3', // Tu azul corporativo
				'unap-gold': '#fbbf24', // Dorado/Amarillo (opcional)
			},
			fontFamily: {
				title: ['Arial', 'sans-serif'], // O la fuente que use la universidad
			}
		},
	},
	plugins: [],
}