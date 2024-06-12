import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
      },
    },
    colors:{
      'background':'#ffffff',
      'background-secondary':'#f5f5f0',
      'contrast-button-main':'#111111',
      'contrast-text':'#121212',
      'contrast-text-secondary':'#8c8c8c',
    },
  },
  plugins: [],
};
export default config;
