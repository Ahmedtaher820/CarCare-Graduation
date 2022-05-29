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
    window.addEventListener("scroll",()=>{
      console.log("done")
    })
  }
};
</script>

<style>
.passenger {
  min-height: 100vh;
}
.passenger-boxes {
  position: absolute;
  left: 35%;
  width: 60%;
}
.recentPost {
  position: fixed;
  top: 100px;
  left: 0px;
  width: 30%;
  height: 100vh;
  overflow-y: scroll;
  border-right: 2px solid #ddd;
}
.recentPost > div {
  height: 50vh;
}
.passenger-boxes .input-box {
  width: fit-content;
}
@media (max-width: 768px) {
  .recentPost {
    display: none;
  }
  .passenger-boxes {
    left: 10%;
    width: 80%;
  }
}
.passenger-box {
  margin: 0px auto 30px;
  background-color: #fff;
  padding: 20px;
}
.user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  padding: 3px;
  background-color: rgb(242, 199, 10);
}
.option-edit {
  width: 30px;
  height: 30px;
  background-color: #333;
  cursor: pointer;
  border-radius: 50%;
}
.options-edit {
  top: 40px;
  left: -70px;
  background-color: var(--secondcolor);
  border-radius: 10px;
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition: 0.3s;
}
.options-edit.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0%);
}
.options-edit li a {
  color: var(--maincolor);
}
.post-body p {
  font-size: 14px;
}
.header-dest-point .level {
  width: 20px;
  position: relative;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
}
.header-dest-point .level.yellow {
  background-color: rgb(242, 199, 10);
}
.header-dest-point .level.blue {
  background-color: rgb(82 149 237);
}
.header-dest-point .point-sty {
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  display: inline-block;
  padding: 10px;
  border: 1px solid #333;
  position: relative;
  top: -10px;
  left: -10px;
}
.header-dest-point .dest-point span {
  width: 4px;
  height: 4px;
  background-color: #444;
  display: block;
  margin-bottom: 3px;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header-date {
  border-right: 2px solid var(--secondcolor);
}
.header-dest-city {
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.header-dest-city p:nth-child(2) {
  margin-top: 30px;
}
.post-footer > div {
  background-color: #f1f1f1;
}
.post-footer > div span {
  font-size: 14px;
}
.createPost {
  width: 40px;
  height: 40px;
  background-color: var(--maincolor);
  color: var(--secondcolor);
  border-radius: 50%;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.createPost:hover {
  background-color: var(--secondcolor);
  color: var(--maincolor);
}
</style>
