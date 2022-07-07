<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo/logowhite .svg" class="logo2 ms-3" alt=""
      /></router-link>

      <div class="">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <span
              class="nav-link active text-light home"
              aria-current="page"
              @click="goprofile()"
              data-path=""
            >
              Home
            </span>
          </li>
          <li class="nav-item">
            <span
              class="nav-link text-light services"
              data-path="services"
              @click="goprofile()"
              >Services</span
            >
          </li>
          <li class="nav-item">
            <span
              class="nav-link text-light"
              data-path="aboutus"
              @click="goprofile()"
              >About Us</span
            >
          </li>
          <li class="nav-item">
            <span
              class="nav-link text-light"
              data-path="contact"
              @click="goprofile()"
              >Contact Us</span
            >
          </li>
          <li class="nav-item">
            <span
              href=""
              class="nav-link cart main-text bg-light rounded-pill center-items p-1 inline-block mx-2"
            >
              <i class="bi bi-cart2 fs-5"></i>
              <span class="cartnum">{{ increasecar }}</span>
            </span>
          </li>
          <li class="nav-item">
            <span
              class="nav-link text-light p-1 user mx-2"
              data-path="profile"
              @click="goprofile()"
            >
              <i class="bi bi-person-circle fs-2"></i>
            </span>
          </li>
        </ul>
      </div>
      <button class="burger pe-3" type="button" @click="burger">
        <i class="bi bi-text-right fs-1 text-light"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {};
  },
  mounted() {
    let navItemList = document.querySelectorAll(".nav-link");
    document.querySelector(".nav-link.active").classList.remove("active");
    navItemList.forEach((e) => {
      if ("/" + e.dataset.path == this.$route.path) {
        e.classList.add("active");
        return;
      }
    });
    if (
      this.$route.path == "/carshare" ||
      this.$route.path == "/verfiyCarShare" ||
      this.$route.path == "/driver" ||
      this.$route.path == "/carwashBook" ||
      this.$route.path == "/carwash" ||
      this.$route.path == "/passenger"
    ) {
      document.querySelector(".services").classList.add("active");
    }
  },
  watch: {
    $route() {
      this.checkRouter();
    },
  },
  methods: {
    goprofile() {
      let navItemList = document.querySelectorAll(".nav-link");
      navItemList.forEach((e) => {
        e.addEventListener("click", () => {
          document.querySelector(".nav-link.active").classList.remove("active");
          e.classList.add("active");
          document.querySelector(".navbar-nav").classList.remove("active");
          if (this.$route.path !== "/" + e.dataset.path) {
            this.$router.push("/" + e.dataset.path);
          }
        });
      });
    },
    burger() {
      document.querySelector(".navbar-nav").classList.toggle("active");
    },
    checkRouter() {
      if (this.$route.path == "/") {
        document.querySelector(".nav-link.active").classList.remove("active");
        document.querySelector(".home").classList.add("active");
      }
    },
  },
  computed: {
    increasecar() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style>
.navbar {
  z-index: 999;
  background: var(--main-gredient);
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.navbar .navbar-nav {
  align-items: center;
}
.burger {
  background-color: transparent;
  border: none;
  display: none;
}
.navbar img.logo2 {
  height: 70px;
  width: 100px;
}
.nav-link {
  font-size: 20px;
  letter-spacing: 1.3px;
  position: relative;
  cursor: pointer;
}
.nav-link::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background-color: var(--maincolor);
  left: 50%;
  bottom: -2px;
  transform: translateX(-50%);
  transition: 0.3s;
}
.nav-link:hover::after {
  width: 50%;
}
.nav-link.active {
  color: var(--maincolor) !important;
}
@media (max-width: 991px) {
  .navbar-nav {
    position: absolute;
    top: 100px;
    left: 0px;
    height: calc(100vh - 100px);
    width: 100%;
    background-color: var(--secondcolor);
    align-items: center;
    justify-content: center;
    gap: 20px;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 600;
  }
  .navbar-nav.active {
    transform: translateX(0px);
  }
  .burger {
    display: block;
  }
  .navbar-nav .nav-link {
    width: fit-content;
    font-size: 24px;
  }
  .nav-link:hover::after {
    width: 100%;
  }
}

.nav-item .nav-link i {
  cursor: pointer;
}
</style>
