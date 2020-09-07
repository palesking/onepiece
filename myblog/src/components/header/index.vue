<template>
    <div class="header-content container">
        <a href="/" class="logo testone">
            <!-- <span>天</span>
            <span>堂</span>
            <span>瀑</span>
            <span>布</span> -->
            <img src="../../assets/logo2.png" alt="">
        </a>
        <div class="content-title">
            <ul class="layui-nav layui-this" lay-filter="">
                <li class="layui-nav-item">
                    <router-link to='/'>首页</router-link>
                </li>
                <li class="layui-nav-item">
                    <router-link to='/version'>说说</router-link>
                </li>
                <li class="layui-nav-item">
                    <router-link to='/movie'>电影</router-link>
                </li>
                <li class="layui-nav-item">
                    <router-link to='/community'>文章</router-link>
                </li>
                <li class="layui-nav-item">
                    <router-link to='/music'>音乐</router-link>
                </li>
                <li class="layui-nav-item">
                    <router-link to='/about'>关于</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    
</style>