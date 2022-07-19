<template>
  <div class="recentPost pt-4">
    <div
      class="position-fixed d-inline-block d-md-none close-recent"
      @click="removeRecent"
    >
      <i class="bi bi-x-circle fs-1 text-danger"></i>
    </div>
    <div class="mb-4">
      <button
        class="me-2 post-btn active py-2 px-3 mb-2 position-relative"
        @click="funPost($event)"
        data-posts="myBooking"
      >
        My Booking
        <!-- <span class="notifcation" v-if="showMyBookingNotifaction"></span> -->
      </button>
      <button
        class="me-2 post-btn py-2 px-3 mb-2 position-relative"
        @click="funPost($event)"
        data-posts="postRequests"
      >
        My Post Requests
        <!-- <span class="notifcation" v-if="showRequestNotifaction"></span> -->
      </button>
      <button
        class="post-btn py-2 px-3 mb-2 position-relative"
        @click="funPost($event)"
        data-posts="myposts"
      >
        My Posts
        <!-- <span class="notifcation" v-if="showMyPostNotifaction"></span> -->
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
    return {
      // showMyPostNotifaction: false,
      // showMyBookingNotifaction:false,
      // showRequestNotifaction:false
    };
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
    removeRecent() {
      document.querySelector(".recentPost").classList.remove("active");
    },
  },
  mounted() {
    console.log(this.postsNum);
  },
  computed: {
    // postsNum() {
    //   return this.$store.state.postsNum;
    // },
    // BooksNum() {
    //   return this.$store.state.BooksNum;
    // },
    // RequestsNum() {
    //   return this.$store.state.RequestsNum;
    // },
  },
  watch: {
    // postsNum: function () {
    //   this.showMyPostNotifaction = true;
    // },
    // BooksNum: function (v) {
    //   console.log(v)
    //   this.showMyBookingNotifaction = true;
    // },
    // RequestsNum: function () {
    //   this.showRequestNotifaction = true;
    // },
  },
};
</script>

<style>
/* .notifcation {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--thirdcolor);
  position: absolute;
  top: -5px;
  left: -5px;
} */
</style>
