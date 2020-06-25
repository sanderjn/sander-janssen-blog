<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
    <h1 v-else>Whoops, er ging iets mis</h1>
    <nuxt-link to="/">Terug naar de homepage</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>