<template>
  <main>
    <div class="prose prose-sm md:prose">
      <h1 class="!my-0">Blog</h1>
      <p>Sorry, 🇳🇱 Dutch only</p>
    </div>
    <div class="mt-10 space-y-16">
        <article v-for="post in posts" v-if="post.attributes.status === 'published'" :key="post.attributes.title" :id="post.path.replace('/blog/', '')" class="relative flex flex-col justify-end w-full h-52 p-4 bg-gray-900 shadow-xl overflow-hidden group md:h-64 md:items-center lg:h-80" v-in-viewport.once>
          <img class="absolute inset-0 w-full h-full object-cover transition-transform z-0 group-hover:scale-110" :src="imgSrc(post)" :alt="title"/>
          <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black"></div>
          <span class="text-xs font-mono text-white opacity-75">{{prettyDate(post)}} in {{post.attributes.category}}</span>
          <nuxt-link class="my-0 text-lg text-white font-display z-10 md:text-2xl" :to="post.path">
            <span class="absolute inset-0" aria-hidden="true"></span>
            {{post.attributes.title}}
          </nuxt-link>
        </article>
    </div>
  </main>
</template>
<script>
import { format, compareAsc } from 'date-fns'
import _ from 'lodash'
import { orderBy } from 'lodash'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Skew from '~/components/Skew.vue'
import Vue from 'vue'
// import inViewportDirective from 'vue-in-viewport-directive'
// inViewportDirective.defaults.margin = '-5% 0%'
// Vue.directive('in-viewport', inViewportDirective)
export default {
  async asyncData() {
    const path = require('path');
    const context = await require.context(
      '~/assets/content/writing',
      true,
      /\.md$/
    );
    const posts = await context.keys().map((key) => {
    const pathStr = key.replace('.md', '').replace('./', '');
    return {
      ...context(key),
      path: `/blog/${path.basename(key, '.md')}`
    };
    });
    return { posts: posts.sort(
      //sort by date in descending order
      (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
    )};
  },
  // async asyncData() {
  //   const resolve = require.context("~/content/", true, /\.md$/);
  //   const imports = resolve.keys().map(key => {
  //     const [, name] = key.match(/\/(.+)\.md$/);
  //     return resolve(key);
  //   });
  //   return {
  //     posts: imports
  //   };
  // },
  components: {
    Header,
    Footer,
    Skew,
  },
  data() {
    return {
      prefix: 'blog',
      title: 'Blog - Sander Janssen'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [ // Each object in this array is its own meta tag
        { hid: 'description', name: 'description', content: 'Blog van Sander Janssen. Ik schrijf soms stukjes over technologie, mijn leven en andere zaken die me bezighouden.' }
      ],
      bodyAttrs: {
        class: 'blog',
      }
    }
  },
  // computed: {
  //   orderedPosts: function () {
  //     return _.orderBy(this.posts, 'attributes.date', 'desc')
  //   }
  // },
  methods: {
    titleToID(title) {
      return title.replace(/\s+/g, '-').toLowerCase()
    },
    imgSrc(post) {
      return require(`~/assets/images/blog/${post.attributes.hero}`)
    },
    // getPermalink(post) {
    //     return `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
    // },
    prettyDate(post) {
      var d = new Date(post.attributes.date)
      // return format(d, 'dd/MM/yyyy')
      return format(d, 'dd MMM yyyy')
    }
  }
};
</script>