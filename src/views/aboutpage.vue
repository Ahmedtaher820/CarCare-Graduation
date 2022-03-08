<template>
  <div class="about-us">
    <pagebg :title="title" />
    <div class="provide my-5 text-start">
      <div class="container">
        <h2 class="fs-2 mb-3 text-center mb-5">
          We Provide Variety Of High-End <br />
          Auto Customiztions
        </h2>
        <div class="row">
          <div class="col-lg-4" v-for="(info, i) in boxinfo" :key="i">
            <div class="service-box d-flex gap-3">
              <div class="service-img mb-3 mb-lg-0">
                <img
                  :src="require(`../assets/about/${info.imagename}.png`)"
                  alt=""
                />
              </div>
              <div class="service-content">
                <h3 class="fs-5">{{ info.title }}</h3>
                <p>{{ info.paragraph }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="call mx-auto py-2 px-4 mt-4 position-relative mainhover">
          <i class="bi bi-telephone"></i> Call Us Today
          <a href="tel:01008203698" class="text-light ms-2">01008203698</a>
        </div>
      </div>
    </div>
    <div class="stats pt-5">
      <stats />
    </div>
    <div class="special-serv py-5 my-5">
      <div class="special-box center-items flex-column p-5">
        <h2 class="fs-2 fw-bold mb-0">SPECIAL SERVICES</h2>
        <p class="text-light">
          we provide more than services in ourwebsite, We hope you take a look
        </p>
        <specialservcarousel />
      </div>
    </div>
    <div class="team mt-5">
        <div class="container">
            <h2 class="fs-1 fw-bold">Specialist Team Members</h2>
            <about />
        </div>
    </div>
  </div>
</template>

<script>
import pagebg from "../components/pagesbg.vue";
import stats from "../components/homepage/statisitic/statisitic.vue";
import specialservcarousel from "../components/specialservcarousel.vue";
import about from "../components/homepage/about.vue";

export default {
  name: "aboutus",
  data() {
    return {
      title: "AboutUs",
      boxinfo: [
        {
          imagename: "programming",
          title: "We are team of creative designers and artists",
          paragraph:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nemo commodi molestiae error optio. Molestias?",
        },
        {
          imagename: "hard-work",
          title: "We specialize in high end services and tools",
          paragraph:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nemo commodi molestiae error optio. Molestias?",
        },
        {
          imagename: "shopping",
          title: "We use professional approach to work",
          paragraph:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nemo commodi molestiae error optio. Molestias?",
        },
      ],
    };
  },
  components: {
    pagebg,
    stats,
    specialservcarousel,
    about
  },
};
</script>

<style>
.call {
  background-color: var(--secondcolor);
  width: fit-content;
  color: var(--maincolor);
}
.special-serv {
  width: 80%;
  margin-left: 10%;
}
.special-serv .special-box {
  background-color: var(--secondcolor);
}
.special-box h2 {
  color: var(--maincolor);
}

</style>
