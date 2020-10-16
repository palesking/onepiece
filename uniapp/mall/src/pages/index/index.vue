<template>
	<view class="rf-index">
		<!--搜索导航栏-->
		<rf-search-bar @search="navToSearch" title="扫一扫" icon="iconsaomiao" :placeholder="hotSearchDefault" />
		<scroll-view 
            scroll-x class="index-cate" 
            :style="{top: customBar +'px'}" 
            v-if="isOpenIndexCate && categoryList.length > 0"
        >
			<view 
                v-for="(item, index) in categoryList" 
                :key="index" class="index-cate-item" 
                :class="tabCurrentIndex === index ? `text-${themeColor.name} active` : ''"
                @tap.stop="tabClick(index, item.id)"
            >
				{{ item.title }}
			</view>
		</scroll-view>
		<view :class="isOpenIndexCate && categoryList.length > 0 ? 'main-wrapper' : ''">
			<block v-if="currentCate === 0">
				<!-- 轮播图1 -->
				<view class="swiper">
					<view class="swiper-box">
						<rf-swipe-dot :info="carouselList.index_top" mode="nav" :current="current" field="title">
							<swiper @change="handleDotChange" autoplay="true">
								<swiper-item 
                                    v-for="(item, index) in carouselList.index_top" 
                                    @tap="indexTopToDetailPage(item)" :key="index"
                                >
									<view class="swiper-item">
										<image :src="item.cover" mode="aspectFill" />
									</view>
								</swiper-item>
							</swiper>
						</rf-swipe-dot>
					</view>
				</view>
				<!-- 分类列表 -->
				<swiper 
                    :indicator-active-color="themeColor.color" 
                    indicator-color="#666" 
                    :indicator-dots="productCateList.length > 10"
                    :style="{height: productCateList.length <= 5 ? '200rpx' : '400rpx'}" 
                    class="category-list-wrapper" v-if="productCateList.length > 0"
                 >
					<swiper-item class="category-list" v-for="(fItem, fIndex) in swipeCateList" :key="fIndex">
						<view 
                            class="category" 
                            v-for="(sItem, sIndex) in fItem" 
                            :key="sIndex" 
                            @tap.stop="navToCategory(sItem.id)"
                        >
							<view class="img">
								<image :src="sItem.cover || errorImage" mode="aspectFill"></image>
							</view>
							<view class="text in1line">{{ sItem.title}}</view>
						</view>
					</swiper-item>
				</swiper>
				<!--新闻通知-->
				<rf-swiper-slide 
                    v-if="announceList.length > 0" 
                    :list="announceList" class="rf-skeleton" 
                    @navTo="navTo('/pages/index/notice/notice')"
                >
					<view slot="header" class="swiper-slide-header">
						<text class="iconfont icongonggao" :class="'text-'+themeColor.name"></text>
					</view>
				</rf-swiper-slide>
				<!-- 爆款推荐 -->
				<view class="hot-recommend">
					<view class="left">
						<image 
                            class="hot-recommend-image" 
                            @tap="navTo(hotRecommendList[0].url)" 
                            :src="hotRecommendList[0].icon"
                        ></image>
					</view>
					<view class="right">
						<image 
                            class="hot-recommend-image" 
                            @tap.stop="navTo(hotRecommendList[1].url)" 
                            :src="hotRecommendList[1].icon"
                        ></image>
						<image 
                            class="hot-recommend-image" 
                            @tap.stop="navTo(hotRecommendList[2].url)" 
                            :src="hotRecommendList[2].icon"
                        ></image>
					</view>
				</view>
				<!--新品上市-->
				<rf-floor-index 
                    icon="iconxinpin2" 
                    :list="newProductList" 
                    @toBanner="indexTopToDetailPage" 
                    @toList="navTo(`/pages/product/list?param=${JSON.stringify({ is_new: 1 })}`)"
                    :header="{ title: '新品上市', desc: 'New Products Listed' }" 
                    @detail="navToDetailPage" :banner="carouselList.index_new && carouselList.index_new[0]" 
                />
				<!--推荐商品-->
				<rf-floor-index 
                    icon="icontuijian21" 
                    :list="recommendProductList" 
                    :header="{ title: '推荐商品', desc: 'Recommend Product' }"
                    @toBanner="indexTopToDetailPage" 
                    @toList="navTo(`/pages/product/list?param=${JSON.stringify({ is_recommend: 1 })}`)"
                    @detail="navToDetailPage" 
                    :banner="carouselList.index_recommend && carouselList.index_recommend[0]" 
                />
				<!--热门商品-->
				<rf-floor-index 
                    icon="iconremen2" 
                    :list="hotProductList" 
                    :header="{ title: '热门商品', desc: 'Hot Product' }" 
                    @toBanner="indexTopToDetailPage"
                    @toList="navTo(`/pages/product/list?param=${JSON.stringify({ is_hot: 1 })}`)" 
                    @detail="navToDetailPage"
                    :banner="carouselList.index_hot && carouselList.index_hot[0]" 
                />
				<!--猜您喜欢-->
				<rf-floor-index 
                    v-if="guessYouLikeProductList.length > 0" icon="iconcainixihuan2" 
                    :list="guessYouLikeProductList"
                    :isLink="false" :header="{ title: '猜您喜欢', desc: 'Guess You Like It' }" 
                    @detail="navToDetailPage" :bannerShow="false" 
                 />
				<!--网站备案号-->
				<!--#ifdef H5-->
				<view class="copyright" v-if="config.web_site_icp">
					{{ config.copyright_desc }}
					<a href="http://www.beian.miit.gov.cn">{{ config.web_site_icp }}</a>
				</view>
				<!-- #endif -->
			</block>
			<view v-else class="index-cate-product-list">
				<rf-product-list :bottom="bottom" :list="categoryProductList"></rf-product-list>
				<rf-load-more :status="loadingType" v-if="categoryProductList.length > 0"></rf-load-more>
				<rf-empty 
                    :bottom="bottom" 
                    :info="'暂无该分类产品~'" 
                    v-if="categoryProductList.length === 0 && !productLoading"
                ></rf-empty>
			</view>
		</view>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
		<rf-back-home></rf-back-home>
		<rf-back-top :scrollTop="scrollTop"></rf-back-top>
	</view>
</template>
<script src='./index.js'>
    export default {
        components:{},
        data() {
            return {
                
            }
        },
        methods:{
            // 跳转至分类页
            toCategory() {
            	this.$mRouter.switchTab({
            		route: '/pages/category/category'
            	});
            }
        }
    }
</script>
<style lang="scss">
	@import './index.scss'
</style>
