<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <section class="p-2">
    <div class="container-lg ">
      <div class="row justify-content-between align-items-center">
        <div class="col-8">
          <span><i class="fa-solid fa-location-dot"></i> 7087 Richmond hwy, Alexandria, VA</span>
          <span class="ms-5"><i class="fa-solid fa-phone"></i> 800-2345-6789</span>
        </div>
        <div class="col-4">
          <ul class="d-flex gap-3 p-0 m-0 justify-content-center text-primary">
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
  <section class="hero ">
    <div class="container-lg">
      <div class="d-flex justify-content-center  align-items-center  ms-5 ">
        <div class="col-4 ">
          <img class=img src="/img/logo.png" alt="">
        </div>
        <div class="col-6  ">
          <ul class="d-flex gap-3  ">
            <li  v-for="item in store.headerLinks"><a :href="item.href">{{ item.entries }}</a></li>
          </ul>
        </div>
        <div class="col-2  text-primary "><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
      </div>

    </div>
      <div class="hero__container">
        <div class="col-12">
          <div class="d-flex flex-column align-items-start gap-3">

            <h1 >QuickWind</h1>
            <p>All kind of boats, yatch charters and sailing destination <br> for hobbyist yatchsmen and women !</p>
            <button href="#" class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
      </div>
  </section>


</template>

<style lang="scss" scoped>
@use '../style/general';

.hero {
  background-image: url('/img/bg1-1.jpg');
  background-position: center;
  background-size: cover;
  height: 900px;
  
  padding: 10px;
  color: whitesmoke;

  .img {
    width: 150px;
    height: 50px;
  }
}
.hero__container{
  max-width: 1000px;
  margin: 0 auto ;
  margin-top: 270px;

  h1{
    font-size: 100px;
  }
  p{
    font-size: 24px;
  }
}

a:hover{
  color: #0a81d1;
}
</style>