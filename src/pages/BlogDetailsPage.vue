<template>
  <div class="container-fluid">
    <div class="row pagePadding">
      <div v-if="blog" class="col-12">
        <p>{{ blog.blogTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '@/AppState';
import { logger } from '@/utils/Logger';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    let blog = ref({})
    onMounted(() => {
      blog.value = AppState.selectedBlog
      logger.log('blogDetails', blog)
    })
    return {
      blog
    }
  }
}
</script>

<style>

</style>