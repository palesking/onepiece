<template>
	<view class="feedback-detail">
		<view class="feedback-title">
			<text>问题和意见</text>
		</view>
		<view class="feedback-body">
			<textarea
				disabled
				:value="feedbackDetail.content"
				class="feedback-textare"
			/>
		</view>
		<view
			class="feedback-title"
			v-if="feedbackDetail.covers && feedbackDetail.covers.length > 0"
		>
			<text>图片</text>
		</view>
		<view class="uni-uploader-body">
			<view class="uni-uploader__files">
				<block v-for="(image, index) in feedbackDetail.covers" :key="index">
					<view class="uni-uploader__file">
						<rf-image class="uni-uploader__img" :src="image"></rf-image>
					</view>
				</block>
			</view>
		</view>
		<view class="feedback-title">
			<text>反馈类型</text>
		</view>
		<view class="feedback-body">
			<radio-group>
				<label
					class="gender-item"
					v-for="(item, index) in feedbackType"
					:key="index"
				>
					<radio
						class="gender-item-radio"
						:color="themeColor.color"
						:value="item.value"
						:checked="item.value == feedbackDetail.type"
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
				disabled
				:value="feedbackDetail.contact_way || '暂未留下联系方式'"
			/>
		</view>
		<view class="feedback-title">
			<text>回复内容</text>
		</view>
		<view class="feedback-body">
			<textarea
				disabled
				:value="feedbackDetail.reply || '管理员未回复'"
				class="feedback-textare"
			/>
		</view>
	</view>
</template>

<script src='./detail'>

</script>

<style lang="scss">
	@import './detail.scss'
</style>
