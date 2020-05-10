<template>
    <div class="User">
        <van-tabs  class="denglu" swipeable>
            <van-tab title="登录">
                <!-- 允许输入正整数，调起纯数字键盘 -->
                <van-field 
                    v-model="username" 
                    label="账号" 
                    placeholder="请输入用户名" 
                    required 
                    clearable
                />
                <!-- 输入密码 -->
                <van-field 
                    v-model="password" 
                    type="password" 
                    label="密码" 
                    placeholder="请输入密码" 
                    required 
                />
                <van-button
                    @click="denglu" 
                    type="primary" 
                    size="large" 
                >登录</van-button>
            </van-tab>
            <van-tab title="注册">
                <!-- 允许输入正整数，调起纯数字键盘 -->
                <van-field 
                    v-model="username" 
                    label="账号" 
                    placeholder="请输入用户名" 
                    required 
                    clearable
                />
                <!-- 输入密码 -->
                <van-field 
                    v-model="password" 
                    type="password" 
                    label="密码" 
                    placeholder="请输入密码" 
                    required
                />
                <van-button
                    @click="zhuce" 
                    type="primary" 
                    size="large" 
                    
                >注册</van-button>
            </van-tab>
        </van-tabs>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar' 
export default {
    name:"User",
    components:{
        Tabbar
    },
    data() {
        return {
            password: '',
            username:'',
            action:0
        }
    },
    methods: {
        usernameValidate(){
            const username = this.username
            if(username==="") return this.$toast("请输入用户名")
        },
        passwordValidate(){
            const password = this.password
            if(password==="") return this.$toast("请输入密码")
        },
        denglu(){
            console.log(1)
            this.usernameValidate()
        },
        zhuce(){
            this.passwordValidate()
        }
    },
}
</script>

<style lang="less">
    .User{
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .denglu{
            width:600px;
        }
    }
</style>