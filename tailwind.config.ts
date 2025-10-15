import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#C7A86F", // dourado elegante
          50: "#FCF8EF",
          100: "#F6EED9",
          200: "#ECDCB7",
          300: "#E1C98F",
          400: "#D7B771",
          500: "#C7A86F",
          600: "#A78A58",
          700: "#826A45",
          800: "#574732",
          900: "#2C2419",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(199,168,111,0.15)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(60% 60% at 50% 40%, rgba(199,168,111,0.15) 0%, rgba(0,0,0,0) 60%)",
        grid: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
} satisfies Config;
