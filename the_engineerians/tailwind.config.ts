import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sequel: ['Sequel Sans', 'sans-serif'],
        inter: ["Inter", 'serif'],
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px 2px rgba(72, 187, 120, 0.5)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(72, 187, 120, 0.8)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "glow": "glow 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
