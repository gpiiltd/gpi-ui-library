/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        full_width: "100%",
      },
      height: {
        button_height: "36px",
      },
      colors:{
        error:'#F57068',
        active_color:'#f77f00',
        primary_color:'#B8C1CB'

      },
      placeholder: {
        xs: '0.75rem', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        serif: ['Merriweather', 'serif'], 
        mono: ['Fira Code', 'monospace'], 
      },
    },
  },
  plugins: [    function ({ addUtilities }) {
    const newUtilities = {
      '.placeholder-xs::placeholder': {
        fontSize: '0.85rem',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};
