<template>
	<view class="login">
		<block v-if="styleLoginType === 'one'">
			<view class="container">
				<!--顶部返回按钮-->
				<text class="back-btn iconfont iconzuo" @tap="navBack"></text>
				<!--插画-->
				<view class="right-top-sign"></view>
				<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
				<view class="wrapper">
					<view class="left-top-sign">LOGIN</view>
					<view class="welcome">
						欢迎回来！
					</view>
					<view class="input-content">
						<view class="input-item">
							<text class="tit">手机号码</text>
							<input
								type="number"
								name="mobile"
								v-model="loginParams.mobile"
								placeholder="请输入手机号码"
								maxlength="11"
								@blur="blurMobileChange"
							/>
						</view>
						<view class="input-item" v-if="loginByPass">
							<text class="tit">密码</text>
							<input
								name="password"
								type="password"
								v-model="loginParams.password"
								placeholder="请输入密码"
								maxlength="20"
							/>
						</view>

						<view class="input-item input-item-sms-code" v-if="!loginByPass">
							<view class="input-wrapper">
								<view class="rf-input-wrapper">
									<view class="tit">验证码</view>
									<input
										type="number"
										v-model="loginParams.code"
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
									<text v-else class="sms-code-resend">{{ `重新发送 (${codeSeconds})` }}</text>s
								</button>
							</view>
						</view>
						<button
							class="confirm-btn"
							:class="'bg-' + themeColor.name"
							:disabled="btnLoading"
							:loading="btnLoading"
							@tap="toLogin"
						>
							登录
						</button>
					</view>
					<view @tap="showLoginBySmsCode" class="forget-section">
						{{ loginByPass ? '验证码登录' : '密码登录' }}
					</view>
					<view class="forget-section" @tap="navTo('/pages/public/password')">
						忘记密码?
					</view>
				</view>
				<view class="register-section">
					还没有账号?
					<text @tap="navTo('/pages/public/register')">马上注册</text>
					或者
					<text @tap="toHome">返回主页</text>
				</view>
			</view>
		</block>
		<view class="login-type-2" v-if="styleLoginType === 'two'">
			<!--顶部返回按钮-->
			<text class="back-btn iconfont iconzuo" @tap="navBack"></text>
			<view class="login-top" :class="'bg-' + themeColor.name">
				<view class="desc">
					<view class="title">Hi~</view>
					<text>{{ appName }}欢迎您</text>
				</view>
				<image class="login-pic" :src="loginPic"></image>
			</view>
			<view class="login-type-content">
				<image class="login-bg" :src="loginBg" :style="{height: tabCurrentIndex === 1 ? '150vw' : '94vw'}"></image>
				<view class="main">
					<view class="nav-bar">
						<view
							class="nav-bar-item"
							v-for="(item, index) in typeList"
							:key="index"
							:class="tabCurrentIndex === index ? `text-${themeColor.name} nav-bar-item-active` : ''"
							@tap="tabClick(index)"
						>
							{{ item.text }}
						</view>
					</view>
					<block v-if="tabCurrentIndex === 0">
						<view class="login-type-form">
							<view class="input-item">
								<text class="iconfont iconzhanghuffffffpx" :class="'text-' + themeColor.name"></text>
								<input
									class="login-type-input"
									type="number"
									name="mobile"
									v-model="loginParams.mobile"
									placeholder="请输入手机号码"
									maxlength="11"
									@blur="blurMobileChange"
								/>
							</view>
							<view class="input-item" v-if="loginByPass">
								<text class="iconfont iconmimaffffffpx" :class="'text-' + themeColor.name"></text>
								<input
									class="login-type-input"
									type="password"
									v-model="loginParams.password"
									placeholder="请输入密码"
									maxlength="20"
								/>
							</view>
							<view class="input-item input-item-sms-code" v-if="!loginByPass">
								<text class="iconfont iconyanzhengma" :class="'text-' + themeColor.name"></text>
								<view class="input-wrapper">
									<view class="rf-input-wrapper">
										<input
											type="number"
											class="login-type-input"
											v-model="loginParams.code"
											placeholder="请输入验证码"
											maxlength="4"
										/>
									</view>
									<button
										class="sms-code-btn"
										:disabled="smsCodeBtnDisabled"
										@tap.stop="getSmsCode('login')"
									>
										<text v-if="!smsCodeBtnDisabled">获取验证码</text>
										<text v-else class="sms-code-resend">
                                            {{`重新发送 (${codeSeconds})`}}
                                        </text>
									</button>
								</view>
							</view>
						</view>
						<view class="login-type-tips">
							<view @tap="showLoginBySmsCode" class="forget-section">
								{{ loginByPass ? '验证码登录' : '密码登录' }}
							</view>
							<text @tap="navTo('/pages/public/password')">忘记密码？</text>
						</view>
						<button
							class="confirm-btn"
							:class="'bg-' + themeColor.name"
							:disabled="btnLoading"
							:loading="btnLoading"
							@tap="toLogin"
						>
							登录
						</button>
					</block>
					<block v-if="tabCurrentIndex === 1">
						<view class="login-type-form">
							<view class="input-item">
								<text class="iconfont icondianhua" :class="'text-' + themeColor.name"></text>
								<input
									class="login-type-input"
									type="number"
									name="mobile"
									v-model="registerParams.mobile"
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
											v-model="registerParams.code"
											placeholder="请输入验证码"
											maxlength="4"
										/>
									</view>
									<button
										class="sms-code-btn"
										:disabled="smsCodeBtnDisabled"
										@tap.stop="getSmsCode('register', registerParams.mobile)"
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
									v-model="registerParams.password"
									placeholder="请输入密码"
									maxlength="20"
								/>
							</view>
							<view class="input-item">
								<text class="iconfont iconmimaffffffpx" :class="'text-' + themeColor.name"></text>
								<input
									class="login-type-input"
									type="password"
									v-model="registerParams.password_repetition"
									placeholder="请输入确认密码"
									maxlength="20"
								/>
							</view>
							<view class="input-item">
								<text class="iconfont iconwode" :class="'text-' + themeColor.name"></text>
								<input
									class="login-type-input"
									type="text"
									v-model="registerParams.nickname"
									placeholder="请输入昵称"
									maxlength="20"
								/>
							</view>
							<view class="input-item" v-if="!closeRegisterPromoCode">
								<text class="iconfont iconyanzhengma1" :class="'text-' + themeColor.name"></text>
								<input
									class="login-type-input"
									type="text"
									v-model="registerParams.promoCode"
									placeholder="请输入邀请码"
									maxlength="20"
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
					</block>
				</view>
			</view>
			<view class="login-type-bottom" :class="'text-' + themeColor.name">
				{{ appName }} 版权所有
			</view>
		</view>
	</view>
</template>
<script src='./login'>

</script>
<style lang="scss">
	@import './login.scss'
</style>
