import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";
import router from "../router/index";
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
      location: [],
      options: [
        // {
        //   price: "",
        //   option: "",
        // },
      ],
      carModel: "",
      email: "",
      pricing: "26$",
      title: "Bronze",
      totalPrice: 26,
    },
    // carShare Part
    pagePosts: null,
    getPostId: "",
    myWatingBooking: [],
    requests: null,
    myPosts: [],
    postById: "",
    postHaveRequest: null,
    // postsNum:0,
    // BooksNum:0,
    // RequestsNum:0
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
      state.usercarwash.location.push(payload.lat);
      return state.usercarwash.location.push(payload.long);
    },
    // to make sure option is not add ever
    useroptions(state, payload) {
      if (state.usercarwash.options.length > 0) {
        // search if option is in object or not
        let findOption = state.usercarwash.options.find(
          (optionParam) => optionParam == payload
        );
        // this mean that option in object
        if (findOption != undefined) {
          // subtract option price from total price
          state.usercarwash.totalPrice -= Number(
            findOption.price.slice(0, findOption.price.indexOf("$"))
          );
          // remove option from object
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
      return (state.usercarwash.pricing = Number(
        payload.slice(0, payload.indexOf("$"))
      ));
    },
    pricingTitle(state, payload) {
      return (state.usercarwash.title = payload);
    },
    carinfo(state, payload) {
      return (state.usercarwash.car = payload);
    },
    carModel(state, payload) {
      return (state.usercarwash.carModel = payload);
    },
    email(state, payload) {
      return (state.usercarwash.email = payload);
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
      return (state.getPostId = payload);
    },
    // Get All My Post
    waitingBook(state, payload) {
      return (state.myWatingBooking = payload);
    },
    // Get All My Post
    myPosts(state, payload) {
      return (state.myPosts = payload);
    },
    // Get Post IN Page
    allPosts(state, payload) {
      return (state.pagePosts = payload);
    },
    // Get Post By Id
    getOnePost(state, payload) {
      return (state.postById = payload);
    },
    requests(state, payload) {
      return (state.requests = payload);
    },
    postHaveRequest(state, payload) {
      return (state.postHaveRequest = payload);
    },
    // Post Number
    // postNumbers(state,payload){
    //   return state.postsNum = payload
    // },
    // BooksNumbers(state,payload){
    //   return state.BooksNum = payload
    // },
    // requestNumbers(state,payload){
    //   return state.RequestsNum = payload
    // },
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
      commit("carModel", payload.carModel);
      commit("email", payload.email);
    },
    // make car wash
    async completeWashBook({ state }) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let repo = await axios.post(
          `https://car-care3.herokuapp.com/api/carWash/register`,
          state.usercarwash,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        console.log(repo);
        swal({
          title: "Thank You!",
          text: `${repo.data.message}`,
          icon: "success",
          button: "Ok!",
        });
        router.push({ path: "/" });
      } catch (error) {
        console.log(error);
      }
    },
    // for book post
    async booking({ state, dispatch }, payload) {
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
        console.log(postBooking);
        swal({
          title: "Thank You!",
          text: `${postBooking.data.message}`,
          icon: "success",
          button: "Ok!",
        });
        dispatch("getWaitingPostFun");
        this.$router.push("passenger");
      } catch (error) {
        swal({
          title: "Opps!",
          text: `${error.response.data.message}`,
          icon: "error",
          button: "Ok!",
        });
      }
    },
    // my booking list
    async getWaitingPostFun({ commit }) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let watingPosts = await axios.get(
          `https://car-care3.herokuapp.com/api/Booking/`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        console.log(watingPosts)
        commit("waitingBook", watingPosts.data.booking);
        // commit("BooksNumbers", watingPosts.data.booking.length);
      } catch (error) {
        console.log(error);
      }
    },
    // Get Requests
    async postRequest({ commit }) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let posts = await axios.get(
          `https://car-care3.herokuapp.com/api/carSharingPost/getBooking`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        // dispatch("postHaveRequest",post.data.booking.carSharingPostId)
        console.log(posts.data)
        commit("requests", posts.data.booking);
      } catch (error) {
        console.log(error);
      }
    },
    // Post it's have requests
    async postHaveRequest({ commit }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let postsRequested = await axios.get(
          `https://car-care3.herokuapp.com/api/carSharingPost/getPostById/${payload}`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        console.log(postsRequested.data)
        commit("postHaveRequest", postsRequested.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getMyAllPosts({ commit }) {
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
        // commit("postNumbers", posts.data.length);
      } catch (error) {
        console.log(error);
      }
    },
    async getPostById({ commit }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let post = await axios.get(
          `https://car-care3.herokuapp.com/api/carSharingPost/getPostById/${payload}`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        commit("getOnePost", post.data);
        console.log(post.data)
      } catch (error) {
        console.log(error);
      }
    },
    // Delete Post
    async deletePost({ state }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      console.log(state);

      await axios.delete(
        `https://car-care3.herokuapp.com/api/carSharingPost/deleteMyPost/${payload}`,
        {
          headers: {
            "x-auth-token": `${usertoken}`,
          },
        }
      );
      router.push("/passenger");
    },

    // Delete Post Book
    async DeletebookPost({ dispatch }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      await axios.delete(
        `https://car-care3.herokuapp.com/api/Booking/${payload}`,
        {
          headers: {
            "x-auth-token": `${usertoken}`,
          },
        }
      );
      dispatch("getWaitingPostFun");
    },

    // accept book
    async acceptBook({ dispatch }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
         let respo = await axios.patch(
          `https://car-care3.herokuapp.com/api/carSharingPost/acceptedBooking/${payload}/true`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        swal({
          title: "Successed!",
          text: `${respo.data.message} And will be remove this request after day`,
          icon: "success",
          button: "Ok!",
        });
        dispatch("postRequest")
        this.router.push("/passenger")
      } catch (error) {
        console.log(error);
        swal({
          title: "Opps!",
          text: `Your number of passengers is complete`,
          icon: "error",
          button: "Ok!",
        });
      }
    },
    // delete book
    async rejectBook({ dispatch }, payload) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
       await axios.patch(
          `https://car-care3.herokuapp.com/api/carSharingPost/acceptedBooking/${payload}/false`,
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        dispatch("postRequest")
      } catch (error) {
        console.log(error);
      }
    },
    // Get All Post
    async allPosts({ commit }) {
      let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let posts = await axios.get(
          "https://car-care3.herokuapp.com/api/carSharingPost/getAllPost",
          {
            headers: {
              "x-auth-token": `${usertoken}`,
            },
          }
        );
        // this.passengerPost = posts.data.carSharingPost;
        console.log(posts.data.carSharingPost)
        commit("allPosts", posts.data.carSharingPost);
      } catch (error) {
        console.log(error);
      }
    },
    // Search From City to City
    async submitSearch({ commit }, payload) {
      // let usertoken = JSON.parse(localStorage.getItem("usertoken"));
      try {
        let searchFun = await axios.get(
          `https://car-care3.herokuapp.com/api/carSharingPost/getAllPost/?from=${payload.startCity}&to=${payload.endCity}`
        );
        commit("allPosts", searchFun.data.carSharingPost);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
