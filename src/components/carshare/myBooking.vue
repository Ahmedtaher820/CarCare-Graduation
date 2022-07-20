<template>
  <div class="container">
    <span class="d-inline-block text-start mb-3 text-danger p-2 book-note">
      *If you see the word Approved, it means that it was confirmed by the owner of the post*
    </span>
    <span class="d-inline-block text-start mb-3 text-danger p-2 book-note">
      *If your book deleted automatically this mean that canceled by owner of the post*
    </span>
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
