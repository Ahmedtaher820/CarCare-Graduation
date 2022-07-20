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
    <div class="list-unstyled footer-info">
      <h3>Car-Care</h3>
      <li><b>Location: </b>El-Soltan Street, Ismailia, NY 535022</li>
      <li></li>
      <li><b>Mail:</b> ahmedtaher@gmail.com</li>
      <li><b>Fax:</b> 0473280912</li>
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
 right: 50px;
    bottom: 3px;
    margin-left: auto;
    width: 50%;
    text-align: center;
    position: relative;
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
