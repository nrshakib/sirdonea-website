/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        grow: {
          "0%": { transform: "scale(0)" }, // Start at 0% of size
          "100%": { transform: "scale(1)" }, // End at full size
        },
        growButton: {
          "0%": { transform: "scale(1)" }, // Start from original size
          "100%": { transform: "scale(1.1)" }, // Grow slightly larger
        },
        growWidth: {
          "0%": { width: "0%" },
          "100%": { width: "20%" }, // Adjust the percentage to match the desired width
        },
        slideUp: {
          "0%": { transform: "translateY(500px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        grow: "grow 0.7s ease-in-out", // Define the grow animation (1 second duration)
        growButton: "growButton 1.3s ease-in-out",
        slideInFromRight: "slideInFromRight 0.5s ease-out",
        growWidthTo20: "growWidthTo20 2s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
