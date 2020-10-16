/**
 * @des 个人中心
 * @author lizi
 * @date 2020-01-10 11:41
 * @copyright 2019
 */

import listCell from '@/components/rf-list-cell';
import { mapMutations } from 'vuex';
import rfBadge from '@/components/rf-badge/rf-badge';
import $mAssetsPath from '@/config/assets.js';
import profile from '@/service/profile.js'


let startY = 0, moveY = 0, pageAtTop = true;
export default {
	components: {
		listCell,
		rfBadge
	},
	data() {
		return {
			settingList: this.$mConstDataConfig.settingList,
			orderSectionList: this.$mConstDataConfig.orderSectionList,
			amountList: this.$mConstDataConfig.amountList,
			isOpenLiveStreaming: this.$mSettingConfig.isOpenLiveStreaming,
			headImg: this.$mAssetsPath.headImg,
			vipCardBg: this.$mAssetsPath.vipCardBg,
			arc: this.$mAssetsPath.arc,
			userBg: this.$mAssetsPath.userBg,
			coverTransform: 'translateY(0px)',
			coverTransition: '0s',
			moving: false,
			userInfo: {
				// 用户信息
				promoter: null // 分销商信息
			},
			footPrintList: [], // 足迹列表
			loading: true,
			appName: this.$mSettingConfig.appName,
			hasLogin: false
		};
	},
	filters: {
		filterMemberLevel(val) {
        if (!val) return '普通用户';
			return val.name;
		},
		marketingTypeTag(marketingType) {
			let tag;
			switch (marketingType) {
				case 'discount':
					tag = $mAssetsPath.discountTag;
					break;
				case 'bargain':
					tag = $mAssetsPath.bargainTag;
					break;
				case 'group_buy':
					tag = $mAssetsPath.groupTag;
					break;
				case 'wholesale':
					tag = $mAssetsPath.wholesaleTag;
					break;
			}
			return tag;
		}
	},
    computed: {
        // 判断推广中心是否显示 当有分销商信息的时候显示
        settingItemShowFilter() {
            return function (val) {
                let type = 'block';
                if (val === '推广中心' && this.userInfo.promoter) {
                  type = 'none';
                } else if (val === '直播' && !this.isOpenLiveStreaming) {
                  type = 'none';
                }
                return type;
            };
        }
    },
	// 小程序分享
	onShareAppMessage() {
		return {
			title: `欢迎来到${this.appName}`,
			path: '/pages/index/index'
		};
	},
	async onShow() {
		// 初始化数据
		await this.initData();
	},
	// #ifndef MP
	onNavigationBarButtonTap(e) {
		const index = e.index;
		if (index === 0) {
			this.navTo('/pages/set/set');
		} else if (index === 1) {
			// #ifdef APP-PLUS
			// eslint-disable-next-line
			const pages = getCurrentPages();
			const page = pages[pages.length - 1];
			const currentWebview = page.$getAppWebview();
			currentWebview.hideTitleNViewButtonRedDot({
				index
			});
			// #endif
			this.$mRouter.switchTab({ route: '/pages/notify/notify' });
		}
	},
	// #endif
	methods: {
		...mapMutations(['setNotifyNum', 'setCartNum']),
		// 分享
    share() {
		const url = `${this.$mConfig.hostUrl}/pages/index/index`;
        // #ifdef H5
		this.$mHelper.h5Copy(url);
            // #endif
            // #ifdef APP-PLUS
			const shareImg = `${this.$mSettingConfig.appLogo}`;
			this.$mHelper.handleAppShare(url, this.appName, `欢迎来到${this.appName}`, shareImg);
			// #endif
		},
		...mapMutations(['login']),
		// 数据初始化
		async initData() {
			this.hasLogin = this.$mStore.getters.hasLogin;
			uni.setTabBarStyle({
				selectedColor: this.themeColor.color,
				borderStyle: 'white'
			});
			this.themeColor.tabList && this.themeColor.tabList.forEach((selectedIconPath, index) => {
				uni.setTabBarItem({
					index,
					selectedIconPath
				});
			});
			if (this.hasLogin) {
				await this.getMemberInfo();
			} else {
				this.loading = false;
				this.resetSectionData();
			}
		},
		// 获取用户信息
		async getMemberInfo() {
			await profile.getmemberInfo()
			.then(async r => {
				this.loading = false;
				this.userInfo = r.data;
				await this.setCartNum(r.data.cart_num);
				await this.initNotifyNum();
				// 获取足迹列表
				await this.getFootPrintList();
				await this.setSectionData(r.data);
			})
			.catch(() => {
				this.hasLogin = false;
				this.userInfo = {};
				this.resetSectionData();
				this.loading = false;
			});
		},
		// 设置未读消息个数
		async initNotifyNum () {
            await profile.getnotifyUnRreadCount()
			.then(r => {
                // this.setNotifyNum(r.data.count);
            });
        },
		// 清空个人中心的各模块状态
		resetSectionData() {
			this.userInfo = {};
			uni.removeTabBarBadge({ index: this.$mConstDataConfig.cartIndex });
			uni.removeTabBarBadge({ index: this.$mConstDataConfig.notifyIndex });
			this.amountList[0].value = 0;
			this.amountList[1].value = 0;
			this.amountList[2].value = 0;
			this.orderSectionList[0].num = 0;
			this.orderSectionList[1].num = 0;
			this.orderSectionList[2].num = 0;
			this.orderSectionList[3].num = 0;
			this.orderSectionList[4].num = 0;
		},
		// 给个人中心的各模块赋值
		setSectionData(data) {
			const orderSynthesizeNumArr = [];
			for (let item in data.order_synthesize_num) {
				orderSynthesizeNumArr.push(data.order_synthesize_num[item]);
			}
			for (let i = 0; i < this.orderSectionList.length; i++) {
				this.orderSectionList[i].num = orderSynthesizeNumArr[i].toString();
			}
			this.amountList[0].value = data.account.user_money || 0;
			this.amountList[1].value = data.coupon_num || 0;
			this.amountList[2].value = data.account.user_integral || 0;
			// 更新userInfo缓存
			uni.setStorageSync('userInfo', data);
		},
		// 获取足迹列表
		async getFootPrintList() {
			await profile.getfootPrintList().then(r => {
				this.footPrintList = r.data;
			});
		},
		// 统一跳转接口,拦截未登录路由
		navTo(route) {
			if (!route) return;
			if (route === '/pages/index/notice/notice') {
				this.$mRouter.push({ route });
			} else if (!this.hasLogin) {
				uni.removeStorageSync('backToPage');
				this.$mRouter.push({ route: '/pages/public/logintype' });
			} else {
				this.$mRouter.push({ route });
			}
		},
		/**
		 *  会员卡下拉和回弹
		 *  1.关闭bounce避免ios端下拉冲突
		 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
		 *    transition设置0.1秒延迟，让css来过渡这段空窗期
		 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
		 */
		coverTouchstart(e) {
			if (pageAtTop === false) {
				return;
			}
			this.coverTransition = 'transform .1s linear';
			startY = e.touches[0].clientY;
		},
		coverTouchmove(e) {
			moveY = e.touches[0].clientY;
			let moveDistance = moveY - startY;
			if (moveDistance < 0) {
				this.moving = false;
				return;
			}
			this.moving = true;
			if (moveDistance >= 80 && moveDistance < 100) {
				moveDistance = 80;
			}
			if (moveDistance > 0 && moveDistance <= 80) {
				this.coverTransform = `translateY(${moveDistance}px)`;
			}
		},
		coverTouchend() {
			if (this.moving === false) {
				return;
			}
			this.moving = false;
			this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
			this.coverTransform = 'translateY(0px)';
		},
		// 跳转至商品详情
		navToProduct(type, id) {
			let route = `/pages/product/product?id=${id}`;
			switch (type) {
				case 'discount':
					route = `/pages/marketing/discount/product?id=${id}`;
					break;
				case 'bargain':
					route = `/pages/marketing/bargain/product?id=${id}`;
					break;
				case 'group_buy':
					route = `/pages/marketing/group/product?id=${id}`;
					break;
				case 'wholesale':
					route = `/pages/marketing/wholesale/product?id=${id}`;
					break;
			}
			this.$mRouter.push({ route });
		}
	}
};