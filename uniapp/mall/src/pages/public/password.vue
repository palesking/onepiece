<template>
	<view>
		<block v-if="styleLoginType === 'one'">
			<view class="container">
				<!--顶部返回按钮-->
				<text class="back-btn iconfont iconzuo" @tap="navBack"></text>
				<view class="right-top-sign"></view>
				<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
				<view class="wrapper">
					<view class="left-top-sign">{{ type == 1 ? 'UPDATE' : 'GET BACK' }}</view>
					<view class="welcome"> {{ type == 1 ? '修改密码' : '找回密码' }}！ </view>
					<view class="input-content">
						<view class="input-item">
							<text class="tit">手机号码</text>
							<input
								type="number"
								v-model="resetPasswordParams.mobile"
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
										v-model="resetPasswordParams.code"
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
									<text v-else class="sms-code-resend">{{
										`重新发送 (${codeSeconds})`
										}}</text>
								</button>
							</view>
						</view>
						<view class="input-item">
							<text class="tit">密码</text>
							<input
								v-model="resetPasswordParams.password"
								type="password"
								placeholder="请输入密码"
								maxlength="18"
							/>
						</view>
						<view class="input-item">
							<text class="tit">确认密码</text>
							<input
								type="password"
								v-model="resetPasswordParams.password_repetition"
								placeholder="请输入确认密码"
							/>
						</view>
					</view>
					<button
						class="confirm-btn"
						:class="'bg-' + themeColor.name"
						:disabled="btnLoading"
						:loading="btnLoading"
						@tap="toUpdatePassword"
					>
						{{ type == 1 ? '修改密码' : '找回密码' }}
					</button>
				</view>
				<view class="register-section" v-if="type != 1">
					又想起密码了?
					<text @tap="navTo('/pages/public/login')">马上登录</text>
					或者
					<text @tap="toHome">返回主页</text>
				</view>
				<view class="register-section" v-else>
					不想修改了密码？
					<text @tap="toHome">返回主页</text>
				</view>
			</view>
		</block>
		<view class="password-type-2" v-if="styleLoginType === 'two'">
			<!--顶部返回按钮-->
			<text class="back-btn iconfont iconzuo" @tap="navBack"></text>
			<view class="login-top" :class="'bg-' + themeColor.name">
				<view class="desc">
					<view class="title">Hi~</view>
					<text>{{ type == 1 ? '修改密码' : '找回密码' }}！</text>
				</view>
				<image class="login-pic" :src="loginPic"></image>
			</view>
			<view class="login-type-content">
				<image class="login-bg" :src="loginBg"></image>
				<view class="main">
					<view class="login-type-form">
						<view class="input-item">
							<text class="iconfont icondianhua" :class="'text-' + themeColor.name"></text>
							<input
								class="login-type-input"
								type="number"
								name="mobile"
								v-model="resetPasswordParams.mobile"
								placeholder="请输入手机号码"
								maxlength="11"
							/>
						</view>
						<view class="input-item input-item-sms-code">
							<text class="iconfont iconyanzhengma" :class="'text-' + themeColor.name"></text>
							<view class="input-wrapper">
								<view class="rf-input-wrapper">
									<input
										type="number"
										class="login-type-input"
										v-model="resetPasswordParams.code"
										placeholder="请输入验证码"
										maxlength="4"
									/>
								</view>
								<button
									class="sms-code-btn"
									:disabled="smsCodeBtnDisabled"
									@tap.stop="getSmsCode()"
								>
									<text v-if="!smsCodeBtnDisabled">获取验证码</text>
									<text v-else class="sms-code-resend">
                                        {{`重新发送 (${codeSeconds})`}}
                                    </text>
								</button>
							</view>
						</view>
						<view class="input-item">
							<text class="iconfont iconmimaffffffpx" :class="'text-' + themeColor.name"></text>
							<input
								class="login-type-input"
								type="password"
								v-model="resetPasswordParams.password"
								placeholder="请输入密码"
								maxlength="20"
							/>
						</view>
						<view class="input-item">
							<text class="iconfont iconmimaffffffpx" :class="'text-' + themeColor.name"></text>
							<input
								class="login-type-input"
								type="password"
								v-model="resetPasswordParams.password_repetition"
								placeholder="请输入确认密码"
								maxlength="20"
							/>
						</view>
					</view>
					<view class="login-type-tips">
						<view @tap="navTo('/pages/public/login')" class="forget-section">
							马上登陆
						</view>
						<text @tap="toHome">返回主页</text>
					</view>
					<button
						class="confirm-btn"
						:class="'bg-' + themeColor.name"
						:disabled="btnLoading"
						:loading="btnLoading"
						@tap="toUpdatePassword"
					>
						{{ type == 1 ? '修改密码' : '找回密码' }}
					</button>
				</view>
			</view>
			<view class="login-type-bottom" :class="'text-' + themeColor.name">
				{{ appName }} 版权所有
			</view>
		</view>
	</view>
</template>

<script src='./password'>

</script>

<style lang="scss">
	@import './password.scss'
</style>
