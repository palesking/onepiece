import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import moment from '@/utils/moment';
import mConstDataConfig from '@/config/constData.js';
import { mapMutations } from 'vuex';
export default {
    components: { rfLoadMore },
	data() {
		return {
			notifyList: [],
			logo: this.$mSettingConfig.appLogo,
			loadingType: 'more',
			page: 1,
			hasLogin: false,
			list: [
				{ title: '评论', logo: this.$mSettingConfig.appLogo },
				{ title: '粉丝', logo: this.$mSettingConfig.appLogo },
				{ title: '点赞', logo: this.$mSettingConfig.appLogo }
			],
			// 控制滑动效果
			theIndex: null,
			oldIndex: null
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		notifyTypeFilter(val) {
			return mConstDataConfig.notifyTypeList[val].content;
		}
	},
	onShow() {
		this.initData();
	},
	computed: {
		bottom () {
			let bottom = 0;
			/*  #ifdef H5  */
        bottom = 90;
			/*  #endif */
			return bottom;
		}
	},
	methods: {
		...mapMutations(['setNotifyNum']),
		// 数据初始化
		initData() {
			this.hasLogin = this.$mStore.getters.hasLogin;
			this.page = 1;
			this.notifyList = [];
		},
		// 通用跳转
		navToLogin(route) {
			this.$mRouter.push({ route });
		}
	}
};