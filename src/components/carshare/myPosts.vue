<template>
<div>
  {{getAllPosts}}
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted(){
    this.$store.dispatch("getMyAllPosts")
  },
  computed:{
    getAllPosts(){
        return this.$store.state.myPosts
    }
  }
};
</script>

<style></style>
