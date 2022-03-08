<template>
  <div class="bigbox stepthree fullwidthheight noactive py-5">
    <div class="prices-boxes">
      <div class="container">
        <h2 class="fs-1 mb-4">Step 3</h2>
        <h2 class="fs-3 mb-5">Pricing Plane</h2>
        <div class="row">
          <div
            class="col-md-4 mb-4 mb-md-0"
            v-for="(price, i) in prices"
            :key="i"
          >
            <div class="price-box shadow p-2 bg-light position-relative">
              <h3 class="fs-3">{{ price.level }}</h3>
              <img
                :src="require(`../../assets/carwash/pricing/${price.img}.png`)"
                alt=""
                style="width: 64px"
              />
              <h2 class="fs-3">
                {{ price.price }} <span class="fs-1">$</span>
              </h2>
              <span>{{ price.time }}</span>
              <ul class="pricelist p-3">
                <li
                  v-for="serv in price.services"
                  :key="serv"
                  class="text-start"
                >
                  <i class="bi bi-check me-2"></i>{{ serv }}
                </li>
              </ul>
              <button class="checkprice" @click="checkprice(price.price)">
                Selected {{ price.price }}$
              </button>
              <span :class="price.popular == true ? 'popular' : 'none'"
                >Most Popular</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      pricingplan: "",
    };
  },
  methods: {
    checkprice(e) {
      swal({
        title: "Are you sure?",
        text: `You will be pay ${e} !`,
        icon: "warning",
        buttons: true,
      }).then((willpay) => {
        if (willpay) {
          swal("Thank you Sir for this trust!", {
            icon: "success",
          });
          this.pricingplan = e;
          this.pricingfun;
          this.gonext();
        } else {
          swal("Select your plan and return select again!");
        }
      });
    },
    gonext() {
      var parent = document.querySelector(".stepthree ");
      var next = parent.nextElementSibling;
      this.changeslide(parent, next);
    },
    changeslide(parent, next) {
      parent.classList.add("noactive");
      parent.classList.remove("active");
      next.classList.add("active");
      next.classList.remove("noactive");
    },
  },
  computed: {
    prices() {
      return this.$store.state.prices;
    },
    pricingfun() {
      return this.$store.commit("pricingplan", this.pricingplan);
    },
  },
};
</script>

<style>
.pricelist li {
  padding: 6px 0px;
  border-top: 1px solid #ddd;
  list-style: none;
  text-align: left;
}
.price-box {
  min-height: 550px;
}
span.none {
  display: none;
}
span.popular {
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: var(--secondcolor);
  color: var(--maincolor);
  padding: 10px 0px 30px 10px;
  border-top-left-radius: 10px;
  writing-mode: vertical-rl;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
}
span.popular::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgba(248, 249, 250);
  bottom: -10px;
  transform: rotate(45deg);
  left: 24%;
}
.checkprice {
  background-color: var(--secondcolor);
  border: none;
  color: var(--maincolor);
  padding: 6px 16px;
  border-radius: 5px;
  transition: 0.3s;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.checkprice:hover {
  background-color: var(--maincolor);
  color: var(--secondcolor);
}
</style>
