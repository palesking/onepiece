
import user from '@/service/user.js'

export default {
	data() {
		return {
			isWechat: this.$mPayment.isWechat(),
			payType: 5,
			payTypeList: {},
			money: 0,
			userInfo: {
                account: {}
			},
			moneySymbol: this.moneySymbol,
			orderDetail: {},
			orderInfo: {},
			btnLoading: false,
			loading: true,
			code: '',
			type: '',
			moneyBg: this.$mAssetsPath.moneyBg,
			marketingId: ''
		};
	},
	computed: {},
	onLoad(options) {
		this.initData(options);
			/*  #ifdef H5  */
			this.code = options.code && options.code.split(',')[options.code.split(',').length - 1];
			if (this.$mPayment.isWechat()) {
				if (!this.code) {
                    const href = window.location.href;
                    window.location.href = 
                        `https://open.weixin.qq.com/connect/oauth2/authorize?
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
		// 数据初始化
		async initData(options) {
			this.orderInfo['order_id'] = parseInt(options.id, 10);
			this.type = options.type;
			await this.getOrderDetail(options.id);
			// #ifdef H5
			if (uni.getSystemInfoSync().platform === 'android') {
				await this.$mPayment.wxConfigH5(window.location.href);
			}
			// #endif
		},
		// 获取用户信息
		async getMemberInfo() {
			await
			user.getmemberInfo().then(async r => {
				this.loading = false;
				this.userInfo = r.data;
			});
		},
		// 选择支付方式
		changePayType(type) {
			this.payType = type;
		},
		// 获取订单费用
		async getOrderDetail(id) {
			await
			user.getorderDetail({
				id, // 订单id
				simplify: 1 // 获取简化订单详情
			})
			.then(r => {
				this.marketingId = r.data.wholesale_id;
				this.getPayTypeList();
				this.getMemberInfo();
				// 尾款支付优先显示
				this.money = r.data.pay_money;
			})
			.catch(() => {
				this.loading = false;
			});
		},
		// 获取支付类型列表
		async getPayTypeList() {
			await
			user.getconfigList({ field: 'order_balance_pay,order_wechat_pay,order_ali_pay' })
			.then(r => {
				this.payTypeList = r.data;
			});
		},
		// 确认支付
		async confirm() {
			this.btnLoading = true;
			const route = `/pages/user/money/success?type=${this.type}&id=${this.marketingId}&order_id=${this.orderInfo['order_id']}`;
			setTimeout(() => {
				this.btnLoading = false;
			}, 0.5 * 1000);
			switch (parseInt(this.payType, 10)) {
				case 1:
					await this.$mPayment.weixinPay('order', JSON.stringify(this.orderInfo), route, this.code);
					break;
				case 2:
					await this.$mPayment.aliPay('order', JSON.stringify(this.orderInfo), route);
					break;
				case 5:
					await this.$mPayment.balancePay(JSON.stringify(this.orderInfo), route);
					break;
			}
		}
	}
};