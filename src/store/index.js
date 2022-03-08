import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carouselimgs: [
      { url: "11" },
      { url: "22" },
      { url: "33" },
      { url: "44" },
      { url: "55" },
    ],
    animationimg: [
      {
        src: "particle2",
        title: "dot-circle",
        class: "dot-circle moving position-fixed",
      },
      {
        src: "particle4",
        title: "triangle",
        class: "triangle moving  d-none d-md-block position-fixed",
      },
      {
        src: "particle5",
        title: "wave",
        class: "wave position-fixed",
      },
      {
        src: "particle7",
        title: "light-circle",
        class: "light-circle moving  d-none d-md-block position-fixed",
      },
    ],
    carimg: [
      {
        name: "1",
        class: "w-100",
        type: "Mercedes GClass",
        price: "$225000",
        brand: "Mercedes",
        sellerName: "Ahmed Taher",
      },
      {
        name: "2",
        class: "w-100",
        type: "DodgeCharger",
        price: "$13750",
        brand: "Dodge",
        sellerName: "Abdelrahman Alaa",
      },
      {
        name: "3",
        class: "w-100",
        type: "AudiA4",
        price: "$425000",
        brand: "Audi",
        sellerName: "Mohamed Hegawi",
      },
    ],
    servicesImg: [
      {
        service: "licensecheck",
        content: "License Check",
        href: "https://digital.gov.eg/categories/5e6e477931f6b33921d96e14",
        list: [
          "view your driving record, for example vehicles you can drive",
          "check your penalty points or disqualifications",
          "create a licence ‘check code’ to share your driving record with someone, for example a car hire company",
        ],
      },
      // {
      //   service: "Carparts",
      //   content: "Car Parts",

      //   list: [
      //     "We provide all spare parts for cars and for all cars",
      //     "(DODGE , CHEVROLET , JEEP , FORD , AUDI , BMW , SKODA , MERCEDES)",
      //   ],
      // },
      {
        service: "carshare",
        content: "Car Share",
        href: "/carshare",
        list: [
          "Car sharing is all about filling empty seats, sharing costs, and it’s a great way to meet new people.",
          "examples of when car sharing can be used: Commuting to work, Going to college / university,Going to a sporting match",
        ],
      },
      {
        service: "car-wash",
        content: "Car Wash",
        href: "/carwash",
        list: [
          "Select your wash package",
          "Select your wash day",
          "Leave your car ready for our technicians",
          "Enjoy your clean car",
        ],
      },
    ],
    testmonial: [
      {
        imgsrc: "avatar",
        job: "Front-End",
        name: "Mohamed Ali",
      },
      {
        imgsrc: "beard",
        job: "Doctor",
        name: "Hossam Ahmed",
      },
      {
        imgsrc: "hacker",
        job: "Developer",
        name: "Mohamed Salah",
      },
      {
        imgsrc: "man1",
        job: "Mechanic",
        name: "Mokhtar Ahmed",
      },
      {
        imgsrc: "man2",
        job: "Deriver",
        name: "Eslam Taher",
      },
      {
        imgsrc: "man2",
        job: "Student",
        name: "Basyione Basyione",
      },
      {
        imgsrc: "woman",
        job: "Youtuber",
        name: "Hala Khaled",
      },
    ],
    prices: [
      {
        level: "Silver",
        img: "silver-medal",
        time: "30 min",
        services: [
          "Exterior Hand Wash",
          "Rims/Tires",
          "Interior Vacuum & Clean",
        ],
        price: "50",
      },
      {
        level: "Gold",
        img: "gold-medal",
        popular: true,
        time: "1-2 hrs",
        services: [
          "Exterior Hand Wash",
          "Rims/Tires",
          "Interior Vacuum & Clean",
          "Leather Conditioner",
          "Light Carpet Clean",
          "Dashboard Conditioner",
        ],
        price: "99",
      },
      {
        level: "Diamond",
        img: "diamond",
        time: "2.5-3 hrs",
        services: [
          "Exterior Hand Wash",
          "Rims/Tires",
          "Interior Vacuum & Clean",
          "Leather Conditioner",
          "Light Carpet Clean",
          "Dashboard Conditioner",
          "Clay Bar & Hand Wax",
        ],
        price: "180",
      },
    ],
    counter: 0,
    username: "",
    id: "",
    userlatlan: 0,
    userprofile: [],
    usercarwash: {
      location: {
        // lat: "",
        // long: "",
      },
      formstepone: {
        // country: "",
        // city: "",
        // street: "",
        // locname: "",
      },
      car:{
        // type: "",
        // make: "",
        // model: "",
        // color: "",
      },
      pricing: null,
      personal:{
        // firstname: "",
        // lastname: "",
        // email: "",
        // phone: "",
        // id: "",
        // coupon: null,
      }
    },
  },
  mutations: {
    increasecar(state) {
      return state.counter++;
    },
    getuser(state, payload) {
      return (state.username = payload);
    },
    getid(state, payload) {
      return (state.id = payload);
    },
    userprofile(state, payload) {
      return (state.userprofile = payload);
    },
    userlatlong(state, payload) {
      state.userlatlan++;
      return (state.usercarwash.location = payload);
    },
    userlocation(state, payload) {
      return (state.usercarwash.formstepone = payload);
    },
    pricingplan(state, payload) {
      return (state.usercarwash.pricing = payload);
    },
    carinfo(state,payload){
      return state.usercarwash.car = payload
    },
    personalinfo(state,payload){
      return state.usercarwash.personal = payload
    }
  },
  actions: {
    async getuserfun({ commit }) {
      let id = JSON.parse(localStorage.getItem("user-info"));
      commit("getid", id);
    },
    async userAllinfo({ commit }) {
      let id = JSON.parse(localStorage.getItem("user-info"));
      await axios
        .get("https://car-care3.herokuapp.com/api/users/5555/" + id)
        .then((response) => {
          commit("userprofile", response.data.user);
        });
    },
    async usernameFun({ commit }) {
      let id = JSON.parse(localStorage.getItem("user-info"));

      await axios
        .get("https://car-care3.herokuapp.com/api/users/5555/" + id)
        .then((response) => {
          console.log(response.data.user.name);
          commit("getuser", response.data.user.name);
        });
    },
  },
});
