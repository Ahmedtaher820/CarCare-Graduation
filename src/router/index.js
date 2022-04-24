import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import welcomepage from "../views/welcomepage.vue";
import signin from "../views/signin.vue";
import login from "../views/login.vue";
import carwashBook from "../views/carwash-book.vue";
import reset from "../views/reset.vue";
import verify from "../views/verify.vue";
import profile from "../views/profile.vue";
import Services from "../views/services.vue";
import aboutus from "../views/aboutpage.vue";
import contact from "../views/contactus.vue";
import resetpass from "../views/resetpass.vue";
// import carwash from "../views/carwash.vue";
// import bookwash from "../views/bookwash.vue";
import edit from "../views/edit.vue";
import "../global/global.css";
import "../global/animation.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",

    component: Home,
    props: true,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/welcomepage",
    name: "welcomepage",
    component: welcomepage,
    meta: {
      title: "welcomepage",
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: signin,
    meta: {
      title: "Signin Page",
    }
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      title: "loginPage",
    },
  },
  {
    path: "/verify",
    name: "verify",
    component: verify,
    meta: {
      title: "verifyPage",
    },
  },
  {
    path: "/reset",
    name: "reset",
    component: reset,
    meta: {
      title: "RestPassword",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    meta: {
      title: "Services",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
    meta: {
      title: "ContactUs",
    },
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: aboutus,
    meta: {
      title: "Aboutus",
    },
  },
  {
    path: "/carwash",
    name: "carwash",
    component: () => import("../views/carwash"),
    meta: {
      title: "CarWash",
    },
  },
  {
    path: "/bookwash",
    name: "bookwash",
    component: () => import("../views/bookwash.vue"),
    meta: {
      title: "Bookwash",
    },
  },
  {
    path: "/edit",
    name: "edit",
    component: edit,
    meta: {
      title: "Edit-Profile",
    },
  },
  {
    path: "/resetpass",
    name: "resetpass",
    component: resetpass,
    meta: {
      title: "Reset Password",
    },
  },
  {
    path:"/carwashBook",
    name:"carwashBook",
    component:carwashBook,
    meta:{
      title:"CarWash"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | CarCare`;
  next();
});

export default router;
