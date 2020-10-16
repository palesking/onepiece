<template>
	<view clas="notice">
		<view class="notice-item" v-for="item in announceList" :key="item.id">
			<text class="time">{{ item.created_at | time }}</text>
			<view
				class="content"
				@tap="navTo(`/pages/index/notice/detail?id=${item.id}`)"
			>
				<text class="title">{{ item.title }}</text>
				<view class="img-wrapper" v-if="item.cover">
					<rf-image
						class="pic"
						:preview="false"
						:mode="'aspectFit'"
						:src="item.cover"
					></rf-image>
				</view>
				<text class="introduce" v-if="item.synopsis">
					{{ item.synopsis }}
				</text>
				<view class="bot b-t">
					<text>查看详情</text>
					<i class="more-icon iconfont iconyou"></i>
				</view>
			</view>
		</view>

		<rf-load-more
			class="load-more"
			:status="loadingType"
			v-if="announceList.length > 0"
		></rf-load-more>
		<rf-empty
			info="暂无商城公告"
			v-if="announceList.length === 0 && !loading"
		></rf-empty>

		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./notice'>
	
</script>

<style lang="scss">
	@import './notice.scss'
</style>
