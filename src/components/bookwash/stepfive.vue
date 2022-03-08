<template>
  <div class="bigbox stepfive noactive fullwidthheight">
    <div class="conatiner mt-5">
      <h2 class="fs-1">Step Five</h2>
      <div class="content border px-md-5 pt-md-3 pb-md-3 p-2">
        <h3 class="fs-3 mb-5">Frequent Questions</h3>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Can I skip or cancel scheduled washes?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes. You can skip a wash, pause your account, or cancel
                altogether anytime. There’s never a commitment!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Where do you wash my car?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Your car will be washed right where you normally park.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How do you access the interior?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                For interior access, you can leave your car unlocked or request
                for your technician to contact you to come unlock it. Set your
                preferences on your Member Profile, once you have completed sign
                up.Either way, your technician will lock the vehicle when the
                wash is complete.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-target="#collapseFour"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can I get multiple vehicles washed?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes, you may add additional vehicles to your account once you
                have completed sign up. Look for the blue "Add Vehicle" button.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-target="#collapseFive"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                When will the operation be performed?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                We will verify the data as soon as possible, then all the
                details will be sent to the email attached with the previous
                data
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-target="#collapseSix"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Way to pay money?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Payment will be upon the arrival of our representative and the
                billing will be based on the pricing plan you have chosen
              </div>
            </div>
          </div>
          <button
            class="btn mx-auto mt-5 carwashbtn py-3 px-4"
            type="button"
            @click="nextslide"
          >
            To Last Step
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    nextslide() {
      let parent = document.querySelector(".stepfive");
      let next = parent.nextElementSibling;
      this.changeslide(parent, next);
    },
    changeslide(parent, next) {
      parent.classList.add("noactive");
      parent.classList.remove("active");
      next.classList.add("active");
      next.classList.remove("noactive");
    },
  },
};
</script>

<style>
.show {
  -webkit-animation-name: showhidden !important;
  animation-name: none !important;
}
.stepfive .content {
  width: 70%;
  margin: 30px auto;
}
@media (max-width: 768px) {
  .stepfive .content {
    width: 95%;
    margin: 20px 2.5%;
  }
}
.stepfive .content .accordion-button:not(.collapsed) {
  color: var(--maincolor);
  background-color: var(--secondcolor);
  box-shadow: none;
}
.stepfive .content .accordion-button:focus {
  border-color: none;
  box-shadow: none;
}
</style>
