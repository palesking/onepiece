
import { http } from '@/service/base.js';

const order = {
	// 产品退货提交物流
	// orderProductSalesReturn :'/tiny-shop/v1/member/order-product/refund-sales-return',
	// 退货提交物流
	// orderCustomerSalesReturn : '/tiny-shop/v1/member/order-customer/sales-return' ,

	closeOrderRefundApply : '/tiny-shop/v1/member/order-product/refund-close',
	orderCustomerRefundClose : '/tiny-shop/v1/member/order-customer/close',

	// 计算运费
	async getorderFreightFee(params,data) {
		return http.get('/tiny-shop/v1/order/order/freight-fee',  params,data )
	},

	// 获取订单详情
	async getorderPreview(data) {
		return http.get('/tiny-shop/v1/order/order/preview', data)
	},

	//订单详情
	async getorderCreate(params,data) {
		return http.post('/tiny-shop/v1/order/order/create', params,data)
	},
	// 添加商品数量至购物车
	async getcartItemCount() {
		return http.get('/tiny-shop/v1/member/cart-item/count')
	},

	// 订单商品
	async getorderProductIndex() {
		return http.get('/tiny-shop/v1/member/order-product/index', { order_id: this.orderId, is_evaluate: 0 })
	},
	// 依次上传图片
	getuploadImage({filePath,name}) {
		return http.upload('/tiny-shop/v1/common/file/images', { filePath, name })
	},

	// 发表评价
	async getevaluateCreate() {
		return http.post('/tiny-shop/v1/member/evaluate/create', params)
	},

	// 追加评价
	async getevaluateAgain() {
		return http.post("'/tiny-shop/v1/member/evaluate/again'+?order_product_id=${params.order_product_id}",params)
	},

	async getevaluateList({product_id,page,params}) {
		return http.get( '/tiny-shop/v1/product/evaluate/index' , { product_id, page, params })
	},

	async getorderRefundApply() {
		return http.post( '/tiny-shop/v1/member/order-product/refund-apply' , { id,...formData })
	},

	async getorderCustomerRefundApply() {
		return http.post( '/tiny-shop/v1/member/order-customer/apply' , { id, ...formData })
	},

	async salesReturnApi() {
		return http.post(`${salesReturnApi}`, { ...this.salesReturn })
	},

	async getorderProductExpressDetails(order_id) {
		return http.get('/tiny-shop/v1/member/order-product-express/details', { order_id })
	},

	async getorderDetail(id) {
		return http.get('/tiny-shop/v1/member/order/view',  id )
	},

	// 获取支付类型列表
	async getconfigList({field}) {
		return http.get('/tiny-shop/v1/common/config/index', { field })
	},

	// 新增发票
	async getorderInvoiceCreate({ order_id, invoice_id, invoice_content}) {
        return http.post('/tiny-shop/v1/member/order-invoice/create', {
            order_id,
            invoice_id,
            invoice_content
		})
	},

	// 取消订单
	async getorderClose({id}) {
		return http.get( '/tiny-shop/v1/member/order/close' , { id })
	},

	// 删除已关闭订单
	async getorderDelete(id) {
		return http.delete("'/tiny-shop/v1/member/order/delete'+?id=${id}", {})
	},

	// 确认收货
	async getorderTakeDelivery({id}) {
		return http.get('/tiny-shop/v1/member/order/take-delivery', { id })
	},

	async getorderList(params) {
		return http.get('/tiny-shop/v1/member/order/index', params)
	},

	async getguessYouLikeList() {
		return http.get('/tiny-shop/v1/product/product/guess-you-like')
	},
	
	async getcloseOrderApi() {
		return http
	}
}

export default order
