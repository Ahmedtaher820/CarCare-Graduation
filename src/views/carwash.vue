<template>
  <div class="carwash-page">
    <div class="welcome center-items">
      <h2 class="fs-1 text-light lh-base">
        Welcome Sir,<br />
        To Our Service CarWashing
      </h2>
    </div>
    <div class="container">
      <rate data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" />
      <homework
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="500"
      />
      <green data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" />
      <peoplesay
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      />
      <getstart
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      />
    </div>
  </div>
</template>
<script>
import rate from "../components/carwash/rate.vue";
import homework from "../components/carwash//howwork.vue";
import green from "../components/carwash//green.vue";
import peoplesay from "../components/carwash/peoplesay.vue";
import getstart from "../components/carwash/getstart.vue";

export default {
  name: "carwash",
  components: { rate, homework, green, peoplesay, getstart },
  data() {
    return {};
  },
};
</script>

<style scope>
.welcome {
  height: 70vh;
  background: linear-gradient(to right, rgba(51, 51, 51, 0.418), #333),
    url("../assets/carwash/bg.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
