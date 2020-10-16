<template>
	<view class="page">
		<view class="feedback-title">
			<text>问题和意见</text>
			<text class="feedback-quick" @tap="chooseMsg">快速键入 
                <text class="iconfont iconxia"></text>
            </text>
		</view>
		<view class="feedback-body">
			<textarea
				placeholder="请详细描述您的问题和意见..."
				v-model="sendDate.content"
				class="feedback-textare"
			/>
		</view>
		<view class="feedback-title">
			<text>图片(选填,提供问题截图,总大小10M以下)</text>
		</view>
		<view class="feedback-body feedback-uploader rf-uploader">
			<view class="uni-uploader">
				<view class="uni-uploader-head">
					<view class="uni-uploader-title">点击预览图片</view>
					<view class="uni-uploader-info">{{ imageList.length }}/9</view>
				</view>
				<view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image, index) in imageList" :key="index">
							<view class="uni-uploader__file" style="position: relative;">
								<rf-image class="uni-uploader__img" :src="image"></rf-image>
								<view class="close-view" @tap="close(index)" :class="'bg-' + themeColor.name">x</view>
							</view>
						</block>
						<view class="uni-uploader__input-box" v-if="imageList.length < 9">
							<view class="uni-uploader__input" @tap="uploadImage"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="feedback-title">
			<text>反馈类型</text>
		</view>
		<view class="feedback-body">
			<radio-group @change="handleFeedbackTypeChange">
				<label
					class="gender-item"
					v-for="(item, index) in feedbackType"
					:key="index"
				>
					<radio
						class="gender-item-radio"
						:color="themeColor.color"
						:value="item.value"
						:checked="item.value === sendDate.type"
					/>
					<text class="gender-item-text">{{ item.name }}</text>
				</label>
			</radio-group>
		</view>
		<view class="feedback-title">
			<text>QQ/邮箱/手机号</text>
		</view>
		<view class="feedback-body">
			<input
				class="feedback-input"
				v-model="sendDate.contact_way"
				placeholder="(选填,方便我们联系您 )"
			/>
		</view>
		<button
			class="confirm-btn"
			:class="'bg-' + themeColor.name"
			:disabled="btnLoading"
			:loading="btnLoading"
			@tap="send"
		>
			提交
		</button>
		<view class="feedback-title">
			<text>反馈结果可在设置 -> 意见反馈 -> 点击列表后查看！</text>
		</view>
	</view>
</template>

<script src='./feedback'>

</script>

<style lang="scss">
	@import './feedback.scss'
</style>
