	
import { mapMutations } from 'vuex';
import moment from '@/utils/moment';
import mypublic from '@/service/mypublic.js'

export default {
	data() {
		return {
			appAgreementDefaultSelect: this.$mSettingConfig.appAgreementDefaultSelect, // 是否允许点击登录按钮
			closeRegisterPromoCode: this.$mSettingConfig.closeRegisterPromoCode, // 是否允许点击登录按钮
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
			smsCodeBtnDisabled: true
		};
	},
	onShow() {
		if (uni.getStorageSync('accessToken')) {
			this.$mRouter.reLaunch({ route: '/pages/index/index' });
		}
	},
	onLoad(options) {
		if (this.$mStore.getters.hasLogin) {
			this.$mRouter.reLaunch({ route: '/pages/index/index' });
		}
		const time =
			moment().valueOf() / 1000 - uni.getStorageSync('registerSmsCodeTime');
		if (time < 60) {
			this.codeSeconds =
				this.$mConstDataConfig.sendCodeTime - parseInt(time, 10);
			this.handleSmsCodeTime(this.codeSeconds);
		} else {
			this.codeSeconds = this.$mConstDataConfig.sendCodeTime;
			this.smsCodeBtnDisabled = false;
			uni.removeStorageSync('registerSmsCodeTime');
		}
		const backUrl = uni.getStorageSync('backToPage');
		if (backUrl.indexOf('promo_code') !== -1) {
			this.registerParams.promoCode = JSON.parse(backUrl)['query']['promo_code'];
		} else {
			this.registerParams.promoCode = options.promo_code;
		}
	},
	methods: {
        isAppAgreementDefaultSelect() {
          // 是否选择协议
          this.appAgreementDefaultSelect = !this.appAgreementDefaultSelect;
        },
		...mapMutations(['login']),
		navBack() {
			this.$mRouter.back();
		},
		// 通用跳转
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 获取手机验证码
		getSmsCode() {
			this.reqBody['mobile'] = this.registerParams['mobile'];
			let checkSendCode = this.$mGraceChecker.check(
				this.reqBody,
				this.$mFormRule.sendCodeRule
			);
			if (!checkSendCode) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			mypublic.getsmsCode({
				mobile: this.registerParams.mobile,
				usage: 'register'
			})
			.then(r => {
				if (r.data) {
					this.$mHelper.toast(`验证码发送成功, 验证码是${r.data}`);
				} else {
					this.$mHelper.toast('验证码已发送.');
				}
				this.smsCodeBtnDisabled = true;
				uni.setStorageSync('registerSmsCodeTime', moment().valueOf() / 1000);
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
		// 注册账号
		async toRegister() {
			if (this.$mSettingConfig.closeRegister) {
				this.$mHelper.toast('暂未开放注册，敬请期待～');
				return;
			}
			if (!this.appAgreementDefaultSelect) {
        this.$mHelper.toast('请勾选同意注册协议，即可注册哦');
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
			await
			mypublic.getregisterByPass(this.reqBody)
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