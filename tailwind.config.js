/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,php,firebase}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./path/to/firebase.css", // Include Firebase CSS file
  ],
  theme: {
    colors: {
      'brownie': "#DEAC80",
      'brownie2': "#f8eee6",
      'greenie': "#799351",
      'pami': '#CCAB35',
      'white1': '#ffffff',
      'white2': '#F1F2F7',
      'gray1': '#676565',
      'gray2': '#082431',
      'gray3': '#A6ABC8',
      'gray4': "#EEEEEE",
      
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs"),
    require("flowbite/plugin"),
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: "light",
   },
  darkMode: "class"
};

