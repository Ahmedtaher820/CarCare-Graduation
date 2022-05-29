<template>
  <div class="carwash-book py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start car-book-left">
          <div class="p-4 shadow mb-3">
            <h3 class="fs-3">Let’s get that dirty car washed!</h3>
            <h4 class="fs-4 mt-4 mb-3">Start Your Booking</h4>
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email-contact"
              placeholder="Your Email Which We Contact With You Through it"
              v-model="userBookInfo.email"
              required
            />
            <span class="input-check-err text-danger mt-2"></span>
          </div>
          <div class="car-type p-4 shadow mb-3" id="car-type">
            <h4 class="fs-4 mb-4">What kind of car do you drive?</h4>
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-2 mb-lg-0">
                <button class="carkind p-2 fs-5" @click="cartype('truck')">
                  Truck
                  <img src="../assets/carwash/cars/box-truck.png" alt="" />
                </button>
              </div>
              <div class="col-lg-4 col-md-6 mb-2 mb-lg-0">
                <button
                  class="carkind p-2 active fs-5"
                  @click="cartype('sedan')"
                >
                  Sedan
                  <img src="../assets/carwash/cars/sedan.png" alt="" />
                </button>
              </div>
              <div class="col-lg-4 col-md-6 mb-2 mb-lg-0">
                <button class="carkind p-2 fs-5" @click="cartype('suv')">
                  SUV <img src="../assets/carwash/cars/suv.png" alt="" />
                </button>
              </div>
              <span class="input-check-err text-danger mt-2 mb-4"></span>
            </div>
            <div class="row mt-0">
              <div class="col-md-6">
                <div class="car-group">
                  <label for="carMake" class="form-label">Car Make</label>
                  <select
                    class="form-control"
                    v-model="userBookInfo.carMake"
                    id="carMake"
                  >
                    <option value="Hond" selected>Honda</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="BMW">BMW</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Ford">Ford</option>
                    <option value="Kia">Kia</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                    <option value="Jeep">Jeep</option>
                  </select>
                  <span class="input-check-err text-danger mt-2"></span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="car-group">
                  <label for="color" class="form-label">Color</label>
                  <input class="form-control" type="text" id="car-color"  />
                </div>
                <span class="input-check-err text-danger mt-2"></span>
              </div>
            </div>
          </div>
          <div
            class="car-type p-md-4 shadow mb-3 p-0 text-md-start text-center"
          >
            <h3 class="fs-3">Select Your Wash Package</h3>
            <small
              >All of our washes are backed with our 100% NuWash Happiness
              Guarantee.</small
            >
            <!-- Table Of Wash Details -->
            <tableprice />
          </div>
          <!-- CarWash options -->
          <optionPlus />
          <!-- Location Of User -->
          <carbooklocation />
          <!-- When will your car be washed? -->
          <div
            class="car-type p-md-4 shadow mb-3 p-0 text-md-start text-center"
          >
            <h3 class="fs-3">When will your car be washed?</h3>
            <span class="text-danger fw-bold mt-4"
              >* We will send you a text message with all the details on your
              email account</span
            >
          </div>
          <!-- how often would user like car washed -->
          <howOftenUserLikeWashed />
          <form action="" class="p-md-4 shadow mb-3 p-0">
            <h3 class="fs-3 mb-3">Personal and Billing Information</h3>
            <div class="row">
              <div class="col-md-6 mb-3 mb-md-3">
                <div class="personal-inputs">
                  <label for="name" class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="personInfo[0].name"
                    readonly
                  />
                </div>
              </div>
              <div class="col-md-6 mb-3 mb-md-0">
                <div class="personal-inputs">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="personInfo[0].email"
                    readonly
                  />
                </div>
              </div>
              <div class="col-md-6 mb-3 mb-md-0">
                <div class="personal-inputs">
                  <label for="email" class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="personInfo[0].phone"
                    required
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              @click="bookWash"
              class="btn mt-3"
              value="Complete Booking"
            />
          </form>
          <faq />
        </div>
        <div class="col-md-4 total-box position-fixed end-0 top-25">
          <div class="right-box p-5 text-start text-light">
            <div
              class="content py-3 d-flex flex-column justify-content-between"
            >
              <div class="content-top">
                <h6 class="fs-6 fw-bold mb-0">Bronze Wash</h6>
                <p class="mb-0 pb-4 pt-1 text-light">Scheduled One Time</p>
                <div
                  class="price-type pt-2 d-flex justify-content-between align-items-center"
                >
                  <span>{{title}}</span>
                  <b>{{ usercarwash }}</b>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center"
                  v-for="(userop, i) in userOPtions"
                  :key="i"
                >
                  <span class="option-box">{{ userop.option }}</span>
                  <b class="option-price">{{ userop.price }}</b>
                </div>
              </div>
              <div class="content-bottom">
                <div
                  class="p-2 bg-light d-flex justify-content-between align-items-center rounded-3"
                >
                  <input type="text" placeholder="Add Coupon Code" />
                  <i class="bi bi-plus-circle fs-5"></i>
                </div>
                <div
                  class="total-wash d-flex justify-content-between align-items-center my-3"
                >
                  <h5 class="fs-6">Your Wash Total</h5>
                  <h5 class="fs-5">{{ sum }}$</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dollar-bag" v-if="showBag">
      <i
        class="fa-solid fa-sack-dollar center-items shadow bg-light"
        @click="showPrice"
        
      ></i>
    </div>
  </div>
</template>

