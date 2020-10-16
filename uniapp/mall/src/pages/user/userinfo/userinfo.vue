<template>
	<view class="userinfo">
		<!--头像 + 背景-->
		<view class="user-section" :class="'bg-' + themeColor.name">
			<image class="bg" :src="userBg"></image>
			<!--#ifdef H5-->
			<!--h5直接上传头像-->
			<view class="portrait-box" @tap="uploadImage">
				<image
					class="portrait"
					:src="profileInfo.head_portrait || headImg"
				></image>
			</view>
			<!-- #endif -->
			<!--#ifndef H5-->
			<!--非h5裁剪头像上传-->
			<view class="portrait-box">
				<avatar
					canRotate="false"
					selWidth="200px"
					selHeight="400upx"
					@upload="handleUploadFile"
					:avatarSrc="profileInfo.head_portrait || headImg"
					avatarStyle="width: 200upx; height: 200upx; border-radius: 100%; border: 6upx solid #fff;"
				>
				</avatar>
			</view>
			<!-- #endif -->
		</view>
		<view class="input-content">
			<view class="input-item">
				<text class="tit">手机号</text>
				<input
					type="number"
					v-model="profileInfo.mobile"
					disabled
					placeholder="请输入手机号码"
				/>
			</view>
			<view class="input-item">
				<text class="tit">昵　称</text>
				<input
					type="text"
					v-model="profileInfo.nickname"
					placeholder="请输入您的昵称"
				/>
			</view>
			<view class="input-item">
				<text class="tit">姓　名</text>
				<input
					type="text"
					v-model="profileInfo.realname"
					placeholder="请输入您的姓名"
				/>
			</view>
			<view class="input-item">
				<text class="tit">性　别</text>
				<radio-group @change="handleGenderChange">
					<label
						class="gender-item"
						v-for="(item, index) in genders"
						:key="index"
					>
						<radio
							class="gender-item-radio"
							:color="themeColor.color"
							:value="item.value"
							:checked="item.value === profileInfo.gender"
						/>
						<text class="gender-item-text">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
			<view class="input-item">
				<text class="tit">生　日</text>
				<picker mode="date" v-model="date" @change="bindDateChange">
					<view class="date" style="background: none;">
                        {{ date || '请选择日期' }}
                    </view>
				</picker>
			</view>
			<view class="input-item">
				<text class="tit">Q　Q</text>
				<input
					type="number"
					v-model="profileInfo.qq"
					placeholder="请输入您的QQ"
				/>
			</view>
			<view class="input-item">
				<text class="tit">邮　箱</text>
				<input v-model="profileInfo.email" placeholder="请输入您的邮箱" />
			</view>
			<button
				class="confirm-btn"
				:class="'bg-' + themeColor.name"
				:disabled="btnLoading"
				:loading="btnLoading"
				@tap="toUpdateInfo"
			>
				修改资料
			</button>
		</view>

		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>

		<!--进度条加载-->
		<rf-load-progress
			:height="CustomBar"
			:progress="loadProgress"
		></rf-load-progress>
	</view>
</template>

<script src='./userinfo'>

</script>

<style lang="scss" scoped>
	@import './userinfo.scss'
</style>
