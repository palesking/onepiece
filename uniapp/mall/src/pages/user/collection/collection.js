/**
 * @des 我的收藏
 *
 * @author lizi
 * @date 2019-11-22 10:47
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import moment from '@/utils/moment';
import $mAssetsPath from '@/config/assets.js';
import user from '@/service/user.js'


export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			collectionList: [],
			page: 1,
			loadingType: 'more',
			loading: true,
			moneySymbol: this.moneySymbol,
			// 控制滑动效果
			theIndex: null,
			oldIndex: null
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
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
	onShow() {
		this.initData();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.collectionList = [];
		this.loading = true;
		this.getCollectionList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getCollectionList();
	},
	methods: {
		async handleDeleteCollection(id) {
			await
			user.getcollectDel({ page: this.page })
			.then(() => {
				this.$mHelper.toast('取消收藏成功');
				this.page = 1;
				this.collectionList.length = 0;
				this.getCollectionList();
				this.oldIndex = null;
				this.theIndex = null;
			});
		},
		// 数据初始化
		initData() {
			this.page = 1;
			this.collectionList.length = 0;
			this.getCollectionList();
		},
		// 控制左滑删除效果
		touchStart(index, event) {
			// 多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			this.oldIndex = this.theIndex;
			this.theIndex = null;
			// 初始坐标
			this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
		},
		touchMove(index, event) {
			// 多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			let moveX = event.touches[0].pageX - this.initXY[0];
			let moveY = event.touches[0].pageY - this.initXY[1];

			if (this.isStop || Math.abs(moveX) < 5) {
				return;
			}
			if (Math.abs(moveY) > Math.abs(moveX)) {
				// 竖向滑动-不触发左滑效果
				this.isStop = true;
				return;
			}

			if (moveX < 0) {
				this.theIndex = index;
				this.isStop = true;
			} else if (moveX > 0) {
				if (this.theIndex != null && this.oldIndex === this.theIndex) {
					this.oldIndex = index;
					this.theIndex = null;
					this.isStop = true;
					setTimeout(() => {
						this.oldIndex = null;
					}, 150);
				}
			}
		},
		touchEnd(index, $event) {
			// 结束禁止触发效果
			this.isStop = false;
		},
		// 获取收藏列表
		async getCollectionList(type) {
			await
			user.getcollectList({ page: this.page })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.collectionList = [...this.collectionList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		navTo(type, id) {
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