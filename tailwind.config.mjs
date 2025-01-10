/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'photo-david': "url('src/assets/testBG.svg')"
			  },
			  colors: {
				grey: {
					1: '#dadada',
				  },
			  },
		},
	},
	plugins: [],
}
