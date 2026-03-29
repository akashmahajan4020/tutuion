import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        slate: {
          ...colors.slate,
          DEFAULT: "var(--text)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(17, 24, 39, 0.08)",
        card: "0 18px 40px rgba(30, 58, 138, 0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(37, 99, 235, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.12), transparent 35%)",
      },
    },
  },
  plugins: [],
};
export default config;
