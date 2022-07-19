<template>
  <div class="tables">
    <table class="post-table mb-3">
      <thead>
        <tr>
          <th>Description</th>
          <th>Passangers</th>
          <th>Status</th>
          <th v-if="post.checked == true">Post Owner</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ post.description }}</td>
          <td>{{ post.many }}</td>
          <td>{{ post.checked == false ? "Wating" : "Accepting" }}</td>
          <td v-if="post.checked == true">{{post.userId.phone}}</td>
          <td>
            <button class="btn bg-danger rounded-0" @click="deleteBook(post._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="confirmDelete center-items p-5" v-if="showConfirm">
      <div class="buttons-confirm">
        <h3>Are You Sure To Delete!</h3>
        <div class="conf-buttons">
          <button class="btn btn-danger mx-3" @click="confirmDelete('delete')">
            Delete
          </button>
          <button class="btn btn-cancel mx-3" @click="confirmDelete('cancel')">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"],
  data() {
    return {
      showConfirm: false,
      id:this.post._id
    };
  },
  mounted() {
    if(document.querySelector(".container").childElementCount > 0){
      console.log("done")
    }
  },
  methods: {
    deleteBook() {
      if (this.showConfirm == false) {
        this.showConfirm = true;
      }
    },
    confirmDelete(confirmType) {
      if (confirmType == "delete") {
        this.$store.dispatch("DeletebookPost", this.id);
        this.showConfirm = false;

      } else {
        this.showConfirm = false;
      }
    },
  },
};
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
