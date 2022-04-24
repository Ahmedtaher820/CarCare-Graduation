<template>
  <div class="car-type p-md-4 shadow mb-3 p-0 text-md-start text-center">
    <h3 class="fs-3 mb-0">How often would you like your car washed?</h3>
    <small>Opt out or reschedule anytime - no commitment. </small>
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="wash-times">
          <button
            type="button"
            class="btn active border"
            @click="washTime($event, 'monthly')"
          >
            Monthly <br />
            Every 4 Weeks
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wash-times">
          <button
            type="button "
            class="btn border"
            @click="washTime($event, 'weekly')"
          >
            Bi-weekly <br />
            Every 2 Weeks
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wash-times">
          <button
            type="button"
            class="btn border"
            @click="washTime($event, 'oneTime')"
          >
            One Time
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookwashTime: "",
    };
  },
  methods: {
    washTime(event, times) {
      this.bookwashTime = times;
      document.querySelectorAll(".wash-times button").forEach((e) => {
        e.classList.remove("active");
      });
      event.target.classList.add("active");
    },
  },
};
</script>

<style>
.wash-times button {
  font-size: 14px;
  min-height: 55px;
}
</style>
