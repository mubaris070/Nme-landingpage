/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        ui: ["Roboto", "sans-serif"],
      },
      keyframes: {
        fallDown: {
          "0%": {
            transform: "translateY(-120px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        fallDown: "fallDown 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
