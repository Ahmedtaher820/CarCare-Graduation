<template>
  <div class="loading center-items">
    <svg>
      <circle cx="70" cy="70" r="70" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--maincolor);
  z-index: 1000;
}
svg {
  width: 150px;
  height: 150px;
  animation: rotateSvg 2s linear infinite;
}
svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10px;
  stroke: var(--secondcolor);
  transform: translate(5px, 5px);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: animateCirecle 4s linear infinite;
}
@keyframes rotateSvg{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes animateCirecle {
  0%,
  100% {
    stroke-dashoffset: 400;
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: 800;
  }
}
</style>
