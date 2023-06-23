/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  mode: "jit",
  safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]', 'height-screen'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [],
});
