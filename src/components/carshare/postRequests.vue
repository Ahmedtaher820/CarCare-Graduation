<template>
  <h2>Welcome to</h2>
</template>

<script>
export default {
mounted(){
  this.$store.dispatch("postRequest")
}
}
</script>

<style>

</style>