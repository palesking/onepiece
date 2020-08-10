<template>
	<view class="allgoods">
		<goodsList :goods="goods"></goodsList>
		<view class="isdown" v-if="down">没有更多了</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goodsList/goodsList.vue"
	export default {
		data() {
			return {
				pageindex:1,
				goods:[],
				down:false
			}
		},
		methods: {
			async getgoodslist(callback){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=' + this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				callback && callback()
			}
		},
		components:{
			goodsList
		},
		onLoad() {
			this.getgoodslist()
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex*10)return this.down = true
			this.pageindex++
			this.getgoodslist()
			console.log("触底了")
		},
		onPullDownRefresh() {
			console.log("下拉刷新了")
			this.goods = []
			this.pageindex = 1
			this.down = false
			setTimeout(()=>{
				this.getgoodslist(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
.allgoods{
	background: #eee;
	.isdown{
		color: #333;
		padding: 30rpx 0;
		
		font-size: 30rpx;
		text-align: center;
	}
}
</style>
