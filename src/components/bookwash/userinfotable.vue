<template>
  <div class="tablebox p-1 border">
    <div class="row">
      <div class="col-12">
        <div class="info text-start bg-light p-4 mb-3 text-dark">
          <h3 class="fs-3 mb-2">Car Infomation:</h3>
          <ul class="listcar tab list-unstyled">
            <div class="row">
              <div class="col-6">
                <li class="fs-5 mb-2">Make: {{ carinfo.make }}</li>
              </div>
              <div class="col-6">
                <li class="fs-5 mb-2">Model: {{ carinfo.model }}</li>
              </div>
              <div class="col-6">
                <li class="fs-5 mb-2">Color: {{ carinfo.color }}</li>
              </div>
              <div class="col-6">
                <li class="fs-5">Type: {{ carinfo.type }}</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="col-12">
        <div class="info text-start bg-light p-4 text-dark">
          <h3 class="fs-3 mb-2">User Infomation:</h3>
          <ul class="userinfo tab list-unstyled">
            <div class="row">
              <div class="col-6">
                <li class="fs-5 mb-2">
                  FirstName: <span>{{ userinfo.firstname }}</span>
                </li>
              </div>
              <div class="col-6">
                <li class="fs-5 mb-2">
                  LastName: <span>{{ userinfo.lastname }}</span>
                </li>
              </div>
              <div class="col-6">
                <li class="fs-5 mb-2">
                  Email: <span>{{ userinfo.email }}</span>
                </li>
              </div>
              <div class="col-6">
                <li class="fs-5 mb-2">
                  Phone: <span>{{ userinfo.phone }}</span>
                </li>
              </div>
              <div class="col-6">
                <li class="fs-5 mb-2">
                  Id: <span>{{ userinfo.id }}</span>
                </li>
              </div>
              <div class="col-6">
                <li>
                  Coupon: <span>{{ userinfo.coupon }}</span>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    carinfo() {
      return this.$store.state.usercarwash.car;
    },
    userinfo() {
      return this.$store.state.usercarwash.personal;
    },
  },
};
</script>

<style>
.tablebox,
.mapbox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;
}
.info {
}
.userinfo li span {
  font-size: 20px;
  font-weight: bold;
}
</style>
