
import { http } from '@/service/base.js';

const profile = {
	// 获取用户信息
	async getmemberInfo() {
		return http.get('/tiny-shop/v1/member/member/index')
	},
	
	// 设置未读消息个数
	async getnotifyUnRreadCount() {
		return http.get('/tiny-shop/v1/member/notify/un-read-count')
	},
	
	// 获取足迹列表
	async getfootPrintList() {
		return http.get('/tiny-shop/v1/member/footprint/index')
	}
}

export default profile
