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
                  v-model="trip.age"
                />
              </div>
              <!-- <div class="col-md-6 mb-2">
                <label class="form-label">Your License(Front):</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="licensephotofront"
                  @change="licenceCheck"
                  accept="image/**"
                />
              </div> -->
              <!-- <div class="col-md-6 mb-2">
                <label class="form-label">Your License(Back):</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="licensephotoback"
                  @change="licenceCheck"
                  accept="image/**"
                />
              </div> -->
              <div class="col-md-6 mb-2">
                <label class="form-label">Car License(Front):</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="userlicensefront"
                  @change="licenceCheck($event.target.files)"
                  accept="image/**"
                />
              </div>
              <!-- <div class="col-md-6 mb-2">
                <label class="form-label">Car License(Back):</label>
                <input
                  type="file"
                  class="form-control"
                  data-type="userlicenseback"
                  @change="licenceCheck"
                />
              </div> -->

              <div class="mt-4">
                <button
                  class="btn verify-btn"
                  type="button"
                  @click="submitUserInfo"
                >
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
import axios from "axios";
export default {
  data() {
    return {
      isVerify: true,
      trip: {
        gender: "",
        age: "",
        // licensePhoto: null,
        licenseCarPhoto: null,
      },
      userToken: "",
    };
  },
  methods: {
    licenceCheck(e) {
      // let file = e.target.dataset.type;
      // if (file == "userlicensefront") {
      this.trip.licenseCarPhoto = e[0];
      // this.uploadImage(e[0]);
      // }
      // else if (file == "userlicenseback") {
      //   this.uploadImage("userlicenseback", e.target.files[0]);
      // }
      // else if (file == "licensephotofront") {
      //   this.uploadImage("licensephotofront", e.target.files[0]);
      // }
      // else if (file == "licensephotoback") {
      //   this.uploadImage("licensephotoback", e.target.files[0]);
      // }
    },
    // uploadImage(value) {
    //   let fd = new FormData();
    //   fd.append("img", value);
    // if (ele == "userlicensefront") {
    // this.trip.licenseCarPhoto=value;
    // console.log(this.trip.licenseCarPhoto)
    // }
    // else if (ele == "userlicenseback") {
    //   this.trip.licenseCarPhoto.push(fd);
    // }
    // else if (ele == "licensephotofront") {
    //   this.trip.licensePhoto=fd;
    // }
    //  else if (ele == "licensephotoback") {
    //   this.trip.licensePhoto.push(fd);
    // }
    //   console.log(this.trip);
    // },
    async submitUserInfo() {
      // this.$store.dispatch("submitCarshareUser", this.trip);
      let userToken = JSON.parse(localStorage.getItem("usertoken"));
      var formData = new FormData();
      formData.append("image", this.trip.licenseCarPhoto);
      console.log(formData)
      try {
        let repo = await axios.post(
          "https://car-care3.herokuapp.com/api/carSharingInfo/register",
          {
            gender: this.trip.gender,
            age: this.trip.age,
            licenseCarPhoto: formData,
          },
          {
            headers: { "x-auth-token": `${userToken}` },
          }
        );
        console.log(repo);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.userToken = JSON.parse(localStorage.getItem("usertoken"));
    try {
      let userVerify = await axios.post(
        "https://car-care3.herokuapp.com/api/carSharingPost/checkUser",
        {
          headers: {
            "x-auth-token": `${this.userToken}`,
          },
        }
      );
      console.log(userVerify);
    } catch (error) {
      console.log(error.message);
    }
    if (!this.isVerify) {
      this.$router.push("driver");
    }
  },
};
</script>

<style>
.verify-btn {
  background-color: var(--secondcolor) !important;
  color: var(--maincolor) !important;
}
</style>
