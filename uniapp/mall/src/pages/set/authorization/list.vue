<template>
	<view class="authorization-list">
		<view class="rf-list" v-if="thirdPartyAuthList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in thirdPartyAuthList"
				:key="index"
			>
				<view class="left">
					<image class="head_portrait" :src="item.head_portrait"></image>
				</view>
				<view class="mid">
					<view class="title">
						<text class="iconfont icon iconweixinzhifu"></text>
						<text class="address">{{
							item.oauth_client | oauthClientFilter
						}}</text>
					</view>
					<view class="time">
						<text>授权时间: {{ item.updated_at | time }}</text>
					</view>
				</view>
				<view class="right">
					<text class="rf-button" :class="'bg-' + themeColor.name" @tap.stop="unBind(item.id)">解除绑定</text>
				</view>
			</view>
			<rf-load-more
				:status="loadingType"
				v-if="thirdPartyAuthList.length > 0"
			/>
		</view>
		<rf-empty
			:info="'您暂未授权第三方平台~'"
			v-if="thirdPartyAuthList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./list'>
	
</script>

<style lang="scss">
@import './list.scss'
</style>
