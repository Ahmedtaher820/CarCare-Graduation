<template>
  <div class="people-say py-5 my-5 threeD">
    <h2 class="fw-bold fs-1 pt-3">WHAT PEOPLE SAY ABOUT OUR SERVICE..!</h2>
    <carousel-3d>
      <slide v-for="(info, i) in test" :key="i" :index="i">
        <div class="says-boxes fs-5 text-dark mt-5 px-5">
          <p>{{ info.opinion }}</p>
          <small class="fs-4 fw-bold">-{{ info.name }}.</small>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: { Carousel3d, Slide },
  data() {
    return {
      test: [
        {
          opinion:
            "My car is 15 years old and the headlights look like new. So nice to get the cleaning while I was at work!",
          name: "Jo",
        },
        {
          opinion:
            "Only try @GetSpiffy if you like having professionals come to your home and leave you with a spotlessly clean car.",
          name: "Andy",
        },
        {
          opinion:
            "AMAZING job on my car! I’m thrilled with the results. Sorry to say I did not hire these guys sooner. My car was “begging” for a wax job. Spiffy to the rescue inside and out. Now my car is like new!!",
          name: "Nanci",
        },
        {
          opinion:
            "My car looks AWESOME! They were able to get all the dog hair and spots from the interior. They also did an oil change. I got the awesome detail and it definitely lives up to its name!",
          name: "Kristi ",
        },
        {
          opinion:
            "Every single touch point with this company was top notch. Not to mention my car looks amazing. I haven’t seen it look so shiny and beautiful in years. Will absolutely use this service again and highly recommend it to others.",
          name: "Aren ",
        },
      ],
    };
  },
};
</script>

<style>
.people-say {
  min-height: 400px;
  position: relative;
}
.people-say
.threeD .carousel-3d-slide {
  min-height: 350px;
}
.threeD .carousel-3d-container[data-v-07917306] {
  min-height: 380px !important;
}
</style>
