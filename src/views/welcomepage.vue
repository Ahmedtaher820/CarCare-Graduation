<template>
  <div class="welcome-screen high-z position-relative" id="home">
    <div
      class="small-nav d-flex justify-content-center justify-content-lg-start"
    >
      <div class="logowelcomepage">
        <img src="../assets/logo/logo.svg" />
      </div>
    </div>
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
          <div class="content-text">
            <h1
              class="text-lg-start lh-base text-capitalize"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-os-delay="500"
            >
              Welcome to our website <br />
              car care official<br />
              websit
              <i
                class="bi bi-arrow-through-heart bg-radial heart d-inline-block"
              ></i>
            </h1>
            <div
              class="btn-group mt-4 d-flex justify-content-center justify-content-lg-start flex-column flex-sm-row gap-2"
            >
              <router-link
                class="btn welcome-btn me-lg-3 mx-auto mx-lg-0 py-3 text-light fw-light"
                :to="{ path: '/signin'}"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                GET START
              </router-link>

              <a
                href="#services-off"
                class="btn welcome-btn btn-services me-lg-3 mx-auto mx-lg-0 py-3 text-light fw-light"
                data-bs-toggle="offcanvas"
              >
                SERVICES
              </a>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-block col-lg-5 carousel-box">
          <carousel></carousel>
        </div>
      </div>
    </div>
    <offcanvas />
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import offcanvas from "../components/offcanvas.vue";
import "../global/welcomepage.css";
export default {
  name: "welcomepage",
  data() {
    return {};
  },
  components: {
    carousel,
    offcanvas,
  },
};
</script>
<style scoped>
.welcome-screen .welcome-content .row > div:not(:last-of-type) {
  margin-top: 3% !important;
}
</style>
