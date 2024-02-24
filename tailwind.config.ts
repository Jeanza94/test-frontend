import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffe600",
        secondary: {
          light: "#609efb",
          base: "#3483fa",
          dark: "#032963"
        }
      },
      screens: {
        mobile: '200px',
        tablet: '600px',
        desktop: '1024px'
      }
    },
  },
  plugins: [],
};
export default config;
