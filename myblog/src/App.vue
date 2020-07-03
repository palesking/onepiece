<template>
  <div id="app">
    <!-- <canvas id="canvas"></canvas>
    <Header></Header> -->
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script>
// import Header from './components/headerone.vue'
// import Footer from './components/Footer.vue'
// import Canvas from './canvas-nest.min.js'
export default {
  name:'App',
//   components:{
//     Header,
//   }
}
</script>
<style lang="less">
@import url("./assets/css/common.css");


#app{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: black;
    canvas{
        position:absolute;
        width:100%;
        height:100%;
        z-index: 0;
    }

}
</style>
