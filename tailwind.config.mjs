/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        void: "#0F1115",
        obsidian: "#1A1D24",
        stone: "#94A3B8",
        relic: "#C6A15B",
        arcane: "#6EE7D8",
        mist: "#D7FFFA",
      },
      fontFamily: {
        display: ["Marcellus", "serif"],
        body: ["Alegreya", "serif"],
        scripture: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        "arcane-soft": "0 0 32px rgba(110, 231, 216, 0.16)",
        "relic-soft": "0 0 30px rgba(198, 161, 91, 0.14)",
        "inner-ritual": "inset 0 0 40px rgba(110, 231, 216, 0.05)",
      },
      backgroundImage: {
        "radial-sanctum":
          "radial-gradient(circle at 50% 0%, rgba(110, 231, 216, 0.14), transparent 34%), radial-gradient(circle at 20% 30%, rgba(198, 161, 91, 0.08), transparent 30%)",
        "ritual-grid":
          "linear-gradient(rgba(110, 231, 216, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 216, 0.045) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-pulse": {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.78" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        "slow-pulse": "slow-pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
