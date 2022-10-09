/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-content": "hsl(185, 75%, 39%)",
        "primary-focus": "hsl(229, 23%, 23%)",
        primary: "hsl(227, 10%, 46%)",
        neutral: "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        body: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
