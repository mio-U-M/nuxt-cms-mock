<template lang="pug">
  .container
    p this is list page for works
    ul.list
      template(v-for='n in 3')
        li.list-item: nuxt-link(:to='/works/+ n') page {{ n }}
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
