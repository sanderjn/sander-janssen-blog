<template>
  <article class="relative h-64 bg-white shadow-lg animation-zoom" v-in-viewport.once>
        <nuxt-link :to="post.path" class="relative z-0 w-full h-full bg-gray-800"><img class="object-cover w-full h-full" :src="imgSrc(post)" :alt="title"/></nuxt-link>
        <nuxt-link :to="post.path" class="absolute top-0 left-0 z-0 w-full h-full">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black" style=""></div>
        </nuxt-link>
        <nuxt-link :to="post.path" class="absolute bottom-0 left-0 z-10 p-4 py-4 lg:px-6">
        <span class="text-xs text-white opacity-75">{{prettyDate(post)}} in {{post.attributes.category}}</span>
        <h3 class="my-0 text-2xl font-black text-white font-display">{{post.attributes.title}}</h3>
        </nuxt-link>
    </article>
</template>

<script>
export default {
}
</script>