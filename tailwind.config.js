/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#2303ab",
          800: "#2c07c2",
          700: "#330bd9",
          600: "#4015f4",
          500: "#4c22f3",
          400: "#623cf4",
          300: "#8569f5",
          200: "#af9ef6",
          100: "#d9d1f9",
        },
        secondary: {
          100: "#0064c2",
          90: "#0081bd",
          80: "#288ad6",
        },
      },
      fontSize: {
        6: "6px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
    },
  },
  plugins: [],
};
