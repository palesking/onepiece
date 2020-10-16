<template>
	<view class="rf-search">
		<view class="search-box">
			<mSearch
				class="mSearch-input-box"
				:mode="2"
				button="inside"
				:placeholder="hotSearchDefault || '请输入关键字'"
				@search="doSearch(false)"
				@confirm="doSearch(false)"
				v-model="keyword"
			></mSearch>
		</view>
		<view class="search-keyword" @tap="blur">
			<scroll-view class="keyword-list-box" v-if="isShowKeywordList" scroll-y>
				<view
					class="keyword-entry"
					hover-class="keyword-entry-tap"
					v-for="row in keywordList"
					:key="row.keyword"
				>
					<view class="keyword-text" @tap="doSearch(row.keyword)">
						<rf-parser lazy-load :html="row.htmlStr"></rf-parser>
					</view>
					<view class="keyword-img" @tap="setkeyword(row)">
						<!--<image src="/static/HM-search/back.png"></image>-->
					</view>
				</view>
			</scroll-view>
			<scroll-view class="keyword-box" v-if="!isShowKeywordList" scroll-y>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>历史搜索</view>
						<view>
							<text
								class="iconfont iconiconfontshanchu1"
								@tap="oldDelete"
							></text>
						</view>
					</view>
					<view class="keyword">
						<view
							v-for="(keyword, index) in oldKeywordList"
							@tap="doSearch(keyword)"
							:key="index"
							>{{ keyword }}
                        </view>
					</view>
					<view class="hide-hot-tis" v-if="oldKeywordList.length === 0">
						<view>暂无记录</view>
					</view>
				</view>
				<view class="keyword-block" v-if="hotKeywordList">
					<view class="keyword-list-header">
						<view>热门搜索</view>
						<view>
							<text class="iconfont" :class="forbid" @tap="hotToggle"></text>
						</view>
					</view>
					<view class="keyword" v-if="forbid == 'iconai47'">
						<view
							v-for="(keyword, index) in hotKeywordList"
							@tap.stop="doSearch(keyword)"
							:key="index"
							>{{ keyword }}</view
						>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script src='./search'>

</script>
<style lang="scss">
.rf-search {
	.search-box {
		width: 100%;
		background-color: rgb(242, 242, 242);
		padding: 15upx 2.5%;
		display: flex;
		justify-content: space-between;

		.mSearch-input-box {
			width: 100%;
		}

		.input-box > input {
			width: 100%;
			height: 60upx;
			font-size: 32upx;
			border: 0;
			border-radius: 60upx;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			padding: 0 3%;
			margin: 0;
			background-color: #ffffff;
		}
	}

	.search-keyword {
		width: 100%;
		background-color: rgb(242, 242, 242);

		.keyword-list-box {
			height: calc(100vh - 110upx);
			padding-top: 10upx;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
		}

		.keyword-entry {
			width: 94%;
			height: 80upx;
			margin: 0 3%;
			font-size: 30upx;
			color: #333;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 1upx #e7e7e7;

			image {
				width: 60upx;
				height: 60upx;
			}

			.keyword-text {
				width: 90%;
			}

			.keyword-img {
				width: 10%;
				justify-content: center;
			}
		}

		.keyword-box {
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;

			.keyword-block {
				padding: 10upx 0;

				.keyword-list-header {
					width: 100vw;
					padding: 10upx 3%;
					font-size: 27upx;
					color: #333;
					display: flex;
					justify-content: space-between;

					image {
						width: 40upx;
						height: 40upx;
					}
				}

				.keyword {
					width: 100vw;
					padding: 3px 3%;
					display: flex;
					flex-flow: wrap;
					justify-content: flex-start;
				}

				.hide-hot-tis {
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #6b6b6b;
				}

				.keyword > view {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 60upx;
					padding: 0 20upx;
					margin: 10upx 20upx 10upx 0;
					height: 60upx;
					font-size: 28upx;
					background-color: rgb(242, 242, 242);
					color: #6b6b6b;
				}
			}
		}
	}

	.iconfont {
		font-size: $font-lg + 12upx;
	}
}
</style>
