<template>
  <div
    class="
      w-full
      min-h-screen
      bg-gradient-to-b
      from-gray-50
      via-gray-100
      to-gray-100
    "
  >
    <Header />
    <div class="container relative flex-1 py-12 rounded md:py-12">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>