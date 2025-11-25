/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050816",
        darkSoft: "#0b1020",
        accent: "#ff8a3c",
        accentSoft: "#ffb36b",
        accent2: "#a855f7"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Segoe UI", "Roboto", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0,0,0,0.45)"
      }
    }
  },
  plugins: []
};
