<template>
  <div class="recentPost pt-4">
    <div class="mb-4">
      <button
        class="me-2 post-btn active py-2 px-3 mb-2"
        @click="funPost($event)"
        data-posts="myBooking"
      >
        My Booking
      </button>
      <button
        class="me-2 post-btn py-2 px-3 mb-2"
        @click="funPost($event)"
        data-posts="postRequests"
      >
        My Post Requests
      </button>
      <button
        class="post-btn py-2 px-3 mb-2"
        @click="funPost($event)"
        data-posts="myposts"
      >
        My Posts
      </button>
    </div>
    <div class="myBooking active main-box">
      <my-booking />
    </div>
    <div class="postRequests noactive main-box">
      <post-requests />
    </div>
    <div class="myposts noactive main-box">
      <my-posts />
    </div>
  </div>
</template>

<script>
import myPosts from "./myPosts.vue";
import myBooking from "./myBooking.vue";
import postRequests from "./postRequests.vue";
export default {
  components: {
    myPosts,
    myBooking,
    postRequests,
  },
  data() {
    return {};
  },
  methods: {
    funPost(e) {
      document.querySelector("button.active").classList.remove("active");
      e.target.classList.add("active");
      document.querySelector(".main-box.active").classList.remove("active");
      document.querySelectorAll(".main-box").forEach((e) => {
        e.classList.add("noactive");
      });
      document
        .querySelector("." + e.target.dataset.posts)
        .classList.add("active");
      document
        .querySelector("." + e.target.dataset.posts)
        .classList.remove("noactive");
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style></style>
