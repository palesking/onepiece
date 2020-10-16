	/**
	 * @des 商城首页
	 * @author lizi
	 * @date 2020-01-08 14:14
	 * @copyright 2019
	 */
	import rfSwipeDot from '@/components/rf-swipe-dot';
	import rfFloorIndex from '@/components/rf-floor-index';
	import rfSearchBar from '@/components/rf-search-bar';
	import rfSwiperSlide from '@/components/rf-swiper-slide';
	import rfProductList from '@/components/rf-product-list';
	import { mapMutations } from 'vuex';
	import index from '@/service/index.js'

	export default {
		components: {
			rfFloorIndex,
			rfSwipeDot,
			rfProductList,
			rfSearchBar,
			rfSwiperSlide
		},
		data() {
			return {
				current: 0, // 轮播图index
				carouselList: {}, // 广告图
				hotProductList: [], // 热门商品列表
				recommendProductList: [], // 推荐商品列表
				guessYouLikeProductList: [], // 猜您喜欢商品列表
				newProductList: [], // 新品上市商品列表
				productCateList: [], // 商品栏目
				config: {}, // 商户配置
				announceList: [], // 公告列表
				share: {},
				loading: true,
				scrollTop: 0,
				kefuShow: true,
				loadingType: 'more',
				hotSearchDefault: '请输入关键字',
				newsBg: this.$mAssetsPath.newsBg,
				errorImage: this.$mAssetsPath.errorImage,
				appName: this.$mSettingConfig.appName,
				tabCurrentIndex: 0,
				categoryList: [], // 分类列表
				categoryProductList: [], // 分类列表
				page: 1,
				currentCate: 0,
				hotRecommendList: this.$mConstDataConfig.hotRecommendList,
				productLoading: true,
				customBar: this.CustomBar,
				isOpenIndexCate: this.$mSettingConfig.isOpenIndexCate,
				moneySymbol: this.moneySymbol
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onShow() {
			// 初始化购物车数量
			this.setCartNum(uni.getStorageSync('cartNum'));
		},
		onLoad() {
			this.initData();
		},
		computed: {
			// 计算倒计时时间
			second() {
				return function(val) {
					return Math.floor(15 * 60 - (new Date() / 1000 - val));
				};
			},
			bottom() {
				let bottom = 0;
				/*  #ifdef H5  */
				bottom = 90;
				/*  #endif */
				return bottom;
			},
			swipeCateList() {
				const list = this.productCateList;
				let result = [];
				for (let i = 0, len = list.length; i < len; i += 10) {
					result.push(list.slice(i, i + 10));
				}
				return result;
			}
		},
		onShareAppMessage() {
			let shareParams = {
				title: this.share.share_title || `欢迎来到${this.appName}`,
				path: '/pages/index/index'
			};
			return shareParams;
		},
		filters: {
			filterDiscountPrice(val) {
				const price = val.product && (val.product.price * val.discount) / 100;
				switch (val.decimal_reservation_number) {
					case 0:
						return (Math.floor(price * 100) / 100).toFixed(2);
					case 1:
						return (Math.floor(price * 100) / 100).toFixed(0);
					case 2:
						return (Math.floor(price * 100) / 100).toFixed(1);
					default:
						return (Math.floor(price * 100) / 100).toFixed(2);
				}
			},
			filterTotalSales(val) {
				if (val > 10000) {
					val = `${(val / 10000).toFixed(2)}w`;
				}
				return val;
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getIndexList('refresh');
		},
		// 加载更多
		onReachBottom() {
			if (this.currentCate === 0) return;
			if (this.loadingType === 'nomore') return;
			this.page++;
			this.getProductList(this.currentCate);
		},
		methods: {
			// 顶部tab点击
			tabClick(index, id) {
				this.currentCate = id;
				this.tabCurrentIndex = index;
				if (id === 0) return;
				this.loading = true;
				this.page = 1;
				this.productLoading = true;
				this.categoryProductList = [];
				this.getProductList(id);
			},
			// 获取产品列表
			async getProductList(id) {
				await index.getProductList({
					cate_id: id,
					page: this.page
				})
				.then(res => {
					this.loading = false;
					this.productLoading = false;
					this.loadingType = res.data.length === 10 ? 'more' : 'nomore';
					this.categoryProductList = [...this.categoryProductList, ...res.data];
				})
				.catch(() => {
					this.loading = false;
					this.productLoading = false;
				})
			},
			...mapMutations(['setCartNum']),
			// 监听轮播图切换
			handleDotChange(e) {
				this.current = e.detail.current;
			},
			// 数据初始化
			initData() {
				// 设置购物车数量角标
				this.getIndexList();
				this.initCartItemCount();
			},
			// 设置购物车数量角标
			async initCartItemCount() {
				if (
					this.$mStore.getters.hasLogin &&
					parseInt(uni.getStorageSync('cartNum'), 10) > 0
				) {
				uni.setTabBarBadge({
						index: this.$mConstDataConfig.cartIndex,
						text: uni.getStorageSync('cartNum').toString()
					});
				} else {
					uni.removeStorageSync('cartNum');
					uni.removeTabBarBadge({
						index: this.$mConstDataConfig.cartIndex
					});
				}
			},
			// 通用跳转
			navTo(route) {
				this.$mRouter.push({
					route
				});
			},
			// 跳转至分类模块
			navToCategory(id) {
				if (this.$mSettingConfig.appCateType === '2') {
					uni.setStorageSync('indexToCateId', id);
					this.$mRouter.reLaunch({
						route: '/pages/category/category'
					});
				} else {
					this.navTo(`/pages/product/list?cate_id=${id}`);
				}
			},
			// 通用跳转
			navToSearch() {
				this.$mRouter.push({
					route: `/pages/index/search/search?data=${JSON.stringify(this.search)}`
				});
			},
			// 跳至广告图指定页面
			indexTopToDetailPage(item) {
				this.$mHelper.handleBannerNavTo(item.jump_type, item.jump_link, item.id);
			},
			// 获取主页数据
			async getIndexList(type) {
				await index.getIndexList(this.type)
				.then(async res => {
					uni.setNavigationBarTitle({
						title: this.appName
					});
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
					this.initIndexData(res.data);
					this.loading = false;
				})
				.catch(() => {
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
				});
			},
			// 首页参数赋值
			initIndexData(data) {
				this.announceList = data.announce || [];
				this.productCateList = data.cate;
				this.categoryList = [{
					id: 0,
					title: '首页'
				}, ...this.productCateList];
				this.carouselList = data.adv;
				this.search = data.search;
				this.share = data.share;
				uni.setStorageSync('search', this.search);
				this.hotSearchDefault = data.search.hot_search_default || '请输入关键字';
				uni.setStorage({
					key: 'hotSearchDefault',
					data: data.search.hot_search_default
				});
				this.hotProductList = data.product_hot;
				this.recommendProductList = data.product_recommend;
				this.guessYouLikeProductList = data.guess_you_like;
				this.newProductList = data.product_new;
				this.config = data.config;
				this.$mHelper.handleWxH5Share(this.share.share_title || this.appName, this.share.share_desc ||
					`欢迎来到${this.appName}商城`, this.share.share_link || this.$mConfig.hostUrl, this.share.share_cover || this.$mSettingConfig
					.appLogo);
			},
			// 跳转至商品详情页
			navToDetailPage(data) {
				const {
					id
				} = data;
				if (!id) return;
				this.$mRouter.push({
					route: `/pages/product/product?id=${id}`
				});
			},
			
		}
	};
