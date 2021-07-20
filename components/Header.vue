<template>
  <header class="container flex items-center justify-between py-2">
    <nuxt-link class="flex items-end space-x-4 text-lg font-black leading-none sm:text-xl" to="/">
    <div class="-ml-4 w-12 h-12 rounded-full shadow-md bg-gradient-to-b from-white to-gray-50 overflow-hidden lg:-ml-8">
      <img src="~/assets/images/sander.png" alt="Sander Janssen" class="w-full h-full object-cover transform transition-transform hover:scale-110 hover:-rotate-6">
    </div>
    </nuxt-link>
    <HeaderNav class="-mr-4 lg:-mr-8" />
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