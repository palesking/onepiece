	
import moment from '@/utils/moment';
import mypublic from '@/service/mypublic.js'

export default {
	data() {
		return {
			resetPasswordParams: {
				mobile: '',
				password: '',
				password_repetition: '',
				code: ''
			},
			btnLoading: false,
			type: null,
			smsCodeBtnDisabled: true,
			loginBg: this.$mAssetsPath.loginBg,
			loginPic: this.$mAssetsPath.loginPic,
			appName: this.$mSettingConfig.appName,
			styleLoginType: this.$mSettingConfig.styleLoginType,
			reqBody: {},
			codeSeconds: 0 // 验证码发送时间间隔
		};
	},
	onLoad(options) {
		const time =
			moment().valueOf() / 1000 - uni.getStorageSync('pwdSmsCodeTime');
		if (time < 60) {
			this.codeSeconds =
				this.$mConstDataConfig.sendCodeTime - parseInt(time, 10);
			this.handleSmsCodeTime(this.codeSeconds);
		} else {
			this.codeSeconds = this.$mConstDataConfig.sendCodeTime;
			this.smsCodeBtnDisabled = false;
			uni.removeStorageSync('pwdSmsCodeTime');
		}
		this.type = options.type;
	},
	methods: {
		// 获取手机验证码
		async getSmsCode() {
			this.reqBody['mobile'] = this.resetPasswordParams['mobile'];
			let checkSendCode = this.$mGraceChecker.check(
				this.reqBody,
				this.$mFormRule.sendCodeRule
			);
			if (!checkSendCode) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			await
			mypublic.getsmsCode( {mobile: this.resetPasswordParams.mobile,usage: 'up-pwd'} )
			.then(r => {
				if (r.data) {
					this.$mHelper.toast(`验证码发送成功, 验证码是${r.data}`);
				} else {
					this.$mHelper.toast('验证码已发送.');
				}
				this.smsCodeBtnDisabled = true;
				uni.setStorageSync('pwdSmsCodeTime', moment().valueOf() / 1000);
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
		navBack() {
			this.$mRouter.back();
		},
		navTo(route) {
			this.$mRouter.push({ route });
		},
		toHome() {
			this.$mRouter.reLaunch({ route: '/pages/index/index' });
		},
		// 更新密码
		async toUpdatePassword() {
			this.reqBody['mobile'] = this.resetPasswordParams['mobile'];
			this.reqBody['password'] = this.resetPasswordParams['password'];
			this.reqBody['code'] = this.resetPasswordParams['code'];
			const cheRes = this.$mGraceChecker.check(
				this.reqBody,
				this.$mFormRule.resetPasswordRule
			);
			if (!cheRes) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			if (
				this.resetPasswordParams['password'] !==
				this.resetPasswordParams['password_repetition']
			) {
				this.$mHelper.toast('两次输入的密码不一致');
				return;
			}
			this.reqBody['password_repetition'] = this.resetPasswordParams[
				'password_repetition'
			];
			this.reqBody.group = this.$mHelper.platformGroupFilter();
			await
			mypublic.getupdatePassword(this.reqBody)
			.then(() => {
				this.btnLoading = false;
				this.$mStore.commit('logout');
				this.$mHelper.toast('密码重置成功');
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