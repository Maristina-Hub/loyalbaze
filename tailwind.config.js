/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        black: "#000000",
        gray: "#808080",
        red: "red",
        blue: "blue",
        color: "rgb(0, 0, 204)",
        contact: "rgb(51, 51, 255)",
        color2: "rgb(0, 0, 0)",
        bg1: "#021B79",
        bg2: "#1488CC",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      }),
      fontFamily: {
        body: ["'Playfair Display', serif"],
        crimson: ["'Crimson Text', serif"],
      },

      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        xxl: "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      width: {
        128: "70%",
        30: "30%",
        200: "100%",
      },

      height: {
        128: "70%",
        30: "30%",
        200: "100%",
      },

      padding: {
        ",12": "12px",
      },
    },
  },
  plugins: [],
}
