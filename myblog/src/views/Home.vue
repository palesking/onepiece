<template>
  <div class="home">
    <headerone/>
    <canvas id="canvas"></canvas>
    <div class="home-content">
        <Section></Section>
        <Sectiontwo></Sectiontwo>
    </div>
  </div>
</template>

<script>
import Section from '../components/Section.vue'
import Sectiontwo from '../components/Sectiontwo.vue'
import headerone from '@/components/headerone.vue'

export default {
  name: 'Home',
  components: {
    Section,
    Sectiontwo,
    headerone
  }
}
</script>
<style lang="less">
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