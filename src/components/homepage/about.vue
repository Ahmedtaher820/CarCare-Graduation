<template>
  <div class="testmonial threeD" id="test">
    <h2 class="main-title fs-2">About Us</h2>
    <carousel-3d>
      <slide v-for="(item, i) in items" :index="i" :key="i">
        <div class="slide-box p-3 d-flex flex-column">
          <div class="boxes d-flex align-items-center mb-1">
            <img
              :src="require(`../../assets/team/${item.srcName}.jpg`)"
              alt=""
              class="item-img"
            />
            <div class="boxes-content ms-2">
              <h3 class="fs-5 mb-0">{{ item.member }}</h3>
              <strong>{{ item.job }}</strong>
            </div>
          </div>

          <p class="lead">
            {{ item.description }}
          </p>
          <div
            class="social d-flex flex-row justify-content-start gap-3 mt-1 fs-4"
          >
            <a
              :href="media.url"
              v-for="(media, index) in item.social"
              :key="index"
              target="_blank"
            >
              <i class="bi bg-radial" :class="media.name"></i>
            </a>
          </div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data() {
    return {};
  },
  components: {
    Carousel3d,
    Slide,
  },
  computed: {
    items() {
      return this.$store.state.imgSrc;
    },
  },
  mounted() {
    console.log(this.imgSrc);
  },
};
</script>
<style scoped>
@import "../../global/home/carousel3d.css";
.item-img{
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: contain;
}
</style>
