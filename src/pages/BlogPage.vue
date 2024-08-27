<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Blog Posts</h2>
      </div>
      <div class="col-12 text-center">
        <h3>All Posts</h3>
      </div>
    </div>
    <div class="row" v-for="blog in blogs" :key="blog.id">
      <div>{{ blog.blogTitle }}</div>
      <div class="col-12 pb-5 text-center">
        <img src="https://placehold.co/1000x300" />
        <h3 class="pt-3">{{ blog.blogTitle }}</h3>
        <h4 class="pt-3">{{ blog.subtitle }}</h4>
        <p>{{ blog.category }}</p>
        <button @click="pushToDetails(blog)" class="btn btn-primary">View</button>
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from '@/utils/Logger'
import { useSanityFetcher } from 'vue-sanity'
import { computed, onMounted } from 'vue'
import { PortableText } from '@portabletext/vue';
import { AppState } from '@/AppState';

export default {
  setup() {
    // const { data } = useSanityFetcher('*[_type == "blog"]');

    // Unwrap the Ref and map the data
    // const blogTitles = computed(() => data.value?.map(blog => blog.title) || []);
    onMounted(async () => {
      let data = await useSanityFetcher('*[_type == "blog"]')
      AppState.blogs = data.data.value
      // blogs = data.value.map(blog => ({
      //   title: blog.itle,
      //   subtitle: blog.subtitle
      // }))
    })
    let blogs = computed(() => AppState.blogs)
    
    return { 
      blogs,

      pushToDetails(blog) {
        
      }
     }
  },
}
</script>

<style>

</style>