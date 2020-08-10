<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view 
				@click="leftclick(index,item.id)"
				:class="active === index?'active':''" 
				v-for="(item,index) in title" 
				:key="item.id"
			>
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="item in secondData">
				<image :src="item.img_url" @click="previewImage(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<view class="" v-if="secondData.length === 0">
				暂无数据
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getimage(){
				const res = await this.$myRequest({
					url:"/api/getimgcategory"
				})
				this.title = res.data.message
				this.leftclick(0,this.title[0].id)
			},
			async leftclick(index,id){
				this.active = index
				//右边主体内容
				// console.log(id)
				const res = await this.$myRequest({
					url:"/api/getimages/"+id
				})
				// console.log(res)
				this.secondData = res.data.message
			},
			previewImage(current){
				const urls = this.secondData.map(item => {
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
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
		.right{
			height: 95%;
			width: 530rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 530rpx;
					height: 530rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 30rpx;
				}
			}
		}
		.title{
			
		}
	}
</style>
