/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": "1850px",
        "3xl": "1650px",
        xl: "1280px",
        xs: "380px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "light-50": "#E6E0D2",
        "yellow-550": "#F9BC32",
      },
      backgroundColor: {
        "yellow-550": "#F9BC32",
        "light-50": "#E6E0D2",
      },
      borderColor: {
        "yellow-550": "#F9BC32",
      },
      letterSpacing: {
        "5px": "-5px",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
