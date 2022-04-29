module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#f28627",
        "primary-dark": "#D96F13",
        "btn-gray": "#AFAFAF",
        secondary: "#262261",
        "dark-gray": "#1F2026",
        gray: "#8F9198",
        "soft-green": "#3DD598",
        "dark-blue": "#5A607F",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1792px",
      "4xl": "2048px",
      "5xl": "2304px",
      "6xl": "2560px",
    },
  },
};
