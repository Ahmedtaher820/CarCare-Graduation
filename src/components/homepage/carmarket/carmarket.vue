<template>
  <div class="container">
    <h2 class="main-title fs-2" data-aos="fade-left" data-aos-duration="1500">
      Car Market
    </h2>
    <div class="row car-row">
      <div
        class="col-12 col-lg-4 mb-5 mb-lg-0"
        v-for="(value, i) in carimgs"
        :key="i"
      >
        <div class="box w-100 shadow-lg position-relative">
          <div class="box-img position-relative">
            <img
              :src="require(`../../../assets/oldcars/${value.name}.jpg`)"
              :class="value.class"
              alt=""
            />
            <div class="btn-g position-absolute">
              <button
                class="btn img-btn btn-main-bg mb-2 w-75 rounded-lg-pill rounded-1"
                type="button"
                @click="quickview($event)"
              >
                QUICK VIEW
              </button>
              <button
                class="btn img-btn btn-main-bg w-75 rounded-lg-pill rounded-1"
                @click="addcart"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div
            class="box-content d-flex justify-content-between main-bg text-light bg-light"
          >
            <div class="right-box d-flex flex-column text-start py-2 px-3">
              <p class="fs-6 mb-1">
                <strong>Brand:</strong
                ><strong class="mx-1">{{ value.brand }}</strong>
              </p>

              <p class="fs-6 m-0">
                <strong>Type:</strong
                ><strong class="type mx-1">{{ value.type }}</strong>
              </p>
            </div>
            <div class="cart-box px-3 center-items main-bg">
              <i class="bi bi-cart2 fs-3" @click="addcart"></i>
            </div>
            <p class="fs-5 fw-bold p-1 position-absolute carprice rounded">
              {{ value.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <modal v-if="showmodal" v-on:closemodal="closemodal" :carinfo="posts" />
    <button
      type="button"
      class="btn btn-main-bg mt-5 p-3 fw-bold position-relative mainhover "
      data-aos="fade-up"
      data-aos-duration="500"
    >
      MORE EXPLORE
    </button>
  </div>
</template>

<script>
import modal from "./modal.vue";
import swal from "sweetalert";

export default {
  data() {
    return {
      showmodal: false,
      posts: {
        carimg: "",
        cartype: "",
        price: "",
        brand: "",
        seller: "",
      },
    };
  },
  components: {
    modal,
  },
  computed: {
    carimgs() {
      return this.$store.state.carimg;
    },
  },
  methods: {
    quickview(e) {
      let currentelement =
        e.target.parentElement.parentElement.nextElementSibling.querySelector(
          "p strong.type"
        ).textContent;
      for (var i in this.carimgs) {
        if (this.carimgs[i].type === currentelement) {
          this.posts.carimg = this.carimgs[i].name;
          this.posts.cartype = this.carimgs[i].type;
          this.posts.price = this.carimgs[i].price;
          this.posts.brand = this.carimgs[i].brand;
          this.posts.seller = this.carimgs[i].sellerName;
        }
      }
      this.showmodal = true;
    },
    closemodal() {
      this.showmodal = false;
    },
    addcart() {
      swal({
        title: "DONE!",
        text: "Product Added To Cart !",
        icon: "success",
        button: "Ok!",
      });
      this.$store.commit("increasecar");
    },
  },
};
</script>

<style>
.car-row {
  justify-content: space-around;
}
.car-row .box {
  border-radius: 20px;
  transition: 0.3s;
  overflow: hidden;
}

.box-content p.carprice {
  top: 24px;
  left: 24px;
  background-color: var(--secondcolor);
}
.bi-cart2 {
  cursor: pointer;
}
.right-box p {
  color: #333;
}
.btn-g {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-g .img-btn {
  opacity: 0;
  pointer-events: none;
  transition: 0.7s;
}
.btn-g .img-btn:first-of-type {
  transform: translateX(55px);
}
.btn-g .img-btn:last-of-type {
  transform: translateX(-55px);
}

.car-row .box:hover {
  box-shadow: none !important;
}
.car-row .box:hover .btn-g .img-btn {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0px);
  font-size: 14px;
}
.car-row .box-img {
  position: relative;
  height: 250px !important;
  overflow: hidden;
}
.car-row .box-img img {
  height: 100%;
}
.car-row .box-img::before {
  position: absolute;
  content: "";
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.678);
  opacity: 0;
  transition: 0.3s;
}
.car-row .box:hover .box-img::before {
  opacity: 1;
}
</style>
