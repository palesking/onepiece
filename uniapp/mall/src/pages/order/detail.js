import moment from '@/utils/moment';
import mConstData from '@/config/constData.js';
import rfNoData from '@/components/rf-no-data';
import uniTag from '@/components/uni-tag/uni-tag';
import rfKefu from '@/components/rf-kefu';
import order from '@/service/order.js'

export default {
	components: {
		uniTag,
		rfKefu,
		rfNoData
	},
	data() {
		return {
			maskState: 0, // 优惠券面板显示状态
			orderDetail: {
                pickup: {}
			},
			logo: this.$mSettingConfig.appLogo,
			appName: this.$mSettingConfig.appName,
			invoiceItem: {},
			loading: true,
			errInfo: null,
			order_id: null,
			moneySymbol: this.moneySymbol,
			orderInvoiceContent: '',
			singleSkuText: this.singleSkuText
		};
	},
	computed: {
		orderTimeLine() {
			const timeLine = [];
			if (this.orderDetail.created_at !== '0') {
				timeLine.push({ time: this.orderDetail.created_at, value: '订单创建' });
			}
			if (
				this.orderDetail.close_time <
				(new Date().getTime() / 1000 && this.orderDetail.pay_time !== '0')
			) {
				timeLine.push({
					time: this.orderDetail.close_time,
					value: '未付款订单关闭时间'
				});
			}
			if (this.orderDetail.pay_time !== '0') {
				timeLine.push({ time: this.orderDetail.pay_time, value: '订单支付' });
			}
			if (this.orderDetail.shipping_time !== '0') {
				timeLine.push({
					time: this.orderDetail.shipping_time,
					value: '买家要求发货'
				});
			}
			if (this.orderDetail.consign_time !== '0') {
				timeLine.push({
					time: this.orderDetail.consign_time,
					value: '卖家发货'
				});
			}
			if (this.orderDetail.sign_time !== '0') {
				timeLine.push({
					time: this.orderDetail.sign_time,
					value: '买家确认收货'
				});
			}
			if (this.orderDetail.finish_time !== '0') {
				timeLine.push({
					time: this.orderDetail.finish_time,
					value: '订单完成'
				});
			}
			return timeLine.reverse();
		}
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		orderStatusFilter(orderStatus) {
			let state = null;
			mConstData.orderStatus.forEach(orderItem => {
				if (orderItem.key === parseInt(orderStatus, 10)) {
					state = orderItem.value;
				}
			});
			return state;
		},
		filterProductStatus(item) {
			let status = null;
			if (
				parseInt(item.refund_status, 10) !== 0 &&
				parseInt(item.refund_status, 10) !== -1 &&
				parseInt(item.refund_status, 10) !== -2
			) {
				mConstData.refundStatus.forEach(refundItem => {
					if (refundItem.key === parseInt(item.refund_status, 10)) {
						status = refundItem.value;
					}
				});
			} else if (parseInt(item.order_status, 10) === 4) {
				mConstData.evaluateStatus.forEach(evaluateItem => {
					if (evaluateItem.key === parseInt(item.is_evaluate, 10)) {
						status = evaluateItem.value;
					}
				});
			} else {
				mConstData.orderStatus.forEach(orderItem => {
					if (orderItem.key === parseInt(item.order_status, 10)) {
						status = orderItem.value;
					}
				});
				// 有物流信息则说明已发货
				if (item.order_status === '1' && item.shipping_status === '1') {
					status = '已发货';
				}
			}
			return status;
		},
		filterShippingType(value) {
			const data = ['', '物流配送', '买家自提', '本地配送'];
			return data[parseInt(value, 10)];
		}
	},
	onLoad(options) {
		this.order_id = options.id;
	},
	onShow() {
		this.initData();
	},
	methods: {
		// 监听发票内容发生改变
		handleInvoiceContentChange(e) {
			this.orderInvoiceContent = e.detail.value;
		},
		// 显示优惠券面板
		toggleMask(type) {
			let timer = type === 'show' ? 10 : 300;
			let state = type === 'show' ? 1 : 0;
			this.maskState = 2;
			setTimeout(() => {
				this.maskState = state;
			}, timer);
		},
        stopPrevent() {},
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
		navToEvaluation(item, type) {
			this.$mRouter.push({
				route: `/pages/order/evaluation/evaluation?data=${JSON.stringify(item)}&type=${type}`
			});
		},
		navToRefund(item, type) {
			this.$mRouter.push({
				route: `/pages/order/refund/refund?data=${JSON.stringify(item)}&refundType=${type}`
			});
		},
		navToShippingReturn(item) {
			this.$mRouter.push({
				route: `/pages/order/shipping/return?data=${JSON.stringify(item)}`
			});
		},
		// 订单操作
		handleOrderOperation(item, type) {
			switch (type) {
				case 'detail': // 订单详情
					this.navTo(`/pages/order/detail?id=${item.id}`);
					break;
				case 'evaluation': // 我要评价
					this.navTo(`/pages/order/evaluation/evaluation?order_id=${item.id}`);
					break;
				case 'close': // 取消订单
					this.handleOrderClose(item.id);
					break;
				case 'delete': // 删除订单
					this.handleOrderDelete(item.id);
					break;
				case 'shipping': // 查看物流
					this.navTo(`/pages/order/shipping/shipping?id=${item.id}`);
					break;
				case 'delivery': // 确认收货
					this.handleOrderTakeDelivery(item.id);
					break;
			}
		},
		// 初始化数据
		initData() {
			this.getOrderDetail();
		},
		// 获取订单详情
		async getOrderDetail() {
			await order.getorderDetail({id: this.order_id}).then(r => {
				this.loading = false;
				this.orderDetail = r.data;
				if (this.invoiceItem.id && !this.orderDetail.invoice) {
					order.getconfigList({ field: 'order_invoice_content' })
					.then(r => {
						if (r.data.order_invoice_content) {
							this.invoiceItem.invoiceContentArr = r.data.order_invoice_content.split(',');
							this.orderInvoiceContent = this.invoiceItem.invoiceContentArr[0];
							this.toggleMask('show');
						} else {
							this.invoiceItem.invoiceContentArr = [];
							this.$mHelper.toast('请联系管理员配置发票类型');
						}
					});
				}
			})
			.catch(err => {
				this.loading = false;
				this.errInfo = err;
			});
		},
		async handleOrderInvoiceCreate() {
			await order.getorderInvoiceCreate({
				order_id: this.orderDetail.id,
				invoice_id: this.invoiceItem.id,
				invoice_content: this.orderInvoiceContent
			})
			.then(() => {
				this.toggleMask();
				this.getOrderDetail();
			});
		},
		// 取消订单
		async handleOrderClose(id) {
			await order.getorderClose({id})
			.then(() => {
				this.$mHelper.toast('订单取消成功');
				this.getOrderDetail();
			});
		},
		// 删除已关闭订单
		async handleOrderDelete(id) {
			await order.getorderDelete()
			.then(() => {
				this.$mHelper.toast('订单删除成功');
				this.$mRouter.back();
			});
		},
		// 确认收货
		async handleOrderTakeDelivery(id) {
			await order.getorderTakeDelivery({id})
			.then(() => {
				this.$mHelper.toast('确认收货成功');
				this.getOrderDetail();
			});
		},
		// 产品退款/退货关闭申请
		async handleCloseOrderRefundApply(status, id) {
        uni.showModal({
				content: '取消退款后将无法再次提交申请，是否继续取消退款?',
				success: async e => {
					if (e.confirm) {
                    let closeOrderApi = order.closeOrderRefundApply;
						if (parseInt(status, 10) === 4) {
							closeOrderApi = order.orderCustomerRefundClose;
						}
						await
						this.$http.post(`${closeOrderApi}`, { id })
						.then(r => {
							this.$mHelper.toast('取消成功');
							this.getOrderDetail();
						});
					}
				}
			});
		}
	}
};