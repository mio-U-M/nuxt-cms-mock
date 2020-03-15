<template lang="pug">
main.pages
  section.container
    h1.title {{ article.title }}
    .image
      img(:src='article.heroImage.fields.file.url' alt='image')
    p {{ article.description }}
    br
    p.maintext {{ article.body }}
    nuxt-link(to='/works/').totop TO WORKS
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      })
      .then((entrie) => {
        return {
          article: entrie.items[0].fields
        }
      })
      .catch(console.error)
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

  .image {
    width: 70%;
    min-height: 400px;
    margin: 10px auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  .maintext {
    margin: 10px auto;
    width: 80%;
  }

  .totop {
    display: block;
    width: 200px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #333;
  }
}
</style>
