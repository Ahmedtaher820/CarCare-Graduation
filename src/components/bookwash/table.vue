<template>
  <table border="1px" class="table mt-4">
    <thead>
      <tr>
        <th></th>
        <th class="text-center th-border border-bronze">
          <span class="thead-span">Bronze</span>
          <div style="font-size: 12px">(30 min)</div>
        </th>
        <th class="text-center th-border border-silver">
          <span class="thead-span">Silver</span>
          <div style="font-size: 12px">(50-80 min)</div>
        </th>
        <th class="text-center th-border border-gold">
          <span class="thead-span">Gold</span>
          <div style="font-size: 12px">(1.5-2hrs)</div>
        </th>
        <th class="text-center th-border border-platinum">
          <span class="thead-span">Platinum</span>
          <div style="font-size: 12px">(2-2.5hrs)</div>
        </th>
        <th class="text-center th-border border-diamond">
          <span class="thead-span">Diamond</span>
          <div style="font-size: 12px">(3-5hrs)</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Exterior Hand Wash</td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Rims/Tires</td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Interior Vacuum & Cleanr</td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Leather Conditioner</td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Light Carpet Clean</td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Dashboard Conditioner</td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">Clay Bar & Hand Wax</td>
        <td></td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">High Pressure Air Blowout</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">
          Paint Polish and Hybrid Ceramic<br />
          Sealant
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center">
        <td scope="row" class="text-start ps-2">
          Exterior Plastic Dressing w/<br />
          UV Protection
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><i class="bi bi-check2 text-success fs-5"></i></td>
      </tr>
      <tr class="text-center buttons-select text-center">
        <td scope="row" class="text-start ps-1"></td>
        <td>
          <button
            data-price="price-26"
            class="py-2 px-3 active"
            @click="selectPrice($event, 'bronze')"
          >
            Select 26$
          </button>
        </td>
        <td>
          <button
            data-price="price-48"
            class="py-2 px-3"
            @click="selectPrice($event, 'silver')"
          >
            Select 48$
          </button>
        </td>
        <td>
          <button
            data-price="price-70"
            class="py-2 px-3"
            @click="selectPrice($event, 'gold')"
          >
            Select 70$
          </button>
        </td>
        <td>
          <button
            data-price="price-148"
            class="py-2 px-3"
            @click="selectPrice($event, 'platinum')"
          >
            Select 148$
          </button>
        </td>
        <td>
          <button
            data-price="price-349"
            class="py-2 px-3"
            @click="selectPrice($event, 'diamond')"
          >
            Select 349$
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      price: "",
      title:''
    };
  },
  methods: {
    selectPrice(e,plane) {
      this.title = plane
      document
        .querySelector(".buttons-select button.active")
        .classList.remove("active");
      e.target.classList.add("active");
      this.price = e.target.textContent.slice(-5).trim();
      document.querySelectorAll(".option.selected").forEach((ele) => {
        ele.classList.remove("selected");
      });
      document.querySelectorAll("." + e.target.dataset.price).forEach((e) => {
        e.classList.add("selected");
      });
      document.querySelectorAll(".option button.active").forEach((e) => {
        e.classList.remove("active");
      });
      this.$store.commit("pricingplan", this.price);
      this.$store.commit("pricingTitle",this.title);
      this.$store.commit("cleanoption");
    },
  },
};
</script>

<style>
table {
  width: 100% !important;
  max-width: 100%;
  overflow: visible;
}
.thead-span {
  text-align: center !important;
  display: block;
}
th,
td {
  border: 1px solid #ddd !important;
}
thead tr {
  border-bottom: 1px solid #ddd !important;
}

tr .text-start:first-of-type {
  font-size: 13px !important;
  text-align: center;
}
.th-border.border-bronze {
  background: linear-gradient(96deg, #edbe91, #d09863) left bottom no-repeat;
  background-size: 100% 7px;
}
.th-border.border-silver {
  background: linear-gradient(97deg, #e9e9e9, #c8c8c8) left bottom no-repeat;
  background-size: 100% 7px;
}
.th-border.border-gold {
  background: linear-gradient(99deg, #ffe4a6, #e5c06a) left bottom no-repeat;
  background-size: 100% 7px;
}
.th-border.border-platinum {
  background: linear-gradient(95deg, #d4dce1, #758a9b) left bottom no-repeat;
  background-size: 100% 7px;
}
.th-border.border-diamond {
  background: linear-gradient(95deg, rgba(183, 238, 255, 0.22), #4aceff) left
    bottom no-repeat;
  background-size: 100% 7px;
}
.buttons-select {
  /* background-color: var(--maincolor); */
  color: #333;
}
.buttons-select button {
  border: none;
  outline: none;
  background-color: var(--secondcolor);
  color: #fff;
  transition: 0.3s;
  border: 1px solid var(--maincolor);
  border-radius: 10px;
}
.buttons-select button:hover,
.buttons-select button.active {
  background-color: var(--maincolor);
  color: var(--secondcolor);
}
</style>
