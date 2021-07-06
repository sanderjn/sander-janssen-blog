<template>
  <header class="container flex items-center justify-between py-3 md:py-4">
    <nuxt-link class="flex items-end space-x-4 text-lg font-black leading-none sm:text-xl" to="/">
    <div class="w-16 h-16 rounded-full shadow-md bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <img src="~/assets/images/sander.png" alt="Sander Janssen" class="w-full h-full object-cover transform transition-transform hover:rotate-12">
    </div>
      <!-- <span class="text-white font-display">Sander Janssen</span> -->
    </nuxt-link>
    <HeaderNav />
  </header>
</template>

<script>
import HeaderNav from '~/components/HeaderNav';

export default {
  components: {
    HeaderNav,
  },
  methods: {
    homePage() {
      if(this.$route.path === "/" || this.$route.path === "/home") {
        this.homePage = true
      } else {
        this.homePage = false
      }
    }
  }
}
</script>