<template>
	<view class="feedback-list">
		<view class="rf-list" v-if="feedbackList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in feedbackList"
				:key="index"
				@tap="navTo(`/pages/set/feedback/detail?id=${item.id}`)"
			>
				<view class="wrapper">
					<view class="address-box">
						<text class="tag" :class="'text-' + themeColor.name">{{ item.type | feedbackFilter }}</text>
						<text class="address in1line">{{ item.content }}</text>
					</view>
					<view class="u-box">
						<text class="name">{{ item.reply || '管理员未回复' }}</text>
						<text class="mobile"
							>联系方式：{{ item.contact_way || '暂无' }}</text
						>
					</view>
				</view>
			</view>
			<rf-load-more
				v-if="feedbackList.length > 0 && !loading"
				:status="loadingType"
			/>
		</view>
		<view class="add-btn-wrapper">
			<button class="add-btn" :class="'bg-' + themeColor.name" @tap="navTo(`/pages/set/feedback/feedback`)">
				意见反馈
			</button>
		</view>
		<rf-empty
			:info="'您还没有反馈意见'"
			v-if="feedbackList.length === 0 && !loading"
		></rf-empty>
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./list'>

</script>

<style lang="scss">
	@import './list.scss'
</style>
