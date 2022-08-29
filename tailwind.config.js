/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#16a34a",
          neutral: "#3b82f6",
          accent: "#2563eb",
          secondary: "#7c3aed",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
}