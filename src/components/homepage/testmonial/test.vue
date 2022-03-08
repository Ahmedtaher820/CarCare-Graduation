<template>
<div class="testmonial threeD" id="test">
    <h2 class="main-title fs-2">
       Testmonial
    </h2>
 <carousel-3d>
    <slide v-for="(img,i) in testmonial" :index="i" :key="i">
      <div class="slide-box p-3 d-flex flex-column">
        <div class="quote-img">
          <img src="../../../assets/right-quote.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          accusamus sunt eligendi dolorem commodi? Est quae unde ratione
          cupiditate voluptas, atque eius
        </p>
        <div class="boxes d-flex align-items-center">
          <img :src="require(`../../../assets/testmonial/${img.imgsrc}.png`)"  alt="" />
          <div class="boxes-content ms-2">
              <h3 class="fs-5 mb-0">{{img.name}}</h3>
              <strong>{{img.job}}</strong>
          </div>
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
  computed:{
    testmonial(){
      return this.$store.state.testmonial
    }
  }
};
</script>
<style>
.threeD .carousel-3d-slide {
  min-height: 300px;
  border: none;
  filter: blur(8px);
   background-color: var(--maincolor);
  box-shadow: 0px 0px 10px rgba(0,0,0,.3);
}
.threeD .carousel-3d-slide.current {
  filter: blur(0px);
 background-color: rgba(255, 255, 255, 0.383);
 border-radius: 15px;
 transition: var(--maintransition ) !important;
 margin-top: 10px !important;
}
.slide-box {
  background-color: rgba(255, 255, 255, 0.383);
  min-height: 100%;
}
.threeD .carousel-3d-container[data-v-07917306]{
  overflow: hidden;
  min-height: 320px !important;
}
.threeD .quote-img {
  width: 64px;
  margin-left: auto;
}
.threeD .carousel-3d-slide.current:hover{
  background-color: #fff;
}
.threeD .carousel-3d-slider {
  min-height: 300px;
}
.slide-box .boxes img {
  width: 64px;
}
</style>
