import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carouselimgs: [
      { url: "firstService" },
      { url: "secondService" },
      { url: "thirdService" },
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
        name: "Mohamed Yehiya",
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
    imgSrc: [
      {
        srcName: "ahmed",
        member: "Ahmed Taher",
        job: "Front-End",
        description:
          "My name ahmed taher,Recent graduate from faculty computer and information,I interested about front-end specially",
        social: [
          {
            name: "bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100022070504463",
          },
          {
            name: "bi-linkedin",
            url: "https://www.linkedin.com/in/ahmed-taher-141682221/",
          },
          {
            name: "bi-instagram",
            url: "https://www.instagram.com/aahmedttaherr/",
          },
          {
            name: "bi-github",
            url: "https://github.com/Ahmedtaher820",
          },
        ],
      },
      {
        srcName: "abdo",
        member: "Abdo Alaa",
        job: "Back-End",
        description:
          "My name abdelrahman alaa,Recent graduate from faculty computer and information,I interested about Back-end specially",
        social: [
          {
            name: "bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100003936277814",
          },
          {
            name: "bi-linkedin",
            url: "https://www.linkedin.com/in/ahmed-taher-141682221/",
          },
          {
            name: "bi-instagram",
            url: "https://www.instagram.com/aahmedttaherr/",
          },
          {
            name: "bi-github",
            url: "https://github.com/Ahmedtaher820",
          },
        ],
      },
      {
        srcName: "mohamed",
        member: "M.Mahmoud",
        job: "Back-End",
        description:
          "My name mohamed mahmoud,Recent graduate from faculty computer and information,I interested about Back-end specially",
        social: [
          {
            name: "bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100022070504463",
          },
          {
            name: "bi-linkedin",
            url: "https://www.linkedin.com/in/ahmed-taher-141682221/",
          },
          {
            name: "bi-instagram",
            url: "https://www.instagram.com/aahmedttaherr/",
          },
          {
            name: "bi-github",
            url: "https://github.com/Ahmedtaher820",
          },
        ],
      },
      {
        srcName: "elhegawi",
        member: "M.Elhegawi",
        job: "Flutter",
        description:
          "My name mohamed elhegawi,Recent graduate from faculty computer and information,I interested about Flutter specially",
        social: [
          {
            name: "bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100002225277967",
          },
          {
            name: "bi-linkedin",
            url: "https://www.linkedin.com/in/mohamed-ashraf-230280225/",
          },
          {
            name: "bi-instagram",
            url: "https://www.instagram.com/aahmedttaherr/",
          },
          {
            name: "bi-github",
            url: "https://github.com/MOHAMD-ASHRAF",
          },
        ],
      },
      {
        srcName: "mohamed",
        member: "Moaz Ahmed",
        job: "Flutter",
        description:
          "My name moaz ahmed,Recent graduate from faculty computer and information,I interested about Flutter specially",
        social: [
          {
            name: "bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100022070504463",
          },
          {
            name: "bi-linkedin",
            url: "https://www.linkedin.com/in/ahmed-taher-141682221/",
          },
          {
            name: "bi-instagram",
            url: "https://www.instagram.com/aahmedttaherr/",
          },
          {
            name: "bi-github",
            url: "https://github.com/Ahmedtaher820",
          },
        ],
      },
      {
        srcName: "omar",
        member: "Omar Ismail",
        job: "UI/UX",
        description:
          "My name omar ismail,Recent graduate from faculty computer and information,I interested about UI/UX specially",
        social: [
          {
            name: "bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100022070504463",
          },
          {
            name: "bi-linkedin",
            url: "https://www.linkedin.com/in/omar9ismail",
          },
          {
            name: "bi-instagram",
            url: "https://www.instagram.com/Omar9ismail/",
          },
          {
            name: "bi-github",
            url: "https://github.com/Omar9ismail",
          },
        ],
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
        lat: "",
        lang: "",
      },
      options: [
        // {
        //   price: "",
        //   option: "",
        // },
      ],
      carMake: "",
      carModel: "",
      email: "",
      color: "",
      pricing: "26$",
      title: "Bronze",
      totalPrice: 26,
    },
    // carShare Part
    getPostId: "",
    myWatingBooking: [],
    myPosts:[]
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
      return (state.usercarwash.location = payload);
    },
    // to make sure option is not add ever
    useroptions(state, payload) {
      if (state.usercarwash.options.length > 0) {
        let findOption = state.usercarwash.options.find(
          (optionParam) => optionParam == payload
        );
        if (findOption != undefined) {
          state.usercarwash.totalPrice -= Number(
            findOption.price.slice(0, findOption.price.indexOf("$"))
          );

          return state.usercarwash.options.splice(
            state.usercarwash.options.indexOf(findOption),
            1
          );
        } else {
          return state.usercarwash.options.push(payload);
        }
      } else {
        return state.usercarwash.options.push(payload);
      }
    },
    cleanoption(state) {
      return (state.usercarwash.options = []);
    },
    userlocation(state, payload) {
      return (state.usercarwash.formstepone = payload);
    },
    pricingplan(state, payload) {
      console.log(payload);
      state.usercarwash.totalPrice = Number(
        payload.slice(0, payload.indexOf("$"))
      );
      return (state.usercarwash.pricing = payload);
    },
    pricingTitle(state, payload) {
      console.log(payload);
      return (state.usercarwash.title = payload);
    },
    carinfo(state, payload) {
      return (state.usercarwash.car = payload);
    },
    carMake(state, payload) {
      return (state.usercarwash.carMake = payload);
    },
    carModel(state, payload) {
      return (state.usercarwash.carModel = payload);
    },
    email(state, payload) {
      return (state.usercarwash.email = payload);
    },
    color(state, payload) {
      return (state.usercarwash.color = payload);
    },
    personalinfo(state, payload) {
      return (state.usercarwash.personal = payload);
    },
    // to make sum in all option and sum
    optionSum(state, payload) {
      return (state.usercarwash.totalPrice += Number(payload));
    },
    // Car Share Post
    postId(state, payload) {
      console.log(payload);
      return (state.getPostId = payload);
    },
    // Get All My Post
    waitingBook(state, payload) {
      return (state.myWatingBooking = payload);
    },
    // Get All My Post 
    myPosts(state,payload){
      return state.myPosts = payload
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
    checkuser() {},
    userBookInfo({ commit }, payload) {
      console.log(payload);
      commit("carMake", payload.carMake);
      commit("carModel", payload.carModel);
      commit("email", payload.email);
      commit("color", payload.color);
    },
    completeWashBook({ state }) {
      console.log("done");
      console.log(state.usercarwash);
    },
    // for book post
    async booking({ state,dispatch }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let postBooking = await axios.post(
          `https://car-care3.herokuapp.com/api/Booking/${state.getPostId}`,
          payload,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        console.log(postBooking)
        swal({
          title: "Thank You!",
          text: `${postBooking.data.message}`,
          icon: "success",
          button: "Ok!",
        });
        dispatch("getWaitingPostFun")
      } catch (error) {
        swal({
          title: "Opps!",
          text: `${error.response.data.message}`,
          icon: "error",
          button: "Ok!",
        });
      }
    },
    async getWaitingPostFun({ commit }) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let watingPosts = await axios.get(
          `https://car-care3.herokuapp.com/api/carSharingPost/getBooking`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        console.log(watingPosts.data.booking)
        commit("waitingBook", watingPosts.data.booking);
      } catch (error) {
        console.log(error);
      }
    },
    async getMyAllPosts({commit}) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let posts = await axios.get(
          `https://car-care3.herokuapp.com/api/carSharingPost/getMyPost`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        commit("myPosts", posts.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
