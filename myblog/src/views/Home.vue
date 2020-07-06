<template>
  <div class="home">
    <!-- <canvas id="canvas"></canvas> -->
    <headerone/>
    <div class="home-content">
        <sectionone></sectionone>
        <sectiontwo></sectiontwo>
    </div>
  </div>
</template>

<script>
import sectionone from '../components/sectionone.vue'
import sectiontwo from '../components/Sectiontwo.vue'
import headerone from '@/components/headerone.vue'

export default {
  name: 'home',
  components: {
    sectionone,
    sectiontwo,
    headerone
  }
}
</script>
<style lang="less" scoped>
    .home{
      // background-color: #f9f9f9;
      //z-index: 1;
      width: 100%;
      height: 100%;
      .home-content{
        display: flex;
        justify-content: space-between;
        width: 1400px;
        height: 100%;
        margin: auto;
        margin-top: 75px;
        margin-bottom: 50px;
        overflow: hidden;
        overflow-y: scroll;
      }
      .home-content::-webkit-scrollbar{
        display: none;
      }
    }
</style>