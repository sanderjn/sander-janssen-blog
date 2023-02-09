const path = require("path");
// import FMMode from "frontmatter-markdown-loader/mode";

export default {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Front-end web developer - Sander Janssen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "I'm Sander Janssen, a Front-end web developer with a marketing background. Currently available for freelance work."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/tailwind.css",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/postcss8",
    "@nuxtjs/google-analytics"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-svg-loader", "@nuxtjs/sitemap"],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    babel: {
      plugins: [
        // or with JUST the line below
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  sitemap: {
    hostname: "https://www.sanderjanssen.nl"
  },
  generate: {
    routes() {
      "/blog";
      const fs = require("fs");
      return fs.readdirSync("./assets/content/writing").map(file => {
        return {
          route: `/blog/${path.parse(file).name}`
        };
      });
    }
  },
  googleAnalytics: {
    id: "UA-38770341-1"
  },
  svgLoader: {
    svgoConfig: {
      plugins: [{ prefixIds: false }]
    }
  }
};
