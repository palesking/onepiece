<template>
    <div class="tabbar">
        <van-tabbar v-model="active" @change="handleSwitchTo">
          <van-tabbar-item
          v-for="item in Tabbar"
          :key="item.id"
          :icon="item.icon"
          :name="item.linkTo"
          
          >
          {{item.name}}
          </van-tabbar-item>
      </van-tabbar>
    </div>
</template>
<script>
export default {
    name:"Tabbar",
    ele:'',
    methods: {
        handleSwitchTo(){
            //console.log(this.active)
            return this.$router.push(this.active)
        }
    },
    mounted() {
      this.ele = document.querySelectorAll(".van-tabbar-item")
    },
    data() {
    return {
      "active":0,
      Tabbar:[
        {id:1,name:"首页",icon:'wap-home',linkTo:'home'},
        {id:2,name:"关注",icon:'hot', linkTo:'recomend'},
        {id:3,name:"分类",icon:'friends',linkTo:'search'},
        {id:5,name:"购物车",icon:'chat',linkTo:'chat'},
        {id:6,name:"个人中心",icon:'setting',linkTo:'user'}
      ]
    }
  },
  watch: {
      $route(to,from){
        const path = to.path.includes("home")
        if(path){
          this.active = "home"
        }else{
          this.ele.forEach((item)=>{
            item.classList.remove("van-tabbar-item--active")
          })
        }
        //console.log(path)
      }
  }
}
</script>
<style lang="less">
    .tabbar{
      
    }
</style>