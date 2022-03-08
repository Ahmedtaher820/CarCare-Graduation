<template>
  <div class="bigbox steptwo noactive">
    <div class="fomrmodal center-items flex-column position-absolute">
      <form class="p-lg-5 p-3 text-dark">
        <h2 class="fs-md-1 fs-1 text-center">Step-2</h2>
        <h2 class="fs-md-1 fs-3 text-center mb-4">
          Please Enter Your Car Information
        </h2>
        <div class="row">
          <div class="col-12 mb-3">
            <h3 class="fs-4 mb-3">What kind of car do you drive?</h3>
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-2 mb-lg-0">
                <button
                  class="carkind p-2 fs-5"
                  type="button"
                  @click="cartype('truck')"
                >
                  Truck
                  <img src="../../assets/carwash/cars/box-truck.png" alt="" />
                </button>
              </div>
              <div class="col-lg-4 col-md-6 mb-2 mb-lg-0">
                <button
                  class="carkind p-2 active fs-5"
                  type="button"
                  @click="cartype('sedan')"
                >
                  Sedan
                  <img src="../../assets/carwash/cars/sedan.png" alt="" />
                </button>
              </div>
              <div class="col-lg-4 col-md-6 mb-2 mb-lg-0">
                <button
                  class="carkind p-2 fs-5"
                  type="button"
                  @click="cartype('suv')"
                >
                  SUV <img src="../../assets/carwash/cars/suv.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-box">
              <label for="make" class="form-label fs-4">Car Make</label>
              <input
                type="text"
                class="form-control fs-5"
                id="make"
                placeholder="Ford"
                v-model="car.make"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-box">
              <label for="street" class="form-label fs-4">Car Model</label>
              <input
                type="text"
                class="form-control fs-5"
                id="model"
                placeholder="Foucs"
                v-model="car.model"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-box">
              <label for="color" class="form-label fs-4">Color</label>
              <input
                type="text"
                class="form-control fs-5"
                id="color"
                placeholder="Black"
                v-model="car.color"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-6">
                <button
                  type="button"
                  class="submitadress mt-2 p-3 btn btn-success w-100"
                  @click="carform"
                >
                  Confirm Adress
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="canceladress w-100 mt-2 p-3 btn btn-danger"
                  @click="cancelform"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="err p-3 bg-danger position-absolute text-light"
          v-if="err.length > 0"
        >
          {{ err[0] }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: {
        type: "",
        make: "",
        model: "",
        color: "",
      },
      err: [],
    };
  },
  methods: {
    cartype(e) {
      this.car.type = e;
      let cartypes = document.querySelectorAll(".carkind");
      cartypes.forEach((e) => {
        e.addEventListener("click", () => {
          document.querySelector(".carkind.active").classList.remove("active");
          e.classList.add("active");
        });
      });
    },
    changeslide(parent, next) {
      parent.classList.add("noactive");
      parent.classList.remove("active");
      next.classList.add("active");
      next.classList.remove("noactive");
    },
    carform() {
      this.err = [];
      if (
        !this.car.type ||
        !this.car.make ||
        !this.car.model ||
        !this.car.color
      ) {
        this.err.push("field must be completed");
      } else {
        this.$store.commit("carinfo", this.car);
        var parent = document.querySelector(".steptwo ");
        var next = parent.nextElementSibling;
        this.changeslide(parent, next);
      }
    },
    cancelform(){
      this.$router.push("/")
    }
  },
};
</script>

<style>
.carkind {
  width: 100%;
  border: none;
  transition: 0.3s;
  border-radius: 10px;
}
.carkind.active {
  background-color: var(--maincolor);
  color: var(--secondcolor);
}
.steptwo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
