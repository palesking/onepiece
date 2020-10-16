<template>
	<view class="refund">
		<!-- 商品 -->
		<view class="row">
			<view
				class="carrier"
				@tap="navTo(`/pages/product/product?id=${productInfo.product_id}`)"
			>
				<view class="left" >
					<image class="image" :src="productInfo.product_picture"></image>
				</view>
				<view class="mid">
					<view class="title in2line">{{ productInfo.product_name }}</view>
					<view class="data">
						{{ productInfo.skuName  || singleSkuText }}
					</view>
					<view class="bottom">
						<text class="price" :class="'text-' + themeColor.name">
                            {{ moneySymbol }}{{ productInfo.product_money }} * {{ productInfo.num }}
                        </text>
					</view>
				</view>
			</view>
		</view>
		<view class="product-textarea">
			<form @submit="handleOrderRefundApply">
				<radio-group
					v-if="parseInt(refundType, 10) != 1"
					name="refund_type"
					class="refund-type"
					@change="handleRefundTypeChange"
				>
					<label
						class="gender-item"
						v-for="(item, index) in refundTypeArr"
						:key="index"
					>
						<radio
							class="gender-item-radio"
							:value="item.value"
							:color="themeColor.color"
							:checked="refund_type == item.value"
						/>
						<text class="gender-item-text">{{ item.name }}</text>
					</label>
				</radio-group>
				<list-cell
					@eventClick="chooseRefundReasonType"
					title="退款原因"
					:tips="refund_reason || '请选择'"
				></list-cell>
				<textarea
					class="textarea"
					v-model="refund_explain"
					placeholder-style="color:#ccc; font-size: 26upx"
					placeholder="宝贝不满足您的期待吗？请填写一下您的退货/退款理由吧"
				/>
				<view class="feedback-title">
					<text>退款金额</text>
					<text :class="'text-' + themeColor.name">{{ moneySymbol }}{{ productInfo.product_money }}</text>
				</view>
				<view class="feedback-content">
					<text>成功退款后，该订单的金额会退回至原支付账户</text>
				</view>
				<view class="feedback-title">
					<text>上传凭证(选填,提供至多9张截图,总大小10M以下)</text>
				</view>
				<view class="feedback-body feedback-uploader rf-uploader">
					<view class="uni-uploader">
						<view class="uni-uploader-head">
							<view class="uni-uploader-title">点击预览图片</view>
							<view class="uni-uploader-info">{{ imageList.length }}/9</view>
						</view>
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(image, index) in imageList" :key="index">
									<view class="uni-uploader__file" style="position: relative;">
										<rf-image class="uni-uploader__img" :src="image"></rf-image>
										<view class="close-view" @tap="close(index)" :class="'bg-' + themeColor.name">x</view>
									</view>
								</block>
								<view class="uni-uploader__input-box" v-if="imageList.length < 9">
									<view class="uni-uploader__input" @tap="uploadImage"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<button class="confirm-btn" formType="submit" :class="'bg-' + themeColor.name">
					{{ parseInt(refund_type, 10) === 1 ? '仅退款' : '退货退款' }}
				</button>
			</form>
		</view>
	</view>
</template>
<script src='./refund'>

</script>
<style lang="scss">
	@import './refund.scss'
</style>
