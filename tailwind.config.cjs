/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          20: "#F8F4EB",
          50: "#EFE6E6",
          100: "#DFCCCC",
          300: "#A19696",
          500: "#708090 ",
        },
        primary: {
          100: "#faf0e6",
          200: "#FFC4C2",
          300: "#c19a6b",
          400: "#e3dac9 ",
          500: "#c3b091",
        },
        secondary: {
          100: "#FFF1D1",
          200: "#FFE3A3",
          300: "#FFD575",
          400: "#FFCD5B",
          500: "#e3dac9",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #ffebcd  0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
