/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: 
      {
        custom_blue: "#c5e9e5",
      }
    },

  },
  plugins: [require("flowbite/plugin"),
  ],
};