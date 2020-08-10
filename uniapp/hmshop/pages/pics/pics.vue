<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view 
				@click="leftclick(index)"
				:class="active === index?'active':''" 
				v-for="(item,index) in title" 
				:key="index"
			>
				{{item.title}}
			</view>
		</scroll-view>
		
		<!-- <view class="content">
			主体部分
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:[],
				active:0
			}
		},
		methods: {
			async getimage(){
				const res = await this.$myRequest({
					url:"/api/getimgcategory"
				})
				// console.log(res)
				this.title = res.data.message
			},
			leftclick(index){
				this.active = index
			}
		},
		onLoad() {
			this.getimage()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background: $shop-color;
				color: #fff;
			}
		}
		.title{
			
		}
	}
</style>
