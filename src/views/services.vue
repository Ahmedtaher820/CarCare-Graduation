<template>
  <div class="services">
    <pagesbg :title="title" />
    <div class="container">
      <h2
        class="main-title fs-2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Services
      </h2>
      <div class="row services-row">
        <div
          class="col-12 col-md-8 col-lg-4 mb-5"
          v-for="(value, i) in servicesImg"
          :key="i"
          data-aos="fade-left"
          data-aos-duration
        >
          <div
            class="services-boxes w-100 shadow mb-lg-0 pt-5 pb-3 px-4 d-flex flex-column text-start position-relative"
          >
            <div class="box-img">
              <img
                :src="require(`../assets/icons/${value.service}.png`)"
                :alt="value.service"
                class="me-auto"
              />
            </div>
            <h3 class="fs-4 my-2">{{ value.content }}</h3>
            <ul class="" v-if="value.list">
              <li v-for="lis in value.list" :key="lis" class="mb-1">
                {{ lis }}
              </li>
            </ul>
            <div class="services-link d-flex w-100 pt-2">
              <a
                @click="tolocation(value.href)"
                class="btn btn-main-bg position-absolute mainhover"
                >Let's Go</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagesbg from "../components/pagesbg.vue";
export default {
  name: "services",
  data() {
    return {
      title: "SERVICES",
    };
  },
  components: {
    pagesbg,
  },
  computed: {
    servicesImg() {
      return this.$store.state.servicesImg;
    },
  },
  methods: {
    tolocation(e) {
      if (this.$route.path !== e) {
        if (e.indexOf("gov") == -1) {
          this.$router.push(e);
        } else {
          window.open(
            "https://digital.gov.eg/categories/5e6e477931f6b33921d96e14",
            "_blank"
          );
        }
      }
    },
  },
};
</script>

<style>
.services-row {
  justify-content: space-around;
}
.services-boxes {
  min-height: 400px;
  background: rgba(255, 255, 255, 0.774);
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}
.services-boxes:hover {
  transform: translateY(-10px);
  box-shadow: none !important;
}
.services-boxes .btn {
  bottom: 24px;
}
</style>
