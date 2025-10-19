import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#37383C",
        offwhite: "#F7F8FA",
        electric: "#4E95FF",
        jet: "#0B0C10",
        success: "#14B8A6",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(78, 149, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
