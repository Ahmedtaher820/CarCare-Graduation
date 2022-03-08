<template>
  <div class="verify min-h center-items">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 ms-0 ms-lg-2">
          <div class="verify-content">
            <!-- <img src="../assets/logo/logo2.png" class="mb-1" alt="" /> -->
            <h3 class="fs-1 lh-base">
              Please Check Your Email <br />
              To Verified Your Account
            </h3>
            <input
              class="text-secondary shadow-sm form-control"
              type="text"
              maxlength="5"
              placeholder="Enter The 5 Digit Here"
            />
            <button
              class="btn btn-main-bg mt-4 py-2 px-5 w-100"
              @click="gohome"
            >
              VERIFY
            </button>
          </div>
        </div>
        <div class="d-none d-lg-block col-lg-6 carousel-box">
          <carousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
export default {
  components: {
    carousel,
  },
  methods: {
    gohome() {
      localStorage.setItem("user-info", "Ahmed");
      if (localStorage.getItem("user-info")) this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* .verify-content img {
  width: 250px;
} */
.btn {
  border-radius: 15px !important;
}
</style>
