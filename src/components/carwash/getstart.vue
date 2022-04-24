<template>
  <div class="getstart py-5 my-3">
    <h2 class="fs-1 fw-bold">Ready to Get Started?</h2>
    <div class="row mt-5">
      <div class="col-md-4">
        <div class="getbox d-flex flex-column gap-2">
          <div class="getbox-img">
            <img src="../../assets/carwash/contact/bookweb.jpg" alt="" />
          </div>
          <h3 class="fs-4">BOOK A SERVICE</h3>
          <p>
            Book
            <router-link
              to="/carwashBook"
              class="text-primary text-decoration-underline"
              >ONLINE</router-link
            >
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="getbox d-flex flex-column gap-2">
          <div class="getbox-img">
            <img src="../../assets/carwash/contact/chat.jpg" alt="" />
          </div>
          <h3 class="fs-4">ONLINE CHAT</h3>
          <p>
            <a
              @click="whatsshow = true"
              class="text-primary text-decoration-underline"
              >Click To Make Whatsapp Chat</a
            >
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="getbox d-flex flex-column gap-2">
          <div class="getbox-img">
            <img src="../../assets/carwash/contact/phone.jpg" alt="" />
          </div>
          <h3 class="fs-4">CALL US</h3>
          <p>
            Call
            <a
              href="tel:01008203698"
              class="text-primary text-decoration-underline"
              >01008203698</a
            >
            to speak with our customer care team.
          </p>
        </div>
      </div>
    </div>
    <vue-whatsapp-widget
      v-if="whatsshow"
      companyName="CareCar"
      phoneNumber="+201008203698"
    />
  </div>
</template>

<script>
import VueWhatsappWidget from "vue-whatsapp-widget";

export default {
  data() {
    return {
      whatsshow: false,
    };
  },
  components: { VueWhatsappWidget },
};
</script>

<style>
.getbox-img {
  width: 150px;
  margin: 0px auto;
}
.getbox-img img {
  width: 100%;
}
</style>
