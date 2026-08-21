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
          DEFAULT: "#3A56E4",
          deep: "#2B42C7",
          mist: "#E8F3FF",
        },
        ink: "#0A111A",
        cream: "#F8F9FA",
        paper: "#FFFFFF",
        stone: "#5C6770",
        mist: "#E3E8F2",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        site: "72rem",
      },
      boxShadow: {
        card: "0 18px 40px rgba(10, 17, 26, 0.06)",
      },
    },
  },
  plugins: [],
};
