
import { http } from '@/service/base.js';
// import indexConfig from '@/config/index.js';
// http.config.baseUrl = indexConfig.apphost.lizi;

const product = {
	// 获取产品详情
	async getProductDetail(id) {
		return http.get('/tiny-shop/v1/product/product/view',  id )
	},

	// 添加商品至购物车
	async handleCartItemCreate({skuId, num}) {
		return http.post('/tiny-shop/v1/member/cart-item/create', {skuId,num})
	},

	// 添加商品数量至购物车
	async getcartItemCount() {
		return http.get('/tiny-shop/v1/member/cart-item/count')
	},

	// 获取产品详情
	async getProductDetail({id}) {
		return http.get('/tiny-shop/v1/product/product/view', { id })
	},

	// 获取商品分类列表
	async getProductCate() {
		return http.get('/tiny-shop/v1/product/cate/index')
	},

	// 获取商品品牌列表
	async getbrandIndex() {
		return http.get('/tiny-shop/v1/product/brand/index')
	},

	// 获取产品列表
	async getProductList({cate_id,page}) {
		return http.get('/tiny-shop/v1/product/product/index', {cate_id,page})
	},
}

export default product
