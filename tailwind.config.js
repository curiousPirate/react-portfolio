/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  mode: "jit",
  safelist: [
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-down_1s_ease-in-out]",
    "h-screen",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "th-primary": "var(--primary)",
      "th-secondary": "var(--secondary)",
      "th-basic": "var(--basic)",
      "th-common": "var(--common)",
    },
  },
  plugins: [require("flowbite/plugin")],
});
