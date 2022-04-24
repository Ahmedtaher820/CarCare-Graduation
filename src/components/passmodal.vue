<template>
  <div
    class="passmodal position-fixed top-0 left-0 w-100 h-100 center-items flex-column"
  >
    <div class="modalcontent px-3 py-5 position-relative">
      <div class="modalhead">
        <h4 class="fs-4 text-center mt-3">Change Password</h4>
      </div>
      <div class="passform">
        <form>
          <input
            type="password"
            class="form-control"
            placeholder="Current Password"
            v-model="userpass.currentPassword"
          />
          <input
            type="password"
            class="form-control"
            placeholder="New Password"
            v-model="userpass.newPassword"
          />
          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            v-model="userpass.confirmPassword"
          />
          <div class="err mb-3 text-danger" v-show="err.length > 0">
            {{ this.err[0] }}
          </div>
          <button type="button" class="btn me-auto d-block" @click="changepass">
            Change Password
          </button>
        </form>
        <i class="bi bi-x-circle fs-4 position-absolute" @click="closemodal"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["token"],
  data() {
    return {
      userpass: {
        currentPassword: null,
        newPassword: null,
        confirmpass: null,
      },
      err: [],
    };
  },
  methods: {
    async changepass() {
      this.err = [];
      await axios
        .patch(
          "https://car-care3.herokuapp.com/api/users/updatePassword",
          this.userpass,
          {
            headers: {
              "x-auth-token": `${this.token}`,
            },
          }
        )
        .then((resolve) => {
          console.log(resolve);
          this.closemodal()
          this.$router.push("/")
        })
        .catch((err) => {
          this.err.push(err.response.data.message);
        });
    },
    closemodal(){
        this.$emit("closemodal")
    }
  },
};
</script>

<style>
.passmodal {
  background-color: rgba(0, 0, 0, 0.3);
}
.modalcontent {
  width: 60%;
  background-color: #fff !important;
  margin: 0px auto;
  border-radius: 15px;
}
.passmodal form {
  width: 60%;
  margin: 0 auto;
}
.passmodal form input {
  width: 100% !important;
  margin: 20px auto;
}
.passmodal .bi-x-circle {
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
