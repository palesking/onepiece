<template>
	<view class="register">
		<!--顶部返回按钮-->
		<text class="back-btn iconfont iconzuo" @tap="navBack"></text>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">REGISTER</view>
			<view class="welcome">
				账号注册！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input
						type="number"
						v-model="registerParams.mobile"
						placeholder="请输入手机号码"
						maxlength="11"
					/>
				</view>
				<view class="input-item input-item-sms-code">
					<view class="input-wrapper">
						<view class="rf-input-wrapper">
							<view class="tit">验证码</view>
							<input
								type="number"
								v-model="registerParams.code"
								placeholder="请输入验证码"
								maxlength="4"
								data-key="mobile"
							/>
						</view>
						<button
							class="sms-code-btn"
							:disabled="smsCodeBtnDisabled"
							@tap.stop="getSmsCode"
						>
							<text v-if="!smsCodeBtnDisabled">获取验证码</text>
							<text v-else class="sms-code-resend">
                                {{`重新发送 (${codeSeconds})`}}
                            </text>
						</button>
					</view>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input
						type="password"
						v-model="registerParams.password"
						placeholder="请输入密码"
						maxlength="18"
					/>
				</view>
				<view class="input-item">
					<text class="tit">确认密码</text>
					<input
						type="password"
						v-model="registerParams.password_repetition"
						placeholder="请输入确认密码"
						maxlength="18"
					/>
				</view>
				<view class="input-item">
					<text class="tit">昵称</text>
					<input
						type="text"
						v-model="registerParams.nickname"
						placeholder="请输入您的昵称"
						maxlength="12"
					/>
				</view>
				<view class="input-item" v-if="closeRegisterPromoCode">
					<text class="tit">邀请码</text>
					<input
						type="text"
						v-model="registerParams.promoCode"
						placeholder="请输入您的邀请码"
					/>
				</view>
			</view>
			<button
				class="confirm-btn"
				:class="'bg-' + themeColor.name"
				:disabled="btnLoading"
				:loading="btnLoading"
				@tap="toRegister"
			>
				注册
			</button>
		</view>
		<view class="register-section">
			已经注册过了?
			<text @tap="navTo('/pages/public/login')">马上登录</text>
		</view>
		<!-- 底部协议 -->
		<view class="footer-protocol">
			<text
				@tap="isAppAgreementDefaultSelect"
				class="cuIcon"
				:class="appAgreementDefaultSelect ? `text-${themeColor.name} cuIcon-radiobox` : 'cuIcon-round'"
			></text>
			<text class="content">同意</text>
			<!-- 协议地址 -->
			<navigator :class="'text-' + themeColor.name" url="/pages/set/about/detail?field=protocol_register&title=注册协议" open-type="navigate">《注册协议》</navigator>
		</view>
	</view>
</template>
<script src='./register'>

</script>
<style lang="scss">
	@import './register.scss'
</style>
