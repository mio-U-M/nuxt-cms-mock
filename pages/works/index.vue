<template lang="pug">
main.work
  section.container
    h1 this is list page for works
    ul.list
      template(v-for='item in posts')
        li.list-item: nuxt-link(:to="{name: 'works-slug', path: `/works/${item.fields.slug}`, params: { id: item.sys.id }}") {{ item.fields.title }}
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID
      })
      .then((entries) => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/base';
.work {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  margin: auto;

  .container {
    text-align: center;
  }

  .list {
    margin-top: 30px;
  }

  .list-item {
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #333;
  }
}
</style>
