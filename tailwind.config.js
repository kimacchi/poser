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
        darkGradient: "linear-gradient(132deg, #BD2E5B 0%, #621933 100%)",
        "lightGradient-lb-rt": "linear-gradient(45deg, #CE7B9A 0%, #CC5C8B 100%)",
        "lightGradient-lt-rb": "linear-gradient(135deg, #CE7B9A 0%, #CC5C8B 100%)",
        "lightGradient-rt-lb": "linear-gradient(225deg, #CE7B9A 0%, #CC5C8B 100%)",
      },
    },
  },
  plugins: [],
}
