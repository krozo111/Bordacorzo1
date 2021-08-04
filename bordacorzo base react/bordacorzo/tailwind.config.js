module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('./assets/img/7.jpeg')",
       
      }),
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'Sans-serif' ]
      },
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
