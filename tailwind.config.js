module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        sm: "375px",
        xl: "1440px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontSize: {
        base: ["18px", "24px"],
      },
      colors: {
        white: "#FFF",
        brightBlue: "hsl(220, 98%, 61%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        veryDarkGrayishBlueDark: "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        darkDesktop: `url("../public/images/bg-desktop-dark.jpg")`,
        darkMobile: `url("../public/images/bg-mobile-dark.jpg")`,
        lightDesktop: `url("../public/images/bg-desktop-light.jpg")`,
        lightMobile: `url("../public/images/bg-mobile-light.jpg")`,
      },
    },
  },
  plugins: [],
};
