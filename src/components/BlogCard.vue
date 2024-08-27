<template>
  <div class="col-12 pb-5 text-center">
    <img src="https://placehold.co/1000x300" />
    <h3 class="pt-3">{{ blog.blogTitle }}</h3>
    <h4 class="pt-3">{{ blog.subtitle }}</h4>
    <p>{{ blog.category }}</p>
    <!-- <button @click="pushToDetails(project)" class="btn btn-primary">View</button> -->
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object
    }
  },
  setup(props) {
  return {props}
}
}
</script>

<style>

</style>