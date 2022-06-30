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
                <h4 class="fs-5">From:</h4>
                <div class="row">
                  <div class="col-md-4">
                    <label for="Continent" class="form-label">Continent</label>
                    <input
                      type="text"
                      readonly
                      placeholder="Middle East"
                      id="Continent"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="" class="form-label">Country</label>
                    <select
                      id="country"
                      v-model="trip.country"
                      @change="countryChange()"
                      class="form-control mb-3"
                    >
                      <option value="" selected disabled>
                        Select Your Start Country
                      </option>
                      <option
                        v-for="(countdata, i) in country"
                        :value="countdata"
                        :key="i"
                      >
                        {{ countdata }}
                      </option>
                    </select>
                  </div>

                  <div class="col-md-4">
                    <label for="" class="form-label">City</label>
                    <select
                      id="city"
                      v-model="trip.fromCity"
                      disabled
                      class="form-control mb-3"
                    >
                      <option value="" selected disabled>
                        Select Your Start City
                      </option>
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
              <!-- TO DIRECTION -->
              <div
                class="end-point shadow p-4 mb-5"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <div class="row">
                  <h4 class="fs-5">To:</h4>
                  <div class="col-md-4">
                    <label for="Continent" class="form-label">Continent</label>
                    <input
                      type="text"
                      readonly
                      placeholder="Middle East"
                      id="Continent"
                      class="form-control"
                    />
                  </div>

                  <div class="col-md-4">
                    <label for="" class="form-label">Country</label>

                    <select
                      id="tocountry"
                      v-model="trip.country"
                      @change="countryChange()"
                      class="form-control mb-3"
                    >
                      <option value="" selected disabled>
                        Select Your End Country
                      </option>
                      <option
                        v-for="(countdata, i) in country"
                        :value="countdata"
                        :key="i"
                      >
                        {{ countdata }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label for="" class="form-label">City</label>
                    <select
                      id="tocity"
                      v-model="trip.toCity"
                      disabled
                      class="form-control mb-3"
                    >
                      <option value="" selected disabled>
                        Select Your End City
                      </option>
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
                class="trip-info shadow p-4 mb-5"
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
                </div>
              </div>
              <!-- GENDER -->
            </div>
            <button
              class="btn mx-auto d-block px-4 py-2"
              @click="sumbitShare()"
              type="button"
            >
              Share Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trip: {
        country: "",
        fromCity: "",
        toCity: "",
        date: "2022-06-12T19:30",
        price: "",
      },
      country: [
        "Bahrain",
        "Iraq",
        "Jordan",
        "Kuwait",
        "Lebanon",
        "Oman",
        "Qatar",
        "Saudi Arabia",
        "Egypt",
        "Syria",
        "United Arab Emirates",
        "Yemen",
      ],
      cities: [],
      countries: Object(),
      city_states: Object(),
    };
  },
  mounted() {
    ////////////////////////////////////////////////////////////////////////////
    //Middle East

    this.city_states["Bahrain"] =
      "Manama|Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa wa al Mintaqah al Janubiyah|Jidd Hafs|Madinat Hamad|Madinat Isa|Juzur Hawar|Sitrah";
    this.city_states["Egypt"] =
      "Cairo|Ad Daqahliyah|Al Bahr al Ahmar|Al Buhayrah|Al Fayyum|Al Gharbiyah|Al Iskandariyah|Al Isma iliyah|Al Jizah|Al Minufiyah|Al Minya|Al Qahirah|Al Qalyubiyah|Al Wadi al Jadid|Ash Sharqiyah|As Suways|Aswan|Asyut|Bani Suwayf|Bur Said|Dumyat|Janub Sina|Kafr ash Shaykh|Matruh|Qina|Shamal Sina|Suhaj";
    this.city_states["Iran"] =
      "Tehran|Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohkiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Yazd|Zanjan";
    this.city_states["Iraq"] =
      "Baghdad|Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Tamim|Babil|Dahuk|Dhi Qar|Diyala|Karbala|Maysan|Ninawa|Salah ad Din|Wasit";
    this.city_states["Jordan"] =
      "Amman|Ajlun|Al Aqabah|Al Balqa|Al Karak|Al Mafraq|At Tafilah|Az Zarqa|Irbid|Jarash|Maan|Madaba";
    this.city_states["Kuwait"] =
      "Kuwait|Al Ahmadi|Al Farwaniyah|Al Asimah|Al Jahra|Hawalli";
    this.city_states["Lebanon"] =
      "Beirut|Beyrouth|Beqaa|Liban-Nord|Liban-Sud|Mont-Liban|Nabatiye";
    this.city_states["Oman"] =
      "Muscat|Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Musandam|Zufar";

    this.city_states["Qatar"] =
      "Doha|Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal";
    this.city_states["Saudi Arabia"] =
      "Riyadh|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|Asir|Hail|Jizan|Makkah|Najran|Tabuk";
    this.city_states["Syria"] =
      "Damascus|Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda|Dara|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus";

    this.city_states["United Arab Emirates"] =
      "Abu Dhabi|Abu Zaby (Abu Dhabi)|Ajman|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ras al Khaymah|Umm al Qaywayn";

    this.city_states["Yemen"] =
      "Sanaa|Abyan|Adan|Al Bayda|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadramawt|Hajjah|Ibb|Lahij|Marib|Sadah|Sana|Shabwah|Taizz";

    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
  },
  methods: {
    countryChange() {
      console.log("done")
        for (var prop1 in this.city_states) {
          if (this.trip.country === prop1) {
            document.getElementById("tocity").disabled = false;
            document.getElementById("city").disabled = false;

            this.cities = this.city_states[prop1].split("|");
          }
        }
      
    },

    sumbitShare() {
      console.log(this.trip);
    },
  },
};
</script>

<style>
.driver-form form .row > div {
  background-color: #fff;
}
.driver-form .form-control {
  border-radius: 5px !important;
  margin-bottom: 30px !important;
}
</style>
