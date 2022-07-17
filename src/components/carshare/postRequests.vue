<template>
  <div>
    <table
      class="post-table mb-3"
      v-for="(req, index) in requests"
      :key="index"
    >
      <thead>
        <tr>
          <th>description</th>
          <th>many</th>
          <th colspan="2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ req.description }}</td>
          <td>{{ req.many }}</td>
          <td><button class="btn" @click="accept(req._id)">Accept</button></td>
          <td>
            <button class="btn bg-danger rounded-0" @click="ignore(req._id)">
              Ignore
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("postRequest");
  },
  methods: {
    accept(postId) {
      console.log(postId);
      this.$store.dispatch("acceptBook", postId);
    },
    ignore(postId) {
      this.$store.dispatch("deleteBook", postId);

      // console.log(
      //   event.target.parentElement.parentElement.parentElement.parentElement,
      //   postId
      // );
      // event.target.parentElement.parentElement.parentElement.parentElement.remove();
    },
  },
  computed: {
    requests() {
      return this.$store.state.requests;
    },
  },
};
</script>

<style></style>
