<template>
  <header class="container flex items-center justify-between py-2">
    <nuxt-link
      class="
        flex
        items-end
        space-x-4
        text-lg
        font-black
        leading-none
        sm:text-xl
      "
      to="/"
    >
      <img
        src="~/assets/images/sander.png"
        alt="Sander Janssen"
        class="
          w-12
          h-12
          bg-white
          object-cover
          transform
          transition-transform
          rounded-md
          hover:scale-105 hover:-translate-y-0.5
        "
      />
    </nuxt-link>
    <HeaderNav class="-mr-4 lg:-mr-8" />
  </header>
</template>

<script>
import HeaderNav from "~/components/HeaderNav";

export default {
  components: {
    HeaderNav,
  },
  methods: {
    homePage() {
      if (this.$route.path === "/" || this.$route.path === "/home") {
        this.homePage = true;
      } else {
        this.homePage = false;
      }
    },
  },
};
</script>