<template>
  <div class="flex flex-col bg-gray-50">
  	<Header />
  		<nuxt class="min-h-screen" />
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