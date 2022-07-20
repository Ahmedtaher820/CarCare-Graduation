<template>
  <div class="profile father center-items flex-column" @mousemove="movecard">
    <h2 class="main-title">User Profile</h2>
    <div class="profile-card rounded">
      <div class="card-box" v-for="(info, i) in userinfo" :key="i">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="left-box">
              <div
                class="deleteMe"
                @click="deleteMe"
                title="Delete Your Account"
              >
                <i class="bi bi-trash"></i>
              </div>
              <div class="card-img mb-3 position-relative mx-auto">
                <img :src="info.url" alt="" />
                <i
                  class="bi bi-pencil-square position-absolute text-dark rounded-circle"
                  @click="file"
                ></i>
                <input
                  type="file"
                  @change="fileupload"
                  class="d-none"
                  accept="image/*"
                />
              </div>
              <h3 class="fs-5 fw-bold mb-2">
                {{ info.name.toUpperCase() }}
              </h3>
              <h2 class="fs-5 mb-2">{{ info.job }}</h2>
              <i
                class="bi bi-box-arrow-right fs-4"
                title="logout"
                @click="logout"
              ></i>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="right-box text-start ps-0 ps-md-5 py-3 shadow">
              <h4 class="fs-4 border-bottom pb-2 d-none d-md-block">
                User Information
              </h4>
              <div
                class="info-box d-flex mb-3 flex-column flex-md-row gap-md-4 gap-1"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="field mt-2">
                      <h6 class="mb-0 fs-5">
                        Username
                        <p v-if="showname" @dblclick="showname = false">
                          {{ info.name }}
                        </p>
                        <div class="profile-group">
                          <input
                            type="text"
                            class="profile-input"
                            v-model="info.name"
                            v-if="!showname"
                            @keyup.enter="changeinfo(info.name, 'name')"
                          />
                          <span
                            v-if="!showname"
                            class="d-inline-block d-md-none"
                            @click="changeinfo(info.name, 'name')"
                            >Change</span
                          >
                        </div>
                      </h6>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field mt-2">
                      <h6 class="mb-0 fs-5">
                        Job
                        <p v-if="showjob" @dblclick="showjob = false">
                          {{ info.job }}
                        </p>
                        <div class="profile-group">
                          <input
                            type="text"
                            v-model="info.job"
                            class="profile-input"
                            v-if="!showjob"
                            @keyup.enter="changeinfo(info.job, 'job')"
                          />
                          <span
                            v-if="!showjob"
                            class="d-inline-block d-md-none"
                            @click="changeinfo(info.job, 'job')"
                            >Change</span
                          >
                        </div>
                      </h6>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field mt-2">
                      <h6 class="mb-0 fs-5">Phone</h6>
                      <p @dblclick="showphone = false" v-if="showphone">
                        {{ info.phone }}
                      </p>
                      <div class="profile-group">
                        <input
                          type="text"
                          v-model="info.phone"
                          class="profile-input"
                          v-if="!showphone"
                          @keyup.enter="changeinfo(info.phone, 'phone')"
                        />
                        <span
                          v-if="!showphone"
                          class="d-inline-block d-md-none"
                          @click="changeinfo(info.phone, 'phone')"
                          >Change</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field mt-2">
                      <h6 class="mb-0 fs-5">Email</h6>
                      <p>{{ info.email }}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field mt-2">
                      <h6 class="mb-0 fs-5">Password</h6>
                      <span
                        class="text-primary text-decoration-underline change"
                        @click="changepass"
                        >Change Password</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="text-start fs-5"
      >*to edit your information double click in the field need to change
      it</span
    >
    <span class="text-start d-md-inline-block d-none"
      >*to save your change press enter</span
    >
    <passmodal
      :token="this.token"
      v-on:closemodal="closemodal"
      v-if="showmodal"
    />
    <loading v-if="showloading" />
  </div>
</template>

