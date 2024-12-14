/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      letterSpacing: {
        tighter: "-0.02em",
        "extra-tight": "-0.04em",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
    },
  },
  plugins: [],
};
