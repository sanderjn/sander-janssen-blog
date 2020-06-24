const path = require("path");
import Mode from 'frontmatter-markdown-loader/mode'

var glob = require('glob');

async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}

export default async () => {
  return {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
      title: 'Webdesigner - Sander Janssen',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋🏻</text></svg>' }
      ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#00ecbc', height: '5px', throttle: '0' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      'nuxt-svg-loader',
      '@nuxtjs/sitemap',
    ],
    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      postcss: {
        plugins: {
          'postcss-import': true,
          'autoprefixer': true,
          'postcss-preset-env': {
            stage: 1,
          }
        }
      },
      extend (config, ctx) {
        // add frontmatter-markdown-loader
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader",
          options: {
            mode: [Mode.VUE_COMPONENT, Mode.META]
          }
        });
      }
    },
    // WERKT NIET
    generate: {
      routes:  await getDynamicPaths({
        '/posts': 'posts/*.md'
      })
    },
    sitemap: {
      hostname: 'https://www.sanderjanssen.nl',
      routes:  await getDynamicPaths({
        '/posts': 'posts/*.md'
      })
    },
  }
}