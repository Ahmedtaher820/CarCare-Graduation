<template>
  <div class="carShareVerify text-start my-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div
            class="user-info px-5 py-4 shadow"
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-delay="100"
          >
            <h4 class="fs-4 mb-3">User information</h4>
            <div class="row">
              <div class="col-md-6 mb-2">
                <label class="form-label">Your Gender:</label>
                <select v-model="trip.gender" class="form-control">
                  <option value="" disabled selected>Select Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="col-md-6 mb-2">
                <label class="form-label" for="age">Age:</label>
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  placeholder="Age"
                />
              </div>
              <div class="col-md-6 mb-2">
                <label class="form-label">Your Photo:</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="userPicture"
                  @change="licenceCheck"
                />
              </div>
              <div class="col-md-6 mb-2">
                <label class="form-label">Your License:</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="userlicense"
                  @change="licenceCheck"
                />
              </div>
              <div class="col-md-6 mb-2">
                <label class="form-label">Car License:</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="carlicense"
                  @change="licenceCheck"
                />
              </div>

              <div class="mt-4">
                <button class="btn verify-btn" type="button">
                  Verifed Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVerify:false,
      trip: {
        userlicense: "",
        carlicense: "",
        userPicture: "",
        carPictures: null,
      },
    };
  },
  methods: {
    licenceCheck(e) {
      let file = e.target.dataset.type;
      console.log(e.target.files[0]);
      if (file == "userlicense") {
        this.uploadImage("userlicense", e.target.files[0]);
      } else if (file == "carlicense") {
        this.uploadImage("carlicense", e.target.files[0]);
      } else {
        this.uploadImage("userPicture", e.target.files[0]);
      }
    },
    uploadImage(ele, value) {
      console.log(ele);
      let fd = new FormData();
      fd.append("img", value, value.name);
      if (ele == "userlicense") {
        this.trip.userlicense = fd;
      } else if (ele == "carlicense") {
        this.trip.carlicense = fd;
      } else if (ele == "userPicture") {
        this.trip.userPicture = fd;
      }
    },
  },
  created(){
    // axios.get("URL",{
    //   Headers:{
    //     "auth-token":"auth-token"
    //   }
    // }).then((resolve)=>{
    //     this.isVerify = resolve.data.user.isVerify
    // })
    
    if (!this.isVerify){
      this.$router.push("/driver")
    }
  }
};
</script>

<style>
.verify-btn {
  background-color: var(--secondcolor) !important;
  color: var(--maincolor) !important;
}
</style>
