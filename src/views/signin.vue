<template>
  <div class="signin position-relative high-z">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="sign-heading text-center mx-auto mt-5 mb-3">
            <img src="../assets/logo/logo.svg" alt="" />
            <h2 class="fs-2">Create a new account</h2>
          </div>
          <form class="text-start">
            <div class="row">
              <div class="mb-1 col-12 col-lg-6">
                <label
                  for="validationCustom01"
                  class="form-label mb-2 mb-lg-0 fs-5"
                  >Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  required
                  v-model="userdata.name"
                />
              </div>
              <div class="mb-1 col-12 col-lg-6">
                <label
                  for="validationCustom02"
                  class="form-label mb-2 mb-lg-0 fs-5"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="validationCustom02"
                  required
                  v-model="userdata.email"
                />
              </div>
              <div class="mb-1 col-12 col-lg-6">
                <label
                  for="validationCustom03"
                  class="form-label mb-2 mb-lg-0 fs-5"
                  >Phone</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                  v-model="userdata.phone"
                />
              </div>
              <div class="mb-1 col-12 col-lg-6 position-relative">
                <label
                  for="validationCustom05"
                  class="form-label mb-2 mb-lg-0 fs-5"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control pass-input"
                  id="validationCustom05"
                  required
                  v-model="userdata.password"
                />
                <i
                  class="bi bi-eye position-absolute eye fs-5"
                  v-if="eyeopen"
                  @click="eyeopenfun($event)"
                ></i>
                <i
                  class="bi bi-eye-slash position-absolute eye fs-5"
                  v-if="!eyeopen"
                  @click="eyeopenfun($event)"
                ></i>
              </div>
              <div class="mb-1 col-12 col-lg-6 position-relative">
                <label
                  for="validationCustom06"
                  class="form-label mb-2 mb-lg-0 fs-5"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="validationCustom06"
                  required
                  v-model="userdata.confirmPassword"
                />
                <i
                  class="bi bi-eye position-absolute eye fs-5"
                  v-if="eyeopen2"
                  @click="eyeopenfun($event)"
                ></i>
                <i
                  class="bi bi-eye-slash position-absolute eye fs-5"
                  v-if="!eyeopen2"
                  @click="eyeopenfun($event)"
                ></i>
              </div>
              <div class="mb-1 col-12 col-lg-6">
                <label
                  for="validationCustom07"
                  class="form-label mb-2 mb-lg-0 fs-5"
                  >Job</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom07"
                  required
                  v-model="userdata.job"
                />
              </div>

              <div class="btn-register">
                <div class="error text-danger mt-2 fs-5">
                  {{ err }}
                </div>
                <button
                  type="button"
                  class="btn col-12 text-light py-2 my-3 w-50"
                  @click="signin"
                  to="/verify"
                >
                  Create your account
                </button>
                <router-link
                  :to="{ path: '/login' }"
                  class="text-secondary text-decoration-none mt-1 fs-5 d-block"
                  >Alraedy Have An Account?<span
                    class="text-decoration-underline"
                    >Login</span
                  ></router-link
                >
              </div>
            </div>
          </form>
        </div>
        <div class="d-none d-lg-block col-lg-5 carousel-box">
          <carousel></carousel>
        </div>
      </div>
    </div>
    <loading v-if="show" />
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import loading from "../components/loading.vue";

import axios from "axios";
export default {
  props: ["deriver"],
  data() {
    return {
      show: false,
      eyeopen: true,
      eyeopen2:true,
      driverinput: false,
      userdata: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        job: "",
      },
      err: "",
    };
  },
  components: {
    carousel,
    loading,
  },
  methods: {
    eyeopenfun(event) {
      var passinput = event.target.previousElementSibling;
      if (passinput.getAttribute("type") === "password") {
        this.eyeopen = false;
        passinput.setAttribute("type", "text");
      } else {
        this.eyeopen = true;
        passinput.setAttribute("type", "password");
      }
    },
    async signin() {
      this.show = true;
      this.err = "";
      await axios
        .post(
          "https://car-care3.herokuapp.com/api/users/signUser",
          this.userdata
        )
        .then(() => {
          setTimeout(() => {
            this.show = false;
          }, 750);
          this.$router.push({ path: "/login" });
        })
        .catch((e) => {
          setTimeout(() => {
            this.show = false;
          }, 750);
          if (e.response.data.message.search("confirmPassword") > 0) {
            return (this.err = ' "Password" are not matching');
          } else {
            return (this.err = e.response.data.message);
          }
        });
    },
    closemodal() {
      this.showmodal = false;
    },
  },
  created() {
    if (localStorage.getItem("usertoken")) {
      this.$router.push({ path: "/" });
      location.reload();
    }
  },
};
</script>

<style>
.signin {
  min-height: 100vh;
}
.signin .row > * {
  padding-left: 0px !important ;
}
.sign-heading img {
  width: 150px;
  margin-bottom: 25px;
}
@media (max-width: 991px) {
  .sign-heading img {
    width: 150px;
  }
  .signin .row > * {
    padding-left: 12px !important ;
  }
}
.form-control {
  border-radius: 8px !important;
  padding: 12px 16px !important;
  border-radius: 15px !important;
}
.signin form label {
  color: var(--main-color);
}
@media (max-width: 991px) {
  .form-label,
  .form-control,
  form .btn {
    width: 80% !important;
    margin-left: 10%;
  }
}
form .btn {
  background-color: var(--secondcolor);
  color: var(--maincolor);
}
form .btn:hover {
  background-color: var(--thirdcolor);
  color: var(--secondcolor);
}
.form-control:focus {
  border: 1px solid var(--maincolor) !important;
}
.eye {
  bottom: 12%;
  right: 8%;
  cursor: pointer;
}
@media (max-width: 991px) {
  .modal-link {
    margin-left: 72px;
  }
  .eye {
    right: 15%;
  }
}
</style>
