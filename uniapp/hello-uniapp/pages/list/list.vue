<template>
	<view>
		<button type="default" @click="getdata">发送get请求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getdata(){
				uni.request({
					url:"http://localhost:8082/api/getlunbo",
					success(res){
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>

</style>
