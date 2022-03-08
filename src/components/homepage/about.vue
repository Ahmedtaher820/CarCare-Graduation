<template>
  
    <carousel
      :autoplay="true"
      :nav="true"
      :dots="true"
      :margin="25"
      :responsive="{
        0: { items: 1, nav: false },
        600: { items: 1, nav: false },
        800: { items: 2, nav: false },
        1000: { items: 3, nav: false },
      }"
    >
      <div
        v-for="item in imgSrc"
        :key="item.memeber"
        class="boxes"
      >
        <div class="box position-relative">
            <img :src="require(`../../assets/team/${item.srcName}.png`)" alt="" />
          <div class="carousel-content">
            <h4 class="fs-4 w-100">{{ item.member }}</h4>
            <span>{{ item.job }}</span>
            <div
              class="
                social
                d-flex
                flex-row
                justify-content-center
                gap-3
                mt-3
                fs-4
              "
            >
              <i class="bi bi-facebook bg-radial"></i>
              <i class="bi bi-google bg-radial"></i>
              <i class="bi bi-twitter bg-radial"></i>
              <i class="bi bi-instagram bg-radial"></i>
            </div>
          </div>
        </div>
      </div>
    </carousel>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      imgSrc: [
        { srcName: "mem1", member: "Ahmed Taher", job: "Front-End" },
        { srcName: "mem2", member: "Abdo Alaa", job: "Back-End" },
        { srcName: "mem3", member: "M.Mahmoud", job: "Back-End" },
        { srcName: "mem1", member: "M.Elhegawi", job: "Flutter" },
        { srcName: "mem2", member: "Moaz Ahmed", job: "Flutter" },
        { srcName: "mem3", member: "Omar Ismail", job: "UI/UX" },
      ],
    };
  },
  components: { carousel },
};
</script>
<style scoped>
div.boxes {
  background-color: #d1d1d1;
 margin-top: 20%;
  padding: 40px;
  border-radius: 10px;
  transition: 0.3s;
  position: relative;
}
div.boxes img {
  width: 80px;
  position: absolute;
  top: -75%;
  right: -25px;
  padding: 3px;
  background-image: radial-gradient(#fff, var(--background-color));
  border-radius: 50%;
  transition: 0.3s;
  z-index: 100;
}
.carousel-content i{
  cursor: pointer;
}
@media (max-width: 767px) {
  div.boxes{ 
    margin-top: 10%;
  }
}
/* hover part */
 div.boxes:hover {
  background-color: var(--secondcolor);
  color: #fff;
  border-color: #fff;
}
 div.boxes:hover img {
  transform: translate(0px, -10px);
  background-color: #fff;
}
 div.boxes:hover i {
  background: -webkit-linear-gradient(#fff, var(--maincolor));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>