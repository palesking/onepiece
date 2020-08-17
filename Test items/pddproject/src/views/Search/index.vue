<template>
    <div class="search">
        <van-sidebar v-model="activeKey" style="width:130px;">
           <router-link to="/search/contents" exact>
                <van-sidebar-item title="推荐"></van-sidebar-item>
            </router-link>
            <router-link to="/search/contents">
                <van-sidebar-item title="女装" exact></van-sidebar-item>
            </router-link>
            <van-sidebar-item title="鞋包"></van-sidebar-item>
            <van-sidebar-item title="推荐"></van-sidebar-item>
            <van-sidebar-item title="女装"></van-sidebar-item>
            <van-sidebar-item title="鞋包"></van-sidebar-item>
            <van-sidebar-item title="推荐"></van-sidebar-item>
            <van-sidebar-item title="女装"></van-sidebar-item>
            <van-sidebar-item title="鞋包"></van-sidebar-item>
            <van-sidebar-item title="推荐"></van-sidebar-item>
            <van-sidebar-item title="女装"></van-sidebar-item>
            <van-sidebar-item title="鞋包"></van-sidebar-item>
            <van-sidebar-item title="推荐"></van-sidebar-item>
            <van-sidebar-item title="女装"></van-sidebar-item>
            <van-sidebar-item title="鞋包"></van-sidebar-item>
        </van-sidebar>
        
        <router-view></router-view>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from '@/components/Tabbar' 
export default {
    name:"search",
     components:{
        Tabbar
    },
    data() {
        return {
            activeKey: 0,
        }
    },
}
</script>

<style lang="less">
    .search{
        display: flex;
        width: 750px;
        height:100vh;
        overflow: hidden;
        //background-color: #fafafa;
        a{
            text-align: center;
        }
        a:hover{
            color:orangered;
        }
    }
</style>