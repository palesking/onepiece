<template>
	<view class="rf-category">
		<!--顶部搜索导航栏-->
		<rf-search-bar
			@search="toSearch"
			title="扫一扫"
			icon="iconsaomiao"
			:placeholder="hotSearchDefault"
		/>
		<view
			class="category-list"
			@touchmove.stop.prevent="moveHandle"
			v-if="(styleCateType === 'one_two_three_cover' 
            || styleCateType === 'one_two_three_text') && categoryList.length > 0"
        >
			<!-- 左侧分类导航 -->
			<scroll-view scroll-y="true" class="left">
				<view
					class="row"
					v-for="(fItem, fIndex) in categoryList"
					:key="fItem.id"
					:class="[fIndex === showCategoryIndex ? 'on' : '']"
					@tap="showCategory(fIndex)"
				>
					<view class="text">
						<view class="block" :class="'bg-'+themeColor.name"></view>
						{{ fItem.title }}
					</view>
				</view>
			</scroll-view>
			<!--右侧子导航-->
			<scroll-view scroll-y="true" class="right">
				<view
					v-for="(fItem, fIndex) in categoryList"
					:key="fItem.id"
				>
					<view
						v-if="fIndex === showCategoryIndex"
						class="category">
						<view
							v-if="cateTop && cateTop.cover"
							class="banner"
							@tap="indexTopToDetailPage(cateTop)"
						>
							<image :src="cateTop && cateTop.cover" mode="aspectFill" />
						</view>
						<view
							class="box"
							v-for="sItem in fItem.child"
							:key="sItem.id"
						>
							<view 
                                class="second-category-text" 
                                @tap="navTo(`/pages/product/list?cate_id=${sItem.id}`)"
                            >
								{{ sItem.title }}
								<text class="iconfont iconyou"></text>
							</view>
							<view class="list" v-if="sItem.child && sItem.child.length > 0">
								<view
									class="box"
									v-for="tItem in sItem.child"
									:key="tItem.id"
									@tap.stop="navTo(`/pages/product/list?cate_id=${tItem.id}`)"
								>
									<block v-if="styleCateType === 'one_two_three_cover'">
										<image :src="tItem.cover || errorImage"></image>
										<view class="text">{{ tItem.title }}</view>
									</block>
									<text 
                                        class="category-tag in1line" 
                                        v-if="styleCateType === 'one_two_three_text'"
                                    >
										{{ tItem.title }}
									</text>
								</view>
							</view>
							<view v-else class="no-data">
								<i class="iconfont icon404"></i>
								暂无子分类
							</view>
                        </view>
						<view class="no-data" v-if="fItem.child.length === 0">
							<i class="iconfont icon404"></i>
							暂无分类
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<rf-empty
			:bottom="bottom"
			:info="'暂无产品分类~'"
			v-if="categoryList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
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
					:product="productDetail"
					@toggle="toggleSpec"
					:showBuyBtn="true"
				>
                </rf-attr-content>
			</view>
		</view>
	</view>
</template>
<script src='./category'>

</script>
<style scoped lang="scss">
 @import './category.scss'
</style>
