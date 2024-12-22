/** @type {import('tailwindcss').Config} */
export default {
  content: ["./App.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        "primary-dark-blue": "#003459",
        "primary-dark-blue-80": "#002A48",
        "primary-dark-blue-60": "#00528C",
        "primary-dark-blue-40": "#0078CD",
        "secondary-mon-yellow": "#F7DBA7",
        "secondary-mon-yellow-80": "#EEC77E",
        "secondary-mon-yellow-60": "#F1D092",
        "secondary-mon-yellow-40": "#FCEED5",
        "state-pink-red": "#FF564F",
        "state-green-light": "#34C759",
        "state-orange-shine": "#FF912C",
        "state-blue-sea": "#00A7E7",
        "neutral-100": "#00171F",
        "neutral-80": "#242B33",
        "neutral-60": "#667479",
        "neutral-40": "#99A2A5",
        "neutral-20": "#CCD1D2",
        "neutral-10": "#EBEEEF",
        "neutral-00": "#FDFDFD",
      },
    },
  },
  plugins: [],
};
