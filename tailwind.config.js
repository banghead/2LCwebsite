/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      "primary": "#e5e7eb",
      "secondary-light": "#d1fae5",
      "secondary-dark": "#10b981",
      "secondary": "#d1fae5",
      "tertiary": "#111827",
      "text-tertiary" : "#e5e7eb"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
