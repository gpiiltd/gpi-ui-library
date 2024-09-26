/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        button_width: "100%",
      },
      height: {
        button_height: "36px",
      },
    },
  },
  plugins: [],
};
