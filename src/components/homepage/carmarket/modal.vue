<template>
  <div class="modal-map center-items" id="modal">
    <div class="modal-box d-flex flex-column p-4">
      <div class="modal-map-header text-end">
        <i class="bi bi-x-circle fs-3 mb-2" @click="closemodal"></i>
      </div>
      <div class="modal-map-body">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="modal-car-img mx-auto">
                <div class="main-img w-100 center-items">
                  <img
                    :src="require(`../../../assets/oldcars/${carinfo.carimg}.jpg`)"
                    class="w-100"
                  />
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="modal-car-content text-center mt-3">
                <div class="modal-car-header border-bottom">
                  <h3 class="fs-4">{{ carinfo.cartype }}</h3>
                  <ul class="list-unstyled stars-list mb-1">
                    <li><i class="bi bi-star-fill fs-5 me-1"></i></li>
                    <li><i class="bi bi-star-fill fs-5 me-1"></i></li>
                    <li><i class="bi bi-star-fill fs-5 me-1"></i></li>
                    <li><i class="bi bi-star-half fs-5 me-1"></i></li>
                    <li></li>
                  </ul>
                </div>
                <div class="car-info pt-3">
                  <p class="mb-1">
                    BRAND: <strong>{{ carinfo.brand }}</strong>
                  </p >
                  <p class="fw-bold mb-1">
                    PRICE: <strong>{{ carinfo.price }}</strong>
                  </p>
                  <p class="fw-bold mb-1">
                    SELLER NAME: <strong>{{ carinfo.seller }}</strong>
                  </p>
                  <div class="model-btn mt-2 px-3">
                  <button class="btn btn-main-bg mx-1" @click="addcart">
                    <small>ADD TO CART</small>
                  </button>
                  <button class="btn btn-main-bg mx-1 px-3" @click="contact($event)">
                    <small>CALL</small>
                    <i class="bi bi-telephone-fill ms-1"></i>
                  </button>
                </div>
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
import swal from "sweetalert";
export default {
  name: "modal",
  props: ["carinfo"],
  methods: {
    closemodal() {
      this.$emit("closemodal");
    },
    addcart(){
      swal({
          title: "DONE!",
          text: "Product Added To Cart !",
          icon: "success",
          button: "Ok!",
        });
      this.$store.commit("increasecar")
    },
    contact(e){
      e.target.textContent = ""
      if(e.target.textContent == ""){
        e.target.style.fontSize = "18px"
        e.target.textContent = 19952441
      }
      
    }
  },
};
</script>

<style scoped>
.modal-map {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.568);
  z-index: 1000;
  animation: fade 0.7s 1;
}
@keyframes fade {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.modal-map > div {
  width: 80%;
  height: 80%;
  background-color: #fff;
}

.modal-map-header i {
  cursor: pointer;
}
.stars-list i{
   transition: .3s; 
}
.stars-list:hover i{
  color: var(--maincolor) !important;
}
.stars-list li {
  display: inline-block;
  color: var(--secondcolor);
}
.modal-car-img {
  width: 250px;
}
.model-btn .btn {
  border-radius: 0px ;
  transition: 0.5s;
}
.model-btn .btn:hover {
 border-radius: 10px;
  background-color: var(--maincolor) !important;
}
.bi-telephone-fill{
  opacity: 0;
  display: inline-block;
  transform: translateX(30px);
  transition: .3s;
}
.btn:last-of-type:hover .bi-telephone-fill{
  animation: movephone 1 .3s ease-in-out both;
}
@keyframes movephone{
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
