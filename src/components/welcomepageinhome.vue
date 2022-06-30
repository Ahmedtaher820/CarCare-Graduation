<template>
  <div class="welcome-screen high-z position-relative" id="home">
    <div class="welcome-content">
      <div class="row">
        <div class="col-12 col-lg-1">
          <div
            class="social d-flex flex-row gap-5 fs-4 ms-4 flex-lg-column justify-content-center justify-content-lg-start"
          >
            <i
              class="bi bi-facebook bg-radial"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            ></i>
            <i
              class="bi bi-google bg-radial"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            ></i>
            <i
              class="bi bi-twitter bg-radial"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            ></i>
            <i
              class="bi bi-instagram bg-radial"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="700"
            ></i>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="content-text mt-2 ms-3">
            <h1
              class="text-lg-start lh-base text-capitalize fs-1"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-os-delay="500"
            >
              Thank You {{ username }}<br />
              For Use Our website
              <i
                class="bi bi-arrow-through-heart bg-radial heart d-inline-block"
              ></i>
            </h1>
            <div
              class="btn-group mt-4 d-flex justify-content-center justify-content-lg-start flex-column flex-sm-row gap-2"
            >
              <a
                class="btn btn-get me-lg-3 mx-auto mx-lg-0 py-3 text-light fw-light position-relative mainhover"
                type="button"
                href="#carmarket"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                GET START
              </a>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-block col-lg-5 carousel-box">
          <carousel></carousel>
        </div>
      </div>
    </div>
    <a class="downicon position-absolute center-items fs-2" href="#carmarket">
      <i class="bi bi-chevron-down"></i>
    </a>
  </div>
</template>

<script>
import carousel from "./carousel.vue";
import "../global/welcomepage.css";
export default {
  name: "welcomepage",
  data() {
    return {};
  },
  components: {
    carousel,
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>
<style>
.welcome-screen .welcome-content .row > div:not(:last-of-type) {
  margin-top: 10% !important;
}
</style>
