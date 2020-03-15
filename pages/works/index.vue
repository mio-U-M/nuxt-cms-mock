<template lang="pug">
  .container
    p this is list page for works
    ul.list
      template(v-for='n in 3')
        li.list-item: nuxt-link(:to='/works/+ n') page {{ n }}
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID
      })
      .then((entries) => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  },
  mounted() {
    console.log(this.posts)
  }
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
