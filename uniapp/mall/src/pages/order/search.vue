<template>
	<view class="rf-order-search">
		<!--header-->
		<view class="rf-header-box">
			<view class="rf-header" :style="{width:width+'px',height:height+'px'}">
				<view class="rf-back" :style="{marginTop:arrowTop+'px'}" @tap="back">
					<text class="iconfont iconzuo"></text>
				</view>
				<view class="input-box" :style="{marginTop:inputTop+'px'}">
					<input
						v-model="keyword"
						@confirm="handleOrderSearch"
						placeholder="请输入关键字"
						placeholder-style="font-size: 24upx; color:#ccc;"
						type="text" />
					<text class="icon iconfont iconsousuo2" @tap.stop="handleOrderSearch"></text>
				</view>
			</view>
		</view>
		<!--订单列表-->
		<scroll-view class="list-scroll-content" scroll-y :style="{top:height+'px'}">
			<!-- 订单列表 -->
			<view
				v-for="(item, index) in orderList"
				:key="index"
				class="rf-order-item"
			>
				<view class="i-top b-b">
					<text class="time">订单号：{{ item.order_sn }}</text>
					<!--<text class="time">{{item.created_at | time}}</text>-->
					<text class="state" v-if="parseInt(item.order_status, 10) !== 0">
                    {{ item.order_status | orderStatusFilter }}</text>
					<view class="example-body" v-else>
						<rf-count-down
							:show-day="false"
							:second="second(item.created_at)"
							@timeup="timeUp(item)"
							color="#FFFFFF"
							:background-color="themeColor.color"
							:border-color="themeColor.color"
						/>
					</view>
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
                            {{ moneySymbol }}{{ goodsItem.price }} * {{ goodsItem.num }}
                        </text>
					</view>
				</view>

				<view class="price-box">
					共
					<text class="num">{{ item.product_count }}</text>
					件商品 实付款
					<text class="price">{{ item.pay_money }}</text>
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
		<rf-empty info="暂无相关订单" v-if="orderList.length === 0 && !loading"></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./search'>

</script>

<style lang="scss">
@import './search.scss'
</style>
