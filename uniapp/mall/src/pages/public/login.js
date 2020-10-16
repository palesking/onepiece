
import moment from '@/utils/moment';
import mypublic from '@/service/mypublic.js'

export default {
	data() {
		return {
			loginParams: {
				mobile: '',
				code: '',
				password: ''
			},
			registerParams: {
				mobile: '',
				password: '',
				password_repetition: '',
				promoCode: '',
				nickname: '',
				code: ''
			},
			btnLoading: false,
			reqBody: {},
			codeSeconds: 0, // 验证码发送时间间隔
			loginByPass: true,
			smsCodeBtnDisabled: true,
			userInfo: null,
			loginBg: this.$mAssetsPath.loginBg,
			loginPic: this.$mAssetsPath.loginPic,
			appName: this.$mSettingConfig.appName,
			styleLoginType: this.$mSettingConfig.styleLoginType,
			closeRegisterPromoCode: this.$mSettingConfig.closeRegisterPromoCode,
			tabCurrentIndex: 0,
			typeList: [
				{
					text: '登录'
				},
				{
					text: '注册'
				}
			]
		};
	},
	onShow() {
		if (this.$mStore.getters.hasLogin) {
			this.$mRouter.reLaunch({ route: '/pages/index/index' });
		}
	},
	onLoad(options) {
		this.tabCurrentIndex = parseInt(options.type || 0, 10);
		const time =
			moment().valueOf() / 1000 - uni.getStorageSync('loginSmsCodeTime');
		if (time < 60) {
			this.codeSeconds =
				this.$mConstDataConfig.sendCodeTime - parseInt(time, 10);
			this.handleSmsCodeTime(this.codeSeconds);
		} else {
			this.codeSeconds = this.$mConstDataConfig.sendCodeTime;
			this.smsCodeBtnDisabled = false;
			uni.removeStorageSync('loginSmsCodeTime');
		}
		this.registerParams.promoCode = options.promo_code;
		this.loginParams.mobile = uni.getStorageSync('loginMobile') || '15617117212';
		this.loginParams.password = uni.getStorageSync('loginPassword') || '123456';
		this.userInfo = uni.getStorageSync('wechatUserInfo');
	},
	methods: {
		loginTest(mobile, password) {
			this.loginParams.mobile = mobile;
			this.loginParams.password = password;
		},
		// 发送验证码并进入倒计时
		async getSmsCode(usage = 'login') {
			this.reqBody['mobile'] = this.tabCurrentIndex === 0 ? this.loginParams['mobile'] : this.registerParams['mobile'];
			let checkSendCode = this.$mGraceChecker.check(
				this.reqBody,
				this.$mFormRule.sendCodeRule
			);
			if (!checkSendCode) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			await
			mypublic.getsmsCode( {mobile: this.reqBody['mobile'],usage} )
			.then(r => {
				if (r.data) {
					this.$mHelper.toast(`验证码发送成功, 验证码是${r.data}`);
				} else {
					this.$mHelper.toast('验证码已发送.');
				}
				this.smsCodeBtnDisabled = true;
				uni.setStorageSync('loginSmsCodeTime', moment().valueOf() / 1000);
				this.handleSmsCodeTime(59);
			});
		},
		handleSmsCodeTime(time) {
			let timer = setInterval(() => {
				if (time === 0) {
					clearInterval(timer);
					this.smsCodeBtnDisabled = false;
				} else {
					this.codeSeconds = time;
					this.smsCodeBtnDisabled = true;
					time--;
				}
			}, 1000);
		},
		// 失去焦点的手机号
		blurMobileChange(e) {
			this.mobile = e.detail.value;
		},
		// 切换登录方式
		showLoginBySmsCode() {
			this.loginByPass = !this.loginByPass;
		},
		// 返回上一页
		navBack() {
			this.$mRouter.back();
		},
		// 统一跳转路由
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 返回主页
		toHome() {
			this.$mRouter.reLaunch({ route: '/pages/index/index' });
		},
		// 提交表单
		async toLogin() {
			if (this.$mSettingConfig.closeLogin) {
				this.$mHelper.toast('暂未开放登录，敬请期待～');
				return;
			}
			uni.removeStorageSync('loginMobile');
			uni.removeStorageSync('loginPassword');
			this.reqBody['mobile'] = this.loginParams['mobile'];
			let cheRes, loginApi;
			if (this.loginByPass) {
				loginApi = mypublic.loginByPass;
				this.reqBody['password'] = this.loginParams['password'];
				cheRes = this.$mGraceChecker.check(
					this.reqBody,
					this.$mFormRule.loginByPassRule
				);
			} else {
				this.reqBody['code'] = this.loginParams['code'];
				loginApi = mypublic.loginBySmsCode;
				cheRes = this.$mGraceChecker.check(
					this.reqBody,
					this.$mFormRule.loginByCodeRule
				);
			}
			if (!cheRes) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			this.reqBody.group = this.$mHelper.platformGroupFilter();
			const backUrl = uni.getStorageSync('backToPage');
			if (backUrl.indexOf('promo_code') !== -1) {
				this.reqBody.promo_code = JSON.parse(backUrl)['query']['promo_code'];
			}
			this.handleLogin(this.reqBody, loginApi);
		},
		// 登录
		async handleLogin(params, loginApi) {
			this.btnLoading = true;
			await
			this.$http.post(loginApi, params)
			.then(r => {
				this.$mHelper.toast('恭喜您，登录成功！');
				this.$mStore.commit('login', r.data);
				if (this.userInfo) {
					this.btnLoading = false;
					const oauthClientParams = {};
					/*  #ifdef MP-WEIXIN */
					oauthClientParams.oauth_client = 'wechatMp';
					/*  #endif  */
					/*  #ifndef MP-WEIXIN */
					oauthClientParams.oauth_client = 'wechat';
					/*  #endif  */
					const userInfo = JSON.parse(this.userInfo);
					mypublic.getauthLogin({
						...userInfo,
						...oauthClientParams,
						gender: userInfo.sex || userInfo.gender,
						oauth_client_user_id: userInfo.openid || userInfo.openId,
						head_portrait: userInfo.headimgurl || userInfo.avatarUrl
					})
				}
				uni.removeStorageSync('wechatUserInfo');
				const backToPage = uni.getStorageSync('backToPage');
				uni.removeStorageSync('backToPage');
				if (backToPage) {
					if (
						backToPage.indexOf('/pages/profile/profile') !== -1 ||
						backToPage.indexOf('/pages/cart/cart') !== -1 ||
						backToPage.indexOf('/pages/index/index') !== -1 ||
						backToPage.indexOf('/pages/notify/notify') !== -1 ||
						backToPage.indexOf('/pages/category/category') !== -1
					) {
						this.$mRouter.reLaunch(JSON.parse(backToPage));
					} else {
						this.$mRouter.redirectTo(JSON.parse(backToPage));
					}
				} else {
					this.$mRouter.reLaunch({ route: '/pages/profile/profile' });
				}
			})
			.catch(() => {
				this.btnLoading = false;
			});
		},
		// 切换登录/注册
		tabClick(index) {
			this.tabCurrentIndex = index;
		},
		// 注册账号
		async toRegister() {
			if (this.$mSettingConfig.closeRegister) {
				this.$mHelper.toast('暂未开放注册，敬请期待～');
				return;
			}
			this.reqBody['mobile'] = this.registerParams['mobile'];
			this.reqBody['password'] = this.registerParams['password'];
			this.reqBody['code'] = this.registerParams['code'];
			this.reqBody['nickname'] = this.registerParams['nickname'];
			const cheRes = this.$mGraceChecker.check(
				this.reqBody,
				this.$mFormRule.registerRule
			);
			if (!cheRes) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			if (
				this.registerParams['password'] !==
				this.registerParams['password_repetition']
			) {
				this.$mHelper.toast('两次输入的密码不一致');
				return;
			}
			this.reqBody['password_repetition'] = this.registerParams[
				'password_repetition'
				];
			this.reqBody['promo_code'] = this.registerParams['promoCode'];
			this.btnLoading = true;
			this.reqBody.group = this.$mHelper.platformGroupFilter();
			await mypublic.getregisterByPass(this.reqBody)
			.then(() => {
				this.btnLoading = false;
				this.$mHelper.toast('恭喜您注册成功');
				uni.setStorageSync('loginMobile', this.reqBody['mobile']);
				uni.setStorageSync('loginPassword', this.reqBody['password']);
				this.$mRouter.push({ route: '/pages/public/login' });
			})
			.catch(() => {
				this.btnLoading = false;
			});
		}
	}
};