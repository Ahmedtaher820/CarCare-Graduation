<template>
  <div
    class="option mb-4 mb-md-4 d-flex position-relative flex-column text-center justify-content-start align-items-center py-3"
    :class="optionInfo.pricePart"
  >
    <div class="option-img center-items">
      <img
        :src="require(`../../assets/washoption/${optionInfo.img}.svg`)"
        alt=""
      />
    </div>
    <h4 class="fs-4" id="price">{{ optionInfo.price }}</h4>
    <span class="fw-bold">{{ optionInfo.optionTitle }}</span>
    <small class="d-md-block d-none">{{ optionInfo.optionContent }}</small>
    <button
      class="btn position-absolute border option-btn"
      @click="addService($event)"
    >
      Selected
    </button>
    <div class="included">
      <span>Included</span> <i class="bi bi-check2 text-success fs-5"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        price: "",
        option: "",
      },
    };
  },
  props: ["optionInfo"],

  methods: {
    addService(event) {
      this.options.price =
        event.target.parentElement.firstChild.nextElementSibling.textContent;
      this.options.option =
        event.target.parentElement.firstChild.nextElementSibling.nextElementSibling.textContent;
      if (event.target.classList.contains("active")) {
        this.$store.commit("useroptions", this.options);
      } else {
        this.$store.commit("useroptions", this.options);
        this.$store.commit(
          "optionSum",
          this.removeDollarSign(this.options.price)
        );
      }
      event.target.classList.toggle("active");
    },
    removeDollarSign(ele) {
      return ele.slice(0, ele.indexOf("$"));
    },
  },
};
</script>

<style>
.option {
  min-height: 360px;
  gap: 16px;
  border: 1px solid #368b857d;
}
@media (max-width: 767px) {
  .option {
    min-height: 220px !important;
    gap: 5px !important;
  }
}
.option.selected {
  background-color: #ddd;
}
.option.selected button {
  display: none;
}
.option button.active {
  background-color: var(--maincolor);
}
.btn-check:focus + .btn,
.btn:focus {
  box-shadow: none !important;
}
.option .included {
  display: none;
  height: 50px;
  color: rgb(65, 183, 18);
  font-size: 18px;
}
.option.selected .included {
  display: flex;
  align-items: center;
}
.option .option-img {
  height: 50px;
}
.option .option-img img:last-of-type {
  width: 50px;
}
.option > span {
  font-size: 14px;
  height: 39px;
}
.option button {
  bottom: 16px;
}
.btn.option-btn {
  color: var(--secondcolor) !important;
}
</style>
