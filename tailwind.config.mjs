import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif'],
				old: ['New Rocker', 'sans-serif'],
				arabian: ['Ramadhan Mubarok']
			},


		},
	},
	plugins: [],
}
