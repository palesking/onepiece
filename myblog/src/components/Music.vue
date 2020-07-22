<template>
    <aplayer :audio="audio" style="margin:0;" :lrcType='0'></aplayer>
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
                {
                    name: '来自天堂的魔鬼',
                    artist: '邓紫棋',
                    url: 'http://music.palingking.com/5.mp3',
                    cover: 'http://music.palingking.com/3.jpg', // prettier-ignore
                    lrc: '',
                },
                 {
                    name: '七号公园',
                    artist: '许嵩',
                    url: 'http://music.palingking.com/许嵩 - 七号公园.mp3',
                    cover: 'http://music.palingking.com/3.jpg', // prettier-ignore
                    lrc: '',
                },
                {
                    name: '我乐意',
                    artist: "许嵩",
                    url: 'http://music.palingking.com/许嵩 - 我乐意.mp3',
                    cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore
                    lrc: '',
                },
                {
                    name: '雨幕',
                    artist: '许嵩',
                    url: 'http://music.palingking.com/许嵩 - 雨幕.mp3',
                    cover: 'http://music.palingking.com/3.jpg', // prettier-ignore
                    lrc: '',
                },
                {
                    name: 'We Are Never Ever Getting Back Together',
                    artist: 'Taylor Swift',
                    url: 'http://music.palingking.com/Taylor Swift - We Are Never Ever Getting Back Together.mp3',
                    cover: 'http://music.palingking.com/4.jpg', // prettier-ignore
                    lrc: '',
                },
                {
                    name: '来自天堂的魔鬼',
                    artist: '邓紫棋',
                    url: 'http://music.palingking.com/5.mp3',
                    cover: 'http://music.palingking.com/3.jpg', // prettier-ignore
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
<style lang="less" scoped>
    ::v-deep.aplayer{
        ol{
            li{
                position: relative;
                overflow: hidden;
                .aplayer-list-index{
                    position: absolute;
                    left: 50px;
                }
                .aplayer-list-title{
                    position: absolute;
                    left: 80px;
                    max-width: 100px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .aplayer-list-author{
                    position: absolute;
                    left: 200px;
                }
            }
        }
    }
</style>