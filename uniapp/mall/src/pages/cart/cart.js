import rfAttrContent from '@/components/rf-attr-content/index.vue';
import { mapMutations } from 'vuex';
import cart from '@/service/cart.js'

export default {
  components: { rfAttrContent },
	data() {
		return {
			sumPrice: '0.00',
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			showHeader: true,
			selectedList: [],
			isAllselected: false,
			// 控制滑动效果
			theIndex: null,
			oldIndex: null,
			isStop: false,
			cartList: [],
			hasLogin: null,
			footerbottom: 0,
			specClass: 'none',
			productDetail: {
        base_attribute_format: [],
        sku: []
			},
			specSelected: [],
			specChildList: [],
			specList: [],
			currentSkuId: '',
			moneySymbol: this.moneySymbol,
			loading: true,
			singleSkuText: this.singleSkuText
		};
	},
	onPageScroll(e) {
		// 兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
		this.headerTop = e.scrollTop >= 0 ? null : 0;
		this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
	},
	// 下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		this.selectedList.length = 0;
		this.isAllselected = false;
		this.sumPrice = 0;
		this.getCartItemList('refresh');
	},
	onShow() {
		// 兼容H5下结算条位置
		// #ifdef H5
		this.footerbottom =
			document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
		// #endif
		// #ifdef APP-PLUS
		this.showHeader = false;
		// eslint-disable-next-line
		this.statusHeight = plus.navigator.getStatusbarHeight();
		// #endif
		this.initData();
	},
	methods: {
		...mapMutations(['setCartNum']),
		// 规格弹窗开关
		toggleSpec(row) {
			if (parseInt(row.status, 10) === 0) return;
			if (this.specClass === 'show') {
				if (!this.hasLogin) {
					this.specClass = 'none';
					this.$mHelper.toast('请先登录！');
					return;
				}
				this.handleCartItemUpdateSku(this.currentSkuId, row.skuId);
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			} else if (this.specClass === 'none') {
				if (row) {
					this.getProductDetail(row);
				}
			}
		},
		// 获取产品详情
		async getProductDetail(row) {
			this.currentSkuId = row.sku_id;
			await cart.getProductDetail({id: row.product_id})
			.then(async r => {
				this.productDetail = r.data;
				this.productDetail.sku_name = row.sku_name;
				this.specClass = 'show';
			});
		},
		hideSpec() {
			this.specClass = 'hide';
			setTimeout(() => {
				this.specClass = 'none';
			}, 250);
		},
		stopPrevent() {},
		// 删除选中购物车商品
		async deleteCartItem(id, type) {
			const skuIds = [];
			if (type) {
				skuIds.push(parseInt(id, 10));
			} else {
				for (let i = 0; i < this.cartList.length; i++) {
					if (this.cartList[i].selected) {
						skuIds.push(parseInt(this.cartList[i].sku_id, 10));
					}
				}
			}
			await
			cart.getcartItemDel({sku_ids: JSON.stringify(skuIds)})
			.then(() => {
				this.selectedList.length = 0;
				this.isAllselected = false;
				this.sumPrice = 0;
				this.getCartItemList();
				this.oldIndex = null;
				this.theIndex = null;
			});
		},
		// 修改购物车商品sku
		async handleCartItemUpdateSku(skuId, newSkuId) {
			await
			cart.getcartItemUpdateSku({
				sku_id: skuId,
				new_sku_id: newSkuId
			})
			.then(() => {
				this.selectedList.length = 0;
				this.isAllselected = false;
				this.sumPrice = 0;
				this.getCartItemList();
			});
		},
		// 数据初始化
		initData() {
			this.hasLogin = this.$mStore.getters.hasLogin;
			if (this.hasLogin) {
				this.theIndex = null;
				this.oldIndex = null;
				this.selectedList.length = 0;
				this.isAllselected = false;
				this.sumPrice = 0;
				this.getCartItemList();
			} else {
				this.cartList = [];
				this.selectedList.length = 0;
				this.loading = false;
			}
		},
		// 通用跳转
		navTo(route) {
			if (!this.$mStore.getters.hasLogin) {
				uni.setStorageSync('backToPage', JSON.stringify({ route: '/pages/cart/cart' }));
			}
			this.$mRouter.push({ route });
		},
		// 获取购物车列表
		async getCartItemList(type) {
			await cart.getcartItemList().then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.cartList = r.data;
				let cartNum = 0;
				r.data.forEach(item => {
					if (parseInt(item.status, 10) === 1) {
						cartNum += 1;
					}
				});
				this.setCartNum(cartNum);
			})
			.catch(() => {
				this.cartList = [];
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		// 清空购物车
		clearCart(params) {
			const content = params ? '清空失效商品？' : '清空购物车？';
			uni.showModal({
				content,
				success: async e => {
					if (e.confirm) {
						await
						cart.getcartItemClear(params)
						.then(() => {
							this.selectedList.length = 0;
							this.isAllselected = false;
							this.sumPrice = 0;
							this.getCartItemList();
						});
					}
				}
			});
		},
		// 控制左滑删除效果
		touchStart(index, event) {
			// 多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			this.oldIndex = this.theIndex;
			this.theIndex = null;
			// 初始坐标
			this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
		},
		touchMove(index, event) {
			// 多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			let moveX = event.touches[0].pageX - this.initXY[0];
			let moveY = event.touches[0].pageY - this.initXY[1];

			if (this.isStop || Math.abs(moveX) < 5) {
				return;
			}
			if (Math.abs(moveY) > Math.abs(moveX)) {
				// 竖向滑动-不触发左滑效果
				this.isStop = true;
				return;
			}

			if (moveX < 0) {
				this.theIndex = index;
				this.isStop = true;
			} else if (moveX > 0) {
				if (this.theIndex != null && this.oldIndex === this.theIndex) {
					this.oldIndex = index;
					this.theIndex = null;
					this.isStop = true;
					setTimeout(() => {
						this.oldIndex = null;
					}, 150);
				}
			}
		},
		touchEnd(index, $event) {
			// 结束禁止触发效果
			this.isStop = false;
		},
		// 选中商品
		selected(index, item) {
			if (parseInt(item.status, 10) === 0) return;
			this.cartList[index].selected = !this.cartList[index].selected;
			let i = this.selectedList.indexOf(this.cartList[index].id);
			i > -1
				? this.selectedList.splice(i, 1)
				: this.selectedList.push(this.cartList[index].id);
			this.isAllselected = this.selectedList.length === this.cartList.length;
			this.sum();
		},
		// 全选商品
		allSelect() {
			let len = this.cartList.length;
			let arr = [];
			for (let i = 0; i < len; i++) {
				// 当商品
				if (parseInt(this.cartList[i].status, 10) !== 0) {
					this.cartList[i].selected = !this.isAllselected;
					arr.push(this.cartList[i].id);
				}
			}
			this.selectedList = this.isAllselected ? [] : arr;
			this.isAllselected = !(this.isAllselected || arr.length === 0);
			if (arr.length > 0) {
				this.sum();
			}
		},
		// 减少数量(执行接口)
		sub(item, index) {
			if (this.cartList[index].number <= 1) {
				return;
			}
			this.cartList[index].number--;
			this.numberChange(item);
		},
		// 增加数量(执行接口)
		add(item, index) {
			this.cartList[index].number++;
			this.numberChange(item, undefined, index, 'add');
		},
		// 控制可输入购物车商品数量
		discard() {},
		// 监听购物车商品数量改变
		async numberChange(item, data, index, type) {
			if (data) {
				this.cartList[index].number = data.detail.value;
			}
			await cart.getcartItemUpdateNum({ sku_id: item.sku_id,num: item.number })
			.then(r => {
				if (r.code === 200) {
					this.sum();
				} else {
					if (type === 'add') {
						this.cartList[index].number--;
					}
					this.$mHelper.toast(r.message);
				}
			})
			.catch(() => {
				if (type === 'add') {
					this.cartList[index].number--;
				}
			});
		},
		// 创建订单
		async createOrder() {
			if (this.selectedList.length === 0) return;
			const data = {};
			const ids = [];
			let len = this.cartList.length;
			for (let i = 0; i < len; i++) {
				if (this.cartList[i].selected) {
					ids.push(parseInt(this.cartList[i].id, 10));
				}
			}
			data.type = 'cart';
			data.data = ids.join(',');
			this.selectedList.length = 0;
			this.isAllselected = false;
			this.sumPrice = 0;
			this.navTo(`/pages/order/create/order?data=${JSON.stringify(data)}`);
		},
		// 合计
		sum() {
			this.sumPrice = 0;
			let len = this.cartList.length;
			const arr = [];
			for (let i = 0; i < len; i++) {
				if (this.cartList[i].selected) {
					arr.push(this.cartList[i]);
					this.sumPrice = this.arrSort(arr);
				}
			}
			this.sumPrice = this.sumPrice.toFixed(2);
		},
		// 向下舍去小数点后两位
		floor(val) {
			return Math.floor(val * 100) / 100;
		},
		// 计算相同商品不同规格价格
		arrSort(arr) {
			const map = {},
				dest = [];
			for (let i = 0; i < arr.length; i++) {
				const ai = arr[i];
				if (!map[ai.product.id]) {
					dest.push({
						id: ai.product.id,
						num: 0,
						price: 0,
						data: [ai]
					});
					map[ai.product.id] = ai;
				} else {
					for (let j = 0; j < dest.length; j++) {
						const dj = dest[j];
						if (dj.data[0].product.id === ai.product.id) {
							dj.data.push(ai);
							break;
						}
					}
				}
			}
			const discountArr = [];
			dest.forEach(item => {
				item.data.forEach(item2 => {
					item.num += parseInt(item2.number, 10);
					item.price += parseInt(item2.number, 10) * item2.price;
				});
				const ladderPreferential = item.data[0].ladderPreferential || 0;
				for (let i = 0; i < ladderPreferential.length; i++) {
					if (item.num >= parseInt(ladderPreferential[i].quantity, 10)) {
						ladderPreferential[i].num = item.num;
						ladderPreferential[i].itemPrice = item.data[0].price;
						ladderPreferential[i].totalPrice = item.price;
						discountArr.push(ladderPreferential[i]);
						break;
					}
				}
			});
			let amount = 0;
			let discount = 0;
			discountArr.forEach(item2 => {
				if (parseInt(item2.type, 10) === 1) {
					discount += item2.price * item2.num;
				} else {
					discount +=
						item2.totalPrice -
						this.floor((item2.itemPrice * item2.price) / 100) * item2.num;
				}
			});
			dest.forEach(item => {
				amount += item.price;
			});
			return amount - discount;
		}
	}
};