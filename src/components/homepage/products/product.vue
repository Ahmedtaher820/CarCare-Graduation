<template>
  <div class="brands" id="brand">
    <h2 class="main-title fs-1 mb-4">Brands</h2>
    <div class="row">
      <div class="col-12">
        <div class="product-brands pt-4 nb-3">
          <productcarousel />
        </div>
      </div>
    </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="products-img mt-3">
              <productimg />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import productcarousel from "./productscarousel.vue";
import productimg from "./productsimg.vue";
export default {
  components: {
    productcarousel,
    productimg,
  },
};
</script>

<style>
.product-brands {
  background-color: rgb(218, 218, 218);
  height: 100px;
}
</style>
