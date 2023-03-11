module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-100": "#1565C0",
        "gray-300": "#bcaaa4",
        "blue-200": "#4794EB",
        "white-100": "#E8F2FC",
        "white-200": "#CCCCCC",
        gray: "#999999",
        "gray-50": "#4D4D4D",
        "gray-100": "#E5E5E5",
        "gray-200": "#B3B3B3",
        "gray-350": "#252A31",
        "gray-400": "#FDFFFC",
        "gray-600": "#D1E4FA",
        "gray-700": "#333333",
        "gray-800": "#0D0D0D",
        "gray-900": "#00000099",
        "red-900": "#ee0808",
      },
      screens: {
        mobile: {
          max: "734px",
        }
      },
      fontFamily: {
        WorkSans: ["Work Sans"],
        Robot: ["Roboto"],
      },
    },
  },
  plugins: [],
};
