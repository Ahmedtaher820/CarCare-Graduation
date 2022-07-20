<template>
  <div class="footer-section text-light text-start mt-5 position-relative">
    <div class="footer-content">
      <img src="../../assets/logo/logowhite .svg" alt="" class="footer-logo" />
      <ul class="list-unstyled d-flex gap-3 justify-content-center social">
        <li>
          <a href="">
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-google"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-info">
      <h3 class="fs-3 text-center mb-4 footer-header">Car-Care</h3>
      <p><b>Location: </b>El-Soltan Street, Ismailia, NY 535022</p>
      <p>
        <b>Mail: </b>
        <a class="link-light" href="mailto:et8989784@gmail.com"
          >et8989784@gmail.com</a
        >
      </p>
      <p>
        <b>Fax: </b
        ><a class="link-light" href="tel:  0473280912"> 0473280912</a>
      </p>
    </div>
    <div
      class="copyright d-flex text-center justify-content-end align-items-center"
    >
      <p class="mb-0">&copy; <a href="/">CareCare</a> ,All Right Reversed.</p>
      <p class="mb-0 d-none">
        Designed By
        <a href="https://ahmedtaher820.github.io/my-portfolio/" target="_blank"
          >Ahmed Taher</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Josefin+Sans:wght@200;300;400;500;600;700&family=La+Belle+Aurore&family=Lobster&family=Lora:ital,wght@1,400;1,500;1,600;1,700&family=Mochiy+Pop+One&family=Open+Sans:wght@300;400;500;600;700&family=Pacifico&family=Poppins:wght@100;200;300;400;500;600;700;800&family=Raleway:ital,wght@0,500;0,700;1,400&family=Roboto:wght@100&family=Shadows+Into+Light&display=swap");

.footer-section {
  padding: 60px 0px;
  height: 300px;
  background-image: url("../../assets/news/footer.png");
  background-size: cover;
}
.footer-content {
  position: absolute;
  left: 14%;
  bottom: 30%;
}

.footer-header {
  font-family: "Dancing Script", cursive;
  font-weight: bold;
}
.footer-logo {
  width: 200px;
  height: 180px;
}
.footer-section ul li a i {
  font-size: 22px;
  color: #fff !important;
}
.copyright {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 0px 60px;
  color: #0b132b;
  font-size: 18px;
}
.copyright a {
  color: var(--maincolor);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}
.footer-info {
  position: relative;
  left: 50%;
  width: fit-content;
}
@media (max-width: 991px) {
  .footer-info {
    display: none;
  }
}
@media (max-width: 768px) {
  .footer-section {
    background-position: 65%;
  }
  .footer-logo {
    width: 165px;
    position: relative;
    left: 15%;
    top: -35px;
  }
  .social {
    position: absolute;
    left: 15px;
    bottom: 15px;
    gap: 30px !important;
  }
  .footer-content {
    left: 50%;
    transform: translateX(-50%);
  }
  .copyright {
    display: none !important;
  }
}
</style>
