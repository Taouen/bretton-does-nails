module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        didact: ['Didact Gothic', 'sans-serif'],
        mallanna: ['Mallanna', 'sans-serif'],
      },
      width: {
        '9/10': '90%',
      },
    },

    screens: {},
    colors: {
      pink: '#BD6880',
      grey: '#554C4F',
      ltpink: '#FBD1B9',
      green: '#7E8452',
      ltgreen: '#DDD385',
      ltblue: '#D2DFF2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
