<script lang="ts">
  import { mapState, mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions({
        fetchPosts: 'post/fetchPosts'
      })
    },
    mounted() {
      if (!this.posts.length) {
        this.fetchPosts()
      }
    },
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        error: state => state.post.error,
        currentPageNumber: state => state.post.currentPageNumber
      })
    },
    watch: {
      currentPageNumber() {
        this.fetchPosts();
      }
    }
  }
</script>

<template>
  <RouterLink
    v-for="(post, index) of posts"
    :to="{ name: 'post', params: { postId: post.id } }"
    :key="index"
    class="post"
  >
    <div class="post__id">#{{ post.id }}</div>
    <div class="post__title">{{ post.title }}</div>
    <div>{{ post.body }}</div>
  </RouterLink>
</template>

<style scoped>
  .post {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(2, auto);
    gap: 8px;

    & + & {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #ccc;
    }

    &__id {
      grid-row: -1/1;
    }

    &__title {
      font-weight: 700;
    }
  }
</style>
