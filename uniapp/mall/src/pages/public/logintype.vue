<template>
	<view class="login-type">
		<view class="logo">
			<rf-image :preview="false" :src="logo"></rf-image>
		</view>
		<view>
			<button
				class="confirm-btn confirm-btn-bg"
				:disabled="btnLoading"
				:class="'text-' + themeColor.name"
				@tap="navTo('/pages/public/login')"
			>
				已有账号登录
			</button>
			<button
				class="confirm-btn confirm-btn-bg"
				:disabled="btnLoading"
				:class="'text-' + themeColor.name"
				@tap="navTo(styleLoginType === 'one' ? `/pages/public/register` : `/pages/public/login?type=1`)"
			>
				立即注册
			</button>
		</view>
		<!--协议popup-->
		<rf-protocol-popup
			ref="mapState"
			@popupState="popupState"
			protocolPath="/pages/set/about/detail?field=protocol_register&title=注册协议"
			policyPath="/pages/set/about/detail?field=protocol_privacy&title=隐私协议"
			v-if="isRfProtocolPopupShow"
		></rf-protocol-popup>
		<!-- 底部协议 -->
		<view class="footer-protocol">
			<text
				@tap="handleRfProtocolPopupShow"
				class="cuIcon"
				:class="appAgreementDefaultSelect ? `text-${themeColor.name} cuIcon-radiobox` : 'cuIcon-round'"
			></text>
			<text class="content">登录表示同意</text>
			<!-- 协议地址 -->
			<text :class="'text-' + themeColor.name" @tap="handleRfProtocolPopupShow">《{{appName}} 协议》</text>
		</view>
		<!-- 底部协议 -->
<!--		v-if="isAuthLoginShow && !closeThirdPartyLogin"-->
		<view class="footer" v-if="isAuthLoginShow && !closeThirdPartyLogin">
			<view class="d-header">
				<text>其他登录方式</text>
			</view>
			<view class="login-type-list">
				<button
					v-if="isAuthLoginShow"
					:disabled="btnLoading"
					:loading="btnLoading"
					class="login-type-btn"
					open-type="getUserInfo"
					@tap="toAuthLogin">
					<image class="image" :src="wechat"></image>
				</button>
				<button
					:disabled="btnLoading"
					:loading="btnLoading"
					v-if="isIosAuthLoginShow"
					class="login-type-btn"
                    open-type="getUserInfo"
                    @tap="toIosAuthLogin">
					<image class="image" :src="apple"></image>
				</button>
			</view>
		</view>
	</view>
</template>
<script src='./logintype'>
	
</script>
<style lang="scss">
	@import './logintype.scss'
</style>
