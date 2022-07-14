<template>
  <div class="contact">
    <pagebg :title="title" />
    <div class="container">
      <h2 class="main-title fs-2">Contact Us</h2>
      <div class="row contact-row">
        <div
          v-for="(data, i) in contactData"
          :key="i"
          :class="data.mainclass"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-os-delay="500"
        >
          <div
            class="haeding-box py-4 text-center shadow bg-light rounded-3 text-muted"
          >
            <i :class="data.icon"></i>
            <p>{{ data.paragraph }}</p>
          </div>
        </div>
        <div class="contact-main row mt-5">
          <div
            class="col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-os-delay="200"
          >
            <div class="con-box mb-md-0 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d219909.0810580769!2d32.296855496887424!3d30.547060922997975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1645251075259!5m2!1sen!2seg"
                width="100%"
                height="368"
                loading="lazy"
                class="p-4 bg-light rounded-3 shadow"
              ></iframe>
            </div>
          </div>
          <div
            class="col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="contact-form bg-light p-4 shadow rounded-3">
              <form>
                <div class="row">
                  <div class="col-6">
                    <input
                      type="text"
                      class="p-2 bg-transparent"
                      placeholder="Enter Your Name"
                      v-model="name"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="Email"
                      class="p-2 bg-transparent"
                      placeholder="Enter Your Email"
                      v-model="email"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="p-2 bg-transparent"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      class="p-2 bg-transparent"
                      placeholder="Enter Your Message"
                      v-model="message"
                      maxlength="150"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    class="btn fs-5 btn-main-bg"
                    @click="check"
                  >
                    Send Message
                  </button>
                  <span class="main-text text-center mt-2" v-if="errMsg"
                    >Mail Sent Successfully!</span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import pagebg from "../components/pagesbg.vue";

export default {
  components: {
    pagebg,
  },
  data() {
    return {
      title: "CONTACT US",
      contactData: {
        loctaion: {
          mainclass: "col-md-6 ",
          icon: "bi bi-geo-alt contact-icon rounded-circle mb-1 fs-2 bg-light d-inline-block border main-text",
          paragraph: "El-Soltan Street, Ismailia, NY 535022",
        },
        email: {
          mainclass: "col-md-3 col-6 mt-md-0 mt-2",
          icon: "bi bi-envelope contact-icon rounded-circle mb-1 fs-2 bg-light d-inline-block border main-text",
          paragraph: "Ahmedtaher@gmail.com",
        },
        call: {
          mainclass: "col-md-3 col-6 mt-md-0 mt-2",
          icon: "bi bi-telephone contact-icon rounded-circle mb-1 fs-2 bg-light d-inline-block border main-text",
          paragraph: "01008203698",
        },
      },
      name: "",
      email: "",
      message: "",
      err: [],
      errMsg: false,
    };
  },
  methods: {
    check() {
      this.err = [];
      if (!this.name) {
        swal({
          title: "Opps!",
          text: "Name Field Must Me Complete!",
          icon: "error",
          button: "Ok!",
        });
        this.err.push("err");
        return false;
      }
      if (!this.message) {
        swal({
          title: "Opps!",
          text: "Message Field Must Me Complete!",
          icon: "error",
          button: "Ok!",
        });
        this.err.push("err");
        return false;
      }
      this.emailCheck();
      if (this.err.length == 0) {
        this.errMsg = true;
        setTimeout(() => {
          this.errMsg = false;
        }, 5000);
      }
    },
    emailCheck() {
      if (!this.email) {
        swal({
          title: "Opps!",
          text: "Email Field Must Me Complete!",
          icon: "error",
          button: "Ok!",
        });
        this.err.push("err");
      } else {
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.email.match(validRegex)) {
          return true;
        } else {
          swal({
            title: "Opps!",
            text: "Make Sure From Email Input!",
            icon: "error",
            button: "Ok!",
          });
          this.err.push("err");
          return false;
        }
      }
    },
  },
};
</script>
<style>
.contact-icon {
  width: 50px;
  height: 50px;
  line-height: 50px;
}
.contact-row .haeding-box {
  position: relative;
  transition: 0.3s;
  z-index: 1;
}
.contact-row .haeding-box::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 0%;
  background-color: var(--secondcolor);
  z-index: -1;
  transition: 0.4s;
}
.contact-row .haeding-box:hover::before {
  width: 100%;
}
.contact-row .haeding-box:hover {
  color: #fff !important;
}
.contact-form form input,
.contact-form form textarea {
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
}
.contact-form form input::placeholder,
.contact-form form textarea::placeholder {
  color: rgb(90, 90, 90);
  padding-left: 5px;
}
.contact-form form textarea {
  height: 150px;
}
.contact-row form input:focus,
.contact-row form textarea:focus {
  outline: none;
}
.contact-form form button {
  border: 1px solid #fff;
}
.contact-form form button:hover {
  color: white;
}
</style>
