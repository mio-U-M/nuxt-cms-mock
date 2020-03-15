<template lang="pug">
main.pages
  section.container
    h1.title this is dynamix page
    p id:{{ $route.params.slug }}
    br
    nuxt-link(to='/works/').totop TO WORKS
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
  asyncData({ env, params }) {
    return client
      .getEntry(params.id)
      .then((entrie) => {
        return {
          article: entrie
        }
      })
      .catch(console.error)
  },
  mounted() {
    console.log(this.$route.params)
    console.log(this.article)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';

.pages {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  margin: auto;

  .container {
    text-align: center;
  }

  .title {
    margin: 20px auto;
    font-size: 32px;
  }

  .totop {
    display: block;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #333;
  }
}
</style>
