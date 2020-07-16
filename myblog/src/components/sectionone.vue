<template>
    <div class="sectionone">
        <el-row>
            <el-col :span="12" v-for="(item,index) in data.num" :key="index">
                <el-card shadow="hover" style="height:260px;" class="boxshadow">
                    <div style="display:flex; justify-content:space-around;">
                        <div class = 'section-img'>
                            <img :src="images[index]" alt="" class="image"/>
                            <time class="time">{{ date}}</time>
                        </div>
                        <div class="bottom clearfix" style="width:340px;margin-top:-15px;">
                            <p class="text-title"><span>{{data.title[index]}}</span></p>
                            <p class="text-content">
                                <span v-html="data.titleContent[index]">
                                </span>
                            </p>
                            <el-row style="float:right;">
                                <router-link :to='"/content/"+index'><el-button>查看更多</el-button></router-link>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import data from './data.js'
let date = new Date()
// let data = this.data
export default {
    name:"sectionone",
    data() {
        return {
            date:date.toLocaleString(),
            data,
            images:{
                0:'http://www.palingking.com/images/1.1.jpg',
                1:'http://www.palingking.com/images/moren.jpg',
                2:'http://www.palingking.com/images/moren.jpg',
                3:'http://www.palingking.com/images/moren.jpg',
            },
        }
    },
    created() {
        //console.log(this)
        //console.log(this.data)
        //console.log(data.index[o])
        // this.axios.get('data').then(response=>{},
        //     console.log(data)
        // ).catch(error=>{
        //     console.log(error)
        // })
    },
    methods: {
        image(index){
            // let img = document.getElementsByClassName('image')
            // console.log(img)
            // return img.src = data.images[index]


        }
    },
}
</script>
<style lang="less" scoped>
    .sectionone{
        margin-top:10px;
        margin-bottom:20px;
        float: right;
        a{
            color: green;
        }
        .section-img{
            width: 240px;
            height: 200px;
            .image{
                width: 100%;
                height: 100%;
            }
        }
        .time {
            font-size: 13px;
            color: #999;
        }
        .button {
            padding: 0;
            float: right;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        
        .clearfix:after {
            clear: both
        }
        .text-title{
            width: 300px;
            height: 50px;
            font-size: 24px;
            line-height: 50px;
            overflow: hidden;
            text-align: center;
        }
        .text-content{
            display: block;
            width: 340px;
            height: 155px;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 5px;
             
            span{
                margin-bottom: 10px;
                font-size: 14px;
                color:#535659;
                text-align:justify;
                text-align-last:justify;
                
            }
        }
        .boxshadow{
            &:hover{
                box-shadow: 0 0 15px skyblue !important;
            } 
        }
        .el-col-24{
        margin-bottom: 20px;
      }
      .el-col:last-child{
          margin-bottom: 100px;
      }
    }
</style>