<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store.js';




export default{
    data(){
        return{
            store
        }
    },
    components:{
      AppHeader,
      AppMain,
      AppFooter,

  }
}


</script>

<template>
 <AppHeader/>
 <AppMain/>
 <AppFooter/>

</template>

<style lang="scss">

@use './style/general';
@use 'bootstrap';
section{
    height: 900px;
    width: 100%;
}






</style>
