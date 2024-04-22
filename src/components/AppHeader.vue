<script >
import { store } from '../store.js'

export default{
    data(){
        return{
          store
        }
    }
}

</script>

<template>
  <section class="p-2">
    <div class="container-lg ">
      <div class="row justify-content-between align-items-center">
        <div class="col-6">
          <span ><i class="fa-solid fa-location-dot"></i> 7087 Richmond hwy, Alexandria, VA</span>
          <span class="ms-5"><i class="fa-solid fa-phone"></i> 800-2345-6789</span>
        </div>
        <div class="col-6">
          <ul class="d-flex gap-4 p-0 m-0 justify-content-center">
            <li>
               <a href="#">
                 <i class="fa-brands fa-instagram"></i>
                
               </a>
            </li>
            <li>
               <a href="#">
                 <i class="fa-brands fa-facebook"></i>
                
               </a>
            </li>
            <li>
               <a href="#">
                 <i class="fa-brands fa-square-twitter"></i>
                
               </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="hero p-2">
    <div class="container-lg">
      <div class="d-flex justify-content-end  align-items-center   ">
        <div class="col-3 ">
          <img class=img src="/img/logo.png" alt="">
        </div>
        <div class="col-6 m-0 ">
          <ul class="d-flex gap-3 text-light ">
            <li v-for="item in store.headerLinks"><a :href="item.href" key:item.id>{{ item.entries }}</a></li>
          </ul>
        </div>
        <div class="col-3  text-primary "><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
      </div>
      
    </div>
  </section>
  
  
</template>

<style lang="scss" scoped>
@use '../style/general';

.hero {
   background-image: url('/img/bg1-1.jpg');
  background-position: top;
  background-size: cover;
  height: 800px;
  padding: 14px;
  
  .img{
    width: 150px;
    height: 50px;
  }
}
</style>