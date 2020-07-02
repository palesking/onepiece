<template>
  <div class="home">
    <!-- <h1>这是home组件</h1> -->
    <div class="home-content">
        <Section></Section>
        <Sectiontwo></Sectiontwo>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from '../components/Section.vue'
import Sectiontwo from '../components/Sectiontwo.vue'
export default {
  name: 'Home',
  components: {
    Section,
    Sectiontwo
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