/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#eef7fc",
        primary: "#9fcb22",
        green: "#14462e",
        gray: "#F1F3F0",
      },
      fontFamily: {
        barlow: "Barlow",
        jost: "jost",
      },
    },
  },
  plugins: [],
};
