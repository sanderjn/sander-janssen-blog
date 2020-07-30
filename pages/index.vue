<template>
  <div class="flex flex-col">
    <Header/>
    <main class="flex-1 relative lg:mx-4 xl:mx-8 py-10 md:py-16 gradient-complex animation-gradient">
      <!-- <Skew /> -->
      <div class="content container z-10">
        <h1 class="font-display text-4xl lg:text-5xl text-gray-900"><span class="mr-2 animation-appear block lg:inline-block">👋🏻</span> Hoi, ik ben <br class="md:hidden"> Sander Janssen</h1>
        <span>Front-end web developer</span>
        <div class="mt-10 lg:mt-24 text-lg lg:text-xl md:grid md:grid-cols-2 gap-10">
          <div class="skills text-gray-900">
            <p>Ik kan je helpen met:</p>
            <ul class="space-y-2">
              <li>Webdesign</li>
              <li>Webdevelopment</li>
              <li>WordPress websites</li>
            </ul>
            <p class="mt-10">Maar ook met:</p>
            <ul class="space-y-2">
              <li>Conversie optimalisatie</li>
              <li>Zoekmachine optimalisatie (SEO)</li>
              <li>Zoekmachine advertenties (SEA)</li>
              <li>Webhosting</li>
            </ul>
          </div>
          <div class="hidden sm:block ml-auto self-center">
            <!-- <Sander class="mb-6 -mr-4 w-full max-w-xs h-auto animation-appear" style="transform:rotate(0deg)"/> -->
          </div>
          <!-- <SanderTransparant class="hidden lg:block ml-auto -mr-4 max-w-sm h-auto z-0 cursor-pointer" style="transform:rotate(3deg)"/> -->
        </div>
          <div class="mt-8 inline-block relative">
            <div class="absolute bg-white w-full h-full z-0 shadow-lg"></div>
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
