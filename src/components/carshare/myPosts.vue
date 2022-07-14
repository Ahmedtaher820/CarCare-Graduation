<template>
  <div class="container">
     <post
      v-for="(post, index) in getAllPosts"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import post from "./post.vue";

export default {
  components: {
    post,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getMyAllPosts");
  },
  computed: {
    getAllPosts() {
      return this.$store.state.myPosts;
    },
  },
};
</script>

<style></style>
