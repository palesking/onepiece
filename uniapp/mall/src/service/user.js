

import { http } from '@/service/base.js';

const user = {
	// 获取用户信息
	async getmemberInfo() {
		return http.get('/tiny-shop/v1/member/member/index')
	},

	// 获取积分
	async getcreditsLogList( params,page ) {
		return http.get('/tiny-shop/v1/member/credits-log/index', { params,page })
	},

	// 获取会员等级
	async getmemberLevelIndex() {
		return http.get('/tiny-shop/v1/member/member-level/index')
	},

	async getrechargeConfigIndex() {
		return http.get('/tiny-shop/v1/member/recharge-config/index')
	},

	// 获取支付类型列表
	async getconfigList({field}) {
		return http.get('/tiny-shop/v1/common/config/index', {field})
	},

	async getaddressDelete() {
		return http.delete("'/tiny-shop/v1/member/address/delete'+?id=${id}")
	},

	// 获取收货地址列表
	async getaddressList(page) {
		return http.get('/tiny-shop/v1/member/address/index', { page })
	},

	// 获取收货地址
	async getaddressDetail(id) {
		return http.get('/tiny-shop/v1/member/address/view', { id })
	},

	async getaddressUpdate( {realname,mobile,address_details,is_default,province_id,city_id,area_id } ) {
		return http.put("'/tiny-shop/v1/member/address/update'+?id=${data.id}", {
			realname,
			mobile,
			address_details,
			is_default,
			province_id,
			city_id,
			area_id
		})
	},
	async getaddressCreate( { realname,mobile,address_details,is_default,province_id,city_id,area_id } ) {
		return http.post('/tiny-shop/v1/member/address/create', {
			realname,
			mobile,
			address_details,
			is_default,
			province_id,
			city_id,
			area_id
		})
	},

	async getcollectDel(page) {
		return http.delete("'/tiny-shop/v1/common/collect/delete'+?id=${id}", { page })
	},

	async getcollectList(page) {
		return http.get('/tiny-shop/v1/member/collect/index', { page })
	},

	async getcouponClear() {
		return http.get('/tiny-shop/v1/member/coupon/clear')
	},

	async getmyCouponList( page,state ) {
		return http.get('/tiny-shop/v1/member/coupon/index', { page,state })
	},

	// 获取优惠券
	async getcouponReceive({ id }) {
		return http.post('/tiny-shop/v1/marketing/coupon-type/create', { id })
	},

	// 获取我的收货地址列表
	async getcouponDetail({ id }) {
		return http.get('/tiny-shop/v1/marketing/coupon-type/view', { id })
	},

	// 删除足迹
	async getfootPrintDel(page) {
		return http.delete("'/tiny-shop/v1/member/footprint/delete'+?id=${id}", { page })
	},

	// 获取足迹列表
	async getfootPrintList(params) {
		return http.get('/tiny-shop/v1/member/footprint/index', params)
	},

	async getorderDetail({id,simplify}) {
		return http.get('/tiny-shop/v1/member/order/view', {id,simplify})
	},

	// 依次上传图片
	getuploadImage({filePath,name}) {
		return http.upload('/tiny-shop/v1/common/file/images', { filePath, name })
	},

	async getmemberUpdate( _this,profileInfo,birthday ) {
		return http.put(`/tiny-shop/v1/member/member/update?id=${_this}`, profileInfo,birthday )
	},

	async getverifyAccessToken(token) {
		return http.post('/tiny-shop/v1/site/verify-access-token', { token })
	}
}

export default user