<script>
import axios from "axios";
import passmodal from "../components/passmodal.vue";
import loading from "../components/loading.vue";
import swal from "sweetalert";
export default {
  name: "profile",
  components: {
    passmodal,
    loading,
  },
  data() {
    return {
      userinfo: [],
      showname: true,
      showemail: true,
      showjob: true,
      showphone: true,
      token: null,
      showmodal: false,
      showloading: false,
      userConfirmDelete: false,
      info: {
        name: "",
        job: "",
        phone: null,
      },
    };
  },
  created() {
    let id = JSON.parse(localStorage.getItem("user-info"));
    if (!id) {
      this.$router.push("/login");
    }
    this.showloading = true;

    this.token = JSON.parse(localStorage.getItem("usertoken"));
    axios
      .get("https://car-care3.herokuapp.com/api/users/5555/" + id)
      .then((response) => {
        console.log(response.data.user);
        this.userinfo.push(response.data.user);
        this.showloading = false;
      });
  },
  methods: {
    movecard(event) {
      if (window.innerWidth > 768) {
        var card = document.querySelector(".profile .card-box");
        let x = (window.innerWidth / 2.5 - event.clientX) / 40;
        let y = (window.innerHeight / 2.5 - event.clientY) / 40;
        card.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
      } else {
        return;
      }
    },
    async changeinfo(e, type) {
      console.log(type);
      if (type === "name") {
        this.showname = true;
        await axios.patch(
          "https://car-care3.herokuapp.com/api/users/updateMe",
          { name: e },
          { headers: { "x-auth-token": `${this.token}` } }
        );
      } else if (type === "job") {
        this.showjob = true;
        await axios.patch(
          "https://car-care3.herokuapp.com/api/users/updateMe",
          { job: e },
          { headers: { "x-auth-token": `${this.token}` } }
        );
      } else {
        this.showphone = true;
        await axios.patch(
          "https://car-care3.herokuapp.com/api/users/updateMe",
          { phone: e },
          { headers: { "x-auth-token": `${this.token}` } }
        );
      }
    },
    file() {
      let fileinput = document.querySelector("input[type='file']");
      fileinput.click();
    },
    fileupload(e) {
      console.log(e.target.files[0]);
      this.uploadimg(e.target.files[0]);
    },
    async uploadimg(item) {
      let fd = new FormData();
      fd.append("img", item, item.name);
      await axios
        .patch("https://car-care3.herokuapp.com/api/users/updateMyPhoto", fd, {
          headers: { "x-auth-token": `${this.token}` },
        })
        .then((resolve) => {
          this.$router.push("/profile");
          console.log(resolve);
        });
    },
    async updataAll(info) {
      console.log(info.name);
      try {
        let repo = await axios.patch(
          `https://car-care3.herokuapp.com/api/users/updateMe`,
          {
            name: info.name,
            job: info.job,
            phone: info.phone,
          },
          {
            headers: { "x-auth-token": `${this.token}` },
          }
        );
        console.log(repo);
      } catch (error) {
        console.log(error);
      }
    },
    changepass() {
      this.showmodal = true;
    },
    closemodal() {
      this.showmodal = false;
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    async deleteMe() {
      try {
        await axios.delete(
          `https://car-care3.herokuapp.com/api/users/deleteMe`,
          {
            headers: { "x-auth-token": `${this.token}` },
          }
        );
        swal({
          title: "Successed!",
          text: `Your Account Was Deletedو Have a nice time`,
          icon: "success",
          button: "Ok!",
        });
        localStorage.removeItem("usertoken");
        localStorage.removeItem("user-info");
        this.$router.push("/welcomepage");
      } catch (error) {
        console.log("done");
      }
    },
  },
};
</script>

<style>
.profile {
  min-height: 100vh;
  perspective: 1000px;
}
.profile-card {
  margin: 0px auto 0px;
  overflow: hidden;
}
.left-box {
  padding: 30px 20px;
  background: var(--main-gredient);
  color: white;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: none;
}
.profile .row {
  transform-style: preserve-3d !important;
}
.profile .row > * {
  padding: 0px !important;
}
@media (max-width: 768px) {
  .profile .row > * {
    padding: 0px 20px 10px !important;
  }
}
.deleteMe {
  position: absolute;
  top: -10px;
  left: -10px;
  font-size: 22px;
  width: 60px;
  height: 60px;
  background-color: white;
  color: var(--secondcolor);
  border-radius: 50%;
  cursor: pointer;
  line-height: 60px;
  text-align: center;
  transition: 0.3s;
}
.deleteMe:hover {
  background-color: var(--secondcolor);
  color: white;
  border: 1px solid #fff;
}
.deleteMe i {
  position: relative;
  right: -5px;
}
.right-box {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.field p {
  color: #444;
}
.field input {
  width: fit-content;
}
.card-img {
  width: fit-content !important;
}
.card-img img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}
.bi-pencil-square {
  bottom: 0px;
  right: 0px;
  width: 64px;
  height: 64px;
  line-height: 64px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.575);
  transition: var(--maintransition);
  opacity: 0;
  z-index: 2;
}
.card-img:hover .bi-pencil-square {
  opacity: 1;
}
span.change,
.bi-box-arrow-right {
  cursor: pointer;
}
/* profile-card button to change data in small screen */
.profile-card button {
  width: fit-content;
  background-color: var(--secondcolor);
  padding: 10px !important;
}
.profile-input {
  width: 100%;
  border: none;
  outline: none;
  flex: 1;
  padding: 5px 10px;
}
@media (max-width: 768px) {
  .profile-group {
    background-color: #f1f1f1;
    display: flex;
  }

  .profile-group span {
    background-color: var(--secondcolor);
    color: white;
    line-height: 35px;
    padding: 3px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
