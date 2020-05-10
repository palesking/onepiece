<template>
    <div class="Recomend">
        <div class="recomendLogo">
            <div class="recomendLogo-icon">
            </div>
            <div class="recomendText">暂无关注的店铺</div>
        </div>
        <GoodsList></GoodsList>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar' 
export default {
    name:"Recomend",
    components:{
        Tabbar
    },
    
}
</script>

<style lang='less'>
    .Recomend{
        position: relative;
        
        overflow: hidden;
        .recomendLogo{
            position: relative;
            width: 10rem;
            height: 4.96rem;
            background-color: #f4f4f4;
            .recomendLogo-icon{
                position: absolute;
                width: 140px;
                height: 140px;
                left: 50%;
                top: 40%;
                transform: translate(-50%, -50%);
                background-image: url('./Noattentionicon.png') ;
            }
            .recomendText{
                position: absolute;
                width: 250px;
                font-size: 35px;
                left: 50%;
                top: 70%;
                color: #58595b;
                transform: translate(-50%, -50%);
            }
        }
         ul{
             display: flex;
             flex-wrap: wrap;
             justify-content: space-around;
             li{
             width: 370px;
             height: 500px;
             margin-bottom: 6px;
             .pic{
                 height: 370px;
                 .title{
                     height: 54px;
                     line-height: 54px;
                     padding: 0 15px;
                     overflow: hidden;
                     font-size: 27px;
                     color: #151516;
                     text-overflow: ellipsis;
                 }
                 .info{
                     display: flex;
                     justify-content: space-between;
                     padding: 0 15px;
                     color: orangered;
                     line-height: 40px;
                     p .symbol{
                         font-size: 12px;
                     }
                     p .price{
                         font-size: 28px;
                         font-weight: bold;
                     }
                     .pay{
                         font-size:28px ;
                         line-height: 50px;
                     }
                 }
             }
         } 
         }  
    }
</style>