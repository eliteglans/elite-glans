import type { Config } from "tailwindcss"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    background: "#EFEAE4",
    foreground: "#ffffff",

    primary: {
      DEFAULT: "#ffffff",
      foreground: "#000000",
    },

    secondary: {
      DEFAULT: "#1e293b",
      foreground: "#ffffff",
    },

    muted: {
      DEFAULT: "#334155",
      foreground: "#94a3b8",
    },

    accent: {
      DEFAULT: "#3b82f6",
      foreground: "#ffffff",
    },

    border: "#1e293b",
  },
},
  },
  plugins: [],
} satisfies Config