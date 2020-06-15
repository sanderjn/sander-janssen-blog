/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    "./pages/**/*.vue", 
    "./components/**/*.vue", 
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
  	extend: {
  		colors: {
  			'brand-primary': '#007adf',
  			'brand-secondary': '#00ecbc',
        'brand-secondary-dark': '#04C59D',
        'brand-secondary-50': 'rgba(0,236,188,.5)',
  		},
  		fontFamily: {
  			'display': 'Peachy Keen JF'
  		}
  	}
  },
  variants: {},
  plugins: []
}
