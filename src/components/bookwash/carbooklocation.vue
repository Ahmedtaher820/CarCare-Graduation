<template>
  <div class="car-type p-md-4 shadow mb-3 mt-4 p-0 text-md-start text-center">
    <h4 class="fs-4 fw-bold mb-3">Where will your car be washed?</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="addrs-input mb-2">
          <label for="address" class="form-label"
            >Street Address (option)</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Address"
            id="address"
            @input="loactionNone"
            v-model="userLocationWrite.street"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="addrs-input mb-2">
          <label for="city" class="form-label">City (option)</label>
          <input
            type="text"
            class="form-control"
            placeholder="City"
            id="city"
            v-model="userLocationWrite.city"
            @input="loactionNone"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="addrs-input mb-2">
          <label for="Country" class="form-label">Country (option)</label>
          <input
            type="text"
            class="form-control"
            placeholder="Country"
            id="Country"
            v-model="userLocationWrite.country"
            @input="loactionNone"
          />
        </div>
      </div>
    </div>
    <b class="d-block my-3">OR</b>
    <button class="btn border curr-loc" @click="currentLocation">
      Current Location <i class="bi bi-geo-alt-fill"></i>
    </button>
    <span class="input-check-err text-danger mt-2 d-inline-block"></span>
    <div
      class="err p-1 mt-0 text-danger rounded-3"
      style="width: fit-content"
      v-if="err.length > 0"
    >
      {{ err[0] }}
    </div>
    <div v-if="showmark" class="d-inline-block ms-2">
      <i class="bi bi-check2 text-success fs-3"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLocationWrite: {
        street: "",
        city: "",
        country: "",
      },
      userLatLong: {
        lat: "",
        long: "",
      },
      showmark: false,
      err: [],
    };
  },
  methods: {
    loactionNone(e) {
      if (e.target.value.length > 0) {
        document.querySelector(".curr-loc").classList.add("disabled");
      } else {
        document.querySelector(".curr-loc").classList.remove("disabled");
      }
    },

    currentLocation() {
      this.err = [];
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.userLatLong.lat = position.coords.latitude;
            this.userLatLong.long = position.coords.longitude;
            this.showmark = true;
            document.querySelectorAll(".addrs-input input").forEach((e) => {
              e.classList.add("disabled");
            });
            this.$store.commit("userlatlong", this.userLatLong);
          },
          (error) => {
            this.err.push(error.message);
            this.showmark = false;
          }
        );
      } else {
        console.log("your browser not support this featured");
      }
    },
    
  },
};
</script>

<style>
input.disabled {
  pointer-events: none;
  opacity: 0.5;
}
.btn.curr-loc {
  color: var(--secondcolor) !important;
}
</style>
