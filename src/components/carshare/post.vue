<template>
  <div>
    <router-link
      :to="{ path: '/userPost/' + post._id, params: { id: post._id } }"
    >
      <table class="post-table mb-3">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th></th>
            <!-- <th colspan="2"  v-if="post.number > 0">Passengers Completed</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ post.fromCity }}</td>
            <td>{{ post.toCity }}</td>
            <td>{{ post.date.slice(0, post.date.indexOf("T")) }}</td>
            <td colspan="2"  v-if="post.number == 0" class="text-danger pass-comp">*Passengers Completed*</td>

          </tr>
        </tbody>
      </table>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
  
  mounted() {
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.post-table thead th {
  width: 33.33%;
  background-color: var(--maincolor);
  color: var(--secondcolor);
}
.post-table tbody tr td {
  background-color: var(--secondcolor);
  color: white;
}
</style>
