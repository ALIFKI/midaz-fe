/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        golden : '#DAC18D',
        bgPrimary : '#0E1B37',
      },
      // backgroundImage: {
      //   'cement-pattren': "url('../assets/images/bg_pattern.jpeg')",
      // }
      fontFamily: {
        lindaHill: ['Linda-Hill', 'sans'],
      },
    },
  },
  plugins: [],
}

