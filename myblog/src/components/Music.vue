<template>
    <div class="music">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-4">
                    <div class="new">
                        <span>推荐音乐</span>
                        <span>New Article</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc ">
                    <aplayer 
                        :audio="audio" 
                        class="music" 
                        style="margin:0;" 
                        theme='#41b883'
                        :lrcType="1"
                    >
                    </aplayer>
                </el-col>
            </el-col>
            <el-col :span="8" class="row-right">
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>音乐排行榜</span>
                        <span>New Article</span>
                    </div>
                </el-col>
            </el-col>
        </el-row>
        
    </div>
    
</template>

<script>

export default {
    name:"music",
    data() {
        return {
            audio: [
                {
                    name: '一路向北',
                    artist: '周杰伦',
                    url: 'http://music.palingking.com/一路向北.mp3',
                    cover: require('../assets/music/musicbg.png'),
                    lrc: 'http://music.palingking.com/周杰伦 - 一路向北 .lrc'
                    // lrc: require('../assets/music/一路向北.lrc')
                },
                {
                    name: '分裂',
                    artist: "周杰伦",
                    url: 'http://music.palingking.com/周杰伦 - 分裂.mp3',
                    cover: require('../assets/music/musicbg.png'),
                    lrc: ''
                },
                {
                    name: '告白气球',
                    artist: '周杰伦',
                    url: 'http://music.palingking.com/周杰伦 - 告白气球.mp3',
                    cover: require('../assets/music/musicbg.png'),
                    lrc: ''
                },
                {
                    name: '爱的飞行日记',
                    artist: '周杰伦',
                    url: 'http://music.palingking.com/周杰伦 - 爱的飞行日记.mp3',
                    cover: require('../assets/music/musicbg.png'),
                    lrc: ''
                },
                {
                    name: '你比从前快乐',
                    artist: '周杰伦',
                    url: 'http://music.palingking.com/周杰伦 - 你比从前快乐.mp3',
                    cover: require('../assets/music/musicbg.png'),
                    lrc: ''
                },
                {
                    name: '听见下雨的声音',
                    artist: '周杰伦',
                    url: 'http://music.palingking.com/周杰伦 - 听见下雨的声音.mp3',
                    cover: require('../assets/music/musicbg.png'),
                    lrc: ''
                },
                {
                    name: 'I Never Told You',
                    artist: '陈冠希',
                    url: 'http://music.palingking.com/4.mp3',
                    cover: 'http://music.palingking.com/4.jpg', 
                    lrc: ''
                },
                {
                    name: '来自天堂的魔鬼',
                    artist: '邓紫棋',
                    url: 'http://music.palingking.com/5.mp3',
                    cover: 'http://music.palingking.com/3.jpg', 
                    lrc: ''
                },
                 {
                    name: '七号公园',
                    artist: '许嵩',
                    url: 'http://music.palingking.com/许嵩 - 七号公园.mp3',
                    cover: 'http://music.palingking.com/3.jpg', 
                    lrc: ''
                },
                {
                    name: '我乐意',
                    artist: "许嵩",
                    url: 'http://music.palingking.com/许嵩 - 我乐意.mp3',
                    cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', 
                    lrc: ''
                },
                {
                    name: '雨幕',
                    artist: '许嵩',
                    url: 'http://music.palingking.com/许嵩 - 雨幕.mp3',
                    cover: 'http://music.palingking.com/3.jpg', 
                    lrc: ''
                },
                {
                    name: 'We Are Never Ever Getting Back Together',
                    artist: 'Taylor Swift',
                    url: 'http://music.palingking.com/Taylor Swift - We Are Never Ever Getting Back Together.mp3',
                    cover: 'http://music.palingking.com/4.jpg', 
                    lrc: ''
                }
            ]
        }
    },
    methods: {
        randomColor() {
            return `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
        },
    }
}
</script>
<style lang="less" scoped>
    @import url('../assets/css/index.less');
    .row-left{
        padding-right: 15px;
        .two{
            .two-content{
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    padding-top: 20px;
                    // justify-content: space-between;
                    .two-list{
                        width: 160px;
                        height: 304px;
                        margin-right: 20px;
                        margin: auto;
                        .two-list-title{
                            display: block;
                            margin-top: 10px;
                            color: #222;
                        }
                        .two-list-title:hover{
                            color: #ff6700;
                        }
                        .two-img{
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    .row-right{
        padding-left: 15px;
    }
    // .one{
    //     background-color: #b7daff;
    //     width: 10%;
    //     height: 100%;
    // }
    // .music{
    //     position: fixed;
    //     z-index: 1;
    //     bottom: 0;
    //     left: 0;
    // }
    ::v-deep.aplayer{
        // ol{
        //     li{
        //         position: relative;
        //         overflow: hidden;
        //         .aplayer-list-index{
        //             position: absolute;
        //             left: 50px;
        //         }
        //         .aplayer-list-title{
        //             position: absolute;
        //             left: 80px;
        //             max-width: 100px;
        //             overflow: hidden;
        //             text-overflow:ellipsis;
        //             white-space: nowrap;
        //         }
        //         .aplayer-list-author{
        //             position: absolute;
        //             left: 200px;
        //         }
        //     }
        // }
    }
</style>