<template>
  <button class="selectable btn d-flex py-0 mb-2 back-arrow-btn" @click="router.push('/blog')">
    <i class="mdi mdi-arrow-left back-arrow fs-5"></i>
    <p class="back-arrow p-0 m-0 ms-1 fs-5">All Blogs</p>
  </button>
  <div class="container">
    <div class="row pagePadding">
      <div v-if="blog" class="col-12">
        <h1>{{ blog.blogTitle }}</h1>
        <h6>{{ blog.author }}</h6>
        <div class="text-center py-3">
          <img :src="blog.aboutImageURL" alt="">
        </div>
        <h2>{{ blog.subtitle }}</h2>
        <div class="body py-2">
          <PortableText
          :value="blog.content"
          :components="{
          }"
        />
        <img :src="blog.secondaryImage" alt="">
        <PortableText
        :value="blog.postImageContent"
        :components="{
        }"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '@/AppState';
import { logger } from '@/utils/Logger';
import { PortableText } from '@portabletext/vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSanityFetcher } from 'vue-sanity';

export default {
  components: {
    PortableText
  },
  setup() {
    let blog = ref({})
    let router = useRouter()
    let route = useRoute();
    let query = `*[_type == "blog" && slug.current == '` + route.params.slug + `']{
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
    onMounted(async () => {
      if (AppState.selectedBlog.blogTitle) {
        blog.value = AppState.selectedBlog
      } else {
        const { data } = await useSanityFetcher(query)
        while (!data.value) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        blog.value = data.value[0]
        AppState.selectedBlog = data.value
      }
    })
    return {
      blog,
      router
    }
  }
}
</script>

<style>
.back-arrow {
  color: grey;
}

.back-arrow-btn {
  position: absolute;
  top: 7rem;
}
</style>