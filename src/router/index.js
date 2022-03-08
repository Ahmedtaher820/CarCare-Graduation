import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import welcomepage from "../views/welcomepage.vue";
import signin from "../views/signin.vue";
import chooserole from "../views/chooserole.vue";
import login from "../views/login.vue";
import reset from "../views/reset.vue";
import verify from "../views/verify.vue";
import profile from "../views/profile.vue";
import Services from "../views/services.vue";
import aboutus from "../views/aboutpage.vue";
import contact from "../views/contactus.vue";
import carwash from "../views/carwash.vue";
import bookwash from "../views/bookwash.vue";
import edit from "../views/edit.vue";
import "../global/global.css";
import "../global/animation.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props:true,
    meta:{
      title:"Home"
    }
  },
  {
    path: "/welcomepage",
    name: "welcomepage",
    component: welcomepage,
    meta:{
      title:"welcomepage"
    }
  },
  {
    path: "/signin/:dervier",
    name: "signin",
    component: signin,
    meta:{
      title:"Signin Page"
    }
  },
  {
    path:"/chooserole",
    name: "chooserole",
    component: chooserole,
    meta:{
      title:"ChooseRole"
    }
  },
  {
    path:"/login",
    name: "login",
    component: login,
    meta:{
      title:"loginPage"
    }
  },
  {
    path:"/verify",
    name: "verify",
    component: verify,
    meta:{
      title:"verifyPage"
    }
  },
  {
    path:"/reset",
    name: "reset",
    component: reset,
    meta:{
      title:"RestPassword"
    }
  },
  {
    path:"/profile",
    name: "profile",
    component: profile,
    meta:{
      title:"Profile"
    }
  },
  {
    path:"/services",
    name: "services",
    component: Services,
    meta:{
      title:"Services"
    }
  },
  {
    path:"/contact",
    name: "contact",
    component: contact,
    meta:{
      title:"ContactUs"
    }
  },
  {
    path:"/aboutus",
    name: "aboutus",
    component: aboutus,
    meta:{
      title:"Aboutus"
    }
  },
  {
    path:"/carwash",
    name: "carwash",
    component: carwash,
    meta:{
      title:"CarWash"
    }
  },
  {
    path:"/bookwash",
    name: "bookwash",
    component: bookwash,
    meta:{
      title:"Bookwash"
    }
  },
  {
    path:"/edit",
    name: "edit",
    component: edit,
    meta:{
      title:"Edit-Profile"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to,from,next)=>{
  document.title =`${to.meta.title} | CarCare`
  next();
})

export default router;
