
import { http } from '@/service/base.js';

// http.interceptor.request(
// 	config => {
// 		/* 请求之前拦截器 */
// 		// config.header['x-api-key'] = uni.getStorageSync('accessToken');
// 		config.baseUrl = 'http://abc'
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );

const category = {
	// 添加商品至购物车
	async handleCartItemCreate({skuId, num}) {
		return http.post('/tiny-shop/v1/member/cart-item/create', { skuId,num })
	},

	// 添加商品数量至购物车
	async getcartItemCount() {
		return http.get('/tiny-shop/v1/member/cart-item/count')
	},

	// 获取产品详情
	async getProductDetail({id}) {
		return http.get('/tiny-shop/v1/product/product/view', { id })
	},

	// 获取广告列表
	async getAdvList({location}) {
		return http.get('/tiny-shop/v1/common/adv/index', { location })
	},

	// 获取商品分类列表
	async getProductCate() {
		return http.get('/tiny-shop/v1/product/cate/index')
	},

	// 获取产品列表
	async getCategoryProductList({cate_id,params}) {
		return http.get('/tiny-shop/v1/product/product/index', { cate_id,params })
	},
}

export default category
