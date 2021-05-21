const path = require("path");
import FMMode from 'frontmatter-markdown-loader/mode';

export default {
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
  loading: {
    color: 'blue',
    height: '10px',
    // throttle: '0',
  },
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
      }
    },
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "assets/content/writing"),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          }
        }
      });
    }
  },
  sitemap: {
    hostname: 'https://www.sanderjanssen.nl',
    path: '/sitemap.xml',
    routes() {
      '/blog';
      const fs = require('fs');
      return fs.readdirSync('./assets/content/writing').map((file) => {
        return {
          route: `/blog/${path.parse(file).name}`
        };
      });
    }
  },
  generate: {
    routes() {
      '/blog';
      const fs = require('fs');
      return fs.readdirSync('./assets/content/writing').map((file) => {
        return {
          route: `/blog/${path.parse(file).name}`
        };
      });
    }
  }
}