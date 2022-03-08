<template>
  <div class="footer-section main-bg text-light text-start">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="header">
            <h2 class="fs-4 mb-4 fw-bold">Our Head Office</h2>
            <div class="head-row1 mb-3 fs-5">
              <i class="bi bi-geo-alt-fill"></i>
              <span class="ms-2">123 Street, Cairo, EGY</span>
            </div>
            <div class="head-row1 mb-3 fs-5">
              <i class="bi bi-telephone-fill"></i>
              <span class="ms-2">01008203698</span>
            </div>
            <div class="head-row1 mb-3 fs-5">
              <i class="bi bi-envelope-fill"></i>
              <span class="ms-2">Et8989784@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="popular-links">
            <h2 class="fs-4 mb-4 fw-bold">Popular-Link</h2>
            <ul class="list-unstyled footer-list">
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#carmarket">Car Market</a>
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#brand">Brands</a>
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <router-link class="fs-5 ms-1" to="/aboutus"
                  >About Us</router-link
                >
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#statistic">Our Statistics</a>
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#test">Testmonial</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="useful-link">
            <h2 class="fs-4 mb-4 fw-bold">Useful-Link</h2>
            <ul class="list-unstyled footer-list">
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <router-link class="fs-5 ms-1" to="/bookwash"
                  >Book Washing</router-link
                >
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <router-link class="fs-5 ms-1" to="/profile"
                  >Edit Profile</router-link
                >
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#">Our Market</a>
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#">Salle Car</a>
              </li>
              <li>
                <i class="bi bi-arrow-right-short fs-4"></i>
                <a class="fs-5 ms-1" href="#">FQS</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="social">
            <h2 class="fs-4 mb-4 fw-bold">Social Media</h2>
            <ul class="list-unstyled social-links">
              <li class="mainhover">
                <a
                  href="https://web.whatsapp.com/send?phone=[01008203698]"
                  target="_blank"
                >
                  <i class="bi bi-whatsapp fs-5 text-light"></i>
                </a>
              </li>
              <li class="mainhover">
                <a
                  href="https://www.facebook.com/profile.php?id=100022070504463"
                  target="_blank"
                >
                  <i class="bi bi-facebook fs-5 text-light"></i>
                </a>
              </li>
              <li class="mainhover">
                <a href="https://twitter.com/Ttaahherr" target="_blank">
                  <i class="bi bi-twitter fs-5 text-light"></i>
                </a>
              </li>
              <li class="mainhover">
                <a
                  href="https://www.linkedin.com/in/ahmed-taher-141682221/"
                  target="_blank"
                >
                  <i class="bi bi-linkedin fs-5 text-light"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-section {
  padding: 60px 0px;
}
.footer-section h2 {
  color: var(--maincolor);
}
ul.footer-list {
  letter-spacing: 2 !important;
}
ul.footer-list li {
  margin-bottom: 5px;
}
ul.footer-list li:hover {
  color: var(--maincolor);
}
ul.footer-list li a {
  color: #fff;
  text-decoration: none;
  transition: var(--maintransition);
  width: fit-content;
  font-weight: 500;
}
ul.footer-list li a:hover {
  letter-spacing: 1.5px;
  color: var(--maincolor);
}
.social-links li {
  width: 45px;
  height: 45px;
  border: 2px solid var(--maincolor);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  position: relative;
  z-index: 1;
}
</style>
