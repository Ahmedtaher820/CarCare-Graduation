<template>
  <div class="bigbox stepone active center-items flex-column gap-3">
    <h2 class="fs-1 steponeheading">Step-1</h2>
    <div class="step-1 step center-items bg-light shadow p-3">
      <i class="bi bi-geo-alt-fill fs-3"></i>
      <button class="btnstepone p-3 btn" @click="getlocation">
        If You Want To Complete With This Current Loaction Click Here
        <i class="bi bi-circle-fill fs-5"></i>
      </button>
      <div class="next-icon">
        <i class="bi bi-arrow-right-short fs-2" @click="gonext"></i>
      </div>
    </div>
    <div class="fomrmodal text-dark py-2 flex-column" v-if="showformstep1">
      <form class="p-lg-5 p-0">
        <h2 class="fs-md-1 fs-2 fw-bold text-center">
          Please Write Your Loaction Correctly
        </h2>
        <div class="row">
          <div class="col-lg-6">
            <div class="input-box">
              <label for="country" class="form-label fs-4">Country</label>
              <input
                type="text"
                class="form-control"
                id="country"
                placeholder="Enter Your Country"
                v-model="formstepone.country"
                
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-box">
              <label for="city" class="form-label fs-4">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="Enter Your City"
                v-model="formstepone.city"
                
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-box">
              <label for="street" class="form-label fs-4">Street</label>
              <input
                type="text"
                class="form-control"
                id="street"
                placeholder="Enter Your Street"
                v-model="formstepone.street"
                
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-box">
              <label for="locname" class="form-label fs-4">Location Name</label>
              <input
                type="text"
                class="form-control"
                id="locname"
                placeholder="Enter Your Location Name"
                v-model="formstepone.locname"
                
              />
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-6">
                <button
                  type="button"
                  class="submitadress mt-5 p-3 btn btn-success w-100"
                  @click="confirmform"
                >
                  Confirm Adress
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="canceladress w-100 mt-5 p-3 btn btn-danger"
                  @click="cancelform"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div
      class="err p-3 bg-danger position-absolute text-light"
      v-if="err.length > 0"
    >
      {{ err[0] }}
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      lat: null,
      long: null,
      err: [],
      formstepone: {
        country: "",
        city: "",
        street: "",
        locname: "",
      },
      showformstep1: false,
    };
  },
  methods: {
    getlocation() {
      this.err = [];
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
            swal({
              title: "Thank You",
              text: "Now You Can Go To Next Step By Click Next Button!",
              icon: "success",
              button: "Ok!",
            });
            this.$store.commit("userlatlong", {
              lat: this.lat,
              long: this.long,
            });
          },
          (error) => {
            this.err = error.message;
            this.showformstep1 = true;
          }
        );
      } else {
        swal({
          title: "Opps!",
          text: "Your Browser Not Support this feature!",
          icon: "error",
          button: "Ok!",
        });
      }
    },

    gonext() {
      let parent = document.querySelector(".stepone");
      let next = parent.nextElementSibling;
      if (this.checkcoords()) {
        this.changeslide(parent, next);
      } else {
        parent.style.animation = "moveOn .4s ease-in-out";
      }
    },
    checkcoords() {
      if (this.lat !== null) {
        this.changebackground("#fff");
        return true;
      } else {
        this.changebackground("rgb(189,87,87)");
      }
    },
    changeslide(parent, next) {
      parent.classList.add("noactive");
      parent.classList.remove("active");
      next.classList.add("active");
      next.classList.remove("noactive");
    },
    changebackground(color) {
      document.querySelector(".container-box").style.backgroundColor = color;
    },
    cancelform() {
      this.showformstep1 = false;
    },
    confirmform() {
      this.err = [];
      if (
        !this.formstepone.country ||
        !this.formstepone.city ||
        !this.formstepone.street ||
        !this.formstepone.locname
      ) {
        this.err.push("field must be completed");
      } else {
        this.$store.commit("userlocation", this.formstepone);
        let parent = document.querySelector(".stepone");
        let next = parent.nextElementSibling;
        this.changeslide(parent, next);
      }
    },
  },
};
</script>
<style>
.steponeheading {
  margin-top: 150px;
}
</style>
