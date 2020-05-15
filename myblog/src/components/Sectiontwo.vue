<template>
    <div class="sectiontwo">
        <el-card class="box-card boxshadow">
            <div class="box-header">
                <img src='http://www.palingking.com/images/logo.jpg' alt="" width="100%" height="100%" style="">
                <!-- <p class="p1">居住城市:上海<br/>兴趣爱好:动漫电影</p> -->
            </div>
            <!-- <p style="padding: 0px 10px 5px 10px;font-weight:700;">前端小白</p> -->
            <div class="wx">
                <!-- <p class="el-icon-chat-dot-round" style="font-size:32px;"></p> -->
                
                <!-- <p><img src="../assets/wx2.png" alt="微信" width="200" height="200"></p> -->
                <el-tooltip content="微信" placement="bottom">
                    <a href="http://wx.palingking.com/" target="_blank">
                        <el-button class="el-icon-chat-dot-round"></el-button>
                    </a>
                </el-tooltip>
                <el-tooltip content="github" placement="bottom">
                    <a href="https://github.com/palesking" target="_blank">
                        <el-button class="el-icon-chat-line-round"></el-button>
                    </a>
                </el-tooltip>
                <el-tooltip content="简历" placement="bottom">
                    <a href="http://resume.palingking.com/" target="_blank">
                        <el-button class="el-icon-notebook-2"></el-button>
                    </a>
                </el-tooltip>
            </div> 
        </el-card>
        <a-player :audio="audio" style="margin:0; margin-top: 10px;"></a-player>
    </div>
</template>
<script>
export default {
    name:'Sectiontwo',
    data() {
        return {
           audio: [
                {
                    name: '一路向北',
                    artist: '周杰伦',
                    url: 'http://music.palingking.com/1.mp3',
                    cover: 'http://music.palingking.com/1.jpg', // prettier-ignore
                    lrc: '',
                },
                {
                    name: '死性不改',
                    artist: "Twins/Boy'z",
                    url: 'http://music.palingking.com/2.mp3',
                    cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore
                    lrc: '',
                },
                {
                    name: '倒数',
                    artist: '邓紫棋',
                    url: 'http://music.palingking.com/3.mp3',
                    cover: 'http://music.palingking.com/3.jpg', // prettier-ignore
                    lrc: '',
                },
                {
                    name: 'I Never Told You',
                    artist: '陈冠希',
                    url: 'http://music.palingking.com/4.mp3',
                    cover: 'http://music.palingking.com/4.jpg', // prettier-ignore
                    lrc: '',
                },
            ]
        }
    },
    methods: {
        randomColor() {
            return `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
        },
    },
}
</script>
<style lang="less">
    .sectiontwo{
        position: relative;
        width:310px;
        height:800px;
        margin-top: 10px;
        margin-left:40px;
        margin-right: 190px;
        .box-card{
            // margin: auto;
            .wx{
                // width: 50px;
                padding:0 10px;
                // width: 50px;
                // height: 50px;
                //display:flex;justify-content:space-around;
                //flex-wrap:wrap;
                //padding-left:35px ;
                .el-icon-chat-dot-round,.el-icon-chat-line-round,.el-icon-notebook-2{
                    font-size: 24px;
                    width: 50px;
                    height: 50px;
                    // color: coral;
                    border-radius: 50%;
                    padding: 0;
                    margin: 0;
                    margin:8px 16px;
                }
            }
            .box-header{
                padding:10px;
                width: 250px;
                height: 250px;
            }
        }
        .boxshadow{
            &:hover{
                box-shadow: 0 0 15px skyblue !important;
            } 
        }
    }
</style>