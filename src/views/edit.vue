<template>
  <div class="editprofile">
    <div class="container">
      <!-- <input type="file" @change="onchangeevent" />
      <button @click="upload">upload</button>
      <img :src="img" alt="" /> -->
      <input type="text" v-model="name" />
      <button type="button" @click="change" ref="inputupdate">Change</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file: null,
      img: "",
      name: "",
    };
  },
  methods: {
    // onchangeevent(e) {
    //   this.file = e.target.files[0];
    // },
    // upload() {
    //   let fd = new FormData();
    //   fd.append("image", this.file, this.file.name);
    //   axios
    //     .patch("https://car-care3.herokuapp.com/api/users/updateMyPhoto", fd)
    //     .then((resolve) => {
    //       this.img = resolve.data.url;
    //       console.log(resolve);
    //     });
    // },
    change() {
      console.log(this.name);
      axios
        .patch("https://car-care3.herokuapp.com/api/users/updateMe", this.name)
        .then((resolve) => {
          console.log(resolve);
        });
    },
  },
  computed: {
    // userprofile() {
    //   return this.$store.state.userprofile;
    // },
  },
  created() {
    //   let id = JSON.parse(localStorage.getItem("user-info"));
    //    axios
    //     .get("https://car-care3.herokuapp.com/api/users/5555/" + id)
    //     .then((response) => {
    //         // this.$refs.inputupdate.value = response.data.user.name
    //         // console.log(this.$refs.inputupdate.value)
    //        this.name = response.data.user.name;
    //     });
  },
};
</script>

<style></style>
