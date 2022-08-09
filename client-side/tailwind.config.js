/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#111430",
          secondary: "#7ab259",
          accent: "#474747",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
