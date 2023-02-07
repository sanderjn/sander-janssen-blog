/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
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
          lg: "920px"
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
            '--tw-prose-bullets': theme('colors.primary[500]'),
            a: {
              '&:hover': {
                color: theme('colors.primary.600'),
              },
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