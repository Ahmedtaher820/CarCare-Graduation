<template>
  <div class="bigbox laststep fullwidthheight noactive">
    <h2 class="fs-1 fw-bold my-3">Your Total Information</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="content mt-5">
            <usermap />
          </div>
        </div>
        <div class="col-md-7">
          <div class="content mt-5">
            <userinfotable />
          </div>
        </div>
      </div>
      <div class="price fs-5 d-inline-block py-2 px-4 mt-4 rounded-3">
        Your Wash Total: {{ pricing }}$
      </div>
      <button class="booknow" type="button" @click="booknow">BOOK NOW!<i class="bi bi-heart"></i></button>
    </div>
  </div>
</template>

<script>
import usermap from "./userlocationmap.vue";
import userinfotable from "./userinfotable.vue";
import swal from "sweetalert";
export default {
  data() {
    return {};
  },
  components: {
    usermap,
    userinfotable
  },
  computed: {
    pricing() {
      return this.$store.state.usercarwash.pricing;
    },
  },
  methods:{
      booknow(){
          swal({
          title: "Thank You!",
          text: "Your Book Already Processing Now!",
          icon: "success",
          button: "Ok!",
        });
        this.$router.push("/")
      }
  }
};
</script>

<style>
.laststep {
  overflow: visible;
}
.booknow {
  display: block;
  margin: 30px auto;
  padding: 10px 40px;
  background-color: var(--secondcolor);
  color: white;
  transition: 0.3s;
  border: none;
}
.booknow:hover {
  background-color: var(--maincolor);
  color: var(--secondcolor);
}
.booknow i {
  margin-left: 10px;
}
</style>
