<template>
	<view
		class="refund"
		:style="{ backgroundColor: orderList.length === 0 ? '#fff' : '' }"
	>
		<!--订单列表-->
		<scroll-view class="list-scroll-content" scroll-y>
			<!-- 订单列表 -->
			<view
				v-for="(item, index) in orderList"
				:key="index"
				class="rf-order-item"
			>
				<view class="i-top b-b">
					<text class="time">订单号：{{ item.order_sn }}</text>
					<text class="state">{{ item.order_status | orderStatusFilter }}</text>
				</view>
				<view
					class="goods-box-single"
					@tap="navTo(`/pages/product/product?id=${goodsItem.product_id}`)"
					v-for="(goodsItem, goodsIndex) in item.product"
					:key="goodsIndex"
				>
					<image
						class="goods-img"
						:src="goodsItem.product_picture"
						mode="aspectFill"
					></image>
					<view class="right">
						<text class="title in2line">{{ goodsItem.product_name }}</text>
						<text class="attr-box">{{ goodsItem.sku_name || singleSkuText }}</text>
						<text class="price" :class="'text-' + themeColor.name">
                            {{ moneySymbol }}{{ goodsItem.product_money }} * {{ goodsItem.num }}
                        </text>
					</view>
				</view>
				<view class="price-box">
					共<text class="num">{{ item.product_count }}</text>件商品 实付款
					<text class="price" :class="'text-' + themeColor.name">{{ moneySymbol }}{{ item.pay_money }}</text>
				</view>
				<view class="action-box b-t">
					<button
						class="action-btn"
						:class="'bg-' + themeColor.name"
						@tap="navTo(`/pages/order/detail?id=${item.id}`)"
					>
						订单详情
					</button>
				</view>
			</view>
			<rf-load-more :status="loadingType" v-if="orderList.length > 0"></rf-load-more>
		</scroll-view>

		<rf-empty :info="'快去商城逛逛吧'" v-if="orderList.length === 0 && !loading"></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./refund'>

</script>

<style lang="scss">
@import './refund.scss'
</style>
