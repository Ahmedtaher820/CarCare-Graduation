<template>
  <div class="container">
    <bookingPost
      v-for="(post, index) in getBooking"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import bookingPost from "./bookingPost.vue";
export default {
  components: {
    bookingPost,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getWaitingPostFun");
  },
  computed: {
    getBooking() {
      return this.$store.state.myWatingBooking;
    },
  },
};
</script>

<style></style>
