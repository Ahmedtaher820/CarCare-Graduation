<template>
  <div class="accordion " id="accordionExample">
    <div class="accordion-item my-4">
      <h2 class="accordion-header" id="headingOne">
        <button
          class=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          License Check 
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body text-start fs-5 mt-2">
          You can use this services to:
          <ul>
            <li>
              view your driving record, for example vehicles you can drive
            </li>
            <li>check your penalty points or disqualifications</li>
            
          </ul>
          The check code will be valid for 21 days. You’ll need:
          <ul>
            <li>your driving licence number</li>
            
          </ul>
        </div>
      </div>
    </div>
  
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Car Wash 
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body text-start mt-3">
          <h5>
            Fins Car Wash is for car lovers--no matter the make, model or age of
            your car. Our motto is FAST, FUN and FINTASTIC.
          </h5>
          <small
            >FAST because we know your time is valuable and that you want to
            spend as much of it on the open road as possible. FUN because you
            have lots of things in your life to be serious about, but a
            two-minute car wash shouldn't be one of them. FINTASTIC because,
            well, it just is!</small
          >
        </div>
      </div>
    </div>
    <div class="accordion-item my-4">
      <h2 class="accordion-header" id="headingFour">
        <button
          class="collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Car Share 
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body text-start mt-3">
          <p>
            Car sharing is all about filling empty seats, sharing costs, and
            it’s a great way to meet new people. You can get to know your
            colleagues or new travelers going the same way.<br><br> Here are a few
            examples of when car sharing can be used:
            <ul>
                
                <li>Commuting<strong>to work</strong> </li>
                <li>Doing the <strong>school run</strong></li>
                <li>Going to <strong>college / university</strong></li>
                <li>Travelling to a <strong>festival</strong>, a <strong>big event</strong> or a <strong>show</strong></li>
                <li>Going to a <strong>sporting match</strong></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.accordion-header img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.accordion-header {
  background-color: #fff;
}
.accordion-header button{
  background-color: transparent ;
  color: var(--secondcolor);

}
.accordion-body {
  background-color: #fff;
  color: var(--secondcolor);
}
.accordion-button:not(.collapsed) {
  color: #fff;
  background-color: var(--secondcolor);
}
.accordion-button.collapsed {
  color: #fff;
  background-color: var(--secondcolor);
}
.accordion-item{
  border: none;
}
</style>
