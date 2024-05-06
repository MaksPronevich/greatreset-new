/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "4xl": "2560px",
        "3xl": "1920px",
      },
    },

    fontFamily: {
      neue: "Neue Machina",
      dirtyline: "Dirtyline",
    },

    colors: {
      white: "#FFFFFF",
      black: "#000000",
      red: "#C7313B",
      gray: "#8D9297",
      "black-secondary": "#1E1E1E",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
