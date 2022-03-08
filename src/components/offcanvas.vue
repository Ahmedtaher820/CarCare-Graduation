<template>
<div class="off-box">
    <a href="#services-off" data-bs-toggle="offcanvas" class="services text-light text-underline fs-2 position-absolute">Services</a>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="services-off" aria-labelledby="services-off">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title" id="services-off">Our Services</h2>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <accordion />
  </div>
</div>
</div>

</template>

<script>
import accordion from "../components/accordion.vue"
export default {
    components:{
        accordion
    }
}
</script>

<style>
    a.services{
        top: 20px;
        right: 40px;
        z-index: 200;
    }
    @media (max-width:992px){
        a.services{
            display: none;
        }
    }
</style>