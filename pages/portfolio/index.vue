<template>
  <div>
    <!-- <Skew /> -->
    <!-- <div class="fixed bottom-0 z-0 w-full pb-2 text-sm text-center text-white opacity-75">↓ Scroll voor meer</div> -->
    <main>
      <div class="prose max-w-none">
        <h1>Portfolio</h1>
        <p>Some recent work</p>
        <div class="mt-10 space-y-16">
          <div v-for="portfolioItem in portfolioItems" class="bg-white grid md:grid-cols-2 items-center rounded overflow-hidden shadow-xl">
            <div class="p-8">
              <h2 class="mb-0">{{ portfolioItem.title }}</h2>
              <p class="my-0 text-xs font-medium text-primary-500 uppercase tracking-wide">{{ portfolioItem.categories }}</p>
              <p>{{ portfolioItem.description }}</p>
              <p>
                <svg class="inline w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <a :href="'https://'+portfolioItem.url" target="_blank" class="text-sm">{{portfolioItem.url}}</a>
              </p>
            </div>
            <a :href="'https://'+portfolioItem.url" target="_blank" class="block w-full group md:aspect-w-1 md:aspect-h-1 relative overflow-hidden">
              <img class="w-full h-full object-cover transform transition-transform group-hover:scale-110" :src="getPortfolioImgUrl(portfolioItem.image)" alt="">
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-20 transition-opacity hover:opacity-0"></div>
              <div class="absolute inset-0 bg-black pointer-events-none transition-opacity opacity-5 hover:opacity-0"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="sm:mt-40 md:mt-56">
        <WorkBanner />
      </div>
    </main>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import WorkBanner from '~/components/WorkBanner.vue'

import Vue from 'vue'

export default {
  components: {
    Header,
    Footer,
    WorkBanner,
  },
  data() {
    return {
      prefix: 'portfolio',
      title: 'Portfolio - Sander Janssen',
      portfolioItems: [
        {
          title: 'Advocatenkantoor Vos',
          categories: 'Web development',
          description: 'Custom WordPress theme for Advocatenkantoor Vos. Design by worck.nl.',
          image: 'advocatenkantoor-vos.jpg',
          url: 'advocatenkantoorvos.nl',
        },
        {
          title: 'Zweedse Pellets',
          categories: 'Web design & development',
          description: 'WordPress E-commerce website using a custom WordPress theme and custom Gutenberg blocks.',
          image: 'zweedsepellets.jpg',
          url: 'zweedsepellets.nl',
        },
        {
          title: 'Drumlin Distillery',
          categories: 'Web design & development',
          description: 'WordPress E-commerce website using a custom WordPress theme and custom Gutenberg blocks.',
          image: 'drumlin-distillery.jpg',
          url: 'drumlindistillery.com',
        },
        {
          title: 'Else Schaaij',
          categories: 'Web design & development',
          description: 'WordPress website for a flute teacher.',
          image: 'elseschaaij.jpg',
          url: 'elseschaaij.nl',
        },
        {
          title: 'Relajate Lobitos',
          categories: 'Web design & development',
          description: 'WordPress website I did for a hostel, restaurant & surfshop in Peru while traveling South America.',
          image: 'relajate-home.jpg',
          url: 'relajatelobitos.com',
        },
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [ // Each object in this array is its own meta tag
        { hid: 'description', name: 'description', content: "Portfolio with the work I've done for my clients." }
      ],
      bodyAttrs: {
        class: 'portfolio',
      }
    }
  },
  methods: {
    getPortfolioImgUrl(pic) {
      return require('~/assets/images/portfolio/'+pic)
    }

  },
};
</script>