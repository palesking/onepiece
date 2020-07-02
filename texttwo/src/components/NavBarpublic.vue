<template>
    <div>
        <van-nav-bar
            :title="getkeyword"
            left-text="返回"
            left-arrow
            fixed
            :zIndex="99"
            @click-left="onClickLeft"
        />
  
    </div>
</template>

<script>
export default {
    name:'NavBarpublic',
    data() {
        return {
            
        }
    },
    props:["keyword"],
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    computed: {
        getkeyword(){
            if(!this.keyword){
                return "推荐"
            }
            return this.keyword
        }
    },
}
</script>
<style lang="">
   
</style>