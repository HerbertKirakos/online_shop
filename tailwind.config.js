module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/images/bgImage.png')",
        'MbBackground': "url('/src/assets/images/bgMobileImage.png')",
      }
    },
    screens: {
      'sm': '426px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'black': '#272727',
      'white': '#ffffff',
      'green': '#56B280',
      'light-green': '#56B28020',
      'dark-blue': '#0B254B',
      'light-blue': '#5E6E89',
      'light-gray': '#F7F8FA',
      'gray': '#7C8087',
      'dark-gray': '#616161',
    },
      
  },
  plugins: [],
}
