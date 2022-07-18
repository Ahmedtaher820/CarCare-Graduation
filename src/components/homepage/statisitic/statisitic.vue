<template>
  <div
    class="statistic-box text-light d-flex align-items-center "
    id="statistic"
  >
    <div class="container d-flex flex-column">
      <h2 class="pt-1 fs-1">Our Statistics</h2>
      <div class="row justify-content-between">
        <div class="col-md-4">
          <div class="stat-box d-flex flex-column bg-light mt-1 mt-md-4">
            <i class="bi bi-emoji-laughing-fill"></i>
            <h3 class="fs-md-1 fs-5 fw-bold" data-number="2050">2050</h3>
            <span>Happy Customer</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="stat-box d-flex flex-column bg-light mt-1 mt-md-4 ">
            <i class="bi bi-bag-check-fill"></i>
            <h3 class="fs-md-1 fs-5 fw-bold" data-number="3550">3350</h3>
            <span>Selles Operation</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="stat-box d-flex flex-column bg-light mt-1 mt-md-4 mb-2 mb-md-0">
            <i class="bi bi-person-hearts"></i>
            <h3 class="fs-md-1 fs-5 fw-bold" data-number="2980">2980</h3>
            <span>Visitor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.statistic-box {
  min-height: 480px;
  background: url("../../../assets/statistics/statistics.jpg") no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
}
.stat-box {
  border-radius: 25px;
  width: fit-content;
  margin: 0px auto;
  padding: 25px 50px;
  color: var(--secondcolor);
}
.stat-box i {
  font-size: 40px;
}
.stat-box h3 {
  font-size: 50px;
}
@media (max-width: 768px) {
  .stat-box{
    padding: 5px 15px;
    width: 140px;
  }
  .stat-box span{
    font-size: 13px;
  }
}
</style>
