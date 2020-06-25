/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    content: [
      "./pages/**/*.vue",
      "./components/**/*.vue", 
      "./plugins/**/*.vue",
      "./static/**/*.vue",
      "./store/**/*.vue",
    ],
    options: {
      whitelistPatternsChildren: [/markdown$/]
    }
  },
  theme: {
  	extend: {
  		colors: {
  			'brand-primary': '#007adf',
  			// 'brand-secondary': '#00ecbc', iets te fel en licht
        'brand-secondary': '#09dbb0',
        'brand-secondary-dark': '#08ba96',
        'brand-secondary-50': 'rgba(9,219,176,.5)',
  		},
  		fontFamily: {
  			// 'display': 'Peachy Keen JF'
        'display': 'Inter'
  		}
  	}
  },
  variants: {},
  plugins: []
}
