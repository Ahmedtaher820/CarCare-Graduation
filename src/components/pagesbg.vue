<template>
  <div class="page-box-title center-items">
    <h2
      class="title"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.page-box-title {
  min-height: 350px;
  background: linear-gradient(45deg, rgba(51, 51, 51, 0.418), #333),
    url("../assets/pagesbox/bg.jpg") no-repeat center;
  background-size: cover;
}
.page-box-title .title {
  font-size: 80px;
  color: var(--maincolor);
}
@media (max-width: 991px) {
  .page-box-title .title {
    font-size: 50px;
  }
}
</style>
