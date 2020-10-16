<template>
	<view class="rf-live-list">
		<!--顶部账单类型 全部/充值/消费-->
		<view class="navbar">
			<view
				v-for="(item, index) in liveTypeList"
				:key="index"
				class="nav-item"
				:class="tabCurrentIndex === index ? `text-${themeColor.name} current` : ''"
				@tap="tabClick(index, item.state)"
			>
				{{ item.text }}
			</view>
		</view>
		<!--提现记录列表-->
		<view class="rf-list" v-if="liveList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) of liveList"
				@tap="navToLive(item)"
				:key="index"
			>
				<view class="left">
					<image
						:preview="false"
						class="image"
						mode="aspectFill"
						:src="item.cover"
					></image>
				</view>
				<view class="mid">
					<text class="title in2line">{{ item.name }}</text>
					<text class="name in1line">主播：{{ item.anchor_name || '暂未填写'}}</text>
					<text class="time" v-if="item.live_status === '101'">直播开始于 {{ item.start_time | time }}</text>
					<text class="time" v-if="item.live_status === '102'">直播于 {{ item.start_time | time }} 开始</text>
					<text class="time" v-if="item.live_status === '103'">
                        直播: {{ item.start_time | time }} - {{ item.end_time | time  }}
                    </text>
				</view>
				<view class="right">
					<uni-tag
						class="tag"
						:text="state | filterStateText"
						:type="state | filterStateTag"
						size="small"
					/>
				</view>
			</view>
			<rf-load-more
				class="load-more"
				:status="loadingType"
				v-if="liveList.length > 0"
			></rf-load-more>
		</view>
		<rf-empty
			info="暂无直播记录"
			v-if="liveList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src = './list'>

</script>
<style scoped lang="scss">
	@import './list.scss'
</style>
