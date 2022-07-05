<template>
  <div class="how-work py-5 my-3">
    <h2 class="fs-1 fw-bold mb-5">How It Wok</h2>
    <div class="row">
      <div class="col-md-4" v-for="(info, index) in steps" :key="index">
        <div class="work-box">
          <div class="work-img">
            <img
              :src="require(`../../assets/carwash/contact/${info.num}.png`)"
              alt=""
            />
          </div>
          <strong>STEP #{{ info.num }}</strong>
          <p class="mt-3">
            {{ info.paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          num: "1",
          paragraph: "Using the Website phone, or our App",
        },
        {
          num: "2",
          paragraph:
            "We come to you with power and water & all we need is your keys",
        },
        {
          num: "3",
          paragraph: "Digitally track, rate, and pay for each service",
        },
      ],
    };
  },
};
</script>

<style>
.work-img {
  width: 150px;
  margin: 0px auto;
}
.work-img img {
  width: 100%;
}
.work-box p {
  font-size: 20px;
  line-height: 2;
}
</style>
