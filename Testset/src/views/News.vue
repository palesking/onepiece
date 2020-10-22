<template>
    <div>
        <h2>这是新闻组件</h2>
        <!-- 2.数据处理 -->
        <ul>
            <li v-for="(item,index) in list">
                <!-- 添加动态路由 -->
                <router-link :to='"/content/"+index'>
                    {{item}}{{index}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:"这是新闻组件",
            //1.添加数据
            list:["新闻一","新闻二","新闻三","新闻四","新闻五"]
        }
    },
}
</script>