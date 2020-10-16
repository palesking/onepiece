/**
 * @des 提交退货物流
 * @author lizi
 * @date 2020-03-16 11:15
 * @copyright 2019
 */

import order from '@/service/order.js'

export default {
	data() {
		return {
			productInfo: {},
			token: null,
			// 评论表单
			salesReturn: {
				id: undefined,
				refund_shipping_code: undefined,
				refund_shipping_company: undefined
			},
			singleSkuText: this.singleSkuText
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 数据初始化
		initData(options) {
			this.productInfo = JSON.parse(options.data);
		},
		handleRefundShippingCompanyChange(e) {
			this.salesReturn.refund_shipping_company = e.detail.value;
		},
		handleRefundShippingCodeChange(e) {
			this.salesReturn.refund_shipping_code = e.detail.value;
		},
		// 提交评价
		async handleSalesReturn() {
			this.salesReturn.id = this.productInfo.id;
			if (!this.salesReturn.refund_shipping_company) {
				this.$mHelper.toast('请输入物流公司');
				return;
			}
			if (!this.salesReturn.refund_shipping_code === undefined) {
				this.$mHelper.toast('请输入物流单号');
				return;
			}

			let salesReturnApi = order.orderProductSalesReturn;
			if (this.productInfo.order_status.toString() === '4') {
				salesReturnApi = order.orderCustomerSalesReturn;
			}
			await
			order.salesReturnApi({ ...this.salesReturn }).then(() => { this.$mRouter.back(); });
		}
	}
};