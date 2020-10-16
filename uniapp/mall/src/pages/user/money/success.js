
import moment from '@/utils/moment';
import mConstDataConfig from '@/config/constData.js';
import user from '@/service/user.js'

export default {
	data() {
		return {
			loading: true,
			type: '',
			id: '',
			orderId: '',
			moneyBg: this.$mAssetsPath.moneyBg,
			moneySymbol: this.moneySymbol,
			orderDetail: {}
		};
	},
	onLoad(options) {
		this.type = options.type;
		this.id = options.id;
		this.orderId = options.order_id;
		this.getOrderDetail();
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		},
		orderStatusFilter(orderStatus) {
			let state = null;
			mConstDataConfig.orderStatus.forEach(orderItem => {
				if (orderItem.key === parseInt(orderStatus, 10)) {
					state = orderItem.value;
				}
			});
			return state;
		}
	},
	methods: {
		// 获取订单详情
		async getOrderDetail() {
			await
			user.getorderDetail({
				id: this.orderId, // 订单id
				simplify: 1 // 获取简化订单详情
			})
			.then(r => {
				this.loading = false;
				this.orderDetail = r.data;
			}).catch(() => {
				this.loading = false;
			});
		},
		navTo() {
			let route;
			switch (this.type) {
				case 'wholesale':
					route = `/pages/marketing/wholesale/detail?id=${this.id}`;
					break;
				default:
					route = '/pages/order/order?state=-1';
					break;
			}
			this.$mRouter.push({ route });
		},
		// 返回主页
		toHome() {
			this.$mRouter.reLaunch({ route: '/pages/index/index' });
		}
	}
};