<template>
    <div>
        <leftcontent></leftcontent>
        <rightcontent></rightcontent>
    </div>
</template>
<script>
import author from '@/components/contentone/author.vue'
import leftcontent from '@/components/contentone/leftcontent.vue'
import rightcontent from '@/components/contentone/rightcontent.vue'
import music from '@/components/music.vue'
export default {
    data() {
        return {
            activeName: 'first',
            img:[
                {
                    id:1,
                    url:require('../../assets/images/1.png'),
                },
                {
                    id:2,
                    url:require('../../assets/images/2.png'),
                },
                {
                    id:3,
                    url:require('../../assets/images/3.png'),
                }
            ]
        }
    },
    methods: {
        handledetails(){
            this.$router.push({path:'/detailsone'})
        }
    },
    components: {
        author,
        leftcontent,
        rightcontent,
        music
    }
}
</script>
<style lang="less" scoped>
    
</style>