<script lang="ts">
  import Pagination from '@/components/Pagination.vue';
  import PostsList from '@/components/PostsList.vue';
  import { mapMutations, mapState } from 'vuex'

  export default {
    components: {
      Pagination,
      PostsList
    },
    methods: {
      ...mapMutations({
        setCurrentPageNumber: 'post/setCurrentPageNumber'
      })
    },
    computed: {
      ...mapState({
        error: state => state.post.error,
        posts: state => state.post.posts,
        currentPageNumber: state => state.post.currentPageNumber,
        countOfPages: state => state.post.countOfPages
      })
    }
  }
</script>

<template>
  <h1>Posts list</h1>
  <Pagination 
    v-if="!error && posts.length > 0"
    :set-current-page-number="setCurrentPageNumber"
    :current-page-number="currentPageNumber"
    :count-of-pages="countOfPages"
  />
  <PostsList
    v-if="!error"
  />
  <div v-else>{{ error }}</div>
</template>
