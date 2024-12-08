import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"custom-orange": "#f54714",
				"custom-black": "#1c1c1c"
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
