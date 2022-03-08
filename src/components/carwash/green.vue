<template>
  <div class="green py-5">
    <div class="green-img">
      <img src="../../assets/carwash/greenbg.png" alt="" />
    </div>
    <h2 class="fw-bold mb-5 mt-3">#SPIFFYGREEN</h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4" v-for="(info, i) in green" :key="i">
        <div class="green-box">
          <div class="g-box-img">
            <img
              :src="require(`../../assets/carwash/sections/${info.img}.png`)"
              alt=""
            />
          </div>
          <p class="mt-2 text-lowercase">{{ info.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      green: [
        {
          img: "1",
          content:
            "REQUIRES HALF THE WATER AS A TRADITIONAL CAR WASH AND 10% OF DIY",
        },
        {
          img: "2",
          content:
            "FEATURES PRODUCTS SAFE FOR THE ENVIRONMENT AND OUR CUSTOMERS",
        },
        {
          img: "3",
          content:
            "RECLAIMS 100% OF WATER AND SUPPLIES WITH PROPRIETARY WASH MATS",
        },
        {
          img: "4",
          content: "RECYCLES EVERY DROP OF OIL, OVER 50,000 GALLONS PER MONTH",
        },
        {
          img: "5",
          content: "REDUCES WASTE AND TRANSFORMS TIRES INTO POWER WITH PRTI®",
        },
        {
          img: "6",
          content:
            "DELIVERS ON-DEMAND ELECTRIC VEHICLE CHARGING WITH SPARKCHARGE",
        },
      ],
    };
  },
};
</script>

<style>
.green .green-img {
  width: 600px;
  margin: 0px auto;
}
.green-img img {
  width: 100%;
  text-transform: lowercase;
}
.green h2 {
  letter-spacing: 3.5px;
  font-size: 50px;
}
.g-box-img {
  width: 80px;
  margin: 0 auto;
}
.g-box-img img {
  width: 100%;
}
</style>
