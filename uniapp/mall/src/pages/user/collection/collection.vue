<template>
	<view class="collection">
		<view class="row" v-for="(item, index) in collectionList" :key="index">
			<!-- 删除按钮 -->
			<view class="menu" :class="'bg-' + themeColor.name" @tap.stop="handleDeleteCollection(item.id)">
				<text class="iconfont icon iconiconfontshanchu1"></text>
			</view>
			<!-- 商品 -->
			<view
				class="carrier"
				:class="[
					theIndex === index ? 'open' : oldIndex === index ? 'close' : ''
				]"
				@tap.stop="navTo(item.marketing_type, item.product.id)"
				@touchstart="touchStart(index, $event)"
				@touchmove="touchMove(index, $event)"
				@touchend="touchEnd(index, $event)"
			>
				<view class="left">
					<image
						class="image"
						:src="item.product && item.product.picture"
					></image>
					<image
						v-if="item.marketing_type"
						class="tag"
						:src="item.marketing_type | marketingTypeTag"
						mode="aspectFill"
					></image>
				</view>
				<view class="mid">
					<view class="title in2line">
                    {{ item.product && item.product.name }}
                    </view>
					<view class="data">
						<view class="item">
                            <text class="iconfont icontuandui"></text>推荐
							{{ (item.product && item.product.collect_num) || 0 }}
                        </view>
						<view class="item">
                            <text class="iconfont iconkechakan"></text>
                            浏览{{ (item.product && item.product.view) || 0 }}
                        </view>
						<view
							class="item "
							v-if="parseInt(item.product && item.product.product_status) === 0"
						>
							<text class="status">失效</text>
						</view>
					</view>
					<view class="bottom">
						<text class="price" :class="'text-' + themeColor.name">
                        {{ moneySymbol }}{{ item.product && item.product.minPriceSku.price }}
                        </text>
						<text>{{ item.created_at | time }}</text>
					</view>
				</view>
			</view>
		</view>
		<rf-load-more :status="loadingType" v-if="collectionList.length > 0" />
		<rf-empty
			:info="'快去收藏一些商品吧~'"
			v-if="collectionList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./collection'>

</script>

<style lang="scss">
	@import './collection.scss'
</style>
