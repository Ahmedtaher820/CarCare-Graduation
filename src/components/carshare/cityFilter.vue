<template>
  <div
    class="input-box d-flex my-4 align-items-md-center justify-content-between w-100 px-1 flex-column flex-md-row align-items-start"
  >
    <h4>Filtering Cities:</h4>
    <div
      class="d-flex gap2 align-items-md-center text-start gap-md-2 gap-0 flex-column flex-md-row"
    >
      <select v-model="search.startCity" @change="checkPoint">
        <option disabled selected>Select Your Start City</option>
        <option v-for="(city, index) in cities" :key="index" :value="city">
          {{ city }}
        </option>
      </select>
      <div class="my-1 m-md-0 d-flex justify-content-around">
        <span class="to-lgscreen">To</span>
        <span><i class="bi bi-arrow-down-circle-fill fs-2"></i></span>
        <span><i class="bi bi-arrow-down-circle-fill fs-2"></i></span>
      </div>
      <select v-model="search.endCity" @change="checkPoint">
        <option disabled selected>Select Your End City</option>
        <option v-for="(city, index) in cities" :key="index">
          {{ city }}
        </option>
      </select>
    </div>
    <div
      class="all-post p-2 text-light rounded-3 mt-3 mt-md-0"
      @click="allPost"
    >
      <span>All <i class="bi bi-list"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        startCity: "",
        endCity: "",
      },

      showBtn: false,
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
    };
  },
  methods: {
    checkPoint() {
      if (!this.search.startCity == "" && !this.search.endCity == "") {
        this.$store.dispatch("submitSearch", this.search);
      }
    },
    allPost() {
      this.search.startCity = "";
      this.search.endCity = "";
      this.$store.dispatch("allPosts");
    },
  },
};
</script>

<style scoped>
select {
  appearance: none;

  border-radius: 10px;
  background-color: var(--maincolor);
  border: none;
  padding: 8px 12px;
}
.select-selected {
  background-color: DodgerBlue;
}
select:focus {
  background-color: var(--maincolor);
  outline: none;
}
.all-post {
  background-color: var(--secondcolor);
  cursor: pointer;
}
.bi-arrow-down-circle-fill {
  display: none;
}

@media (max-width: 768px) {
  .bi-arrow-down-circle-fill {
    display: inline-block;
  }
  .to-lgscreen {
    display: none;
  }
}
</style>
