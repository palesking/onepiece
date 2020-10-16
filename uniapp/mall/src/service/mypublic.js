
import { http } from '@/service/base.js';

const mypublic = {
	loginByPass : '/tiny-shop/v1/site/login',
	loginBySmsCode : '/tiny-shop/v1/site/mobile-login',


	async getsmsCode({mobile,usage}) {
		return http.post('/tiny-shop/v1/site/sms-code', { mobile,usage })
	},

	async getauthLogin( {userInfo, oauthClientParams, gender, oauth_client_user_id, head_portrait} ) {
		return http.post('/tiny-shop/v1/member/auth/create', {
			userInfo,
			oauthClientParams,
			gender,
			oauth_client_user_id,
			head_portrait
		});
	},

	async getregisterByPass(reqBody) {
		return http.post('/tiny-shop/v1/site/register', reqBody)
	},

	async getwechatH5Login( code,promoCodeParams ) {
		return http.get('/tiny-shop/v1/third-party/wechat',  code, promoCodeParams )
	},

	async getthirdPartyApple(a,b) {
		return http.post(thirdPartyApple, {a,b})
	},

	async getupdatePassword(reqBody) {
		return http.post('/tiny-shop/v1/site/up-pwd', reqBody)
	},
}

export default mypublic
