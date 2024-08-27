import { useSanityClient } from 'vue-sanity'

export default {
  name: 'App',
  setup() {
    useSanityClient({
      projectId: 'hf40kt1w',
      dataset: 'production',
      // eslint-disable-next-line no-undef
      useCdn: process.env.NODE_ENV === 'production',
    })
  },
}