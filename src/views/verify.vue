<template>
  <div class="verify min-h center-items">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 ms-0 ms-lg-2">
          <div class="verify-content">
            <img src="../assets/logo/logo.svg" class="mb-4" alt="" />
            <h3 class="fs-4 lh-base text-start">Enter Your Email</h3>
            <input
              class="text-secondary shadow-sm form-control"
              type="text"
              placeholder="john12@example.com"
              v-model="useremail.email"
            />
            <div class="err text-danger" v-if="this.error.length > 0">
              {{ this.error[0] }}
            </div>
            <button
              class="btn btn-main-bg mt-4 py-2 px-5 w-100"
              @click="emailverify"
            >
              Continue
            </button>
          </div>
        </div>
        <div class="d-none d-lg-block col-lg-5 carousel-box">
          <carousel />
        </div>
        <div class="resetmodal p-5 rounded-3">
          <form
            action=""
            class="bg-light p-5 position-relative"
            v-if="verifycode"
          >
            <h5 class="text-start mb-3 fs-5">Write Verify Code</h5>
            <input
              type="text"
              maxlength="6"
              placeholder="Write 6 Digit"
              class="form-control mb-2"
              v-model="code"
            />
            <input
              type="password"
              placeholder="New Password"
              class="form-control mb-2"
              v-model="newpass"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              class="form-control"
              v-model="confnewpass"
            />
            <button @click="submitpass" class="btn mt-3 w-block" type="button">
              Verify
            </button>
            <i
              class="bi bi-x-circle fs-5 position-absolute"
              @click="closemodel"
            ></i>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import axios from "axios";
export default {
  data() {
    return {
      useremail: {
        email: "",
      },
      error: [],
      code: "",
      verifycode: true,
      newpass: "",
      confnewpass: "",
    };
  },
  components: {
    carousel,
  },
  methods: {
    async emailverify() {
      await axios
        .post(
          "https://car-care3.herokuapp.com/api/users/forgetPassword",
          this.useremail
        )
        .then((resolve) => {
          console.log(resolve);
          document.querySelector(".resetmodal").classList.add("active");
        })
        .catch((err) => {
          this.error.push(err.response.data.message);
        });
    },
    async submitpass() {
      await axios
        .patch(
          `https://car-care3.herokuapp.com/api/users/restPassword/${this.code}`,
          {
            password: this.newpass,
            confirmPassword: this.confnewpass,
          }
        )
        .then((resolve) => {
          console.log(resolve);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    closemodel() {
      document.querySelector(".resetmodal").classList.remove("active");
    },
  },
};
</script>

<style scoped>
.resetmodal {
  background-color: rgba(0, 0, 0, 0.651);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
  transition: 0.7s;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.resetmodal.active {
  transform: translateY(0px);
  opacity: 1;
  pointer-events: auto;
}
.resetmodal form {
  width: 50%;
  border-radius: 15px;
}
.verify-content img {
  display:inline-block;
  width: 200px;
}
.resetmodal .bi-x-circle {
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.btn {
  border-radius: 15px !important;
}
</style>
