import { useSanityClient } from 'vue-sanity'

export default {
  name: 'App',
  setup() {
    useSanityClient({
      projectId: '0wjv0hba',
      dataset: 'production',
      // eslint-disable-next-line no-undef
      useCdn: process.env.NODE_ENV === 'production',
    })
  },
}