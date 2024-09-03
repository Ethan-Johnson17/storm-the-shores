<template>
  <div class="container-fluid">
    <div class="row pagePadding">
      <div class="col-12 text-center">
        <h2>Blog Posts</h2>
      </div>
      <div class="col-12 text-center">
        <h3>All Posts</h3>
      </div>
    </div>
    <div class="row" v-for="blog in blogs" :key="blog.id">
      <div class="col-12 pb-5 text-center">
        <img :src="blog.aboutImageURL" />
        <h3 class="pt-3">{{ blog.blogTitle }}</h3>
        <h4 class="">{{ blog.subtitle }}</h4>
        <p class="text-grey">{{ blog.category }}</p>
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
import { useRouter } from 'vue-router';
import Pop from '@/utils/Pop';

export default {
  setup() {
    // const { data } = useSanityFetcher('*[_type == "blog"]');

    // Unwrap the Ref and map the data
    // const blogTitles = computed(() => data.value?.map(blog => blog.title) || []);
    onMounted(async() => {
      AppState.isLoading = true;
        try {
          let data = await useSanityFetcher(`*[_type == "blog"]{
            blogTitle,
            subtitle,
            author,
            category,
            slug,
            content,
            details,
            postImageContent,
            "aboutImageURL": coalesce(aboutImageURL, aboutImage.asset->url)
            }`
          );
          
          AppState.blogs = data.data.value
        }
        catch (error){
          Pop.error(error);
        }
        finally {
          AppState.isLoading = false
        }
      })
      let blogs = computed(() => AppState.blogs)
    let router = useRouter();
    
    return { 
      blogs,

      pushToDetails(blog) {
        logger.log('blog', blog)
        AppState.selectedBlog = blog
        router.push({
            name: "BlogDetails",
            params: { slug: blog.slug.current },
          })
      }
     }
  },
}
</script>

<style>

</style>