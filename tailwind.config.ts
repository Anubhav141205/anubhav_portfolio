import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#06b6d4", // primary cyan
          card: "#0f172a" // dark cyan-ish card background
        }
      }
    }
  },
  plugins: []
};

export default config;

