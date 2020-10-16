
import rfPicker from '@/components/rf-picker/index.vue';
import moment from '@/utils/moment';
import rfNoData from '@/components/rf-no-data';
import { mapMutations } from 'vuex';
import order from '@/service/order.js'


export default {
	components: {
		rfPicker,
		rfNoData
	},
	data() {
		return {
			maskState: 0, // 优惠券面板显示状态
			isFullPayment: 0, // 是否全款预定，默认全款预定
			desc: '', // 备注
			payType: 1, // 1微信 2支付宝
			orderDetail: {},
			pointExchangeType: [],
			loadingType: 'more', // 加载更多状态
			pickerShippingType: [],
			btnLoading: false,
			currentShippingType: {
				value: ''
			},
			currentCompany: {},
			currentPickupPoint: {},
			cartIds: null,
			invoiceItem: {},
			addressData: {},
			couponItem: {},
			pointConfig: {},
			product: null,
			shippingMoney: 0,
			isUsePoint: false,
			isUsePointDisabled: false,
			data: {},
			userInfo: {},
			use_point: 0,
			invoiceContent: null,
			loading: true,
			errorInfo: '',
			buyerMessage: '',
			promoCode: '',
			moneySymbol: this.moneySymbol,
			logo: this.$mSettingConfig.appLogo,
			singleSkuText: this.singleSkuText
		};
	},
	computed: {
		// 计算商品金额
		amountGoods() {
			return this.orderDetail.preview && this.orderDetail.preview.product_money;
		},
		// 计算优惠金额
		discountAmount() {
			const discountMoney = this.floor(
				((100 - this.couponItem.discount) / 100) * this.amountGoods
			);
			return parseInt(this.couponItem.type, 10) === 2 ? discountMoney: this.couponItem.money || 0;
		},
		// 计算实付金额
		realAmount() {
			const realAmount =
				this.amountGoods -
				this.discountAmount +
				parseFloat(this.shippingMoney) -
				(this.isUsePoint ? this.maxUsePointFee : 0);
			return (parseFloat(this.invoiceAmount) + realAmount > 0 ? (parseFloat(this.invoiceAmount) + realAmount) : 0).toFixed(2);
		},
		// 计算发票税费
		invoiceAmount() {
			const realAmount = this.amountGoods - this.discountAmount - (this.isUsePoint ? this.maxUsePointFee : 0);
			return this.invoiceItem.type ? this.floor((this.orderDetail.invoice.order_invoice_tax / 100) * realAmount): 0;
		},
		// 计算可用积分
		maxUsePoint() {
			return this.orderDetail.max_use_point >
				uni.getStorageSync('userInfo').account.user_integral
				? uni.getStorageSync('userInfo').account.user_integral
				: this.orderDetail.max_use_point;
		},
		// 计算最大积分可抵扣金额
		maxUsePointFee() {
			return this.maxUsePoint * this.pointConfig.convert_rate;
		},
		givePoint() {
			return function(val) {
				if (this.couponItem.discount) {
					return Math.floor(this.couponItem.discount / 100 * val);
				} else {
					return val;
				}
			};
		}
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YY/MM/DD HH:mm');
		}
	},
	onShow() {
		if (this.addressData && this.addressData.realname) {
			this.getOrderFreightFee();
		}
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
        ...mapMutations(['setCartNum']),
		handleIsFullPayment (e) {
			this.isFullPayment = e.detail.value;
		},
		handleInvoiceChange(val) {
			this.invoiceContent = val;
		},
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 不使用发票
		closeInvoice() {
			this.invoiceItem = {};
		},
		// 不使用优惠券
		clearCoupon () {
			this.couponItem = {};
		},
		// 向下取整
		floor(val) {
			return Math.floor(val * 100) / 100;
		},
		// 是否使用积分抵扣
		handleIsUsePoint() {
			if (this.isUsePoint) {
				this.isUsePoint = false;
				this.use_point = 0;
			} else {
				this.isUsePoint = true;
				this.use_point = this.maxUsePoint;
			}
		},
		// 选择物流
		showSinglePicker() {
			this.$refs.shippingTypePicker.show();
		},
		// 选择快递公司
		showCompanyPicker() {
			this.$refs.companyTypePicker.show();
		},
		// 选择自提点
		showPickupPointPicker() {
			this.$refs.pickupPointPicker.show();
		},
		// 确定选择物流
		onShippingConfirm(e) {
			e.value = e.value[0];
			this.currentShippingType = e;
			if (this.currentShippingType.value.toString() === '2') {
				if (
					parseFloat(this.realAmount) >
					parseFloat(this.orderDetail.pickup_point_config.pickup_point_freight)
				) {
					this.shippingMoney = 0;
				} else {
					this.shippingMoney =
						parseFloat(this.orderDetail.pickup_point_config.pickup_point_fee) ||
						0;
				}
			} else {
				this.currentCompany = this.orderDetail.company[0];
				this.getOrderFreightFee();
			}
		},
		// 确定选择快递公司
		async onCompanyConfirm(e) {
			e.value = e.value[0];
			this.currentCompany = e;
			if (this.orderDetail.is_full_mail) {
				this.shippingMoney = 0;
				return;
			}
			this.getOrderFreightFee();
		},
		// 确定选择自提点
		async onPickupPointConfirm(e) {
			e.value = e.value[0];
			this.currentPickupPoint = e;
			if (this.currentPickupPoint) {
				this.shippingMoney = parseFloat(this.orderDetail.pickup_point_config.pickup_point_fee) || 0;
			}
		},
		// 计算运费
		async getOrderFreightFee() {
			const params = {};
			if (this.addressData) {
				params.address_id = this.addressData.id;
			}
			if (this.currentCompany) {
				params.company_id = this.currentCompany.value;
			}
			await
			order.getorderFreightFee({ ...params,...this.data })
			.then( r => { this.shippingMoney = r.data.shipping_money || 0; });
		},
		// 数据初始化
		async initData(options) {
			this.promoCode = options.promo_code;
			this.data = await JSON.parse(options.data);
			this.userInfo = uni.getStorageSync('userInfo');
			await this.getOrderDetail();
		},
		// 获取订单详情
		async getOrderDetail() {
			await
			order.getorderPreview(this.data).then(r => {
				this.loading = false;
				this.orderDetail = r.data;
				this.pointConfig = this.orderDetail.point_config;
				this.addressData = this.orderDetail.address;
				this.couponItem = (this.orderDetail && this.orderDetail.coupons[0]) || {};
				this.orderDetail.company.forEach(item => {
					item.label = item.title;
					item.value = item.id;
				});
				this.currentCompany = this.orderDetail.company[0];
				this.pointExchangeType = [];
				this.orderDetail.products.forEach(item => {
					this.pointExchangeType.push(item.point_exchange_type);
				});
				this.shippingMoney = r.data.preview.shipping_money;
				if (this.orderDetail.is_open_logistics === '1') {
					this.pickerShippingType.push({ label: '物流配送', value: 1 });
				}
				if (this.orderDetail.pickup_point_config.buyer_self_lifting === '1') {
					this.orderDetail.pickup_point_config.list.forEach(item => {
						item.label = `${item.contact || '无名'} - ${item.name ||
							'未知'} - ${item.address || '未知'}`;
						item.value = item.id;
					});
					this.currentPickupPoint = this.orderDetail.pickup_point_config.list[0] || {};
					this.pickerShippingType.push({ label: '买家自提', value: 2 });
				} else {
					this.orderDetail.pickup_point_config.list = [];
				}
				if (this.pickerShippingType.length > 0) {
					this.currentShippingType = this.pickerShippingType[0];
				}
			})
			.catch(err => {
				this.loading = false;
				this.errorInfo = err;
			});
		},
		// 显示优惠券面板
		toggleMask(type) {
			if ('combination,wholesale,group_buy'.indexOf(this.data.type) !== -1) {
				this.$mHelper.toast('套餐购买/拼团/团购下单不支持选择购物券');
				return;
			}
			let timer = type === 'show' ? 10 : 300;
			let state = type === 'show' ? 1 : 0;
			this.maskState = 2;
			setTimeout(() => {
				this.maskState = state;
			}, timer);
		},
		numberChange(data) {
			this.number = data.number;
		},
		changePayType(type) {
			this.payType = type;
		},
		async submit() {
			if (this.orderDetail.close_all_logistics === '1') {
				this.$mHelper.toast('物流配送暂未开启，请联系客服');
				return;
			}
			const params = {};
			params.buyer_message = this.buyerMessage;
			if (this.promoCode) {
				params.promo_code = this.promoCode;
			}
			if (this.couponItem && this.couponItem.id) {
				params.coupon_id = this.couponItem.id;
			}
			if (this.invoiceItem && this.invoiceItem.id) {
				params.invoice_id = this.invoiceItem.id;
				params.invoice_content =
					this.invoiceContent || this.orderDetail.invoice.list[0];
			}
			if (this.currentShippingType.value.toString() === '1') {
				if (this.currentCompany && this.currentCompany.value) {
					params.company_id = this.currentCompany.value;
				}
				if (this.addressData && this.addressData.id) {
					params.address_id = this.addressData.id;
				} else {
					this.$mHelper.toast('请选择收货地址');
					return;
				}
			}
			if (this.currentShippingType && this.currentShippingType.value) {
				params.shipping_type = this.currentShippingType.value;
				if (this.currentShippingType.value.toString() === '2') {
					if (this.currentPickupPoint && this.currentPickupPoint.value) {
						params.pickup_id = this.currentPickupPoint.value;
					}
				}
			}
			if (this.use_point) {
				params.use_point = this.use_point;
			}
			this.btnLoading = true;
			await
			order.getorderCreate({ ...params,...this.data })
			.then(r => {
				const data = {};
				data.order_id = parseInt(r.data.id, 10);
				if (this.data.type === 'cart') this.setCartItemCount();
				if (parseInt(r.data.pay_status, 10) === 1) {
					uni.redirectTo({
						url: `/pages/user/money/success?type=${this.data.type}&id=${r.data.wholesale_id}`
					});
				} else {
					uni.redirectTo({
						url: `/pages/user/money/pay?id=${r.data.id}&type=${this.data.type}`
					});
				}
			})
			.catch(() => {
				this.btnLoading = false;
			});
		},
		// 设置购物车数量角标
		async setCartItemCount() {
			await order.getcartItemCount()
			.then(r => {
				if (parseInt(r.data, 10) > 0) {
					this.setCartNum(r.data);
				} else {
					uni.removeStorageSync('cartNum');
					uni.removeTabBarBadge({ index: this.$mConstDataConfig.cartIndex });
				}
			});
		},
		stopPrevent() {},
		selectCoupon(item) {
			if (parseFloat(item.at_least) > parseFloat(this.amountGoods)) {
				this.$mHelper.toast('不满足优惠券使用条件~');
				return;
			}
			this.maskState = 0;
			this.couponItem = item;
		}
	}
};