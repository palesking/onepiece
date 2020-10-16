
import setting from '@/service/setting.js'

export default {
	data() {
		return {
			isVersionUpgradeShow: false,
			loadProgress: 0,
			CustomBar: this.CustomBar,
			user: {},
			setList: this.$mConstDataConfig.setList,
			styleUserIsOpen: this.$mSettingConfig.styleUserIsOpen,
			notifyChecked: false,
			isNewVersion: false,
			colorModal: false,
			themeList: this.$mConstDataConfig.themeList
		};
	},
	onLoad() {
		this.initData();
		// #ifdef APP-PLUS
		if (uni.getSystemInfoSync().platform === 'ios') {
			this.CustomBar = 0;
		}
		// #endif
	},
	methods: {
		// 初始化数据
		initData() {
			this.user = uni.getStorageSync('user');
			// 缓存大小
			this.setList[5].content = `${uni.getStorageInfoSync().currentSize} kb`;
			// #ifdef APP-PLUS
			// eslint-disable-next-line
			this.setList[8].content = `当前版本 ${plus.runtime.version}`;
			// #endif
		},
		// 通用跳转
		navTo(route) {
			if (!route) return;
			if (route === 'clearCache') {
				uni.showModal({
					content: '确定要清除缓存吗',
					success: e => {
						if (e.confirm) {
							uni.clearStorageSync();
							this.setList[5].content = '0 kb';
							this.$mStore.commit('login', this.user);
							this.$mHelper.toast('清除缓存成功');
						}
					}
				});
				return;
			} else if (route === 'versionUpgrade') {
				this.isVersionUpgradeShow = true;
				if (this.isNewVersion) {
					this.$mHelper.toast('已经是最新版本');
				}
				return;
			}
			this.$mRouter.push({ route });
		},
		// 退出登录
		toLogout() {
			uni.showModal({
				content: '确定要退出登录么',
				success: e => {
					if (e.confirm) {
						setting.getlogout().then(() => {
							this.$mStore.commit('logout');
							uni.reLaunch({
								url: '/pages/profile/profile'
							});
						});
					}
				}
			});
		},
		showColorModal() {
			this.colorModal = true;
		},
		SetColor(item) {
			this.colorModal = false;
			this.themeColor = item;
			this.$mStore.commit('setThemeColor', item);
		}
	}
};