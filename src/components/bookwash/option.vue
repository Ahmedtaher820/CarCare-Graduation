<template>
  <div class="car-type p-md-4 shadow mb-3 p-0 text-md-start text-center">
    <h3 class="fs-3">Optional Add-ons</h3>
    <b class="ps-3">Exterior</b>
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="(optionBoxone, i) in optionBoxesOne"
        :key="i"
      >
        <optionBox :optionInfo="optionBoxone" />
      </div>
      <p class="ps-3 my-4">Interior</p>
      <div
        class="col-lg-4 col-md-6"
        v-for="optionBoxtwo in optionBoxesTwo"
        :key="optionBoxtwo.optionTitle"
      >
        <optionBox :optionInfo="optionBoxtwo" />
      </div>
    </div>
    
  </div>
</template>

<script>
import optionBox from "./optionBox.vue";
export default {
  data() {
    return {
      optionBoxesOne: [
        {
          img: "1",
          price: "12$",
          optionTitle: "Water Repellent Wax",
          optionContent:
            "Acts like Rain-X... Protects against hard-water and acidic water stains.",
          pricePart: "price-349 price-148",
        },
        {
          img: "2",
          price: "28$",
          optionTitle: "Hard Coat Wax",
          optionContent:
            "Acrylic wax. Protects against micro-scratches, road grime, and sun damage while making your car shimmer.",
          pricePart: "price-349 price-148",
        },
        {
          img: "3",
          price: "78$",
          optionTitle: "Clay Bar Treatment & Hand Wax",
          optionContent:
            "Removes the impurities that get embedded in your car's clear coat. Sealed and protected with a Hard Coat Wax.",
          pricePart: "price-349 price-148",
        },
      ],
      optionBoxesTwo: [
        {
          img: "4",
          price: "12$",
          optionTitle: "Light Stain Removal",
          optionContent: "Light stain removal on cloth seats and carpet.",
          pricePart: "price-349 price-148 price-70",
        },
        {
          img: "5",
          price: "12$",
          optionTitle: "Excessive Trash Removal",
          optionContent: "",
        },
        {
          img: "6",
          price: "12$",
          optionTitle: "Dashboard Conditioner",
          optionContent: "Extra shine and protects against sun damage.",
          pricePart: "price-349 price-148 price-70",
        },
        {
          img: "7",
          price: "12$",
          optionTitle: "Leather Conditioner",
          optionContent: "Cleans and moistens your leather. Non-greasy.",
          pricePart: "price-349 price-148 price-70",
        },
        {
          img: "8",
          price: "24$",
          optionTitle: "Pet Hair Removal",
          optionContent: "Have furry friends? This is what you need!",
        },
        {
          img: "9",
          price: "112$",
          optionTitle: "Interior Steam Detail",
          optionContent:
            "Naturally sanitizes, removes deep stains, and deodorizes your interior without the use of chemicals or cleaners. Better than shampoo",
        },
      ],
    };
  },
  components: {
    optionBox,
  },
};
</script>

<style></style>
