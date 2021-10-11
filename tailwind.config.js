const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brightRed: "hsl(12, 88%, 59%)",
      darkBlue: "hsl(228, 39%, 23%)",
      darkGrayishBlue: "hsl(227, 12%, 61%)",
      veryDarkBlue: "hsl(233, 12%, 13%)",
      paleRed: "hsl(13, 100%, 96%)",
      lightGray: "hsl(0, 0%, 98%)",
      gray: colors.gray,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        vietnam: "'Be Vietnam', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
