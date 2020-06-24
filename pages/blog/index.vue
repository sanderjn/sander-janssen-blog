<template>
  <div class="flex flex-col">
    <Header/>
    <div class="flex-1 relative lg:mx-4 xl:mx-8 py-10 md:py-16 gradient-complex animation-gradient">
      <Skew />
      <div class="relative z-10">
        <div class="container text-white">
          <h1 class="text-4xl lg:text-5xl font-display"><span class="mr-2 animation-appear block lg:inline-block">📝</span> Blog</h1>
          <p class="text-lg">Met soms een nieuwe post</p>
        </div>
        <main class="container mt-20 mb-10 md:grid md:grid-cols-2 xl:grid-cols-3 space-y-10 md:space-y-0 md:gap-6">
            <article v-for="post in orderedPosts" v-if="post.attributes.status === 'published'" :key="post.attributes.title" class="bg-white shadow-lg opacity-0 transition-opacity duration-500 ease-in-out" v-in-viewport.once>
                <nuxt-link :to="getPermalink(post)" class="w-full animation-zoom bg-gray-800"><img class="w-full h-48 object-cover" :src="imgSrc(post)" :alt="title"/></nuxt-link>
                <div class="py-4 px-6">
                  <nuxt-link :to="getPermalink(post)" class="text-xs"><span class="text-gray-500">{{prettyDate(post)}} in</span> <span class="text-gray-600">{{post.attributes.category}}</span></nuxt-link>
                  <nuxt-link :to="getPermalink(post)"><h3 class="text-base mt-1">{{post.attributes.title}}</h3></nuxt-link>
                </div>
            </article>
        </main>
      </div>
    </div>
    <Footer/>
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
import inViewportDirective from 'vue-in-viewport-directive'
inViewportDirective.defaults.margin = '-10% 0%'
Vue.directive('in-viewport', inViewportDirective)

export default {
  async asyncData() {
    const resolve = require.context("~/content/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
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
  computed: {
    orderedPosts: function () {
      return _.orderBy(this.posts, 'attributes.date', 'desc')
    }
  },
  methods: {
    imgSrc(post) {
      return require(`~/assets/images/blog/${post.attributes.hero}`)
    },
    getPermalink(post) {
        return `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
    },
    prettyDate(post) {
      var d = new Date(post.attributes.date)
      // return format(d, 'dd/MM/yyyy')
      return format(d, 'dd MMM yyyy')
    }
  }
};
</script>