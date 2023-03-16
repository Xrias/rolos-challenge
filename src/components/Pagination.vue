<script lang="ts">
  import { getPaginationNumbers } from '@/utils/getPaginationNumbers';
  export default {
    props: {
      setCurrentPageNumber: {
        type: Function,
        required: true
      },
      currentPageNumber: {
        type: Number,
        required: true
      },
      countOfPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      getPaginationNumbers
    }
  }
</script>

<template>
  <div>
    <span
      v-for="pageNumber in getPaginationNumbers(countOfPages, currentPageNumber).firstPart"
      class="pageNumber"
      :class="{
        'pageNumber__current': pageNumber === currentPageNumber
      }"
      v-if="Boolean(getPaginationNumbers(countOfPages, currentPageNumber).firstPart.length)"
      :key="pageNumber"
      @click="setCurrentPageNumber(pageNumber)"
    >
      {{ pageNumber }}
    </span>
    <span
      class="divider"
      v-if="Boolean(getPaginationNumbers(countOfPages, currentPageNumber).secondPart.length)"
    >
      ...
    </span>
    <span
      v-for="pageNumber in getPaginationNumbers(countOfPages, currentPageNumber).secondPart"
      class="pageNumber"
      :class="{
        'pageNumber__current': pageNumber === currentPageNumber
      }"
      v-if="Boolean(getPaginationNumbers(countOfPages, currentPageNumber).secondPart.length)"
      :key="pageNumber"
      @click="setCurrentPageNumber(pageNumber)"
    >
      {{ pageNumber }}
    </span>
    <span
      class="divider"
      v-if="Boolean(getPaginationNumbers(countOfPages, currentPageNumber).thirdPart.length)"
    >
      ...
    </span>
    <span
      v-for="pageNumber in getPaginationNumbers(countOfPages, currentPageNumber).thirdPart"
      class="pageNumber"
      :class="{
        'pageNumber__current': pageNumber === currentPageNumber
      }"
      v-if="Boolean(getPaginationNumbers(countOfPages, currentPageNumber).thirdPart.length)"
      :key="pageNumber"
      @click="setCurrentPageNumber(pageNumber)"
    >
      {{ pageNumber }}
    </span>
  </div>
</template>

<style scoped>
  .pageNumber {
    margin-right: 5px;
    cursor: pointer;

    &__current {
      color: red;
    }
  }

  .divider {
    margin-right: 5px;
  }
</style>
