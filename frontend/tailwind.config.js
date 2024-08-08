/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#13151a",
        "light-gray": "#222224",
      },
      animation: {
        fadeInDown: "fadeInDown 2s ease-in-out",
        fadeInUp: "fadeInUp 2s ease-in-out",
        textHue: "hue 10s infinite linear",
      },
      boxShadow: {
        button: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
      },
      keyframes: {
        fadeInDown: {
          from: { opacity: 0.1, transform: "translateY(-80px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: 0.1, transform: "translateY(80px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        hue: {
          from: { filter: "hue-rotate(-360deg)" },
          to: { filter: "hue-rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
