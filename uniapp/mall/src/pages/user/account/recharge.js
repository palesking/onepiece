
import user from '@/service/user.js'

export default {
	data() {
		return {
			inputAmount: 0, // 金额
			inputAmountGive: 0, // 金额
			amountList: [], // 预设3个可选快捷金额
			payType: 1, // 支付类型
			userInfo: {},
			loading: false,
			providerList: [],
			payTypeList: {},
			isWechat: this.$mPayment.isWechat(),
			pageLoading: true,
			code: ''
		};
	},
	onLoad(options) {
		this.initData(options);
			/*  #ifdef H5  */
			this.code = options.code && options.code.split(',')[options.code.split(',').length - 1];
			if (this.$mPayment.isWechat()) {
				if (!this.code) {
                    const href = window.location.href;
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?
                        appid=${this.$mConfig.weixinAppId}&
                        redirect_uri=${href}&
                        response_type=code&
                        scope=snsapi_userinfo&
                        state=STATE#wechat_redirect`;
				}
			}
			/*  #endif  */
	},
	methods: {
		// 计算充值送的钱 后台配置
		handleInputAmountChange(e) {
			this.inputAmount = parseFloat(e.detail.value);
			if (this.inputAmount < this.amountList[0].price) {
				this.inputAmountGive = 0;
				return;
			}
			if (
				this.inputAmount >= this.amountList[this.amountList.length - 1].price
			) {
				this.inputAmountGive = this.amountList[
					this.amountList.length - 1
				].give_price;
				return;
			}
			for (let i = 0; i < this.amountList.length; i++) {
				if (
					this.inputAmount >= this.amountList[i].price &&
					this.inputAmount < this.amountList[i + 1].price
				) {
					this.inputAmountGive = this.amountList[i].give_price;
				}
			}
		},
		async pay() {
			if (this.payTypeList.order_ali_pay === '0' && this.payTypeList.order_wechat_pay === '0') return;
			const params = {};
			params.money = parseFloat(this.inputAmount);
			switch (parseInt(this.payType, 10)) {
				case 1: // 微信支付
					await this.$mPayment.weixinPay('recharge', JSON.stringify(params), '/pages/user/account/account', this.code);
					break;
				case 2: // 支付宝支付
					await this.$mPayment.aliPay('recharge', JSON.stringify(params), '/pages/user/account/account');
					break;
				default:
					break;
			}
		},
		// 充值成功后更新用户信息
		async getMemberInfo() {
			user.getmemberInfo().then(r => {
				uni.setStorage({
					key: 'userInfo',
					data: r.data
				});
				this.userInfo = r.data || undefined;
			});
		},
		toTipDetail() {
			this.$mRouter.push({
				route: '/pages/set/about/detail?field=protocol_recharge&title=充值协议'
			});
		},
		// 初始化数据
		async initData(options) {
			this.code = options.code;
			this.userInfo = uni.getStorageSync('userInfo') || undefined;
			await
			user.getrechargeConfigIndex()
			.then(r => {
				this.pageLoading = false;
				this.amountList = r.data;
				this.inputAmount = (r.data[0] && r.data[0].price) || 0.01;
				this.inputAmountGive = (r.data[0] && r.data[0].give_price) || 0;
				this.getPayTypeList();
			})
			.catch(() => {
				this.pageLoading = false;
			});
			// #ifdef H5
			if (uni.getSystemInfoSync().platform === 'android') {
				await this.$mPayment.wxConfigH5(window.location.href);
			}
			// #endif
			// #ifdef APP-PLUS
			uni.getProvider({
				service: 'payment',
				success: e => {
					let providerList = [];
					e.provider.map(value => {
						switch (value) {
							case 'alipay':
								providerList.push({
									name: '支付宝',
									id: value,
									loading: false
								});
								break;
							case 'wxpay':
								providerList.push({
									name: '微信',
									id: value,
									loading: false
								});
								break;
							default:
								break;
						}
					});
					this.providerList = providerList;
				},
				fail: e => {}
			});
			// #endif
		},
		// 获取支付类型列表
		async getPayTypeList() {
			await
			user.getconfigList({ field: 'order_balance_pay,order_wechat_pay,order_ali_pay' })
			.then(r => {
				this.payTypeList = r.data;
			});
		},
		select(item) {
			this.inputAmount = item.price;
			this.inputAmountGive = item.give_price;
		}
	}
};