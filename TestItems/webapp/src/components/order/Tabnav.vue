<template>
    <div class="tabnav">
        <div class="item"
        :class="{green:changeGreen == index}"
        v-for="(item,index) in tabList"
        :key="index"
        @click="changeColor(index)"
        >
            {{ item.title }}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            changeGreen:0,
            tabList:[
                {
                    id:0,
                    title:'全部'
                },
                {
                    id:1,
                    title:'待出行'
                },
                {
                    id:2,
                    title:'待支付'
                },
                {
                    id:0,
                    title:'退款单'
                },
            ]
        }
    },
    methods:{
        changeColor(index){
            this.changeGreen = index
        }
    }
}
</script>
<style scoped>
.tabnav {
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    background-color: #fff;
}
.tabnav .item {
    height: 100%;
    line-height: 1.2rem;
    text-align: center;
    flex: 1;
    font-size: .4rem;
    color: #666;
    border-bottom: 2px solid transparent;
}
.tabnav .green {
    border-bottom: 2px solid #096;
}
</style>