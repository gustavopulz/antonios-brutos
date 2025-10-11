/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- MUITO IMPORTANTE
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff9f0",
          100: "#fbeedc",
          200: "#f6dbb4",
          300: "#efc78c",
          400: "#e7b765",
          500: "#d9a23b",
          600: "#b8852a",
          700: "#94691e",
          800: "#735018",
          900: "#5a3f13",
        },
      },
    },
  },
  plugins: [],
};
