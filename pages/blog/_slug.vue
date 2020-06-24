<template>
  <div class="flex flex-col">
    <Header/>
    <main class="flex-1">
      <article>
        <section class="relative md:mx-4 lg:mx-8 py-10 md:py-16 bg-brand-primary bg-center bg-cover" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
          <div class="absolute top-0 left-0 w-full h-full gradient-black-transparent z-0" style=""></div>
          <Skew />
          <h1 class="mt-64 text-4xl lg:text-5xl font-display text-white relative container z-10">{{title}}</h1>
        </section>
        <section class="mt-20 mb-10  container max-w-2xl content animation-appear">
          <component class="markdown" :is="singlePostComponent" />
          <nuxt-link to="/blog" class="mt-10 inline-block bg-brand-secondary hover:bg-brand-secondary-dark text-white font-medium px-6 py-3 skew transition-colors duration-200 ease-in-out">
            <svg class="cta-arrow mr-4 w-4 h-4 inline-block transition-transform duration-200 transform ease-in-out" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>
            Terug naar overzicht
          </nuxt-link>
        </section>
      </article>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Skew from '~/components/Skew.vue'

export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        date: post.attributes.date,
        excerpt: post.attributes.excerpt,
        image: require(`~/assets/images/blog/${post.attributes.hero}`),
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
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
      title: this.title + ' - Sander Janssen',
      meta: [ // Each object in this array is its own meta tag
        { hid: 'description', name: 'description', content: this.excerpt }
      ],
      bodyAttrs: {
        class: 'blog',
      }
    }
  },
};
</script>