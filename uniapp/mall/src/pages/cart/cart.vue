<template>
	<view class="cart">
		<view v-if="cartList.length === 0" class="empty">
			<text class="iconfont icongouwuche" :class="'text-'+themeColor.name"></text>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator
					class="navigator"
					:class="'text-'+themeColor.name"
					v-if="hasLogin"
					url="../category/category"
					open-type="switchTab"
					>随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<view 
                    class="navigator" 
                    :class="'text-'+themeColor.name" 
                    @tap="navTo('/pages/public/logintype')"
                    >登录/注册 </view>
			</view>
		</view>
		<!-- 购物车列表 -->
		<view class="goods-list" v-else>
			<view class="btn-clear" :class="'text-'+themeColor.name" @tap="clearCart({ lose_status: 1 })">
                清空失效商品测试
            </view>
			<view class="rf-cart-row" v-for="(row, index) in cartList" :key="index">
				<!-- 删除按钮 -->
				<view 
                    class="menu" 
                    @tap.stop="deleteCartItem(row.sku_id, 'one')"  
                    :class="'bg-'+themeColor.name">
					<text class="iconfont icon iconiconfontshanchu1"></text>
				</view>
				<!-- 商品 -->
				<view
					class="carrier"
					:class="[theIndex === index ? 'open' : oldIndex === index ? 'close' : '']"
					@touchstart="touchStart(index, $event)"
					@touchmove="touchMove(index, $event)"
					@touchend="touchEnd(index, $event)"
				>
					<!-- checkbox -->
					<view class="checkbox-box" @tap="selected(index, row)">
						<view
							class="checkbox"
							:class="[parseInt(row.status, 10) === 0 
                             ? `checkbox-disabled ${'text-'+themeColor.name}` : 'text-'+themeColor.name]"
						>
							<view :class="[row.selected ? `on ${'bg-'+themeColor.name}` : '']"></view>
						</view>
					</view>
					<!-- 商品信息 -->
					<view class="goods-info">
						<view class="img">
							<image :src="row.product_img"></image>
						</view>
						<view class="info">
							<view
								class="title in2line"
								@tap="navTo(`/pages/product/product?id=${row.product.id}`)"
							>
								{{ row.product_name }}
							</view>
							<view class="state-wrapper">
								<view class="spec" @tap.stop="toggleSpec(row)">
                                    {{ row.sku_name || singleSkuText }}
                                </view>
								<view class="state" v-if="parseInt(row.status, 10) === 0">
									已失效
								</view>
							</view>
							<view class="price-number">
								<view class="price" v-if="parseInt(row.status, 10) === 1">
                                    {{ moneySymbol }}{{row.sku && row.sku.price}}
                                </view>
								<view class="remark" v-else>{{ row.remark }}</view>
								<view class="number" v-if="parseInt(row.status, 10) === 1">
									<view class="sub" @tap.stop="sub(row, index)">
										<text class="iconfont icon icon-jianhao"></text>
									</view>
									<view class="input" @tap.stop="discard">
										<input
											type="number"
											:class="'text-'+themeColor.name"
											v-model="row.number"
											@input.stop="numberChange(row, $event, index)"
										/>
									</view>
									<view class="add" @tap.stop="add(row, index)">
										<text class="iconfont icon iconjia1"></text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 脚部菜单 -->
		<view
			class="footer"
			:style="{ bottom: footerbottom }"
			v-if="cartList.length !== 0"
		>
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox" :class="'text-'+themeColor.name">
					<view :class="[isAllselected ? `on ${'bg-'+themeColor.name}` : '']"></view>
				</view>
				<view class="text">全选</view>
			</view>
			<view
				class="delBtn"
				:class="'text-'+themeColor.name"
				@tap="deleteCartItem"
				v-if="selectedList.length > 0"
				>删除</view>
			<view 
                class="delBtn" 
                :class="'text-'+themeColor.name" 
                @tap="clearCart()" v-if="selectedList.length > 0"
                >清空</view>
			<view class="settlement">
				<view class="sum">
                    合计:
					<view class="money">{{ moneySymbol }}{{ sumPrice }}</view>
				</view>
				<view class="btn" :class="'bg-'+themeColor.name" @tap="createOrder">
                    结算({{ selectedList.length }})
                </view>
			</view>
		</view>
		<!-- 规格-模态层弹窗 -->
		<view
			class="popup spec show"
			v-if="specClass === 'show'"
			@touchmove.stop.prevent="stopPrevent"
			@tap="hideSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask" @tap="hideSpec"></view>
			<view class="layer" @tap.stop="stopPrevent">
				<rf-attr-content
					:isSelectedNum="false"
					:product="productDetail"
					@toggle="toggleSpec"
					>
                </rf-attr-content>
			</view>
		</view>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./cart'>

</script>
<style lang="scss">
@import './cart.scss'
</style>
