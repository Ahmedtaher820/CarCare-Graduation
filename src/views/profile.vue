<template>
  <div class="profile father center-items flex-column" @mousemove="movecard">
    <h2 class="main-title">User Card</h2>
    <div class="profile-card mt-3 rounded">
      <div class="card-box">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="left-box">
              <div class="card-img mb-3">
                <img :src="userprofile.url" alt="" />
              </div>
              <h3 class="fs-5 fw-bold mb-2">
                {{ userprofile.name.toUpperCase() }}
              </h3>
              <h2 class="fs-5 mb-3">{{ userprofile.job | uppercase }}</h2>
              <router-link to="/edit" :userinfo="userprofile" class="text-dark"
                ><i class="bi bi-pencil-square fs-5"></i
              ></router-link>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="right-box text-start ps-5 py-3 shadow">
              <h4 class="fs-4 border-bottom pb-2">Information</h4>
              <div
                class="info-box d-flex mb-3 flex-column flex-md-row gap-md-4 gap-1"
              >
                <div class="email">
                  <h4 class="fw-bold mb-0 fs-5">Email</h4>
                  <p>{{ userprofile.email }}</p>
                </div>
                <div class="Phone">
                  <h4 class="fw-bold mb-0 fs-5">Phone</h4>
                  <p>{{ userprofile.phone }}</p>
                </div>
              </div>
              <h4 class="fs-4 border-bottom pb-2">Information</h4>
              <div
                class="info-box d-flex flex-column flex-md-row gap-md-4 gap-0"
              >
                <div class="email">
                  <h4 class="mb-0 fw-bold fs-5">Lasted Update</h4>
                  <p>12 days</p>
                </div>
                <div class="Phone">
                  <h4 class="mb-0 fw-bold fs-5">Phone</h4>
                  <p>{{ userprofile.phone }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      user: this.userinfo,
    };
  },
  created() {
    this.$store.dispatch("userAllinfo");
  },
  computed: {
    userprofile() {
      return this.$store.state.userprofile;
    },
  },
  methods: {
    movecard(event) {
      var card = document.querySelector(".profile .card-box");
      let x = (window.innerWidth / 2 - event.clientX) / 40;
      let y = (window.innerWidth / 2 - event.clientY) / 40;
      card.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
    },
  },
};
</script>

<style>
.profile {
  min-height: 100vh;
  perspective: 1000px;
}
.profile-card {
  width: 50%;
  margin: 0px auto 0px;
}
@media (max-width: 991) {
  .profile-card {
    width: 75%;
  }
}
.left-box {
  padding: 30px 20px;
  background: linear-gradient(
    45deg,
    rgba(212, 88, 16, 0.431),
    rgba(129, 117, 5, 0.575)
  );
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.profile .row {
  transform-style: preserve-3d !important;
}
.profile .row > * {
  padding: 0px !important;
}
.right-box {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.right-box h4 {
  width: 80%;
}
.profile img{
  width: 64px;
}
</style>
