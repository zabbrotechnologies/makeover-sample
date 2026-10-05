import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080807",
        foreground: "#181715",
        ivory: {
          DEFAULT: "#F7F5F0",
          50: "#FCFBF8",
          100: "#F7F5F0",
          200: "#EFECE4",
        },
        stone: {
          DEFAULT: "#E7E2D9",
          soft: "#E7E2D9",
          border: "#DDD7CB",
          taupe: "#B4AA9D",
        },
        charcoal: {
          DEFAULT: "#181715",
          dark: "#11100E",
        },
        obsidian: "#080807",
        champagne: {
          DEFAULT: "#B99762",
          dark: "#947346",
          light: "#DFC79C",
          faint: "rgba(185, 151, 98, 0.12)",
        },
        gold: {
          DEFAULT: "#947346",
          light: "#B99762",
          accent: "#DFC79C",
        },
        muted: "#6E675C",
        line: "rgba(24, 23, 21, 0.14)",
        "line-dark": "rgba(247, 245, 240, 0.16)",
      },
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest: "0.22em",
        ultra: "0.28em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
