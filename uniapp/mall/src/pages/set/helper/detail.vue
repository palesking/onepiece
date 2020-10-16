<template>
	<view class="helper-detail" v-if="!loading">
		<view v-if="helperDetail.title" class="detail">
			<view class="title">{{ helperDetail.title }}</view>
			<rf-parser lazy-load :html="helperDetail.content || ''"></rf-parser>
		</view>
		<rf-empty :info="`暂无帮助内容`" v-if="!helperDetail.title && !loading"></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./detail'>

</script>

<style lang="scss" scoped>
	@import './detail.scss'
</style>
