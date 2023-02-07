<template>
  <div>
    <!-- <Skew /> -->
    <!-- <div class="fixed bottom-0 z-0 w-full pb-2 text-sm text-center text-white opacity-75">↓ Scroll voor meer</div> -->
    <main>
      <div class="prose-sm md:prose !max-w-none">
        <h1 class="!my-0">Portfolio</h1>
        <p>Some recent work</p>
        <div class="mt-10 space-y-16">
          <div
            v-for="portfolioItem in portfolioItems"
            class="
              bg-white
              grid
              md:grid-cols-2
              items-center
              rounded-md
              overflow-hidden
            "
          >
            <div class="p-8 prose">
              <h2 class="!my-0">{{ portfolioItem.title }}</h2>
              <p class="my-0 text-sm font-mono font-medium text-primary-600">
                {{ portfolioItem.categories }}
              </p>
              <p>{{ portfolioItem.description }}</p>
              <p class="mb-0">
                <svg
                  class="inline w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <a
                  :href="'https://' + portfolioItem.url"
                  target="_blank"
                  class="text-sm"
                  >{{ portfolioItem.url }}</a
                >
              </p>
            </div>
            <a
              :href="'https://' + portfolioItem.url"
              target="_blank"
              class="
                block
                w-full
                group
                aspect-w-1 aspect-h-1
                relative
                overflow-hidden
              "
            >
              <img
                class="
                  !my-0
                  w-full
                  h-full
                  object-cover
                  transform
                  transition-transform
                  group-hover:scale-110
                "
                :src="getPortfolioImgUrl(portfolioItem.image)"
                alt=""
              />
              <div
                class="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-transparent
                  to-black
                  pointer-events-none
                  opacity-60
                  transition-opacity
                  group-hover:opacity-0
                "
              ></div>
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
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import WorkBanner from "~/components/WorkBanner.vue";

import Vue from "vue";

export default {
  components: {
    Header,
    Footer,
    WorkBanner,
  },
  data() {
    return {
      prefix: "portfolio",
      title: "Portfolio - Sander Janssen",
      portfolioItems: [
        {
          title: "Boonstra Marketing",
          categories: "Web development",
          description:
            "Custom WordPress theme for Boonstra Marketing. Design by designpraktijk.nl",
          image: "boonstramarketing.jpg",
          url: "boonstramarketing.nl",
        },
        {
          title: "Advocatenkantoor Vos",
          categories: "Web development",
          description:
            "Custom WordPress theme for Advocatenkantoor Vos. Design by worck.nl",
          image: "advocatenkantoor-vos.jpg",
          url: "advocatenkantoorvos.nl",
        },
        {
          title: "Smaak Groenten",
          categories: "Web design & development",
          description:
            "Custom WordPress theme with WooCommerce integration for Smaak Groenten.",
          image: "smaakgroenten.jpg",
          url: "smaakgroenten.nl",
        },
        {
          title: "Chloé - Events & Productie",
          categories: "Web design & development",
          description:
            "Custom carrd.co website for an independent event & production agency.",
          image: "chloe-events.jpg",
          url: "chloe-events.nl",
        },
        {
          title: "Zweedse Pellets",
          categories: "Web design & development",
          description:
            "WordPress E-commerce website using a custom WordPress theme and custom Gutenberg blocks.",
          image: "zweedsepellets.jpg",
          url: "zweedsepellets.nl",
        },
        {
          title: "Drumlin Distillery",
          categories: "Web design & development",
          description:
            "WordPress E-commerce website using a custom WordPress theme and custom Gutenberg blocks.",
          image: "drumlin-distillery.jpg",
          url: "drumlindistillery.com",
        },
        {
          title: "Else Schaaij",
          categories: "Web design & development",
          description: "WordPress website for a flute teacher.",
          image: "elseschaaij.jpg",
          url: "elseschaaij.nl",
        },
        {
          title: "Relajate Lobitos",
          categories: "Web design & development",
          description:
            "WordPress website for a hostel, restaurant & surfshop in Peru.",
          image: "relajate-home.jpg",
          url: "relajatelobitos.com",
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // Each object in this array is its own meta tag
        {
          hid: "description",
          name: "description",
          content: "Portfolio with the work I've done for my clients.",
        },
      ],
      bodyAttrs: {
        class: "portfolio",
      },
    };
  },
  methods: {
    getPortfolioImgUrl(pic) {
      return require("~/assets/images/portfolio/" + pic);
    },
  },
};
</script>