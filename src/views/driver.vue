<template>
  <div class="driver-form">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="info-section px-4">
          <h2 class="fs-2 mt-5 text-center">DETALIS OF THE TRIP</h2>
          <form action="" class="mt-5 text-start mb-4">
            <div class="row">
              <div
                class="start-point shadow p-4 mb-5"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="100"
              >
                <h4 class="fs-5">Directions:</h4>
                <div class="row">
                  <div class="col-md-6">
                    <label for="" class="form-label">From</label>
                    <select
                      id="city"
                      v-model="trip.fromCity"
                      class="form-control mb-3"
                    >
                      <option value="" selected>Select Your Start City</option>
                      <option
                        v-for="(city, i) in cities"
                        :value="city"
                        :key="i"
                      >
                        {{ city }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="" class="form-label">To</label>
                    <select
                      id="tocity"
                      v-model="trip.toCity"
                      class="form-control mb-3"
                    >
                      <option value="" selected>Select Your End City</option>
                      <option
                        v-for="(city, i) in cities"
                        :value="city"
                        :key="i"
                      >
                        {{ city }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- TRIP -->
              <div
                class="trip-info shadow p-4 mb-3"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="100"
              >
                <div class="row">
                  <h4 class="fs-4 mb-3">Trip Information</h4>
                  <!-- Date -->
                  <div class="col-md-6">
                    <label class="form-label">Trip Date:</label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      v-model="trip.date"
                    />
                  </div>
                  <!-- trip price -->
                  <div class="col-md-6">
                    <label class="form-label">Trip Price:</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="trip.price"
                      placeholder="E.g 50$"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Number Of Passengers:</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="trip.number"
                      placeholder="2 Passenger"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Trip Description:</label>
                    <textarea
                      class="form-control"
                      placeholder="I Need Men Only"
                      v-model="trip.description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- GENDER -->
            </div>
            <err v-if="err != null" :err="err" />
            <button
              class="btn mx-auto d-block px-4 py-2 fs-4"
              @click="sumbitShare()"
              type="button"
            >
              Share Now
            </button>
          </form>
        </div>
      </div>
    </div>
    <loading v-if="showLoad" />
  </div>
</template>

<script>
import axios from "axios";
import loading from "../components/loading.vue";
import err from "../components/errorMsg.vue"
export default {
  components: {
    loading,err
  },
  data() {
    return {
      showLoad: false,
      trip: {
        fromCity: "",
        toCity: "",

        date: "",
        price: "",
        description: "",
        number: "",
      },
      cities: [
        "Cairo",
        "Giza",
        "Alexandria",
        "Shubra al Khaymah",
        "AlMansurah",
        "Halwan",
        "Al Maḩallah al Kubrá",
        "Port Said",
        "Suez",
        "Tanta",
        "Asyuţ",
        "Al Fayoum",
        "El Zaqaziq",
        "Ismailia",
        "Aswan",
        "Kafr ad Dawwar",
        "Damanhur",
        "Al Minya",
        "Damietta",
        "Luxor",
        "Qina",
        "Suhaj",
        "Bani Suwayf",
        "Shibin al Kawm",
        "AlArish",
        "Al Ghardaqah",
        "Banha",
        "Kafr ash Shaykh",
        "Disuq",
        "Bilbays",
        "Mallawi",
        "Idfu",
        "Mit Ghamr",
        "Munuf",
        "Jirja",
        "Akhmim",
        "Zifta",
        "Samalut",
        "Armant",
        "Maghaghah",
        "Bur Fouad",
        "Samannud",
        "AlKarnak",
        "Kafr Shukr",
        "BirAlAbd",
        "Shaykh Zuwayd",
        "Aswan",
        "Al Buhayrah",
        "AlWadi Aljadid",
        "Qina",
        "Dumyat",
      ],
      err:null
    };
  },
  methods: {
    async sumbitShare() {
      this.showLoad = true;
      try {
        let usertoken = JSON.parse(localStorage.getItem("usertoken"));
        await axios.post(
          "https://car-care3.herokuapp.com/api/carSharingPost/register",
          this.trip,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        )
        this.showLoad = false
        this.$router.push("/passenger")
      } catch (error) {
        this.err = error.response.data.message
        this.showLoad = false;
      }
    },
  },
};
</script>

<style>
.driver-form form .row > div {
  background-color: #ecede4;
}
.btn {
  color: #fff !important;
}
.driver-form .form-control {
  border-radius: 5px !important;
  margin-bottom: 30px !important;
}
</style>
