<template>
	<view class="user">
		<!--头部-->
		<view class="user-section">
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
					<text class="username" v-if="hasLogin">
						{{
							userInfo.nickname ||
							userInfo.realname ||
							'暂无昵称'
						}}
					</text>
					<text class="username" v-else>登录/注册</text>
				</view>
			</view>
			<!--vip信息-->
			<view class="vip-card-box">
				<image class="card-bg" :src="vipCardBg"></image>
				<view class="tit">
					<i class="iconfont iconiLinkapp-"/>
					欢迎来到粒子商城
				</view>
				<text class="e-m">RageFrame 版权所有</text>
			</view>
		</view>
		<!-- 个人中心 内容区-->
		<view
            class="cover-container"
            :style="[{
                transform: coverTransform,
                transition: coverTransition
            }]"
            @touchstart="coverTouchstart"
            @touchmove="coverTouchmove"
            @touchend="coverTouchend"
		>
			<image class="arc" :src="arc"></image>

			<!--余额 优惠券 积分信息-->
			<view class="promotion-center">
				<list-cell 
                    icon="iconwallett" 
                    iconColor="#e07472" 
                    @eventClick="navTo('/pages/user/account/account')" 
                    title="我的账户"
                ></list-cell>
				<view class="tj-sction">
					<view class="tj-item" v-for="item in amountList" :key="item.title" @tap="navTo(item.url)">
						<text class="num" :class="item.value > 0 ? 'red' : ''">
							{{ item.value }}
						</text>
						<text>{{ item.title }}</text>
					</view>
				</view>
			</view>

			<!-- 我的订单 -->
			<view class="promotion-center">
				<list-cell 
                    icon="iconfapiaoguanli" 
                    iconColor="#e07472"
                    @eventClick="navTo(`/pages/index/search/search?keyword=搜索我的订单&type=order`)" 
                    title="搜索订单"
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
						<i class="iconfont" :class="item.icon"/>
						<text>{{ item.title }}</text>
						<rf-badge type="error" size="small" class="badge" :text="item.num"></rf-badge>
					</view>
				</view>
			</view>

			<!-- 浏览历史 -->
			<view class="history-section">
				<list-cell icon="iconlishijilu" iconColor="#5eba8f" @eventClick="navTo('/pages/user/footprint/footprint')"
				           title="我的足迹"></list-cell>
				<view v-if="hasLogin">
					<scroll-view scroll-x class="h-list" v-if="footPrintList.length > 0">
						<view class="h-item" v-for="item in footPrintList" :key="item.id">
							<image class="h-item-img" @tap.stop="navTo(`/pages/product/product?id=${item.product.id}`)"
							       :src="item.product.picture" mode="aspectFill"></image>
						<view class="h-item-text in2line">{{ item.product.name }}</view>
						</view>
					</scroll-view>
					<view class="no-foot-print" v-else-if="footPrintList.length === 0" @tap="navTo('/pages/product/list')">
						<i class="iconfont iconshare no-foot-print-icon"/>
						先去浏览一些吧~
					</view>
				</view>
				<view class="no-foot-print" v-else @tap="navTo('/pages/user/footprint/footprint')">
					<i class="iconfont iconmima no-foot-print-icon"/>
					登陆后查看
				</view>
			</view>

			<!--设置中心-->
			<view class="promotion-center">
				<list-cell 
                    icon="iconshezhi1" 
                    iconColor="#e07472" 
                    @eventClick="navTo('/pages/set/set')"
                    title="设置中心"
                ></list-cell>
				<view class="tj-sction">
					<!-- 分类列表 -->
					<view class="category-list">
						<view
                            class="category"
                            v-for="(item, index) in settingList"
                            :key="index"
                            @tap.stop="navTo(item.url)"
						>
							<view v-if="item.title!=='分享'">
								<view class="img">
									<text class="iconfont" :style="{color: item.color}" :class="item.icon"></text>
								</view>
								<view class="text">{{ item.title }}</view>
							</view>
							<button class="share-btn" open-type="share" @tap.tap="shareToH5" v-else>
								<view class="img">
									<text class="iconfont" :style="{color: item.color}" :class="item.icon"></text>
								</view>
								<view class="text">{{ item.title }}</view>
							</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--页面加载动画-->
		<rf-loading v-if="loading"></rf-loading>
	</view>
</template>
<script src='./user'>
   
</script>
<style lang='scss' scoped>
	@import './user.scss'
</style>
