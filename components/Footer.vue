<template>
  <footer class="container py-4">
    <div class="flex justify-center space-x-4 text-center">
      <a
        href="https://twitter.com/sanderjanssennl"
        class="
          inline-block
          text-gray-800
          hover:text-primary-500
          focus:text-primary-600
          transition-colors
        "
        target="_blank"
      >
        <span class="inline-block w-6 h-6">
          <SVGTwitter />
        </span>
        <span class="block text-xs font-bold">Twitter</span>
      </a>
      <a
        href="https://github.com/sanderjn"
        class="
          inline-block
          text-gray-800
          hover:text-primary-500
          focus:text-primary-600
          transition-colors
        "
        target="_blank"
      >
        <span class="inline-block w-6 h-6">
          <SVGGithub />
        </span>
        <span class="block text-xs font-bold">Github</span>
      </a>
      <a
        href="https://read.cv/sanderj"
        class="
          inline-block
          text-gray-800
          hover:text-primary-500
          focus:text-primary-600
          transition-colors
        "
        target="_blank"
      >
        <span class="inline-block w-6 h-6">
          <SVGReadcv />
        </span>
        <span class="block text-xs font-bold">CV</span>
      </a>
    </div>
    <p class="mt-12 mb-12 font-mono text-xs text-gray-500 text-center">
      👨🏻‍💻 by Sander Janssen<br class="md:hidden" /><span
        class="hidden md:inline"
      >
        - </span
      >Built with
      <a
        class="underline transition-colors hover:text-primary-600"
        href="https://nuxtjs.org"
        >Nuxt.js</a
      >
      and
      <a
        class="underline transition-colors hover:text-primary-600"
        href="https://tailwindcss.com/"
        >TailwindCSS</a
      >
    </p>
  </footer>
</template>

<script>
import SVGGithub from "~/components/icons/github.svg";
import SVGTwitter from "~/components/icons/twitter.svg";
import SVGReadcv from "~/components/icons/readcv.svg";

export default {
  components: {
    SVGGithub,
    SVGTwitter,
    SVGReadcv,
  },
};
</script>