<template>
  <div class="flex flex-col">
    <Header/>
    <main class="flex-1 relative lg:mx-4 xl:mx-8 py-10 md:py-16 gradient-complex animation-gradient">
      <!-- <Skew /> -->
      <div class="content container z-10">
        <h1 class="-ml-4 inline-block px-4 font-display text-4xl lg:text-5xl text-white relative">
          <span class="relative z-10">
            <span class="mr-3 font-display text-4xl lg:text-5xl animation-appear block lg:inline-block">👋🏻</span>
            Hoi, ik ben <br class="md:hidden">
            <span class="relative">
              <span class="relative z-10">Sander Janssen</span>
              <div class="animation-appear absolute bottom-0 left-0 w-full h-6 bg-brand-secondary z-0"></div>
            </span>
          </span>
        </h1>
        <span class="block text-white text-xl lg:text-2xl">Front-end web developer</span>
        <div class="mt-10 lg:mt-24 text-lg md:flex md:flex-row-reverse md:space-x-10 md:space-x-reverse">
          <div class="md:w-1/2 self-center">
            <Sander class="mb-6 w-48 md:ml-auto md:w-full max-w-xs h-auto text-brand-secondary animation-appear" style="transform:rotate(0deg)"/>
          </div>
          <div class="md:w-1/2 skills text-white mt-16 md:mt-0">
            <p>Ik kan je helpen met:</p>
            <ul class="space-y-2">
              <li class="lg:text-xl"><span class="relative z-10">Webdesign</span></li>
              <li class="lg:text-xl"><span class="relative z-10">Webdevelopment</span></li>
              <li class="lg:text-xl"><span class="relative z-10">WordPress websites</span></li>
            </ul>
            <p class="mt-10">Maar ook met:</p>
            <ul class="space-y-2">
              <li class="lg:text-xl"><span class="relative z-10">Conversie optimalisatie</span></li>
              <li class="lg:text-xl"><span class="relative z-10">Zoekmachine optimalisatie (SEO)</span></li>
              <li class="lg:text-xl"><span class="relative z-10">Zoekmachine advertenties (SEA)</span></li>
              <li class="lg:text-xl"><span class="relative z-10">Webhosting</span></li>
            </ul>
          </div>
          <!-- <SanderTransparant class="hidden lg:block ml-auto -mr-4 max-w-sm h-auto z-0 cursor-pointer" style="transform:rotate(3deg)"/> -->
        </div>
          <div class="mt-8 inline-block relative">
            <div class="absolute bg-white w-full h-full z-0 skew-text shadow-lg"></div>
            <p class="font-display font-black py-1 px-6 mb-0 relative text-xl lg:text-2xl z-10"><span class="md:text-2xl lg:text-3xl">🤝</span> Samenwerken?<br class="md:hidden"> Stuur me <a href="mailto:hello@sanderjanssen.nl" target="_blank" class="text-gray-900 hover:text-brand-secondary transition-colors duration-100 underline">een berichtje</a>!</p>
          </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Skew from '~/components/Skew.vue'
import Sander from '~/assets/images/sander-square.svg';
import SanderTransparant from '~/assets/images/sander-transparant.svg';
import Plant from '~/assets/images/plant.svg';

export default {
  data() {
    return {
      title: 'Webdesign & webdevelopment - Sander Janssen'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [ // Each object in this array is its own meta tag
        { hid: 'description', name: 'description', content: 'Hi, ik ben Sander Janssen. Ik kan je helpen met oa webdesign, webdevelopment, WordPress websites, conversie optimalisatie, SEO, SEA, webhosting.' }
      ],
      bodyAttrs: {
        class: 'home',
      }
    }
  },
  components: {
    Header,
    Footer,
    Skew,
    Sander,
    SanderTransparant,
    Plant,
  },
}
</script>

<style>

</style>
