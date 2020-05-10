<template>
  <div id="app">
    <!-- 缓存,避免重复请求 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
    components:{
    }
}
</script>

<style lang="less">
#app{
  background-color: #f4f4f4;
}
</style>
