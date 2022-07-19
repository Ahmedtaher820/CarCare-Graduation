<template>
  <div id="app">
    <navgiation v-if="shownav" />
    <!-- <transition class="fade-out" name="fade"> -->
    <!-- <transition> -->
    <router-view />
    <!-- </transition> -->
    <img
      v-for="(img, i) in animationimg"
      :key="i"
      :src="require(`./assets/animation/${img.src}.png`)"
      :alt="img.title"
      :class="img.class"
    />
    <footersection v-if="shawfooter" />
  </div>
</template>
<script>
import navgiation from "./components/navgiation.vue";
import footersection from "./components/homepage/footer.vue";
export default {
  data() {
    return {
      shownav: true,
      shawfooter: true,
    };
  },
  components: {
    navgiation,
    footersection,
  },
  created() {
    this.checkRouter();
    // "user-info" it's property in local storage it's store when user login
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ path: "/welcomepage" });
    }
   
  },
  methods: {
    checkRouter() {
      if (
        this.$route.name === "signin" ||
        this.$route.name === "login" ||
        this.$route.name === "welcomepage" ||
        this.$route.name === "verify"
      ) {
        this.shownav = false;
        this.shawfooter = false;
      } else if (
        this.$route.name === "bookwash" ||
        this.$route.name == "passenger"
      ) {
        this.shownav = true;
        this.shawfooter = false;
      } else if(this.$route.name === "Home"){
        console.log("done")
        this.shownv = true;
        this.shawfooter = true;
      }
    },
  },
  computed: {
    animationimg() {
      return this.$store.state.animationimg;
    },
  },
  watch: {
    $route() {
      this.checkRouter();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-enter-active,
.v-leave-active {
  transition: transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
