<template>
  <div class="passenger">
    <div
      @click="create()"
      class="createPost center-items position-fixed"
      title="Create Post"
    >
      <i class="bi bi-plus fs-2"></i>
    </div>
    <div class="recentPost">
      <h3>Recent</h3>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="passenger-boxes" >
      <div class="input-box d-flex my-4 gap-2 align-items-center">
        <input type="text" class="form-control" placeholder="Start Point" />
        <span>To</span>
        <input type="text" class="form-control" placeholder="End Point" />
      </div>
      <div
        class="passenger-box p-4 shadow-sm"
        v-for="(post, index) in passengerPost"
        :key="index"
      >
        <div class="header d-flex gap-5 border-bottom pb-4">
          <div
            class="header-date me-0 me-md-5 pe-4 d-flex flex-column gap-3 justify-content-center align-items-center"
          >
            <span class="text-secondary">Monday</span>
            <span>11:00 am</span>
          </div>
          <div class="header-dest-point d-flex flex-column gap-2 ms-0 ms-md-5">
            <div class="level yellow">
              <span class="point-sty yellow"></span>
            </div>
            <div class="dest-point mt-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="mb-0"></span>
            </div>
            <div class="level blue">
              <span class="point-sty"></span>
            </div>
          </div>
          <div class="header-dest-city">
            <p>{{ post.fromCity }}</p>
            <p>{{ post.toCity }}</p>
          </div>
        </div>
        <div class="post-body pt-3">
          <div class="post-user-info d-flex gap-5 align-items-center">
            <div class="user-info d-flex gap-2">
              <img
                :src="require(`../assets/carshare/${post.img}.jpg`)"
                alt=""
                class="user-img"
              />
              <div
                class="user-content d-flex flex-column justify-content-center text-start"
              >
                <p class="mb-0 fw-bold fs-6 text-secondary">Ahmed</p>
              </div>
            </div>
            <div class="info">
              <p class="mb-0">
                <span class="fw-bold text-secondary">( {{ post.gender }}</span>
                - <span class="fw-bold text-secondary">25 )</span>
              </p>
            </div>
          </div>
          <div class="post-footer d-flex justify-content-between mt-4">
            <div class="bg-muted rounded-3 shadow-sm px-md-5 p-1">
              <i class="bi bi-calendar"></i>
              <span class="ms-2">2021-12-30</span>
            </div>
            <div class="bg-muted rounded-3 shadow-sm px-md-5 p-1">
              <i class="bi bi-person-circle"></i>
              <span class="ms-2">3 Person</span>
            </div>
            <div class="bg-muted rounded-3 shadow-sm px-md-5 p-1">
              <i class="bi bi-coin"></i>
              <span class="ms-2">50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../global/Carshare/carShare.css"
export default {
  data() {
    return {
      passengerPost: [
        {
          img: "user",
          country: "Egypt",
          fromCity: "Cairo",
          toCity: "BaniSuif",
          description: "Need Man with me not Woman",
          gender: "Male",
          tripPrice: "50$",
          triptDate: "18/5/2022 1:30:00",
          carImg: "carImg",
        },
        {
          img: "user",
          country: "Egypt",
          fromCity: "Cairo",
          toCity: "BaniSuif",
          description: "Need Man with me not Woman",
          gender: "Male",
          tripPrice: "50$",
          triptDate: "18/5/2022 1:30:00",
          carImg: "carImg",
        },
        {
          img: "user",
          country: "Egypt",
          fromCity: "Cairo",
          toCity: "BaniSuif",
          description: "Need Man with me not Woman",
          gender: "Male",
          tripPrice: "50$",
          triptDate: "18/5/2022 1:30:00",
          carImg: "carImg",
        },
      ],
    };
  },
  methods: {
    showOption() {
      document.querySelectorAll(".option-edit").forEach((option) => {
        option.addEventListener("click", () => {
          document.querySelectorAll(".options-edit").forEach((optionedit) => {
            optionedit.classList.remove("active");
          });
          option.nextElementSibling.classList.toggle("active");
        });
      });
    },
    create() {
      this.$router.push("/verfiyCarShare");
    },
    recentPosition() {
      console.log("done");
    },
  },
  mounted() {
    // console.log(new Date().getHours());
    // console.log(new Date().getMinutes());
  },
  created(){
    // window.addEventListener("scroll",()=>{
    //   console.log("done")
    // })
  }
};
</script>

<style>
</style>
