<template>
  <div
    class="
      flex flex-col
      min-h-screen
      px-2
      bg-fixed bg-gradient-to-r
      from-primary-500
      via-secondary-500
      to-tertiary-500
      animation-gradient
      lg:px-4
    "
  >
    <Header />
    <div
      class="
        container
        relative
        flex-1
        py-12
        bg-gradient-to-b
        from-gray-50
        via-gray-100
        to-gray-100
        rounded
        shadow-lg
        md:py-12
      "
    >
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