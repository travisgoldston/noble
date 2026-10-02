/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#05A65B",
          deep: "#048A4C",
          mist: "#E8F7EF",
        },
        ink: "#162533",
        cream: "#F7F8F8",
        paper: "#FFFFFF",
        stone: "#5C6770",
        mist: "#E4E8EA",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        serif: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        site: "72rem",
      },
      boxShadow: {
        card: "0 18px 40px rgba(22, 37, 51, 0.06)",
        header: "0 8px 24px rgba(22, 37, 51, 0.08)",
      },
    },
  },
  plugins: [],
};
