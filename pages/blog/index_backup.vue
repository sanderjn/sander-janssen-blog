<template>
  <div>
    <!-- <Skew /> -->
    <!-- <div class="fixed bottom-0 z-0 w-full pb-2 text-sm text-center text-white opacity-75">↓ Scroll voor meer</div> -->
    <div class="relative z-10">
      <div class="container">
        <h1 class="text-2xl text-gray-800 lg:text-3xl font-display">Blog</h1>
        <p class="mt-2 text-gray-700 ">Met soms een nieuwe post</p>
      </div>
      <div class="container mt-10 space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
          <article v-for="post in posts" v-if="post.attributes.status === 'published'" :key="post.attributes.title" class="relative h-64 bg-white shadow-lg animation-zoom" v-in-viewport.once>
              <nuxt-link :to="post.path" class="relative z-0 w-full h-full bg-gray-800"><img class="object-cover w-full h-full" :src="imgSrc(post)" :alt="title"/></nuxt-link>
              <nuxt-link :to="post.path" class="absolute top-0 left-0 z-0 w-full h-full">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black" style=""></div>
              </nuxt-link>
              <nuxt-link :to="post.path" class="absolute bottom-0 left-0 z-10 p-4 py-4 lg:px-6">
                <span class="text-xs text-white opacity-75">{{prettyDate(post)}} in {{post.attributes.category}}</span>
                <h3 class="my-0 text-2xl font-black text-white font-display">{{post.attributes.title}}</h3>
              </nuxt-link>
          </article>
      </div>
    </div>
  </div>
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