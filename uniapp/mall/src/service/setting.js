

import { http } from '@/service/base.js';

const setting = {

	async getmerchantView( {id,field} ) {
		return http.get('/merchants/v1/merchant/view', { id,field })
	},

	// 获取支付类型列表
	async getconfigList( {field} ) {
		return http.get('/tiny-shop/v1/common/config/index', { field })
	},

	// 获取收货地址列表
	async getthirdPartyAuthList() {
		return http.get('/tiny-shop/v1/member/auth/index')
	},

	// 解绑第三方授权登录
	async getthirdPartyAuthDelete() {
		return http.delete("'/tiny-shop/v1/member/auth/delete'+?id=${id}")
	},

	// 获取反馈详情
	async getopinionDetail( {id} ) {
		return http.get('/tiny-shop/v1/member/opinion/view', {id} )
	},

	// 依次上传图片
	getuploadImage({filePath,name}) {
		return http.upload('/tiny-shop/v1/common/file/images', { filePath, name })
	},

	// 发送反馈
	async getopinionCreate( sendDate ) {
		return http.post('/tiny-shop/v1/member/opinion/create',  { sendDate } )
	},

	// 获取意见反馈列表
	async getopinionList( page ) {
		return http.get('/tiny-shop/v1/member/opinion/index', { page })
	},

	async gethelperView(id) {
		return http.get('/tiny-shop/v1/common/helper/view', { id })
	},

	async gethelperIndex() {
		return http.get('/tiny-shop/v1/common/helper/index')
	},

	async getinvoiceDel() {
		return http.delete("'/tiny-shop/v1/member/invoice/delete'+?id=${id}")
	},

	// 获取发票列表
	async getinvoiceList(page) {
		return http.get('/tiny-shop/v1/member/invoice/index', { page })
	},

	async getorderInvoiceList(page) {
		return http.get('/tiny-shop/v1/member/order-invoice/index', { page })
	},

	// 获取发票详情
	async getinvoiceDetail(id) {
		return http.get('/tiny-shop/v1/member/invoice/view', { id })
	},

	// 编辑发票
	async getinvoiceUpdate(params) {
		return http.put("'/tiny-shop/v1/member/invoice/update'+?id=${params.id}", params)
	},

	// 新增发票
	async getorderInvoiceCreate( {order_id,invoice_id,invoice_content,params} ) {
		return http.post('/tiny-shop/v1/member/order-invoice/create', {
			order_id,
			invoice_id,
			invoice_content,
			params
		})
	},

	//退出登录
	async getlogout() {
		return http.post('/tiny-shop/v1/site/logout')
	},
}

export default setting
