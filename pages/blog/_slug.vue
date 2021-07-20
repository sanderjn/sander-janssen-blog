<template>
  <main class="flex flex-col">
    <div class="flex-1">
      <article class="prose max-w-none">
        <h1 class="relative z-10 my-0">{{title}}</h1>
        <span class="text-xs text-gray-500">{{prettyDate(date)}} in {{category}}</span>
        <img class="object-cover w-full h-full transform transition-transform group-hover:scale-110" :src="image" :alt="title"/>
        <component class="prose max-w-none" :is="singlePostComponent" />
      </article>
      <Button class="mt-10" :link="{ text: 'Terug naar overzicht', to:'/blog#'+slug}"/>
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
    this.slug = this.$route.params.slug;
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