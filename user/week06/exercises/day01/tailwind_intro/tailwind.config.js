/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/index.html", // 🔴 ÖNEMLİ: HTML şu an build klasöründe
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
