import mSearch from '@/components/rf-search/rf-search';
export default {
	data() {
		return {
			keyword: '',
			oldKeywordList: [],
			hotKeywordList: [],
			keywordList: [],
			forbid: 'iconai47',
			isShowKeywordList: false,
			hotSearchDefault: '',
			type: null // 搜索类型
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	components: {
		mSearch
	},
	methods: {
		async initData(options) {
			this.type = options.type;
			const search = JSON.parse(options.data || '{}');
			this.hotSearchDefault = search.hot_search_default || options.keyword;
			this.hotKeywordList = search.hot_search_list;
			this.loadOldKeyword();
		},
		blur() {
			uni.hideKeyboard();
		},
		// 加载历史搜索,自动读取本地Storage
		loadOldKeyword() {
			uni.getStorage({
				key: 'OldKeys',
				success: res => {
					let OldKeys = JSON.parse(res.data);
					this.oldKeywordList = OldKeys;
				}
			});
		},
		// 顶置关键字
		setkeyword(data) {
			this.keyword = data.keyword;
		},
		// 清除历史搜索
		oldDelete() {
			uni.showModal({
				content: '确定清除历史搜索记录？',
				success: res => {
					if (res.confirm) {
						this.oldKeywordList = [];
						uni.removeStorage({ key: 'OldKeys' });
					}
				}
			});
		},
		// 热门搜索开关
		hotToggle() {
			this.forbid = this.forbid === 'iconai47' ? 'iconyanjing' : 'iconai47';
		},
		// 执行搜索
		doSearch(key) {
			key = key || this.keyword || this.defaultKeyword;
			this.keyword = key;
			this.saveKeyword(key); // 保存为历史
			if (this.type === 'order') {
				this.$mRouter.push({ route: `/pages/order/search?keyword=${key}` });
			} else {
				this.$mRouter.push({ route: `/pages/product/list?keyword=${key}` });
			}
		},
		// 保存关键字到历史记录
		saveKeyword(keyword) {
			uni.getStorage({
				key: 'OldKeys',
				success: res => {
					let OldKeys = JSON.parse(res.data);
					let findIndex = OldKeys.indexOf(keyword);
					if (findIndex === -1) {
						OldKeys.unshift(keyword);
					} else {
						OldKeys.splice(findIndex, 1);
						OldKeys.unshift(keyword);
					}
					// 最多10个纪录
					OldKeys.length > 10 && OldKeys.pop();
					uni.setStorage({
						key: 'OldKeys',
						data: JSON.stringify(OldKeys)
					});
					this.oldKeywordList = OldKeys; // 更新历史搜索
				},
				fail: () => {
					let OldKeys = [keyword];
					uni.setStorage({
						key: 'OldKeys',
						data: JSON.stringify(OldKeys)
					});
					this.oldKeywordList = OldKeys; // 更新历史搜索
				}
			});
		}
	}
};