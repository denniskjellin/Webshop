module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#ff5722',
          secondary: '#3f51b5',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        spacing: {
          '72': '18rem',
        },
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animatecss')({
      classes: ['animate-spin'],}),
    ],
  };
  