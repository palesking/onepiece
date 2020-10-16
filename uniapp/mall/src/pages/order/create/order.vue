<template>
	<view class="rf-create-order">
		<view class="order" v-if="orderDetail.products">
			<!--选择地址-->
			<navigator url="/pages/user/address/address?source=1" class="rf-address-section" >
				<view class="order-content">
					<i class="iconfont iconshouhuodizhi"></i>
					<view v-if="addressData" class="cen">
						<view class="top">
							<text class="name">{{ addressData.realname }}</text>
							<text class="mobile">{{ addressData.mobile }}</text>
						</view>
						<text class="address in1line">{{ addressData.address_name }} {{ addressData.address_details }}</text>
					</view>
					<view class="no-default-address" v-else>
						请选择收货地址
					</view>
					<i class="iconfont iconyou"></i>
				</view>
				<image class="a-bg"></image>
			</navigator>
			<!--商品列表-->
			<view class="rf-goods-section">
				<view class="g-header b-b">
					<image class="logo" :src="logo"></image>
					<text class="name">商品列表</text>
				</view>
				<!-- 商品列表 -->
				<view
					class="g-item"
					v-for="(item, index) in orderDetail.products"
					:key="index"
					@tap="navTo(`/pages/product/product?id=${item.product_id}`)"
				>
					<rf-image :preview="false" mode="aspectFit" :src="item.product_picture"></rf-image>
					<view class="right">
						<text class="title clamp in2line">
							<uni-tag 
                                class="pickup-tag"  
                                v-if="item.gift_flag === '1'" 
                                type="error" text="赠品" 
                                size="small" 
                            />
							{{ item.product_name }}
						</text>
						<text class="spec">{{ item.sku_name || singleSkuText }} * {{ item.num }}</text>
						<view class="price-box">
							<text class="price-wrapper">
								<text class="tip"></text>
                                <text :class="'text-' + themeColor.name">
                                    {{ moneySymbol }}{{ item.product_original_money }}
                                </text>
								<text class="number"></text>
							</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 优惠明细 -->
			<view class="yt-list">
				<view class="yt-list-cell b-b" @tap="toggleMask('show')">
					<view class="cell-icon" :class="'bg-' + themeColor.name">券</view>
					<text class="cell-tit clamp">优惠券</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						{{ couponItem.title || '选择优惠券' }}
					</text>
					<text 
                        v-if="couponItem.title" 
                        @tap.stop="clearCoupon" 
                        class="iconfont iconshanchu4" 
                        :class="'text-' + themeColor.name"
                    ></text>
				</view>
				<view
					class="yt-list-cell b-b"
					@tap="showSinglePicker"
					v-if="pickerShippingType.length > 0"
				>
					<view class="cell-icon" :class="'bg-' + themeColor.name">寄</view>
					<text class="cell-tit clamp">配送方式</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						{{ currentShippingType.label || '选择配送方式' }}
					</text>
					<text class="cell-more wanjia wanjia-gengduo-d"></text>
				</view>
				<view
					class = "yt-list-cell b-b"
					@tap = "showCompanyPicker"
					v-if = "parseInt(currentShippingType.value, 10) === 1 &&orderDetail.company.length > 0"
                >
					<view class="cell-icon" :class="'bg-' + themeColor.name">递</view>
					<text class="cell-tit clamp">快递公司</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						{{ (currentCompany && currentCompany.label) || '选择快递公司' }}
					</text>
					<text class="cell-more wanjia wanjia-gengduo-d"></text>
				</view>
				<view
					class="yt-list-cell b-b"
					@tap="showPickupPointPicker"
					v-if="parseInt(currentShippingType.value, 10) === 2"
				>
					<view class="cell-icon" :class="'bg-' + themeColor.name">提</view>
					<text class="cell-tit clamp">门店自提点</text>
					<text 
                        class="cell-tip in1line" 
                        :class="(currentPickupPoint && currentPickupPoint.label) ? 'text-' + themeColor.name : ''"
                    >
						{{
							(currentPickupPoint && currentPickupPoint.label) || '请选择自提点'
						}}
					</text>
					<text class="cell-more wanjia wanjia-gengduo-d"></text>
				</view>
				<view
					class="yt-list-cell b-b"
					v-if="pointExchangeType[0] == 2 || pointExchangeType[0] == 4"
				>
					<view class="cell-icon" :class="'bg-' + themeColor.name">
						分
					</view>
					<text class="cell-tit clamp">
                        需要使用 {{ (orderDetail.preview && orderDetail.preview.point) || 0 }} 积分
                    </text>
					<text class="cell-tip disabled"></text>
					<view class="cell-tip" :class="'text-' + themeColor.name">
						<label class="radio">
							<radio
								siza="mini"
								:color="themeColor.color"
								:disabled="true"
								:checked="true"
							/>
						</label>
					</view>
				</view>
				<view
					class = "yt-list-cell b-b"
					v-if = 
                        "(pointExchangeType[0] == 1 || pointExchangeType[0] == 3) 
                        &&pointConfig.is_open === 1 
                        && maxUsePointFee > 0"
                >
					<view class="cell-icon" :class="'bg-' + themeColor.name">减</view>
					<text class="cell-tit clamp">可用{{ maxUsePoint }}积分抵用{{ maxUsePointFee }}元</text>
					<text class="cell-tip disabled"></text>
					<view class="cell-tip" :class="'text-' + themeColor.name">
						<label class="radio">
							<radio
								siza="mini"
								:color="themeColor.color"
								@tap="handleIsUsePoint"
								:disabled="isUsePointDisabled"
								:checked="isUsePoint"
							/>
						</label>
					</view>
				</view>
			</view>
			<!-- 金额明细 -->
			<view class="yt-list">
				<view class="yt-list-cell b-b">
					<text class="cell-tit clamp">商品总价</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
                        {{ moneySymbol }}{{ orderDetail.preview && orderDetail.preview.product_original_money }}
                    </text>
				</view>
				<view class="yt-list-cell b-b" v-if="discountAmount > 0">
					<text class="cell-tit clamp">优惠金额</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">-{{ moneySymbol }}{{ discountAmount }}</text>
				</view>
				<!--营销金额优惠-->
				<view v-for="(item, index) in orderDetail.marketing_details" :key="index">
					<view v-if="item.discount_money > 0 || item.give_point > 0" class="yt-list-cell b-b">
						<text class="cell-tit clamp">{{ item.marketing_name }}</text>
						<text class="cell-tip">
							<text v-if="item.marketing_type === 'give_point'">
                                {{ givePoint(item.give_point) }} 积分
                            </text>
							<text v-else :class="'text-' + themeColor.name">
                                -{{ moneySymbol }}{{item.discount_money }}
                            </text>
						</text>
					</view>
				</view>
				<view class="yt-list-cell b-b">
					<text class="cell-tit clamp">运费</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						<text>{{ moneySymbol }}{{ shippingMoney }}</text>
					</text>
				</view>
				<view class="yt-list-cell b-b" v-if="invoiceAmount > 0">
					<text class="cell-tit clamp">发票税费</text>
					<text class="cell-tip" :class="'text-' + themeColor.name">
						<text>{{ moneySymbol }}{{ invoiceAmount }}</text>
					</text>
				</view>
				<navigator url="/pages/set/invoice/invoice?source=1">
					<view class="yt-list-cell b-b">
						<text class="cell-tit clamp">开具发票</text>
						<view class="cell-tip">
							<view class="invoice" v-if="invoiceItem.type">
								{{
									`电子发票 - 
                                    ${parseInt(invoiceItem.type, 10) === 1 ? '公司' : '个人'} - ${invoiceItem.title}`
								}}
								<text 
                                    @tap.stop="closeInvoice" 
                                    class="iconfont iconshanchu4" 
                                    :class="'text-' + themeColor.name"
                                ></text>
							</view>
							<text v-else>本次不开具发票</text>
							<view v-if = "invoiceItem.type && orderDetail.invoice &&orderDetail.invoice.list.length > 0">
								<radio-group name="gender" class="gender">
									<label
										class = "gender-item"
										v-for = "(item, index) in orderDetail.invoice &&orderDetail.invoice.list"
										:key = "index"
									>
										<radio
											@click.stop = "handleInvoiceChange(item)"
											style = "transform:scale(0.7)"
											class = "gender-item-radio"
											:color = "themeColor.color"
											:checked = "index === 0"
										/>
										<text class="gender-item-text">{{ item }}</text>
									</label>
								</radio-group>
							</view>
						</view>
					</view>
				</navigator>
				<view class="yt-list-cell desc-cell">
					<text class="cell-tit clamp">备注</text>
					<input
						class="desc"
						type="text"
						v-model="buyerMessage"
						placeholder="请填写备注信息"
						placeholder-class="placeholder"
					/>
				</view>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<view class="price-content in1line">
					<text>实付款</text>
					<text class="price-tip" :class="'text-' + themeColor.name">{{ moneySymbol }}</text>
					<text class="price" :class="'text-' + themeColor.name">
                        {{
                            `${realAmount} ${(maxUsePoint > 0 &&(isUsePoint ? ` + ${maxUsePoint} 积分` : '')) ||
                            (orderDetail.preview && orderDetail.preview.point? `+ 
                            ${orderDetail.preview && orderDetail.preview.point} 积分`: '')}`
                        }}
                    </text>
				</view>
				<button
					class= "submit"
					:class= "'bg-' + themeColor.name"
					@tap= "submit"
					:disabled= "btnLoading"
					:loading= "btnLoading"
					v-if= "orderDetail.preview &&userInfo.account.user_integral >= orderDetail.preview.point"
                    >提交订单</button>
				<text class="submit disabled" v-else>积分不足</text>
			</view>
		</view>
		<!-- 404页面 -->
		<view v-if="!orderDetail.products && !loading">
			<rf-no-data class="rf-no-data" :custom="true">
				<view class="title">
					{{ errorInfo || '订单不存在' }}
				</view>
				<view @tap="getOrderDetail" slot="refresh" class="spec-color">重新加载</view>
			</rf-no-data>
		</view>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
		<!-- 优惠券面板 -->
		<view
			class="mask"
			:class="maskState === 1 ? 'show' : 'none'"
			@tap="toggleMask"
		>
			<view class="mask-content" @tap.stop.prevent="stopPrevent">
				<!-- 优惠券列表 -->
				<view class="sub-list valid">
					<view
						class="row"
						v-for="(item, index) in orderDetail.coupons"
						:key="index"
						@tap.stop="selectCoupon(item)"
					>
						<view 
                            class="carrier" 
                            :class="parseFloat(amountGoods) > parseFloat(item.at_least) ? '' : 'rf-opacity'"
                        >
							<view class="title">
								<view>
									<text class="cell-icon" :class="'bg-' + themeColor.name">{{
										parseInt(item.range_type, 10) === 2 ? '限' : '全'
									}}</text>
									<text class="cell-title">{{ item.title }}</text>
								</view>
								<view>
									<text class="price" :class="'text-' + themeColor.name" v-if="item.type === '1'">
                                        {{ moneySymbol }}{{ item.money }}
                                    </text>
									<text class="price-discount" :class="'text-' + themeColor.name" v-else>
                                        {{`${item.discount / 10}折`}}
                                    </text>
								</view>
							</view>
							<view class="term">
								<text>{{ item.start_time | time }} ~ {{ item.end_time | time }}</text>
								<text class="at_least">满{{ item.at_least }}可用</text>
							</view>
							<view class="usage">
								<text>
									{{parseInt(item.range_type, 10) === 2? '部分产品使用': '全场产品使用'}}
								</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 优惠券页面，仿mt -->
				<text
					class="no-coupon"
					v-if="orderDetail.coupons && orderDetail.coupons.length === 0"
					>暂无优惠券</text
				>
			</view>
		</view>
		<rf-picker
			:themeColor="themeColor.color"
			ref="shippingTypePicker"
			mode="selector"
			:deepLength="1"
			@onConfirm="onShippingConfirm"
			:pickerValueArray="pickerShippingType"
		/>
		<rf-picker
			:themeColor="themeColor.color"
			ref="companyTypePicker"
			mode="selector"
			:deepLength="1"
			@onConfirm="onCompanyConfirm"
			:pickerValueArray="orderDetail.company"
		/>
		<rf-picker
			:themeColor = "themeColor.color"
			ref = "pickupPointPicker"
			mode = "selector"
			:deepLength = "1"
			@onConfirm = "onPickupPointConfirm"
			:pickerValueArray = "orderDetail.pickup_point_config && orderDetail.pickup_point_config.list"
		/>
	</view>
</template>
<script src='./order'>

</script>
<style lang="scss">
	@import './order.scss'
</style>
