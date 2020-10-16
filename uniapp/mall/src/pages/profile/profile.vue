<template>
	<view class="user">
		<!--头部-->
		<view class="user-section" :class="'bg-' + themeColor.name">
			<image class="bg" :src="userBg"></image>
			<!--用户信息-->
			<view class="user-info-box">
				<view
					class="portrait-box"
					@tap="navTo(userInfo ? '/pages/user/userinfo/userinfo' : 'login')"
				>
					<image
						class="portrait"
						:src="userInfo.head_portrait || headImg"
					></image>
					<text class="username">
						{{ userInfo.nickname || userInfo.realname ||'登录/注册' }}
					</text>
				</view>
			</view>
			<!--vip信息-->
			<view class="vip-card-box">
				<view class="b-btn" @tap="navTo('/pages/user/account/level')">
					{{ userInfo.memberLevel | filterMemberLevel }}
				</view>
				<view class="tit">
					<i class="iconfont iconzuanshi" />
					{{appName}}尊享会员
				</view>
				<text class="e-m">{{appName}} 版权所有</text>
			</view>
		</view>
		<!-- 个人中心 内容区-->
		<view
			class="cover-container"
			:style="[
				{
					transform: coverTransform,
					transition: coverTransition
				}
			]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" :src="arc"></image>
			<!--余额 优惠券 积分信息-->
			<view class="promotion-center">
				<list-cell
					icon="iconqianbao"
					:iconColor="themeColor.color"
					@eventClick="navTo('/pages/user/account/account')"
					title="我的账户"
				></list-cell>
				<view class="tj-sction">
					<view
						class="tj-item"
						v-for="item in amountList"
						:key="item.title"
						@tap="navTo(item.url)"
					>
						<text class="num" :class="item.value > 0 ? 'text-'+themeColor.name : ''">
							{{ item.value }}
						</text>
						<text>{{ item.title }}</text>
					</view>
				</view>
			</view>
			<!-- 我的订单 -->
			<view class="promotion-center">
				<list-cell
					icon="iconicon1"
					:iconColor="themeColor.color"
					@eventClick="
						navTo(`/pages/order/order?state=-1`)
					"
					title="全部订单"
				></list-cell>
				<view class="order-section">
					<view
						class="order-item"
						v-for="item in orderSectionList"
						:key="item.title"
						@tap="navTo(item.url)"
						hover-class="common-hover"
						:hover-stay-time="50"
					>
						<i class="iconfont" :class="[item.icon, 'text-'+themeColor.name]" />
						<text>{{ item.title }}</text>
						<rf-badge
							v-if="item.num > 0"
							type="error"
							size="small"
							class="badge"
							:text="item.num"
						></rf-badge>
					</view>
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section">
				<list-cell
					icon="iconzuji"
					:iconColor="themeColor.color"
					@eventClick="navTo('/pages/user/footprint/footprint')"
					title="我的足迹"
				></list-cell>
				<view v-if="hasLogin">
					<scroll-view scroll-x class="h-list-history" v-if="footPrintList.length > 0">
						<view 
                            class="h-item-history" 
                            v-for="item in footPrintList" 
                            :key="item.id" @tap.stop="navToProduct(item.marketing_type, item.product.id)"
                        >
							<image
								:src="item.product.picture"
								class="h-item-img"
								:preview="false"
								mode="aspectFill"
							></image>
							<image
								v-if="item.marketing_type"
								class="tag"
								:src="item.marketing_type | marketingTypeTag"
								mode="aspectFill"
							></image>
							<view class="h-item-text">
								<text class="in2line">{{ item.product.name }}</text>
							</view>
						</view>
					</scroll-view>
					<view
						class="no-foot-print"
						v-else-if="footPrintList.length === 0"
						@tap="navTo('/pages/product/list')"
					>
						<i class="iconfont iconshare no-foot-print-icon" :class="'text-'+themeColor.name" />
						先去浏览一些吧~
					</view>
				</view>
				<view
					class="no-foot-print"
					v-else
					@tap="navTo('/pages/user/footprint/footprint')"
				>
					<i class="iconfont iconmima no-foot-print-icon" :class="'text-'+themeColor.name" />
					登录后查看
				</view>
			</view>
			<!--我的服务-->
			<view class="promotion-center">
				<list-cell
					icon="iconfuwu"
					:iconColor="themeColor.color"
					@eventClick="navTo('/pages/set/set')"
					title="我的服务"
				></list-cell>
				<view class="tj-sction">
					<!-- 分类列表 -->
					<view class="category-list">
						<view
							class="category"
							v-for="(item, index) in settingList"
							:key="index"
							:style="{display: settingItemShowFilter(item.title)}"
							@tap.stop="navTo(item.url)"
						>
							<view v-if="item.title !== '分享'">
								<view class="img">
									<text
										class="iconfont"
										:class="[item.icon, 'text-'+themeColor.name]"
									></text>
								</view>
								<view class="text">{{ item.title }}</view>
							</view>
							<button
								class="share-btn"
								open-type="share"
								@tap="share"
								v-else
							>
								<view class="img">
									<text
										class="iconfont"
										:class="[item.icon, 'text-'+themeColor.name]"
									></text>
								</view>
								<view class="text">{{ item.title }}</view>
							</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./profile'>

</script>
<style lang="scss" scoped>
	@import './profile.scss'
</style>
