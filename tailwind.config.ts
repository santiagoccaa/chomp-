import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-hero': 'radial-gradient(circle, #334155, #1e293b, #0f172a)',
        'img1': "url('/hamburguesa.jpg')",
        'img2': "url('/sostiene.avif')",
        'gradient-to-center': 'radial-gradient(circle,#FFD345, #FFDE28, #FFC300)',
      },
    },
  },
  plugins: [],
};
export default config;
