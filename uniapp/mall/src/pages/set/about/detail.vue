<template>
	<view class="about" v-if="!loading">
		<view class="shop-info about-content" v-if="title === '商城介绍'">
			<rf-image :src="detail.cover || detail.web_logo || ''"></rf-image>
			<view v-if="detail.title">
                <text>商城名称: </text>
                <text>{{ detail.title }}</text>
            </view>
			<view v-if="detail.address_name">
                <text>联系地址: </text><text>{{ detail.address_name }}</text>
            </view>
			<view v-if="detail.address_details">
                <text>详细地址: </text><text>{{ detail.address_details }}</text>
            </view>
			<view v-if="detail.mobile">
                <text>手机号码: </text><text>{{ detail.mobile }}</text>
            </view>
			<view v-if="detail.qq">
                <text>QQ: </text><text>{{ detail.qq }}</text>
            </view>
		</view>
		<view class="shop-info " v-if="title === '注册协议'">
			<view class="about-content" v-if="detail.protocol_register">
				<rf-parser lazy-load :html="detail.protocol_register"></rf-parser>
			</view>
			<rf-empty
				:info="`暂无${title}`"
				v-if="!detail.protocol_register && !loading"
			></rf-empty>
		</view>
		<view class="shop-info" v-if="title === '隐私协议'">
			<view class="about-content" v-if="detail.protocol_privacy">
				<rf-parser lazy-load :html="detail.protocol_privacy"></rf-parser>
			</view>
			<rf-empty
				:info="`暂无${title}`"
				v-if="!detail.protocol_privacy && !loading"
			></rf-empty>
		</view>
		<view class="shop-info" v-if="title === '充值协议'">
			<view class="about-content" v-if="detail.protocol_recharge">
				<rf-parser lazy-load :html="detail.protocol_recharge"></rf-parser>
			</view>
			<rf-empty
				:info="`暂无${title}`"
				v-if="!detail.protocol_recharge && !loading"
			></rf-empty>
		</view>
		<rf-empty :info="`暂无${title}`" v-if="!detail && !loading"></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./detail'>

</script>
<style lang="scss">
@import './detail.scss'
</style>
