<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(info, index) in servicesImg"
          :key="index">
        <div
          class="serv d-flex center-items flex-column py-4 px-2 rounded-3 gap-2 mt-3"
        >
          <div class="serv-img">
            <img :src="require(`../assets/icons/${info.service}.png`)" alt="" />
          </div>
          <h4 class="fs-5">{{ info.content }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    servicesImg() {
      return this.$store.state.servicesImg;
    },
  },
};
</script>

<style>
.serv {
  background-color: #fff;
}
.serv-img {
  width: 64px;
}
.serv-img img {
  width: 100%;
}
</style>
