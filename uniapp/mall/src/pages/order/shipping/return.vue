<template>
	<view class="evaluation">
		<!--商品信息-->
		<view class="product-info">
			<image
				class="product-image"
				mode="aspectFill"
				:src="productInfo.product_picture"
			></image>
			<view class="product-content">
				<text class="product-name in2line">{{ productInfo.product_name }}</text>
				<text class="product-sku-name">
                    {{ productInfo.sku_name || singleSkuText }}
                </text>
				<text class="product-price">{{ productInfo.product_money }} * {{ productInfo.num }}</text>
			</view>
		</view>
		<!--详细描述信息-->
		<view class="input-content">
			<view class="input-item">
				<text class="tit">快递公司</text>
				<input
					type="text"
					@input="handleRefundShippingCompanyChange"
					:value="salesReturn.refund_shipping_company"
					placeholder="请输入快递公司"
				/>
			</view>
			<view class="input-item">
				<text class="tit">快递单号</text>
				<input
					type="text"
					@input="handleRefundShippingCodeChange"
					:value="salesReturn.refund_shipping_code"
					placeholder="请输入快递单号"
				/>
			</view>
		</view>
		<!--提交退货物流-->
		<button class="confirm-btn" @tap="handleSalesReturn" :class="'bg-' + themeColor.name">提交退货物流</button>
	</view>
</template>
<script src='./return'>

</script>
<style lang="scss">
	@import './return.scss'
</style>
