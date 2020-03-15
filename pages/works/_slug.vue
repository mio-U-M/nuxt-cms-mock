<template lang="pug">
  .container
    p this is dynamix page
    p id:{{ $route.params.slug }}
    br
    nuxt-link(to='/works/') TO WORKS
</template>

<script>
export default {
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
