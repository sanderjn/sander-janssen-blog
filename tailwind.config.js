/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')

module.exports = {
  important: 'html',
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
  	extend: {
      container: (theme) => ({
        center: true,
        screens: { // Max container width, delete to use full width
          sm: "100%",
          md: "100%",
          lg: "768px"
        },
        padding: {
          DEFAULT: theme('spacing.4'),
          sm: theme('spacing.4'),
          md: theme('spacing.4'),
          lg: theme('spacing.8')
        }
      }),
  		colors: {
  			'primary': colors.indigo,
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
                color: theme('colors.primary.600'),
              },
            },
            'ul > li::before': {
              backgroundColor: theme('colors.primary.600'),
            },
          },
        },
      })
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}