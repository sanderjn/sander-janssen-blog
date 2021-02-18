<template>
  <main class="flex flex-col">
    <div class="flex-1">
      <article>
        <section class="relative py-10 bg-center bg-cover md:mx-4 lg:mx-8 md:py-16 bg-primary-500 rounded overflow-hidden" style="height:60vh; min-height:12rem; max-height:80vw;" :style="{ backgroundImage: 'url(' + image + ')' }">
          <div class="absolute top-0 left-0 z-0 w-full h-full gradient-black-transparent" style=""></div>
          <!-- <Skew /> -->
          <div class="flex items-end w-full h-full">
            <div class="container md:text-center">
              <span class="text-xs text-white opacity-75">{{prettyDate(date)}} in {{category}}</span>
              <h1 class="relative z-10 my-0 text-2xl text-white md:text-3xl xl:text-5xl font-display">{{title}}</h1>
            </div>
          </div>
        </section>
        <section class="container max-w-2xl mt-20 mb-10 content animation-appear">
          <component class="prose" :is="singlePostComponent" />
          <Button class="mt-10" :link="{ text: 'Terug naar overzicht', to:'/blog'}"/>
          <!-- <nuxt-link to="/blog" class="inline-block px-6 py-3 mt-10 text-sm font-medium text-white transition-colors duration-200 ease-in-out rounded-full shadow-md bg-brand-secondary hover:bg-brand-secondary-dark">
            <svg class="inline-block w-4 h-4 mr-3 transition-transform duration-200 ease-in-out transform cta-arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>
            Terug naar overzicht
          </nuxt-link> -->
        </section>
      </article>
    </div>
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Skew from '~/components/Skew.vue'
import Button from '~/components/atoms/Button.vue'
import { format, compareAsc } from 'date-fns'
import _ from 'lodash'
export default {
  layout: 'blog',
  data() {
    return {
      post: null,
      title: null,
      description: null
    };
  },
  created() {
    const post = require(`~/assets/content/writing/${this.$route.params.slug}.md`);
    this.title = post.attributes.title;
    this.singlePostComponent = post.vue.component;
    this.date = post.attributes.date;
    this.excerpt = post.attributes.excerpt;
    this.category = post.attributes.category;
    this.image = require(`~/assets/images/blog/${post.attributes.hero}`);
  },
  // async asyncData({ params }) {
  //   try {
  //     console.info(params.slug);
  //     let post = await import(`~/content/${params.slug}.md`);
  //     return {
  //       title: post.attributes.title,
  //       singlePostComponent: post.vue.component,
  //       date: post.attributes.date,
  //       excerpt: post.attributes.excerpt,
  //       image: require(`~/assets/images/blog/${post.attributes.hero}`),
  //     };
  //   } catch (err) {
  //     console.debug(err);
  //     return false;
  //   }
  // },
  components: {
    Header,
    Footer,
    Skew,
    Button,
  },
  data() {
    return {
      prefix: 'blog',
      title: 'Blog - Sander Janssen'
    }
  },
  head () {
    return {
      title: this.title + ' - Sander Janssen',
      meta: [ // Each object in this array is its own meta tag
        { hid: 'description', name: 'description', content: this.excerpt }
      ],
      bodyAttrs: {
        class: 'blog',
      }
    }
  },
  methods: {
    prettyDate(post) {
      var d = new Date(this.date)
      // return format(d, 'dd/MM/yyyy')
      return format(d, 'dd MMM yyyy')
    }
  }
};
</script>