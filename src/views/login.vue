<template>
  <div class="login high-z postion-relative min-h center-items">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5">
          <div class="login-heading text-center mx-auto mb-2">
            <!-- <img src="../assets/logo/logo2.png" alt="" /> -->
            <h2 class="fs-1">Welcome To Car Care</h2>
          </div>
          <form action="" class="w-75 mx-auto my-4">
            <input
              type="text"
              class="form-control mb-3 shadow-sm"
              required
              v-model="userinfo.email"
              placeholder="Email"
            />
            <input
              type="password"
              class="form-control mb-3 shadow-sm"
              required
              v-model="userinfo.password"
              placeholder="Password"
            />
            <div class="error text-danger mt-2 fs-5">
              {{ err }}
            </div>
            <p class="text-secondary text-center text-lg-start mt-4">
              Forget Email Or Password ?
              <router-link class="text-secondary" :to="{ path: '/verify' }"
                >Reset Password</router-link
              >
            </p>
            <div
              class="login-box d-flex justify-content-md-between align-items-center flex-column flex-md-row"
            >
              <div class="form-check mb-3 mb-lg-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember Me
                </label>
              </div>
              <button
                type="button"
                class="btn me-0"
                @click="loginuser"
              >
                LOGIN
              </button>
            </div>
            <router-link
              class="mt-3 d-block text-secondary text-center text-lg-start"
              :to="{ path: '/signin' }"
              >Not A Member Yet ? Sign Up</router-link
            >
          </form>
        </div>
        <div class="d-none d-lg-block col-lg-5 carousel-box">
          <Carousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../components/carousel.vue";
import Carousel from "../components/carousel.vue";
export default {
  data() {
    return {
      userinfo: {
        email: "",
        password: "",
      },
      err: "",
    };
  },
  methods: {
    async loginuser() {
      await axios
        .post(
          `https://car-care3.herokuapp.com/api/users/loginUser`,
          this.userinfo
        )
        .then((resolve) => {
          localStorage.setItem(
            "user-info",
            JSON.stringify(resolve.data.user._id)
          );
          localStorage.setItem("usertoken", JSON.stringify(resolve.data.token));
          this.$router.push({
            path: "/",
            params: { token: resolve.data.token },
          });
          location.reload();
          console.log(resolve.data.token);
        })
        .catch((e) => {
          if (e.response.data.error) {
            this.err = e.response.data.error;
          } else {
            this.err = e.response.data.message;
          }
        });
    },
  },
  components: {
    Carousel,
  },
  async created() {
    if (localStorage.getItem("usertoken")) {
      this.$router.push({ path: "/" });
      location.reload();
    }
    await axios
      .get("https://car-care3.herokuapp.com/api/users/5555/getUsers")
      .then((resolve) => {
        console.log(resolve.data.user);
      });
  },
};
</script>

<style scoped>
form .btn{
  color: #fff;
}
form .btn:hover {
  background-color: var(--thirdcolor);
  color: #fff;
}
.login label {
  color: var(--main-text);
}
.form-control {
  border: none;
}
.form-control:focus {
  border: none !important;
  box-shadow: 0px -4px 6px -5px rgb(0 0 0 / 50%) !important;
}
.login form .btn {
  width: fit-content !important;
  padding: 10px 35px;
}

</style>
