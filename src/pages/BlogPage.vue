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
    <!-- Loader -->
    <div class="row" v-if="isLoading">
      <Loader></Loader>
    </div>
    <!-- Blog List -->
    <div class="row pt-3" v-else>
      <div
        v-for="blog in blogs"
        :key="blog.slug.current"
        class="col-12 pb-5 text-center"
      >
        <img :src="blog.aboutImage" />
        <h3 class="pt-3">{{ blog.blogTitle }}</h3>
        <h4>{{ blog.subtitle }}</h4>
        <p class="text-grey">{{ blog.category }}</p>
        <button @click="pushToDetails(blog)" class="btn btn-primary">View</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useSanityFetcher } from 'vue-sanity'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { AppState } from '@/AppState'
import Pop from '@/utils/Pop'
import Loader from '@/components/loader.vue'
import { logger } from '@/utils/Logger'

export default {
  components: {
    Loader
  },
  setup() {
    const blogs = ref([])
    const isLoading = ref(true)
    const router = useRouter()

    onMounted(async () => {
      try {
        const { data } = await useSanityFetcher(`*[_type == "blog"]{
          blogTitle,
          subtitle,
          author,
          category,
          slug,
          content,
          details,
          postImageContent,
          "aboutImage": aboutImage.asset->url,
          author->{name, "picture": picture.asset->url}
        }`)
        while (!data.value) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        blogs.value = data.value
        AppState.blogs = data.value
        isLoading.value = false
        logger.log(isLoading.value, 'after', data.value)
      } catch (error) {
        Pop.error(error)
      } 
    })

    const pushToDetails = (blog) => {
      AppState.selectedBlog = blog
      router.push({
        name: 'BlogDetails',
        params: { slug: blog.slug.current },
      })
    }

    return {
      blogs,
      isLoading,
      pushToDetails,
    }
  },
}
</script>

<style scoped>
/* Add any relevant styles here */
</style>
