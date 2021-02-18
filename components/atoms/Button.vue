<template>
    <nuxt-link :to="link.to" class="inline-flex items-center bg-primary-500 px-8 py-2 rounded-full font-medium text-white antialiased transition-colors hover:bg-primary-600">
        <svg class="inline-block w-4 h-4 mr-3 transition-transform duration-200 ease-in-out transform cta-arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>
        {{ link.text }}
    </nuxt-link>
</template>

<script>
export default {
    props: ['link']
}
</script>