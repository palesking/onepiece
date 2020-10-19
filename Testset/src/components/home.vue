<template>
    <div class="home">
        <router-link to='/user'>user</router-link>
        <router-link to="/usertwo">usertwo</router-link>
        <div class="box">
            <p>{{$store.state.num}}</p>
            <button @click="addnum">增加</button>
            <button @click="removenum">减少</button>
        </div>
        <!-- <testone></testone> -->
        <!-- <testtwo></testtwo> -->
        <!-- <testthree></testthree> -->
        <!-- <testfour></testfour> -->
        <!-- <user></user> -->
        <!-- <offset></offset> -->
        <!-- <iviewtabs></iviewtabs> -->
        <!-- <iviewtabstwo></iviewtabstwo> -->
        <!-- <usertwo></usertwo> -->
    </div>
</template>
<script>
// import testone from '@/components/testone.vue'
// import testtwo from '@/components/testtwo.vue'
// import testthree from '@/components/testthree.vue'
// import testfour from '@/components/testfour.vue'

import user from '@/components/user.vue'
import offset from '@/components/offset.vue'
import iviewtabs from '@/components/iviewtabs.vue'
import iviewtabstwo from '@/components/iviewtabstwo.vue'
import usertwo from '@/components/usertwo.vue'
export default {
    name:'home',
    data() {
        return {
        }
    },
    methods: {
        addnum(){
            console.log(123)
        },
        removenum(){
            console.log(567)
        }
    },
    components:{
        // testone,
        // testtwo,
        // testthree,
        // testfour,
        user,
        // offset,
        iviewtabs,
        iviewtabstwo,
        usertwo
    }
}
</script>
<style lang="less" scopde>
    .box{
        width: 500px;
        height: 100px;
        margin: auto;
    }
</style>