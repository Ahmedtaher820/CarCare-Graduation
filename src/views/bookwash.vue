<template>
  <div class="container-box vw-100">
    <stepone />
    <steptwo />
    <stepthree />
    <stepfour />
    <stepfive />
    <laststep />
  </div>
</template>

<script>
import stepone from "../components/bookwash/stepone.vue";
import steptwo from "../components/bookwash/steptwo.vue";
import stepthree from "../components/bookwash/stepthree.vue";
import stepfour from "../components/bookwash/stepfour.vue";
import stepfive from "../components/bookwash/stepfive.vue";
import laststep from "../components/bookwash/laststep.vue";

export default {
  components: {
    stepone,
    steptwo,
    stepthree,
    stepfour,
    stepfive,
    laststep,
  },
  data() {
    return {};
  },
};
</script>

<style>
.container-box {
  background-color: #fff;
  min-height: 140vh;
  position: relative;
  overflow: hidden;
}
@media (max-width: 768px) {
  .container-box {
    overflow: visible;
  }
}
.bigbox {
  transition: 0.7s;
}
.bi-arrow-down-short {
  cursor: pointer;
}
.bi-arrow-right-short {
  cursor: pointer;
  background-color: var(--secondcolor);
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.bigbox.active {
  opacity: 1;
  pointer-events: auto;
  transform: translate(0px, 0px);
}
.bigbox.noactive {
  transform: translate(-200%, 0px);
  opacity: 0;
  pointer-events: none;
}
.fomrmodal {
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 120vh;
  color: #fff;
  text-align: left;
}
.fomrmodal form {
  width: 80%;
  margin: 0px auto;
}
@media (max-width: 767px) {
  .fomrmodal form {
    width: 100%;
  }
}
.input-box {
  margin-bottom: 12px;
}
.step-1 button {
  width: 100%;
  box-shadow: none !important;
}
.err {
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
}
.step {
  border-radius: 15px;
  width: 80%;
  transition: 0.3s;
}
.fullwidthheight {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 100% !important;
  width: 100%;
}
</style>
