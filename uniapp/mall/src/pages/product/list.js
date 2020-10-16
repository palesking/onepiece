    import uniDrawer from '@/components/uni-drawer/drawer';
	import rfTopDrawer from '@/components/rf-top-drawer';
	import rfAttrContent from '@/components/rf-attr-content/index.vue';
	import rfProductList from '@/components/rf-product-list';
	import rfLoadMore from '@/components/rf-load-more/rf-load-more';
	import { mapMutations } from 'vuex';
	import product from '@/service/product.js'

	/* eslint-disable */
	export default {
		components: {
			uniDrawer,
			rfProductList,
			rfAttrContent,
			rfLoadMore,
			rfTopDrawer
		},
		filters: {
			filterTotalSales (val) {
				if (val > 10000) {
					val = `${(val / 10000).toFixed(2)}w`;
				}
				return val;
			}
		},
		data() {
			return {
                keyword: '',
                errorInfo: '',
				loadingType: 'more',
				page: 1,
				loading: true,
				specClass: 'none',
				productDetail: {},
				searchKey: "", //搜索关键词
				width: 200, //header宽度
				height: 64, //header高度
				inputTop: 0, //搜索框距离顶部距离
				arrowTop: 0, //箭头距离顶部距离
				dropScreenH: 0, //下拉筛选框距顶部距离
				attrData: [],
				attrIndex: -1,
				dropScreenShow: false,
				scrollTop: 0,
				tabIndex: 0, //顶部筛选索引
				isList: false, //是否以列表展示  | 列表或大图
				drawer: false,
				drawerH: 0, //抽屉内部scrollview高度
				selectedName: "综合",
				selectH: 0,
				dropdownList: [
                    {
                        name: "综合",
                        selected: true,
                        param: {}
                    }, 
                    {
                        name: "价格升序",
                        selected: false,
                        param: { price: 'asc' }
                    }, 
                    {
                        name: "价格降序",
                        selected: false,
                        param: { price: 'desc' }
                    },
                ],
				attrArr: [
                    {
                        name: "全部",
                        selectedName: "全部",
                        isActive: false,
                        params: {},
                        list: []
                    }, 
                    {
                        name: "新品",
                        selectedName: "新品",
                        isActive: false,
                        params: { is_new: 1 },
                        list: []
                    }, 
                    {
                        name: "推荐",
                        selectedName: "推荐",
                        isActive: false,
                        params: { is_recommend: 1 },
                        list: []
                    }, 
                    {
                        name: "热门",
                        selectedName: "热门",
                        isActive: false,
                        params: { is_hot: 1 },
                        list: []
                    }
				],
				productList: [],
				pageIndex: 1,
				pullUpOn: true,
				productCateList: [],
				brandList: [],
				currentCateStr: '',
				currentBrandStr: '',
				minPrice: '',
				maxPrice: '',
				productParams: {}
			}
		},
		onLoad(options) {
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif
			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.inputTop = obj.top ? (obj.top + (obj.height - 30) / 2) : (res.statusBarHeight + 7);
					this.arrowTop = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.searchKey = options.searchKey || "";
					//略小，避免误差带来的影响
					this.dropScreenH = this.height * 750 / res.windowWidth + 186;
					this.drawerH = res.windowHeight - uni.upx2px(100) - this.height
				}
			});
			this.initData(options);
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.page = 1;
			this.productList.length = 0;
			this.getProductList('refresh', {});
		},
		// 加载更多
		onReachBottom() {
            if (this.loadingType === 'nomore') return;
			this.page++;
			this.getProductList();
		},
		methods: {
            ...mapMutations(['setCartNum']),
			// 初始化数据
			initData(options) {
                let params = {};
                if (options.cate_id) {
					params.cate_id = options.cate_id;
                }
				if (options.param) {
                    params = { ...params, ...JSON.parse(options.param) }
				}
				if (options.keyword) {
					this.keyword = options.keyword;
					params.keyword = options.keyword;
				}
				this.productParams = params;
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
			hideSpec() {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			},
			// 添加商品至购物车
			async handleCartItemCreate(skuId, cartCount) {
				await product.handleCartItemCreate( {sku_id: skuId,num: cartCount} )
				.then(async () => {
					await
					product.getcartItemCount().then(async r => {
						this.cartNum = r.data;
						this.setCartNum(r.data);
					});
					this.$mHelper.toast('添加购物车成功');
				});
			},
			// 获取产品详情
			async getProductDetail(row) {
				await
				product.getproductDetail({id: row.id})
				.then(async r => {
					this.productDetail = r.data;
					this.productDetail.sku_name = row.sku_name;
					this.specClass = 'show';
				});
			},
			px(num) {
				return uni.upx2px(num) + "px"
			},
			btnDropChange(e) {
				let index = parseInt(e.currentTarget.dataset.index, 10);
				let arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
				if (arr.length === 0) {
                    this.$set(this.attrArr[index], "isActive", !this.attrArr[index].isActive)
                    if (this.attrArr[index].isActive && index === 0) {
                        this.attrArr[1].isActive = false;
                        this.attrArr[2].isActive = false;
                        this.attrArr[3].isActive = false;
                    }
					if (this.attrArr[1].isActive || this.attrArr[2].isActive || this.attrArr[3].isActive) {
                        this.attrArr[0].isActive = false;
                    }
                    } else {
                        this.attrData = arr;
                        this.attrIndex = index;
                        this.dropScreenShow = true;
                        this.$set(this.attrArr[index], "isActive", false);
                        this.scrollTop = 1;
                        this.$nextTick(() => {
                            this.scrollTop = 0
                        });
                    }
				let params = {};
				if (this.attrArr[0].isActive) {
					params = {};
				} else {
					params.keyword = this.keyword;
				}
				this.attrArr.forEach(item => {
					if (item.isActive) {
						params = {...params, ...item.params }
					}
				});
				this.page = 1;
				this.productList = [];
				this.loading = true;
				this.productParams = params;
				this.getProductList();
			},
			btnSelected(e) {
				let index = e.currentTarget.dataset.index;
				this.$set(this.attrData[index], "selected", !this.attrData[index].selected)
			},
			async reset() {
                this.currentBrandStr = '';
                this.currentCateStr = '';
				this.minPrice = '';
				this.maxPrice = '';
				await this.getBrandList();
				await this.getProductCate();
			},
			btnCloseDrop() {
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				this.dropScreenShow = false;
				this.attrIndex = -1
			},
			btnSure() {
				let index = this.attrIndex;
				let arr = this.attrData;
				let active = false;
				let attrName = "";
				//这里只是为了展示选中效果,并非实际场景
				for (let item of arr) {
					if (item.selected) {
						active = true;
						attrName += attrName ? ";" + item.name : item.name
					}
				}
				let obj = this.attrArr[index];
				this.btnCloseDrop();
				this.$set(obj, "isActive", active);
				this.$set(obj, "selectedName", attrName);
			},
			showDropdownList() {
				this.selectH = 246;
				this.tabIndex = 0;
			},
			hideDropdownList() {
				this.selectH = 0
			},
			dropdownItem(e) {
				let index = parseInt(e.currentTarget.dataset.index, 10);
				let arr = this.dropdownList;
				for (let i = 0; i < arr.length; i++) {
					if (i === index) {
						arr[i].selected = true;
					} else {
						arr[i].selected = false;
					}
				}
				this.dropdownList = arr;
				this.selectedName = index === 0 ? '综合' : index === 1 ? '价格升序' : '价格降序';
				this.selectH = 0;
				this.page = 1;
				this.productList = [];
				this.loading = true;
				this.productParams = this.dropdownList[index].param;
				this.getProductList();
			},
			screen(e) {
				let index = parseInt(e.currentTarget.dataset.index, 10);
				if (index === 0) {
					this.showDropdownList();
				} else if (index === 1) {
					let params = {}
					if (this.tabIndex === 1) {
						this.tabIndex = null;
						params.total_sales = 'asc';
					} else {
						this.tabIndex = 1;
						params.total_sales = 'desc';
					}
					this.page = 1;
					this.productList = [];
					this.loading = true;
                    this.productParams = params;
					this.getProductList();
				} else if (index === 2) {
					this.isList = !this.isList
				} else if (index === 3) {
                if (this.productCateList.length === 0) {
                    this.getProductCate();
                }
				if (this.brandList.length === 0) {
                    this.getBrandList();
				}
					this.drawer = true;
				}
			},
			closeDrawer() {
				this.drawer = false;
                const params = {};
                if (this.maxPrice) {
                    params.max_price = this.maxPrice;
                }
                if (this.minPrice) {
                    params.min_price = this.minPrice;
                }
                const brandArr = [];
                this.brandList.forEach(item => {
                    if (item.isActive) {
					    brandArr.push(item.id);
					}
                });
                if (brandArr.join(',')) {
                    params.brand_id = brandArr.join(',');
                }
                const cateArr = [];
                this.productCateList.forEach(item => {
                    if (item.isActive) {
					    cateArr.push(item.id);
					}
                });
                if (cateArr.join(',')) {
                    params.cate_id = cateArr.join(',');
                }
				this.page = 1;
				this.productList = [];
				this.loading = true;
				this.productParams = params;
				this.getProductList();
			},
			cateBtnSelected(index) {
                this.currentCateStr = '';
				this.$set(this.productCateList[index], "isActive", !this.productCateList[index].isActive);
				const productCateArr = [];
				this.productCateList.forEach(item => {
                    if (item.isActive) {
                        productCateArr.push(item.title);
                    }
				});
				this.currentCateStr = productCateArr.join(',');
			},
			brandBtnSelected(index) {
                this.currentBrandStr = '';
				this.$set(this.brandList[index], "isActive", !this.brandList[index].isActive);
				const brandArr = [];
				this.brandList.forEach(item => {
                    if (item.isActive) {
                        brandArr.push(item.title);
                    }
				});
				this.currentBrandStr = brandArr.join(',');
			},
			// 获取商品分类列表
			async getProductCate() {
				await
				product.getProductCate().then(r => {
					this.productCateList = r.data;
				});
			},
			// 获取商品品牌列表
			async getBrandList() {
				await
				product.getbrandIndex().then(r => {
					this.brandList = r.data;
				});
			},
			back() {
				if (this.drawer) {
					this.closeDrawer()
				} else {
					this.$mRouter.back();
				}
			},
			search() {
			  this.page = 1;
			  this.productList = [];
			  this.loading = true;
			  this.productParams = { keyword: this.keyword };
			  this.getProductList();
			},
			// 获取商品列表
			async getProductList(type) {
				await product.getProductList( {...this.productParams,page: this.page} )
				.then(async r => {
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
					this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
					this.productList = [...this.productList, ...r.data];
				})
				.catch(err => {
					this.errorInfo = err;
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
				});
			},
			// 跳转详情
			navTo(route) {
				this.$mRouter.push({ route });
			}
		},
	}