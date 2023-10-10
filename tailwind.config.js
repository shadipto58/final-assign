/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          netural: '#3D4451',
          "base-100": "#ffffff"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
