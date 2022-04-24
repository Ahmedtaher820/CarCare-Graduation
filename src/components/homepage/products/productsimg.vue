<template>
  <div class="productimg">
    <div
      id="animated-thumbnails"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="delay = 200"
    >
      <a
        v-for="img in imageList"
        :key="img.url"
        :href="require(`../../../assets/carsbrand/${img.imgurl}.webp`)"
        class="position-relative"
      >
        <img
          :src="require(`../../../assets/carsbrand/${img.imgurl}.webp`)"
          alt=""
        />
        <span class="position-absolute">{{ img.brand }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import "lightgallery.js";
import "lightgallery.js/dist/css/lightgallery.css";

export default {
  name: "IssueDetail",
  data() {
    return {
      imageList: [
        {
          imgurl: "ford",
          brand: "ford",
        },
        {
          imgurl: "mercedes",
          brand: "mercedes",
        },
        {
          imgurl: "kia",
          brand: "kia",
        },
        {
          imgurl: "porsche",
          brand: "porsche",
        },
        {
          imgurl: "toyota",
          brand: "toyota",
        },
        {
          imgurl: "mini",
          brand: "Mini",
        },
        {
          imgurl: "nissan",
          brand: "Nissan",
        },
        {
          imgurl: "fiat",
          brand: "fiat",
        },
        {
          imgurl: "vintage",
          brand: "vintage",
        },
      ],
    };
  },
  mounted() {
    const el = document.getElementById("animated-thumbnails");
    window.lightGallery(el);
  },
};
</script>

<style>
#animated-thumbnails {
  display: flex;
  flex-flow: row wrap;
  gap: 2%;
}
#animated-thumbnails > a {
  width: 31.333%;
  position: relative !important;
  margin-bottom: 20px;
}
@media (max-width: 991px) {
  #animated-thumbnails > a {
    width: 48%;
  }
}
@media (max-width: 767px) {
  #animated-thumbnails > a {
    width: 90%;
    margin-left: 5%;
  }
}
#animated-thumbnails > a::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.239),
    rgba(0, 0, 0, 0.554)
  );
  transition: var(--maintransition);
  opacity: 0;
}
#animated-thumbnails > a:hover::after {
  opacity: 1;
}
#animated-thumbnails > a img {
  width: 100%;
  height: 250px;
}
#animated-thumbnails > a span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -30%);
  color: #fff;
  z-index: 10;
  text-transform: uppercase;
  font-size: 40px;
  opacity: 0;
  transition: var(--maintransition);
}
#animated-thumbnails > a:hover span {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
