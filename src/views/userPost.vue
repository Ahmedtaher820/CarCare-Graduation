<template>
  <div class="user-post">
    <div class="passenger-box p-4">
      <div class="header center-items gap-5 border-bottom pb-4">
        <div
          class="header-date me-0 me-md-5 pe-4 d-flex flex-column gap-3 justify-content-center align-items-center"
        >
          <span v-if="new Date(post.date).getDay() == 0" class="text-secondary"
            >Saturday</span
          >
          <span
            v-else-if="new Date(post.date).getDay() == 1"
            class="text-secondary"
            >Sunday</span
          >
          <span
            v-else-if="new Date(post.date).getDay() == 2"
            class="text-secondary"
            >Monday</span
          >
          <span
            v-else-if="new Date(post.date).getDay() == 3"
            class="text-secondary"
            >Tuesday</span
          >
          <span
            v-else-if="new Date(post.date).getDay() == 4"
            class="text-secondary"
            >Wednesday</span
          >
          <span
            v-else-if="new Date(post.date).getDay() == 5"
            class="text-secondary"
            >Thrusday</span
          >
          <span v-else class="text-secondary">Friday</span>
          <span>
            {{ new Date(post.date).getUTCHours() }}:{{
              new Date(post.date).getUTCMinutes() > 10
                ? new Date(post.date).getUTCMinutes()
                : "0" + new Date(post.date).getUTCMinutes()
            }}
            {{ new Date(post.date).getUTCHours() > 12 ? "PM" : "AM" }}
          </span>
        </div>
        <div class="header-dest-point d-flex flex-column gap-2 ms-0 ms-md-5">
          <div class="level yellow">
            <span class="point-sty yellow"></span>
          </div>
          <div class="dest-point mt-1">
            <span></span>
            <span></span>
            <span></span>
            <span class="mb-0"></span>
            <span class="down-icon"><i class="bi bi-chevron-down"></i></span>
          </div>
          <div class="level blue">
            <span class="point-sty"></span>
          </div>
        </div>
        <div class="header-dest-city">
          <p>{{ post.fromCity }}</p>
          <p>{{ post.toCity }}</p>
        </div>
      </div>
      <div class="post-body pt-3">
        <div class="post-user-info d-flex gap-5 align-items-center">
          <div class="user-info d-flex gap-2">
            <img src="../assets/carshare/man.png" alt="" class="user-img" />
            <div
              class="user-content d-flex flex-column justify-content-center text-start"
            >
              <p class="mb-0 fw-bold fs-6 text-secondary">Ahmed</p>
              <div class="info">
                <p class="mb-0">
                  <span class="fw-bold text-secondary">(Man</span>
                  - <span class="fw-bold text-secondary">25 )</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="post-footer d-flex justify-content-between mt-4">
          <div class="bg-muted rounded-3 shadow-sm px-md-5 p-1">
            <i class="bi bi-coin"></i>
            <span class="ms-2">{{ post.price }}</span>
          </div>
          <div class="bg-muted rounded-3 shadow-sm px-md-5 p-1">
            <i class="bi bi-person-circle"></i>
            <span class="ms-2">{{ post.number }} Person</span>
          </div>

          <div class="bg-muted rounded-3 shadow-sm px-md-5 p-1">
            <i class="bi bi-calendar"></i>
            <span class="ms-2">{{
              post.date.slice(0, post.date.indexOf("T"))
            }}</span>
          </div>
        </div>
        <button
          class="btn d-block w-50 mx-auto py-2 mt-4"
          @click="deletePost(post._id)"
        >
          Delete
        </button>
      </div>
    </div>
    <loading v-if="showLoad" />
  </div>
</template>

<script>
import loading from "../components/loading.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      showLoad: true,
    };
  },
  components: {
    loading,
  },
  mounted() {
    this.$store.dispatch("getPostById", this.id);
    setTimeout(() => {
      this.showLoad = false;
    }, 2000);
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch("deletePost", postId);
    },
  },
  computed: {
    post() {
      return this.$store.state.postById;
    },
  },
};
</script>

<style>
.user-post .passenger-box {
  width: 75%;
  margin-top: 50px;
}
.user-post .btn {
  background-color: var(--secondcolor);
}
</style>
