<template>
	<view>
		<!-- 优惠明细 -->
		<view v-for="(item, index) in shippingDetail.data" :key="index">
			<!-- 商品信息 -->
			<view class="goods-section">
				<view class="g-header b-b">
					<text class="name">商品信息</text>
				</view>
				<!-- 商品信息 @tap="navTo(`/pages/product/product?id=${item.order_product.id}`)" -->
				<view class="g-item">
					<image
						:src="item.order_product.product_picture"
						mode="aspectFill"
					></image>
					<view class="right">
						<text class="title clamp">{{ item.order_product.product_name }}</text>
					</view>
				</view>
			</view>
			<view class="yt-list">
				<view class="yt-list-cell b-b" v-if="item.buyer_name">
					<view class="cell-icon" :class="'bg-' + themeColor.name">收</view>
					<text class="cell-tit clamp">收货人</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						{{ item.buyer_name }}
					</text>
					<text class="cell-more wanjia wanjia-gengduo-d"></text>
				</view>
				<view class="yt-list-cell b-b" v-if="item.express_no">
					<view class="cell-icon" :class="'bg-' + themeColor.name">单</view>
					<text class="cell-tit clamp">快递单号</text>
					<text class="cell-tip">
						{{ item.express_no }}
					</text>
					<text class="cell-tip copy" :class="'text-' + themeColor.name" @tap.stop="copy(item.express_no)">复制</text>
				</view>
				<view class="yt-list-cell b-b" v-if="item.express_company">
					<view class="cell-icon" :class="'bg-' + themeColor.name">司</view>
					<text class="cell-tit clamp">快递公司</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						{{ item.express_company }}
					</text>
				</view>
			</view>
			<view
				v-if="item.shipping_type.toString() === '1'"
				class="uni-timeline"
			>
				<view
					class="uni-timeline-item"
					:class="[
						index === 0 ? `text-${themeColor.name} uni-timeline-first-item` : '',
						index === item.trace.length - 1 ? 'uni-timeline-last-item' : ''
					]"
					v-for="(row, index) in item.trace"
					:key="index"
				>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view>
							{{ row.value }}
						</view>
						<view class="datetime">
							{{ row.time }}
						</view>
					</view>
				</view>
				<view v-if="item.trace.length === 0">暂无物流信息</view>
			</view>
			<view
				class="uni-timeline"
				v-if="item.shipping_type.toString() === '0'">
				该订单无需物流
			</view>
		</view>

		<rf-empty
			:info="'暂无物流信息'"
			v-if="shippingDetail.count === 0"
		></rf-empty>
	</view>
</template>
<script src='./shipping'>

</script>
<style lang="scss">
	@import './shipping.scss'
</style>
