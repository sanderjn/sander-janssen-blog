<template>
  <nuxt-link
    :to="link.to"
    class="
      inline-flex
      items-center
      space-x-2
      bg-primary-600
      px-6
      py-3
      rounded-full
      font-mono
      text-sm
      font-black
      text-white
      antialiased
      transition-colors
      group
      hover:bg-primary-800
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-5 h-5 transition-transform group-hover:-translate-x-2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>

    <span>{{ link.text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["link"],
};
</script>