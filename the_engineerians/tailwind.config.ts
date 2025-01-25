/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sequel: ["Sequel Sans", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px 2px rgba(72, 187, 120, 0.5)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(72, 187, 120, 0.8)" },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        glow: "glow 2s infinite",
      },
    },
  },
  plugins: [],
};
