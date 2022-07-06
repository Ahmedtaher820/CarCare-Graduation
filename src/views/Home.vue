<template>
  <div class="home">
    <welcomepageinhome />
    <div class="carmarket py-5 position-relative" id="carmarket">
      <Carmaket />
    </div>
    <!-- <div class="position-relative py-5">
      <product />
    </div> -->
    <div
      class="aboutus position-relative py-5"
      id="aboutus"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div class="container">
        <about />
      </div>
    </div>

    <div class="position-relative py-5">
      <staisitic />
    </div>
    <div class="position-relative py-5">
      <test />
    </div>
    <div class="scrolltop center-items" @click="goUp" ref="goup">
      <i class="bi bi-chevron-up fs-5"></i>
    </div>
    <!-- <userstyle /> -->
  </div>
</template>

<script>
import welcomepageinhome from "../components/welcomepageinhome.vue";
import Carmaket from "../components/homepage/carmarket/carmarket.vue";
import about from "../components/homepage/about.vue";
// import product from "../components/homepage/products/product.vue";
import staisitic from "../components/homepage/statisitic/statisitic.vue";
import test from "../components/homepage/testmonial/test.vue";
// import userstyle from "../components/homepage/userstyle.vue"
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      username: "",
    };
  },
  components: {
    welcomepageinhome,
    Carmaket,
    about,
    // product,
    staisitic,
    test,
    // userstyle
  },
  methods: {
    goUp() {
      window.scrollTo(0, 0);
    },
  },
  async created() {
    // console.log(this.$route.params.token)
    window.addEventListener("scroll", () => {
      if (this.$route.name == "Home") {
        var scrolltop = document.querySelector(".scrolltop");
        if (window.pageYOffset > 500) {
          scrolltop.style.opacity = "1";
          scrolltop.style.pointerEvents = "auto";
        } else {
          scrolltop.style.opacity = "0";
          scrolltop.style.pointerEvents = "none";
        }
      }
    });
   
    this.$store.dispatch("usernameFun");
    await axios
      .get("https://car-care3.herokuapp.com/api/users/5555/getUsers")
      .then((resolve) => {
        console.log(resolve);
      });
  },
};
</script>
<style>

</style>
