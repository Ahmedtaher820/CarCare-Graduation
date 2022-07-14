<template>
  <h1>hello</h1>
</template>

<script>
export default {
  props:["post"],
  mounted(){
    console.log(this.$route.params.id)
  }
};
</script>

<style></style>
