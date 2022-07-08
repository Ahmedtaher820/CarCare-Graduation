<template>
<div>
    {{getBooking}}
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch("getWaitingPostFun");
  },
  computed:{
    getBooking(){
        return this.$store.state.myWatingBooking
    }
  }
};
</script>

<style></style>
