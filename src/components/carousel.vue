<template>
  <div class="carousel h-100">
    <div class="carousel-row">
      <div
        class="carousel-content"
        data-aos-duration="1000"
        data-os-delay="200"
      >
        <div
          class="carousel-img"
          v-for="(value, index) in carouselimg"
          :key="index"
        >
          <img :src="require(`../assets/fiveImg/${value.url}.svg`)" />
        </div>
      </div>
    </div>

    <div class="dots position-absolute d-flex">
      <span class="active" @click="move">1</span>
      <span @click="move">2</span>
      <span @click="move">3</span>
    </div>
    <div class="group-img position-absolute">
      <img src="../assets/Layer 4@2x.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  methods: {
    move() {
      let span = document.querySelectorAll(".dots span");
      let carouselcontent = document.querySelector(".carousel-content");
      span.forEach((ele, index) => {
        ele.onclick = function () {
          span.forEach((e) => {
            if (e.classList.contains("active")) {
              e.classList.remove("active");
            }
          });
          ele.classList.add("active");
          carouselcontent.style.transform = `translateY(-${index * 475}px)`;
        };
      });
    },
  },
  computed: {
    carouselimg() {
      return this.$store.state.carouselimgs;
    },
  },
  mounted() {
    if (this.$route.name == "Home") {
      // document.querySelector(".group-img").style.display = "none"
    }
  },
};
</script>

<style>
.carousel {
  z-index: 100;
}
.carousel .carousel-row {
  overflow: hidden;
  width: 500px;
  height: 475px;
  margin: auto;
}
.carousel .carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 18%;
  transition: 0.5s;
}
.carousel-img {
  width: 100%;
  height: 100%;
}
.carousel .carousel-img img {
  width: 400px;
  height: 400px;
}

.dots {
  width: fit-content;
  left: 50%;
  bottom: 30%;
  transform: translateY(-50%);
}
@media (min-width: 992px) and (max-width: 1199px) {
  .dots {
    right: 10px !important;
  }
}
.dots span {
  width: 25px;
  height: 25px;
  font-size: 12px;
  border-radius: 50%;
  background-color: var(--maincolor);
  border: 1px solid #fff;
  display: block;
  cursor: pointer;
  margin:0px 10px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.dots span.active {
  background-color: var(--thirdcolor);
  color: #fff;
}
.dots span:not(span.active):hover {
  background-color: rgba(255, 255, 255, 0.424);
}
.group-img {
  bottom: 85px;
  width: 50%;
  margin-left: 25%;
}
.group-img img {
  width: 100%;
  cursor: pointer;
}
</style>
