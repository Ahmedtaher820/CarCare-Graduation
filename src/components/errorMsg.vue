<template>
  <div class="errorMsg">{{err}}</div>
</template>

<script>
export default {
props:["err"]
}
</script>

<style>
.errorMsg{
    padding: 10px 20px;
    background-color: var(--thirdcolor);
    border-radius: 5px;
    text-align: center;
    width: fit-content;
    margin: 0px auto 10px;
    color: white;
}
</style>