<script>
import tableprice from "../components/bookwash/table.vue";
import optionPlus from "../components/bookwash/option.vue";
import carbooklocation from "../components/bookwash/carbooklocation.vue";
import howOftenUserLikeWashed from "../components/bookwash/howOftenUserLikeWashed.vue";
import faq from "../components/bookwash/faq.vue";
import axios from "axios";
export default {
  data() {
    return {
      showBag: false,
      userBookInfo: {
        carModel: "",
        email: "",
        carMake: "",
      },
      personInfo: [],
      inputError: [],
      useroption: this.userOPtions,
      sumNum: 26,
    };
  },
  components: {
    tableprice,
    optionPlus,
    carbooklocation,
    howOftenUserLikeWashed,
    faq,
  },
  methods: {
    cartype(e) {
      this.userBookInfo.carModel = e;
      let cartypes = document.querySelectorAll(".carkind");
      cartypes.forEach((e) => {
        e.addEventListener("click", () => {
          document.querySelector(".carkind.active").classList.remove("active");
          e.classList.add("active");
        });
      });
    },
    bookWash(e) {
      e.preventDefault();
      // to carMake all error in page is empty
      let inputCheck = document.querySelectorAll(".input-check-err");
      inputCheck.forEach((err) => {
        err.textContent = "";
      });
      this.check("Required", "email-contact", 0);
      if (this.userBookInfo.carModel == "") {
        this.check("Choose Your Car Type", "car-type", 1);
        return
      }
      if (!this.userBookInfo.carMake) {
        this.check("Required", "car-select", 2);
        return
      }
      if (this.userlatlong.lat == "") {
        this.check("Required", "address", 4);
        this.check("Required", "city", 5);
        this.check("Required", "Country", 6);
        return
      }
      this.$store.dispatch("userBookInfo",this.userBookInfo)
      this.$store.dispatch("completeWashBook")
    },
    check(message, id, index) {
      let inputCheck = document.querySelectorAll(".input-check-err");
      inputCheck[index].textContent = message;
    },
    showPrice(event) {
      document.querySelector(".total-box").classList.toggle("active");
      if (event.target.classList.contains("fa-sack-dollar")) {
        event.target.classList.remove("fa-sack-dollar");
        event.target.classList.add("fa-xmark");
      } else {
        event.target.classList.add("fa-sack-dollar");
        event.target.classList.remove("fa-xmark");
      }
    },
  },
  async created() {
    let id = JSON.parse(localStorage.getItem("user-info"));
    await axios
      .get("https://car-care3.herokuapp.com/api/users/5555/" + id)
      .then((resolve) => {
        this.personInfo.push(resolve.data.user);
        console.log(this.personInfo[0].name);
      });
    let spanError = document.querySelector(".input-check-err");
    if (spanError.textContent == "") {
      spanError.style.display = "none";
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 991) {
        if (window.pageYOffset > 100) {
          document.querySelector(".right-box").style.transform =
            "translateY(-100px)";
        } else {
          document.querySelector(".right-box").style.transform =
            "translateY(0px)";
        }
      }
    });
    window.addEventListener("resize", () => {
      if (innerWidth < 992) {
        document.querySelector(".car-book-left").classList.remove("col-md-8");
        document.querySelector(".car-book-left").classList.add("col-12");
        document.querySelector(".car-book-left").classList.add("active");
        this.showBag = true;
      } else {
        document.querySelector(".car-book-left").classList.remove("col-12");
        document.querySelector(".car-book-left").classList.add("col-md-8");
        document.querySelector(".car-book-left").classList.remove("active");
        this.showBag = false;
      }
    });
  },
  computed: {
    userlatlong() {
      return this.$store.state.usercarwash.location;
    },
    usercarwash() {
      return this.$store.state.usercarwash.pricing;
    },
    userOPtions() {
      return this.$store.state.usercarwash.options;
    },
    sum() {
      return this.$store.state.usercarwash.price;
    },
    title(){
      return this.$store.state.usercarwash.title
    }
  },
};
</script>

<style>
.carwash-book .form-control {
  border-radius: 5px !important;
}
.carkind,
.locat-kind,
.wash-times button {
  width: 100%;
  border: none;
  transition: 0.3s;
  border-radius: 10px;
}
.carkind.active,
.locat-kind.active,
.locat-kind:hover,
.wash-times button:hover,
.wash-times button.active {
  background-color: var(--maincolor);
  color: var(--secondcolor);
}
.locat-kind {
  max-height: 100vh;
}
.carwash-book .col-md-8 > div {
  background-color: #fff;
}
.total-box {
  overflow: visible;
}
.carwash-book .right-box {
  width: 100%;
  max-width: 302px;
  min-height: 450px;
  top: 0px;
  left: 0px;
  background: url("../assets/washoption/rightbox.svg") center center / cover
    no-repeat;
  transition: 0.3s;
  overflow: scroll;
}
.carwash-book .right-box::-webkit-scrollbar {
  display: none;
}
.carwash-book .right-box .content {
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;
  height: 350px;
}
.carwash-book .right-box .content p {
  border-bottom: 2px solid #fff;
}
.carwash-book .content-bottom input {
  border: none;
  background-color: transparent;
  width: 80%;
  outline: none;
}
.carwash-book .content-bottom i {
  color: #333;
  cursor: pointer;
}
.total-wash {
  color: #fff;
}
@media (max-width: 991px) {
  .total-box {
    transform: translateX(100%);
    transition: 0.3s;
  }
  .total-box.active {
    padding: 0px;
    transform: translateX(0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carwash-book .container {
    max-width: 100%;
  }
}
.faq {
  bottom: -700px !important;
}
.input-check-err {
  display: block;
  height: 0px !important;
}
.right-box .option-box {
  font-size: 12px;
}
.fa-sack-dollar,
.fa-xmark {
  font-size: 25px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
}
.dollar-bag {
  position: fixed;
  top: 120px;
  right: 30px;
}
.dollar-bag::before {
  content: "";
  position: absolute;
  top: 5px;
  left: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f00;
}
</style>
