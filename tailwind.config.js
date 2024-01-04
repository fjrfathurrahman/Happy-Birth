import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#fb4b96"
      },
      container: {
        center: true,
        padding: "24px"
      }
    },
  },
  darkMode : "class",
  plugins: [nextui()],
}