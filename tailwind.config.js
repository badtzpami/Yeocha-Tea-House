/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,php}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'pami': '#5A67BA',
      'white1': '#ffffff',
      'white2': '#F1F2F7',
      'gray1': '#676565',
      'gray2': '#082431',
      'gray3': '#A6ABC8',
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
    require("flowbite/plugin")
  ],
  darkMode: "class"
};