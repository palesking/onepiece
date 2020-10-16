<template>
	<view class="helperList" v-if="!loading">
		<!-- 帮助列表 -->
		<view v-if="helperList.length > 0">
			<uni-collapse v-for="(fItem, fIndex) in helperList" :key="fIndex">
				<uni-collapse-item open :title="fItem.title">
					<view 
                        class="helper-child-item" 
                        v-for="(sItem, sIndex) in fItem.child" 
                        :key="sIndex" @tap="navTo(`/pages/set/helper/detail?id=${sItem.id}`)"
                    >
						<text>{{ sItem.title }}</text>
						<text class="iconfont iconyou"></text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<rf-empty info="暂无站点帮助" v-if="helperList.length === 0 && !loading"></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./index'>

</script>

<style lang="scss" scoped>
	@import './index.scss'
</style>
