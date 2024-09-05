<template>
  <header>
    <Navbar />
    <!-- <MembershipNav v-show="appState?.account?.membership" /> -->
  </header>
  <main>
    <router-view />
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from './AppState';
import { useSanityClient, useSanityFetcher } from 'vue-sanity'
import Navbar from '@/components/Navbar.vue'; // Adjust the path accordingly
import Pop from './utils/Pop';


export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    useSanityClient({
      projectId: '0wjv0hba',
      dataset: 'production',
      // eslint-disable-next-line no-undef
      useCdn: process.env.NODE_ENV === 'production',
    })
    const route = useRoute()
    const router = useRouter()
    return {
      appState: computed(() => AppState),
      route
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
