<!--/* eslint-disable */-->
<template>
  <div>
    <header>
      <h1>{{ story.name }}</h1>
    </header>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // home slug content by default
    const slug = context.params.slug ? context.params.slug : 'home'

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${slug}`, {
        version:
          context.query._storyblok || context.isDev ? 'draft' : 'published'
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return { story: { content: {} } }
  }
}
</script>
<style scoped></style>
