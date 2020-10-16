/**
	 * @des 登录类型
	 * @author lizi
	 * @date 2020-01-13 12:02
	 * @copyright 2019
	 */
	// import { mpWechatLogin, thirdPartyWechatOpenPlatform } from '@/service/login';
	import rfProtocolPopup from '@/components/rf-protocol-popup';
	import mypublic from '@/service/mypublic.js'

	export default {
		components: { rfProtocolPopup },
		data() {
			return {
				btnLoading: false,
				isRfProtocolPopupShow: false, // 控制协议popup显示
				appAgreementDefaultSelect: this.$mSettingConfig.appAgreementDefaultSelect, // 是否允许点击登录按钮
				isAuthLoginShow: false,
				isIosAuthLoginShow: false,
				logo: this.$mSettingConfig.appLogo,
				appName: this.$mSettingConfig.appName,
				promoCodeParams: {},
				styleLoginType: this.$mSettingConfig.styleLoginType,
				wechat: this.$mAssetsPath.wechat,
				apple: this.$mAssetsPath.apple,
				closeThirdPartyLogin: this.$mSettingConfig.closeThirdPartyLogin,
				loginTypeList: [
					{ text: '微信', icon: 'iconweixin' }
				]
			};
		},
		onShow() {
			this.btnLoading = false;
			if (uni.getStorageSync('accessToken')) {
				this.$mRouter.reLaunch({ route: '/pages/index/index' });
			}
		},
		onLoad(options) {
			this.$mStore.commit('logout');
			/*  #ifdef H5  */
			if (this.$mPayment.isWechat()) {
				this.isAuthLoginShow = true;
			}
			/*  #endif  */
			/*  #ifndef H5 */
			this.isAuthLoginShow = true;
			/*  #endif  */
			/*  #ifdef APP-PLUS */
			// console.log(uni.getSystemInfoSync().system > 13);
			if (uni.getSystemInfoSync().platform === 'ios') {
				this.isIosAuthLoginShow = true;
			}
			/*  #endif  */
			// 用户多次点击授权登录会生成多个code 去最后一个code
			this.code = options.code && options.code.split(',')[options.code.split(',').length - 1];
			// 如果不是第一次进来 就不需要强制阅读协议
			if (!uni.getStorageSync('notFirstTimeLogin')) {
				if (!this.appAgreementDefaultSelect) {
					this.appAgreementDefaultSelect = false;
				}
			} else {
				this.appAgreementDefaultSelect = true;
			}
			const backUrl = uni.getStorageSync('backToPage');
			if (backUrl.indexOf('promo_code') !== -1) {
				this.promoCodeParams.promo_code = JSON.parse(backUrl)['query']['promo_code'];
			}
			const _this = this;
			if (this.code) {back()
				this.btnLoading = true;
				mypublic.getwechatH5Login({
				 	code: this.code,
				 	..._this.promoCodeParams
				})
					.then(async r => {
						this.btnLoading = false;
						if (!r.data.login) {
							this.user_info = r.data.user_info.original;
							uni.showModal({
								content: '您尚未绑定账号，是否跳转登录页面？',
								success: confirmRes => {
									if (confirmRes.confirm) {
										uni.setStorageSync(
											'wechatUserInfo',
											JSON.stringify(_this.user_info)
										);
										_this.$mRouter.push({ route: '/pages/public/login' });
									} else {
										this.btnLoading = false;
									}
								}
							});
						} else {
							await this.$mStore.commit('login', r.data.user_info);
							const backToPage = uni.getStorageSync('backToPage');
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
								uni.removeStorageSync('backToPage');
								uni.removeStorageSync('wechatUserInfo');
							} else {
								this.$mRouter.reLaunch({ route: '/pages/profile/profile' });
							}
						}
					})
                    .catch(() => {
                        this.btnLoading = false;
                    });
			}
		},
		methods: {
			// 通用跳转
			navTo(route) {
				if (!this.appAgreementDefaultSelect) {
					this.$mHelper.toast('请勾选并阅读协议，才能进行下一步哦', 1.5 * 1000);
					return;
				}
				this.$mRouter.redirectTo({ route });
			},
			// 显示协议popup
			handleRfProtocolPopupShow() {
				this.isRfProtocolPopupShow = true;
			},
			// 监听是否同意协议
			popupState(e) {
				if (e) {
					this.appAgreementDefaultSelect = true;
					uni.setStorageSync('notFirstTimeLogin', true);
					this.isRfProtocolPopupShow = false;
				} else {
					this.appAgreementDefaultSelect = false;
					this.isRfProtocolPopupShow = false;
				}
			},
			// 授权登录
			toAuthLogin() {
				this.btnLoading = true;
				if (!this.appAgreementDefaultSelect) {
					this.$mHelper.toast('请阅读并同意协议', 1.5 * 1000);
					this.btnLoading = false;
					return;
				}
				const _this = this;
				/*  #ifdef H5  */
				if (this.$mPayment.isWechat()) {
					const href = window.location.href;
					window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?
						appid=${this.$mConfig.weixinAppId}&
						redirect_uri=${href}&
						response_type=code&
						scope=snsapi_userinfo&
						state=STATE#wechat_redirect`;
				} else {
					this.$mHelper.toast('当前平台不支持授权登录');
				}
				/*  #endif  */
				let authApi;
				// #ifdef APP-PLUS
				// eslint-disable-next-line
				plus.oauth.getServices(function(services) {
					let weixinService;
					if (services && services.length) {
						for (let i = 0, len = services.length; i < len; i++) {
							if (services[i].id === 'weixin') {
								weixinService = services[i];
								break;
							}
						}
						if (!weixinService) {
							_this.$mHelper.toast('没有微信登录授权服务');
							return;
						}
						let group = 'tinyShopIos';
						if (uni.getSystemInfoSync().platform === 'android') {
							group = 'tinyShopAndroid';
						}
						weixinService.authorize(e => {
							authApi = `/tiny-shop/v1/third-party/wechat-open-platform?code=${e.code || ''}&group=${group}&promo_code=${_this.promoCodeParams.promo_code || ''}`;
							_this.thirdPartyAuthLogin(authApi);
						}, function(err) {
							// 授权失败 error
							_this.btnLoading = false;
							_this.$mHelper.toast(err.message.split(',')[0]);
						});
					}
				}, function() {
					// 获取 services 失败
					_this.btnLoading = false;
				});
				// #endif
				/*  #ifdef MP-WEIXIN */
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								let params = _this.promoCodeParams;
								authApi = '/tiny-shop/v1/third-party/wechat-mp';
								params = { ...infoRes, ...params };
								params.code = loginRes.code;
								_this.thirdPartyAuthLogin(authApi, params);
							},
							fail: function() {
								_this.btnLoading = false;
							}
						});
					},
					fail: function() {
						_this.btnLoading = false;
						_this.$mHelper.log('暂不支持小程序登录');
					}
				});
				/*  #endif  */
			},
			thirdPartyAuthLogin(authApi, params = {}) {
				const _this = this;
				_this.$http.post(authApi, params).then(async r => {
                    _this.btnLoading = false;
                    if (!r.data.login) {
                        _this.user_info = r.data.user_info;
                        uni.showModal({
                            content: '您尚未绑定账号，是否跳转登录页面？',
                            success: confirmRes => {
                                if (confirmRes.confirm) {
                                    uni.setStorageSync(
                                        'wechatUserInfo',
                                        JSON.stringify(_this.user_info)
                                    );
                                    _this.$mRouter.push({
                                        route: '/pages/public/login'
                                    });
                                }
                            }
                        });
                    } else {
                        await _this.$mStore.commit('login', r.data.user_info);
                        _this.$mHelper.toast('已为您授权登录');
                        const backToPage = uni.getStorageSync('backToPage');
                        if (backToPage) {
                            if (
                                backToPage.indexOf('/pages/profile/profile') !== -1 ||
                                backToPage.indexOf('/pages/cart/cart') !== -1 ||
                                backToPage.indexOf('/pages/notify/notify') !== -1 ||
                                backToPage.indexOf('/pages/index/index') !== -1 ||
                                backToPage.indexOf('/pages/category/category') !== -1
                            ) {
                                _this.$mRouter.reLaunch(JSON.parse(backToPage));
                            } else {
                                _this.$mRouter.redirectTo(JSON.parse(backToPage));
                            }
                            uni.removeStorageSync('backToPage');
                            uni.removeStorageSync('wechatUserInfo');
                            } else {
                                _this.$mRouter.reLaunch({
                                    route: '/pages/profile/profile'
                                });
                            }
						}
					})
                    .catch(() => {
					_this.btnLoading = false;
				});
			},
			// 苹果授权登录
			toIosAuthLogin() {
				this.btnLoading = true;
				if (!this.appAgreementDefaultSelect) {
					this.$mHelper.toast('请阅读并同意协议', 1.5 * 1000);
					this.btnLoading = false;
					return;
				}
				const _this = this;
				// eslint-disable-next-line
				plus.oauth.getServices(function(services) {
					let appleService;
					if (services && services.length) {
						for (let i = 0, len = services.length; i < len; i++) {
							if (services[i].id === 'apple') {
								appleService = services[i];
								break;
							}
						}
						if (!appleService) {
							_this.btnLoading = false;
							_this.$mHelper.toast('没有苹果登录授权服务');
							return;
						}
						appleService.login(e => {
							mypublic.getthirdPartyApple({...e.target.appleInfo,..._this.promoCodeParams})
								.then(async r => {
									_this.btnLoading = false;
									if (!r.data.login) {
										_this.user_info = r.data.user_info;
										uni.showModal({
											content: '您尚未绑定账号，是否跳转登录页面？',
											success: confirmRes => {
												if (confirmRes.confirm) {
													uni.setStorageSync(
														'wechatUserInfo',
														JSON.stringify(_this.user_info)
													);
													uni.setStorageSync('oauthClient', 'iOS');
													_this.$mRouter.push({
														route: '/pages/public/login'
													});
												}
											}
										});
									} else {
										await _this.$mStore.commit('login', r.data.user_info);
										_this.$mHelper.toast('已为您授权登录');
										const backToPage = uni.getStorageSync('backToPage');
										if (backToPage) {
											if (
												backToPage.indexOf('/pages/profile/profile') !== -1 ||
												backToPage.indexOf('/pages/cart/cart') !== -1 ||
												backToPage.indexOf('/pages/notify/notify') !== -1 ||
												backToPage.indexOf('/pages/index/index') !== -1 ||
												backToPage.indexOf('/pages/category/category') !== -1
											) {
												_this.$mRouter.reLaunch(JSON.parse(backToPage));
											} else {
												_this.$mRouter.redirectTo(JSON.parse(backToPage));
											}
											uni.removeStorageSync('backToPage');
											uni.removeStorageSync('wechatUserInfo');
										} else {
											_this.$mRouter.reLaunch({
												route: '/pages/profile/profile'
											});
										}
									}
								})
								.catch(() => {
								_this.btnLoading = false;
							});
						}, function() {
							// 获取 services 失败
							_this.btnLoading = false;
						});
					}
				}, function() {
					// 获取 services 失败
					_this.btnLoading = false;
				});
			}
		}
	};