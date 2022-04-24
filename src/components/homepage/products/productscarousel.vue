<template>
  <div class="prods-box">
    <div class="box">
      <carousel
        :autoplay="true"
        :nav="false"
        :dots="false"
        :margin="25"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 2, nav: false },
          800: { items: 3, nav: false },
          1000: { items: 3, nav: false },
        }"
      >
        <div class="carouselimg" v-for="(brand, i) in prodBrands" :key="i">
          <img
            :src="require(`../../../assets/brand/${brand}.webp`)"
            class="brand-img"
            alt=""
          />
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      prodBrands: ["ford", "Kia", "Mercedes", "toyota", "Volkswagen", "nissan"],
    };
  },
  components: { carousel },
};
</script>

<style>
.carouselimg {
  width: 33.33%;
  height: 50px;
}
.carouselimg img {
  width: 100%;
  height: 100%;
}
.prods-box .owl-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
