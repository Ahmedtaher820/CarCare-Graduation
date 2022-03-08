<template>
  <div class="user-style ">
      <div class="style-box center-items flex-column">
          <p class="fs-5">Color option</p>
          <ul class="list-unstyled">
              <li data-color="#780000" @click="changeColor($event)"></li>
              <li data-color="#333" @click="changeColor($event)"></li>
              <li data-color="#6f42c1" @click="changeColor($event)"></li>
              <li data-color="#6c757d" @click="changeColor($event)"></li>
              <li data-color="#a8ca01" @click="changeColor($event)"></li>
          </ul>
      </div>
        <i class="bi bi-gear-fill fs-1" @click="styleuserfun"></i>
    </div>
</template>

<script>
export default {
    methods:{
        styleuserfun(){
           let userStyle = document.querySelector(".user-style");
           let spinner = document.querySelector(".bi-gear-fill");
           let styleBox = document.querySelector(".style-box");
           userStyle.classList.toggle("active")
           spinner.classList.toggle("margin-start")
           styleBox.classList.toggle("active")
        },
        changeColor(e){
            document.documentElement.style.setProperty('--secondcolor',e.target.dataset.color)
        }
    }
}
</script>

<style>
.user-style{
    position: fixed;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    z-index: 500;
    transition: var(--maintransition);
}
.user-style.active{
    display: flex;
    align-items: center;
}
.style-box{
    background-color: #fff;
    width: 200px;
    border: 5px solid var(--secondcolor);
    color: var(--secondcolor);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    transition: var(--maintransition);
}
.style-box.active{
    opacity: 1;
    pointer-events: auto;
    transform: translateX(00%);
}
.style-box ul li{
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: inline-block;
    margin: 0px 5px;
}
.style-box ul li:nth-child(1){
    background-color: #780000 ;
}
.style-box ul li:nth-child(2){
    background-color: #333 ;
}
.style-box ul li:nth-child(3){
    background-color: #6f42c1 ;
}
 .style-box ul li:nth-child(4){
    background-color: #6c757d ;
}
.style-box ul li:nth-child(5){
    background-color: #a8ca01 ;
}
.bi-gear-fill{
    color: var(--secondcolor);
    display: block;
    cursor: pointer;
    width: fit-content;
    animation: spin 4s infinite alternate-reverse;
}
.bi-gear-fill.margin-start{
    margin-left: 10px;
}

</style>