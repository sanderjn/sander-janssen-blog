<template>
  <div>
    <!-- <Skew /> -->
    <main class="z-10 content">
      <div class="prose prose-sm md:prose">
        <h1 class="inline-block px-4 -ml-4 !my-0">
          👋🏻 Hi, I'm <br class="md:hidden" />
          <span
            class="inline-block px-1 transform bg-white rounded-sm -rotate-1"
            ><span class="inline-block transform rotate-1"
              >Sander Janssen</span
            ></span
          >
        </h1>
        <p class="block font-mono text-lg md:text-xl text-primary-600 !mt-3">
          Front-end web developer <br class="md:hidden" /><span
            class="text-gray-400"
            >marketing background</span
          >
        </p>
      </div>
      <div class="mt-10">
        <div class="prose prose-sm md:prose max-w-none">
          <p>
            I'm doing <nuxtLink to="/portfolio">freelance work</nuxtLink> and
            building smaller personal projects on the side, some of which can be
            found on
            <svg
              class="inline w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <a
              href="https://github.com/sanderjn"
              target="_blank"
              class="hover:text-primary-600"
              >GitHub</a
            >. I'm currently open for new projects, so if you're interested in
            working with me,
            <a
              href="mailto:hello@sanderjanssen.nl"
              class="hover:text-primary-600"
              >shoot me a message</a
            >.
          </p>
          <h3>Work with me on</h3>
          <ul>
            <li v-for="skill in skills">{{ skill }}</li>
          </ul>
        </div>
        <WorkBanner />
        <div class="mt-10 prose prose-sm md:prose max-w-none">
          <h3>More about me</h3>
          <p>
            I love music (disco/house/electronic) and I spend most of my free
            time looking for new music to use in my DJ sets, which you can check
            out on
            <svg
              class="inline w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <a
              href="https://soundcloud.com/sanderjanssen"
              target="_blank"
              class="hover:text-primary-500"
              >SoundCloud</a
            >. Also I'm low-key producing electronic music, but don't dare to
            share my creations (yet).
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import WorkBanner from "~/components/WorkBanner.vue";

export default {
  data() {
    return {
      skills: [
        "Front-end web development",
        "WordPress development",
        "Conversion Rate Optimization",
      ],
    };
  },
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        class: "home",
      },
    };
  },
  components: {
    WorkBanner,
  },
};
</script>

<style>
</style>