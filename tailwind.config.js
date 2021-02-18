/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      "./pages/**/*.vue",
      "./layouts/**/*.vue",
      "./components/**/*.vue", 
      "./plugins/**/*.vue",
      "./static/**/*.vue",
      "./store/**/*.vue",
    ],
    options: {}
  },
  theme: {
  	extend: {
  		colors: {
  			'primary': colors.teal,
        'secondary': colors.cyan,
        'tertiary': colors.purple,
  		},
  		fontFamily: {
        'display': 'Inter, Helvetica, Arial Black'
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            // color: theme('colors.primary.800'),
            h1: {
              fontWeight: '600',
            },
            h2: {
              fontWeight: '600',
            },
            h3: {
              fontWeight: '600',
            },
            a: {
              color: theme('colors.gray.800'),
              fontWeight: '700',
              '&:hover': {
                color: theme('colors.primary.500'),
              },
            },
            'ul > li::before': {
              backgroundColor: theme('colors.primary.300'),
            },
          },
        },
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}