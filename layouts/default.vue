<template>
  <div class="flex flex-col min-h-screen bg-fixed bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 animation-gradient">
  	<Header />
    	<main class="relative flex-1 py-10 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-100 rounded shadow-lg lg:mx-4 xl:mx-8 md:py-16">
    		<nuxt />
    	</main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
		Footer,
  }
}
</script>