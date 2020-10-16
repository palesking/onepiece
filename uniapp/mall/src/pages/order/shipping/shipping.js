	
import moment from '@/utils/moment';
import order from '@/service/order.js'

export default {
	data() {
		return {
			shippingDetail: {},
			shippingTimeLine: []
		};
	},
	filters: {
		time(val) {
			return parseInt(val, 10) === 0
				? '暂未操作'
				: moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		orderStatusFilter(orderStatus) {
			let status = null;
			const orderStatusList = [
				{ key: 0, value: '待付款' },
				{ key: 1, value: '待发货' },
				{ key: 2, value: '已发货' },
				{ key: 3, value: '已收货' },
				{ key: 4, value: '已完成' },
				{ key: -1, value: '退货申请' },
				{ key: -2, value: '退款中' },
				{ key: -3, value: '退款完成' },
				{ key: -4, value: '已关闭' },
				{ key: -5, value: '撤销申请' }
			];
			orderStatusList.forEach(orderItem => {
				if (orderItem.key === parseInt(orderStatus, 10)) {
					status = orderItem.value;
				}
			});
			return status;
		},
		filterProductStatus(item) {
			let status = null;
			if (parseInt(item.refund_status, 10) !== 0) {
				const refundStatusList = [
					{ key: 1, value: '退款申请' },
					{ key: 2, value: '等待退货' },
					{ key: 3, value: '等待确认收货' },
					{ key: 4, value: '等待确认退款' },
					{ key: 5, value: '同意退款' },
					{ key: -1, value: '退款已拒绝' },
					{ key: -2, value: '退款已关闭' },
					{ key: -3, value: '退款不通过' }
				];
				refundStatusList.forEach(refundItem => {
					if (refundItem.key === parseInt(item.refund_status, 10)) {
						status = refundItem.value;
					}
				});
			} else if (parseInt(item.order_status, 10) === 4) {
				const evaluateStatusList = [
					{ key: 0, value: '未评价' },
					{ key: 1, value: '已评价' },
					{ key: 2, value: '已追评' }
				];
				evaluateStatusList.forEach(evaluateItem => {
					if (evaluateItem.key === parseInt(item.is_evaluate, 10)) {
						status = evaluateItem.value;
					}
				});
			} else {
				const orderStatusList = [
					{ key: 0, value: '待付款' },
					{ key: 1, value: '待发货' },
					{ key: 2, value: '已发货' },
					{ key: 3, value: '已收货' },
					{ key: 4, value: '已完成' },
					{ key: -1, value: '退货申请' },
					{ key: -2, value: '退款中' },
					{ key: -3, value: '退款完成' },
					{ key: -4, value: '已关闭' },
					{ key: -5, value: '撤销申请' }
				];
				orderStatusList.forEach(orderItem => {
					if (orderItem.key === parseInt(item.order_status, 10)) {
						status = orderItem.value;
					}
				});
			}
			return status;
		},
		filterShippingType(value) {
			const data = ['', '物流配送', '买家自提', '本地配送'];
			return data[parseInt(value, 10)];
		}
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 订单号复制
		copy(content) {
			/* #ifdef H5 */
			this.$mHelper.h5Copy(content);
			/* #endif */
			/* #ifndef H5 */
			uni.setClipboardData({
				data: content,
				success: function() {
					this.$mHelper.toast('复制成功');
				}
			});
			/* #endif */
		},
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 初始化数据
		initData(options) {
			this.getOrderDetail(options.id);
		},
		// 获取物流信息
		async getOrderDetail(id) {
			await order.getorderProductExpressDetails( {order_id: id} ).then(r => {
				r.data.data.forEach(row => {
					const traceArr = [];
					row.trace.forEach(item => {
						traceArr.push({ time: item.datetime, value: item.remark });
					});
					row.trace = traceArr;
				});
				this.shippingDetail = r.data;
			});
		}
	}
};