/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#f6fafb",
        primary: "#9fcb22",
        green: "#14462e",
        greenFamily: "#6ea68b",
        gray: "#F1F3F0",
        PaleRobin: "#91ddd8",
        orange: "#f9901e",
        lightGreen: "#abdb23",
        grayColor: "#f6fafb",
        yellowColor: "#fccc42",
        yellow: "#fffc01",
        darkGray: "#6c6c6c",
      },
      fontFamily: {
        barlow: ["Barlow"],
        jost: ["jost"],
      },
    },
  },
  plugins: [],
};
