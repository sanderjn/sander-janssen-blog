<template>
  <nav
    class="
      bg-gray-50
      px-4
      py-3
      space-x-4
      font-mono
      text-sm
      leading-none
      rounded
      lg:px-8
    "
  >
    <!-- <nuxtLink
      to="/blog"
      class="
        text-gray-800
        hover:text-primary-500
        focus:text-primary-600
        transition-colors
      "
      active-class="text-primary-500"
      >Blog</nuxtLink
    > -->
    <nuxtLink
      to="/portfolio"
      class="
        text-gray-800
        hover:text-primary-600
        focus:text-primary-600
        transition-colors
      "
      active-class="text-primary-500"
      >Portfolio</nuxtLink
    >
  </nav>
</template>

<script>
export default {};
</script>