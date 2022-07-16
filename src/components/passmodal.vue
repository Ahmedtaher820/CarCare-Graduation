<template>
  <div class="passmodal d-flex center-items flex-column">
    <div class="modalcontent px-3 py-5 position-relative">
      <div class="modalhead">
        <h4 class="fs-4 text-center my-3">Change Password</h4>
      </div>
      <div class="passform">
        <form class="text-start">
          <label for="passowrd" class="form-label">Current Password</label>
          <input
            id="passowrd"
            type="password"
            class="form-control"
            placeholder="Current Password"
            v-model="userpass.currentPassword"
          />
          <label for="passowrd" class="form-label">New Password</label>

          <input
            type="password"
            class="form-control"
            placeholder="New Password"
            v-model="userpass.newPassword"
          />
          <label for="passowrd" class="form-label">Confirm Password</label>

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
        <i
          class="bi bi-x-circle fs-4 position-absolute"
          @click="closemodal"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

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
          swal({
            title: "Good Job!",
            text: "Your Password Changed!",
            icon: "success",
            button: "Ok!",
          });
          this.closemodal();

          this.$router.push("/");
        })
        .catch((err) => {
          this.err.push(err.response.data.message);
        });
    },
    closemodal() {
      this.$emit("closemodal");
    },
  },
};
</script>

<style>
.passmodal {
  position: fixed;
  top: 0px;
  left: 0px;
  min-height: 100%;
  width: 100%;
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
@media (max-width: 768px) {
  .modalcontent {
    width: 100%;
  }
  .passmodal form {
    width: 90%;
  }
}
.passmodal form input {
  width: 100% !important;
  margin: 0px auto 20px;
}
.passmodal .bi-x-circle {
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
