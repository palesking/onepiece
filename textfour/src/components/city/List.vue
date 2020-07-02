<template>
    <div class="list">
        <div class="list-item">
            <p>定位/附近城市</p>
            <div
            v-for='item in mapCities'
            :key="item.id"
            @click="toHome(item.name)"
            >{{ item.name }}</div>
        </div>
        <div class="list-item">
            <p>已开通周边游站点</p>
            <div
            v-for="item in Cities"
            :key="item.id"
            @click="toHome(item.name)"
            >{{ item.name }}</div>
            <!-- <div>上海</div>
            <div>广州</div>
            <div>北京</div>
            <div>成都</div>
            <div>武汉</div>
            <div>苏州</div>
            <div>南京</div>
            <div>重庆</div>
            <div>厦门</div>
            <div>深圳</div> -->
        </div>
        <div class="list-item">
            <p>热门玩乐城市</p>
            <div
            v-for='item in hotCities'
            :key='item.id'
            @click="toHome(item.name)"
            >{{ item.name }}</div>
            <!-- <div>广元</div>
            <div>昆明</div>
            <div>大理</div>
            <div>丽江</div>
            <div>桂林</div>
            <div>贵阳</div>
            <div>西安</div>
            <div>西宁</div>
            <div>拉萨</div>
            <div>乌鲁木齐</div> -->
        </div>
    </div>
</template>
<script>
//引入mapMutation
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            hotCities:[],
            Cities:[],
            mapCities:[]
        }
    },
    mounted(){
        this.http()
    },
    methods:{
        http(){
            let that = this
            this.axios.get('api/city.json').then((res)=>{
                that.hotCities = res.data.data.hotCities
                that.Cities = res.data.data.cities
                that.mapCities = res.data.data.mapCities
            })
        },
        toHome(cName){
            // alert(cName)
            this.$router.push({
                path:'/'
            })
            this.changeName(cName)
        },
        ...mapMutations(['changeName'])
    }
}
</script>
<style scoped>
.list {
    width: 100%;
    padding-left: .4rem;
}
.list .list-item {
    font-size: .373333rem;
    color: #999;
    margin-bottom: .2rem;
}
.list-item p {
    line-height: 1rem;
}
.list-item div {
    display: inline-block;
    width: 2rem;
    height: .88rem;
    line-height: .88rem;
    border: 1px solid #999;
    text-align: center;
    box-sizing: border-box;
    margin-right: .4rem;
    margin-bottom: .2rem;
    border-radius: .2rem;
}
</style>