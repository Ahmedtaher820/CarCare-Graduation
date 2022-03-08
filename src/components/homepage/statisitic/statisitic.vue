<template>
  <div class="statistic-box text-light" id="statistic">
    <div class="container">
      <h2 class="pt-4 fs-1">Our Statistics</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="stat-box d-flex flex-column text-dark bg-light mt-4">
            <i class="bi bi-emoji-laughing-fill"></i>
            <h3 class="fs-1 fw-bold" data-number="2050">2050</h3>
            <span>Happy Customer</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="stat-box d-flex flex-column text-dark bg-light mt-4">
            <i class="bi bi-bag-check-fill"></i>
            <h3 class="fs-1 fw-bold" data-number="3550">3350</h3>
            <span>Selles Operation</span>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="stat-box d-flex flex-column text-dark bg-light mt-4 mb-2 mb-md-0"
          >
            <i class="bi bi-person-hearts"></i>
            <h3 class="fs-1 fw-bold" data-number="2980">2980</h3>
            <span>Visitor</span>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  // created() {
  //   window.addEventListener("scroll", this.increasenum());
  // },
  // methods: {
  //   increasenum() {
  //     var flag = true;
  //     var websiteheight = window.innerHeight;
  //     var listnumber = document.querySelectorAll(".stat-box h3");
  //     var outstats = document.querySelector(".statistic-box");
  //     var outstatheight = outstats.getBoundingClientRect().top;
  //     if (websiteheight / 1.5 > outstatheight) {
  //       if (flag) {
  //         flag = false;
  //         listnumber.forEach((e) => {
  //           this.countnumber(e);
  //         });
  //       }
  //     }
  //   },
  //   countnumber(e) {
  //     var num = e.dataset.number;
  //     var count = 0;
  //     var counter = setInterval(() => {
  //       e.textContent = count++;
  //       if (e.textContent == num) {
  //         clearInterval(counter);
  //       }
  //     }, 5000 / num);
  //   },
  // },
};
</script>

<style>
.statistic-box {
  min-height: 350px;
  background: url("../../../assets/statistics/statistics.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 40% 50%;
  position: relative;
  z-index: 1;
}
.stat-box {
  border-radius: 25px;
  width: fit-content;
  margin: 0px auto;
  padding: 25px 50px;
}
.stat-box i {
  font-size: 40px;
}
.stat-box h3 {
  font-size: 50px;
}
</style>
