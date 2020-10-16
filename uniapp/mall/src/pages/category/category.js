/**
 * @des 分类
 * @author lizi
 * @date 2020-03-10 18:19
 * @copyright 2019
 */
import rfSearchBar from '@/components/rf-search-bar';
import rfAttrContent from '@/components/rf-attr-content/index.vue';
import { mapMutations } from 'vuex';
import category from '@/service/category.js'

export default {
	components: {
		rfSearchBar,
		rfAttrContent
	},
	data() {
		return {
			hotSearchDefault: '请输入关键字', // 搜索默认关键字
			showCategoryIndex: 0, // 一级菜单高亮显示序号
			categoryList: [], // 分类列表
			specClass: 'none', // 规格弹窗
			productDetail: {}, // 商品详情
			search: {},
			cateTop: {}, // 分类通用广告图
			loading: true,
			styleCateType: this.$mSettingConfig.styleCateType,
			errorImage: this.$mAssetsPath.errorImage,
			currentCateId: '',
			categoryProductList: [],
			price: '',
			total_sales: '',
			loadingType: 'more',
			page: 1,
			moneySymbol: this.moneySymbol,
			productLoading: true,
			currentSecondCategoryList: [],
			categoryInvertedIndex: 0
		};
	},
	computed: {
		bottom () {
			let bottom = 0;
			/*  #ifdef H5  */
      bottom = 90;
			/*  #endif */
			return bottom;
		}
	},
	filters: {
		filterTotalSales(val) {
			if (val > 10000) {
				val = `${(val / 10000).toFixed(2)}w`;
			}
			return val;
		}
	},
	// 每次页面显示 执行该方法
	onLoad() {
		this.initData();
	},
	methods: {
    moveHandle() {},
    ...mapMutations(['setCartNum']),
		// 监听二级分类变化
		handleCategoryInvertedChange(item, index) {
      this.categoryInvertedIndex = index;
			this.currentCateId = item.id;
			this.price = '';
			this.total_sales = '';
			this.page = 1;
			this.categoryProductList = [];
			this.getProductList();
		},
		stopPrevent() {},
		// 规格弹窗开关
		toggleSpec(row) {
			if (parseInt(row.status, 10) === 0) return;
			if (this.specClass === 'show') {
				this.specClass = 'hide';
				if (row.stock === 0) {
					this.$mHelper.toast('库存不足');
					return;
				}
				if (row.type.toString() === '1') {
					// 加入购物车
					this.handleCartItemCreate(row.skuId, row.cartCount);
				} else if (row.type.toString() === '2') {
					// 立即购买
					const list = {};
					const data = {};
					data.sku_id = row.skuId;
					data.num = row.cartCount;
					if (
						this.productDetail.point_exchange_type.toString() === '2' ||
						this.productDetail.point_exchange_type.toString() === '4' ||
						(this.productDetail.point_exchange_type.toString() === '3' &&
							this.isPointExchange)
					) {
						list.type = 'point_exchange';
					} else {
						list.type = 'buy_now';
					}
					list.data = JSON.stringify(data);
					this.navTo(`/pages/order/create/order?data=${JSON.stringify(list)}`);
				}
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			} else if (this.specClass === 'none') {
				this.getProductDetail(row);
			}
		},
		// 添加商品至购物车
		async handleCartItemCreate(skuId, cartCount) {
			await category.handleCartItemCreate({
					sku_id: skuId,
					num: cartCount
				})
			.then( async () => {
				await category.getcartItemCount()
				.then(async res => {
					this.setCartNum(res.data);
				})
				this.$mHelper.toast('添加成功，在购物车等');
			})
		},
		hideSpec() {
			this.specClass = 'hide';
			setTimeout(() => {
				this.specClass = 'none';
			}, 250);
		},
		// 获取产品详情
		async getProductDetail(row) {
			await category.getProductDetail({ id: row.product_id })
			.then( async res => {
					this.productDetail = res.data;
					this.specClass = 'show';
			})
		},
		// 跳转至商品列表
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 数据初始化
		async initData() {
			this.search = uni.getStorageSync('search') || {};
			this.hotSearchDefault = this.search.hot_search_default || '请输入关键字';
			this.categoryList = [];
			this.categoryProductList = [];
			await this.getProductCate();
			await this.initCartItemCount();
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
				uni.removeTabBarBadge({ index: this.$mConstDataConfig.cartIndex });
			}
		},
		// 获取商品分类列表
		async getProductCate(type) {
			await category.getProductCate()
			.then(async r => {
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				// 获取分类广告图 注：广告图不是一级分类图
				await this.getAdvList();
				this.categoryList = r.data;
				let cateId = uni.getStorageSync('indexToCateId');
				if (cateId) {
					this.categoryList.forEach((item, index) => {
						if (cateId === item.id) {
							this.showCategoryIndex = index;
						}
					});
				} else {
					if (this.styleCateType === 'one_two_product' && r.data[0].child.length > 0) {
						this.currentCateId = r.data[0].child[0].id;
					} else {
						this.showCategoryIndex = 0;
						this.currentCateId = this.categoryList && this.categoryList[0].id;
					}
				}
				if (r.data.length > 0) {
					this.currentSecondCategoryList = r.data[0].child;
				}
				this.page = 1;
				this.categoryProductList = [];
				await this.getProductList();
				this.loading = false;
			})
			.catch(() => {
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loading = false;
			});
		},
		// 获取广告列表
		async getAdvList() {
			await category.getAdvList({
				location: 'cate_top'
			})
			.then(res => {
				this.cateTop = res.data.cate_top[0];
			});
		},
		// 分类切换显示
		showCategory(index) {
			this.showCategoryIndex = index;
		},
		showProduct(item, index) {
			this.categoryInvertedIndex = 0;
			this.currentSecondCategoryList = item.child;
			this.showCategoryIndex = index;
			if (this.styleCateType === 'one_two_product' && item.child.length > 0) {
				this.currentCateId = item.child[0].id;
			} else {
				this.currentCateId = item.id;
			}
			this.price = '';
			this.total_sales = '';
			this.page = 1;
			this.categoryProductList = [];
			this.getProductList();
		},
		handleSalesOrderByChange () {
			if (this.categoryProductList.length === 0) return;
			this.price = '';
            this.total_sales = this.total_sales === 'asc' ? 'desc' : 'asc';
			this.page = 1;
			this.categoryProductList = [];
            this.getProductList();
		},
		handlePriceOrderByChange () {
			if (this.categoryProductList.length === 0) return;
			this.total_sales = '';
            this.price = this.price === 'asc' ? 'desc' : 'asc';
			this.page = 1;
			this.categoryProductList = [];
            this.getProductList();
		},
		// 获取产品列表
		async getProductList() {
			this.productLoading = true;
			const params = {};
			if (this.total_sales) {
				params.total_sales = this.total_sales;
			}
			if (this.price) {
				params.price = this.price;
			}
			params.page = this.page;
			await category.getCategoryProductList({
				cate_id: this.currentCateId,
				...params
			})
			.then(async res => {
				this.productLoading = false;
				this.loadingType = res.data.length === 10 ? 'more' : 'nomore';
				this.categoryProductList = [...this.categoryProductList, ...res.data];
				uni.removeStorageSync('indexToCateId');
			});
		},
		// 跳转至搜索详情页
		toSearch() {
			this.$mRouter.push({
				route: `/pages/index/search/search?data=${JSON.stringify(this.search)}`
			});
		},
		// 跳至广告图指定页面
		indexTopToDetailPage(item) {
			this.$mHelper.handleBannerNavTo(item.jump_type, item.jump_link, item.id);
		},
		getMoreProductList () {
            if (this.loadingType === 'nomore' || this.categoryProductList.length === 0) return;
            this.page++;
            this.getProductList();
		}
	}
};