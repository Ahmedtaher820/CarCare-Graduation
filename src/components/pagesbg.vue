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
  background: var(--maincolor);
  color: var(--secondcolor);
}
.page-box-title .title {
  font-size: 80px;
}
@media (max-width: 991px) {
  .page-box-title .title {
    font-size: 50px;
  }
}
</style>
