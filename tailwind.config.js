/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',


  ],
  theme: {
    extend: {
      backgroundImage: {
        "darkGradient": "linear-gradient(132deg, #BD2E5B 0%, #621933 100%)",
        "lightGradient-lb-rt": "linear-gradient(45deg, #CE7B9A 0%, #CC5C8B 100%)",
        "lightGradient-lt-rb": "linear-gradient(135deg, #CE7B9A 0%, #CC5C8B 100%)",
        "lightGradient-rt-lb": "linear-gradient(225deg, #CE7B9A 0%, #CC5C8B 100%)",
        "darkGradientDisabled": "linear-gradient(132deg, #592334 0%, #290e17 100%)"
      },
      colors: {
        textColor: "#F1E2F8",
        darkBG: "#16071D",
        darkPurple: "#6F1B5F",
        normalPurple: "#BD2E5B",
        normalPurpleShadow: "#BD2E5B52",
        lightPurple: "#CE7B9A",
      },
      fontFamily: {
        "poppins": ["Poppins", "system-ui", "Georgia", "SFMono-Regular"]
      }
    },
  },
  plugins: [],
}
