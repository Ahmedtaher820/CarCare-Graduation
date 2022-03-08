<template>
  <div class="chocerole min-h center-items flex-column">
    <h1 class="fs-1 mt-5 mt-md-0 mb-4">Chooce Your Specialization</h1>
    <div class="container-boxes">
      <div class="boxes d-flex center-items flex-column flex-md-row">
        <router-link
          class="btn btn-main-bg d-flex center-items fs-1"
          :to="{ path: '/signin/'+nodervier,params:{dervier:nodervier} }"
          >User</router-link>
        <router-link
          class="btn btn-main-bg d-flex center-items fs-1"
          :to="{ path: '/signin/'+dervier,params:{dervier:dervier}}"
          >Driver</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dervier:1,
            nodervier:0,
        }
    }
};
</script>

<style>
.chocerole .boxes .btn {
  width: 250px;
  height: 250px;
  border-radius: 30px;
  margin: 30px;
}
@media (max-width:767px){
  .chocerole .boxes .btn{
    width: 200px;
    height: 150px;
  }
}
</style>
