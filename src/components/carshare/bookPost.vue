<template>
  <div class="post-modal center-items">
    <form action="" class="position-relative">
      <i class="bi bi-x-circle fs-3 text-light" @click="$emit('closePostModal',postBook.many)"></i>
      <h3 class="fs-3 mb-3">Book Post:</h3>
      <input
        type="number"
        class="form-control mb-2"
        v-model="postBook.many"
        placeholder="How Much Passenger You Have"
      />
      <textarea
        class="form-control"
        v-model="postBook.description"
        placeholder="Description For Post Owner"
      ></textarea>
      <button class="mt-4 btn" type="button" @click="BookPost">Book</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postBook: {
        many: "",
        description: "",
      },
    };
  },
  methods: {
    BookPost() {
      this.$store.dispatch("booking", this.postBook);
    },
  },
};
</script>

<style></style>
