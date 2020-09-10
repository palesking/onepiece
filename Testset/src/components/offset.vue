<template>
    <div class="offset">
        <div class="one">
            <div class="one-one">

            </div>
        </div>
        <div class="two">
            <div class="two-one">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .offset{
        .one{
            width: 1000px;
            height: 500px;
            margin: auto;
            background: #009688;
            .one-one{
                width: 500px;
                height: 500px;
                background: #393D49;
            }
        }
        .two{
            width: 1000px;
            height: 500px;
            background: #5FB878;
            .two-one{
                width: 500px;
                height: 500px;
                background: #1E9FFF;
            }
        }
    }
</style>