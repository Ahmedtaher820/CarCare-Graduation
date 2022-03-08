<template>
  <div class="bigbox noactive stepfour fullwidthheight center-items flex-column">
    <div class="container">
      <h2 class="fs-1 fw-bold mt-5">Step Four</h2>
      <h3 class="fs-3 mb-3">Personal Information</h3>
      <form action="" class="p-5 border">
        <div class="row text-start">
          <div class="col-md-6">
            <div class="inputgroup mb-3">
              <label for="valid1" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                id="valid1"
                v-model="personal.firstname"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="inputgroup mb-3">
              <label for="valid2" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                id="valid2"
                v-model="personal.lastname"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="inputgroup mb-3">
              <label for="valid3" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="example@gmail.com"
                id="valid3"
                v-model="personal.email"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="inputgroup mb-3">
              <label for="valid4" class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="Phone"
                id="valid4"
                v-model="personal.phone"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="inputgroup mb-3">
              <label for="valid5" class="form-label">ID</label>
              <input
                type="text"
                class="form-control"
                placeholder="ID"
                id="valid5"
                v-model="personal.id"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="inputgroup coupon mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Add Coupon Code"
                v-model="personal.coupon"
              />
              <div class="coupon-icon">
                <i class="bi bi-plus fs-4" @click="couponfun"></i>
              </div>
            </div>
            <span v-if="err.length > 0" class="text-danger mb-3 d-inline-block">{{ err }}</span>
          </div>
          <div class="col-md-6">
            <button class="btn confirmbtninfo w-100 py-2" type="button" @click="confirmform">
              Confirm
            </button>
          </div>
          <div class="col-md-6">
            <button
              class="btn cancelbtninfo w-100 py-2"
              type="button"
              @click="cancelform"
            >
              Cancel
            </button>
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
      personal: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        id: "",
        coupon: null,
      },
      err: [],
    };
  },
  methods: {
    couponfun() {
      this.err = [];
      if (this.personal.coupon == "abcd123" ||
        this.personal.coupon == "taher123") {
        this.err.push("DONE!");
      } 
      else {
        this.err.push("Coupon does not exist!");
      }
    },
    confirmform(){
      this.err = [];
      if (
        !this.personal.firstname ||
        !this.personal.lastname ||
        !this.personal.email ||
        !this.personal.phone ||
        !this.personal.id 
      ) {
        this.err.push("field must be completed");
      } else {
        this.$store.commit("personalinfo", this.personal);
        var parent = document.querySelector(".stepfour ");
        var next = parent.nextElementSibling;
        this.changeslide(parent, next);
      }
    },
    changeslide(parent,next){
      parent.classList.add("noactive");
      parent.classList.remove("active");
      next.classList.add("active");
      next.classList.remove("noactive");
    },
    cancelform(){
      this.$router.push("/")
    }
  },
};
</script>

<style>
.coupon {
  display: flex !important;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 15px;
  margin-top: 30px;
}
@media (max-width: 768px) {
  .coupon {
    width: 80%;
    margin-left: 10%;
  }
}
.coupon input {
  border: none;
  border-radius: 0px !important;
  border-right: 1px solid #ced4da;
}
.coupon input:focus {
  border: none !important;
}
.coupon-icon {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid var(--maincolor);
  border-radius: 50%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
.coupon i {
  cursor: pointer;
}
</style>
