/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
theme: {
  extend: {
    fontFamily: {
      'festivo': ['"League Gothic"', 'Impact', 'sans-serif'],
      'retro': ['"Bebas Neue"', 'sans-serif'],
      'cursive': ['"Dancing Script"', 'cursive'],
      'sans': ['Inter', 'system-ui', 'sans-serif'],
      'mono': ['"JetBrains Mono"', 'monospace'],
    }
  }
},
	plugins: [],
}
