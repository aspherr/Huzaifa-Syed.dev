/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mono': ['geist-mono', ...defaultTheme.fontFamily.mono],
			},

			colors: {
				primary: 'rgb(212 212 216 / 1)',
				secondary: 'rgb(82 82 91 / 1)'
			}
		}
	},
	plugins: [],
}
