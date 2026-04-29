/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07010f",
        "primary-text": "#f0eaff",
        "secondary-text": "#c084fc",
        "accent-purple": "#6d28d9",
        "accent-sky": "#0ea5e9",
        "accent-pink": "#ec4899",
        "card-bg": "#110a24",
        "border-subtle": "#2e1065",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(109,40,217,0.4)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(109,40,217,0.8), 0 0 80px rgba(14,165,233,0.3)",
          },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(271,77%,30%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,40%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(270,95%,15%,1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
