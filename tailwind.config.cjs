/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)'},
					'100%': { transform: 'translateX(calc(-100% - 0.25rem))'}
				}
			},
			animation: {
				scroll: 'scroll 10s cubic-bezier(1, 1, 0, 0) infinite'
			}
		},
	},
	plugins: [],
}
