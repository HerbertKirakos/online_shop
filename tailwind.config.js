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
    
      
  },
  plugins: [],
}
