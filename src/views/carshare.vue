<template>
  <div class="car-share center-items flex-column gap-5">
    <h2 class="fs-2">Car Share</h2>
    <div class="user-type d-flex flex-md-row flex-column gap-4">
      <div>
        <router-link
          class="text-decoration-none d-inline-block fs-3"
          to="/driver"
        >
          DRIVER
        </router-link>
      </div>
      <div>
        <router-link
          class="text-decoration-none d-inline-block fs-3"
          to="/passenger"
        >
          PASSENGER
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.car-share {
  height: calc(100vh - 100px);
}
.user-type div a {
  width: 250px;
  height: 170px;
  color: var(--secondcolor);
  background-color: var(--maincolor);
  border-radius: 15px;
  transition: 0.3s;
  line-height: 170px;
}
.user-type div a:hover {
  color: var(--maincolor);
  background-color: var(--secondcolor);
}
</style>
