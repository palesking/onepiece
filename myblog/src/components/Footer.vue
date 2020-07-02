<template>
    <div class="footer">
        <div class="footer-content">
            <div class="ba">
                <span>豫ICP备19046453号</span> | 
                <span>网站仅用于学习,内容来源于作者&网络,如有侵权,请联系QQ228575643</span>
                <span style="padding-left:10px;">
                    <span style="font-weight:700;">Power-</span>
                    vue | 宝塔面板 | 阿里云
                </span>
            </div>
            <div class="yl">
                <span>友链: </span>
                <span class="yl-logo"><img src="http://www.palingking.com/images/yl1.png" alt=""><a href="http://www.caizhiwei.xyz/" target="_blank">时光机 - 颂离歌</a></span>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.footer{
    background-color: #545c64;
    .footer-content{
        width: 1400px;
        margin: auto;
        height:50px;
        display: flex;
        justify-content: space-around;
        .ba{
            line-height: 50px;
        }
        .yl{
            line-height: 50px;
            img{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: inline-block;
                position: relative;
                top: 5px;
            }
            .yl-logo{
                padding-left: 5px;
                a{
                    color: black;
                }
            }
        }
    }
}
</style>