module.exports = {
  purge: ['./src/**/*.vue', './public/*.html'],

  darkMode: false,

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '12rem',
      },
    },

    extend: {
      colors: {
        primary: '#00B9FF',
        secondary: '#ff4400',
        analogous1: '#00ffc3',
        analogous2: '#003cff',
        triadic1: '#4400ff',
        triadic2: '#ff00bb',
        metal: '#143642',
        capri: '#00BCFF',
        'selective-yellow': '#FFB600',
        maroon: '#A53860',
        scarlet: '#FF2C00',
      },
    },
  },

  variants: {
    extend: {},
  },

  corePlugins: {
    float: false,
  },

  plugins: [],
}
