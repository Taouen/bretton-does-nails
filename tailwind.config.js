module.exports = {
  purge: ['./components/*.js', './styles/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        didact: ['"Didact Gothic"', 'sans-serif'],
        mallanna: ['Mallanna', 'sans-serif'],
      },
      width: {
        '9/10': '90%',
        inherit: 'inherit',
      },
      colors: {
        pink: '#BD6880',
        grey: '#554C4F',
        ltpink: '#FBD1B9',
        siteGreen: '#7E8452',
        ltgreen: '#DDD385',
        ltblue: '#D2DFF2',
        white: 'white',
        clear: '#FFFFFF00',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
