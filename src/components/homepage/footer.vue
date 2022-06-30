<template>
  <div class="footer-section text-light text-start mt-5 position-relative">
    <div class="footer-content">
      <img src="../../assets/logo/logo.png" alt="" class="footer-logo" />
      <ul class="list-unstyled d-flex gap-3 justify-content-center">
        
        <li>
          <a href="">
            <i class="bi bi-facebook bg-radial"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-google bg-radial"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-twitter bg-radial"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-instagram bg-radial"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright d-flex justify-content-between align-items-center">
      <p>&copy; <a href="/">CareCare</a> ,All Right Reversed.</p>
      <p>Designed By <a href="https://ahmedtaher820.github.io/my-portfolio/" target="_blank">Ahmed Taher</a></p>
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
.footer-content{
  position: absolute;
  left: 14%;
  bottom: 30%;
}
.footer-logo {
  width: 200px;
  height: 180px;
}
.bg-radial{
font-size: 22px;  
background: -webkit-linear-gradient(#464660,#fff);
background-clip: text;
-webkit-text-fill-color: transparent;
}
.copyright{
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 0px 60px;
  color:#0B132B;
  font-size: 18px;
}
.copyright a{
  color: var(--maincolor);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}
@media(max-width:768px){
  .footer-content{
    left: 50%;
    transform: translateX(-50%);
  }
  .copyright {
    padding: 0px 20px;
    font-size: 15px;
  }
}
</style>
