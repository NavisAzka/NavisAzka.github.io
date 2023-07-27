/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        primary: "#8b5cf6",
        dark: "#171717",
        dark2: "#1e1e1e",
      },
      screens: {},
    },
  },
  plugins: [],
};
