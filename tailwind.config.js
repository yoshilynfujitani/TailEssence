/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "bg-gradient1": "#101010",
        "bg-gradient2": "#0b0112",
      },
    },
  },
  plugins: [],
};
