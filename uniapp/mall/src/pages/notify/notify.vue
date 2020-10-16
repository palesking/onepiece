<template>
	<view class="notify">
		<view class="notify-list" v-if="notifyList.length > 0">
			<view class="read" :class="'text-'+themeColor.name">
				<text>全部清空</text>
				<text>全部已读</text>
			</view>
			<view v-for="(item, index) in notifyList" :key="index" class="row" @tap="navTo(item)">
				<!-- 删除按钮 -->
				<view class="menu" :class="'bg-'+themeColor.name" @tap.stop="handleClearNotify(item.notify_id)">
					<i class="iconfont iconiconfontshanchu1"></i>
				</view>
				<!-- 商品 -->
				<view
					class="carrier"
					:class="[theIndex === index ? 'open' : oldIndex === index ? 'close' : '']"
					@touchstart="touchStart(index, $event)"
					@touchmove="touchMove(index, $event)"
					@touchend="touchEnd(index, $event)"
				>
					<view class="notify-wrapper">
						<view class="title in1line">{{item.notify.title}}</view>
						<view class="content in2line">{{item.notify.content}}</view>
						<view class="time">{{item.created_at | time}}</view>
						<uni-tag
                            class="type"
                            type="error"
                            :text="item.type | notifyTypeFilter"
                            size="small"
						/>
						<view 
                            class="un-read" 
                            :class="'bg-'+themeColor.name" 
                            v-if="item.is_read.toString() === '0'"
                        ></view>
					</view>
				</view>
				<rf-load-more v-if="notifyList.length > 0" :status="loadingType" />
			</view>
		</view>
		<!--消息为空-->
		<rf-empty
			:bottom="bottom"
			info="您还没有推送消息"
			v-if="notifyList.length === 0 && hasLogin"
		></rf-empty>
		<view v-if="!hasLogin" class="notify-empty">
			<text class="iconfont iconxiaoxi-" :class="'text-'+themeColor.name"></text>
			<view class="empty-tips">
				暂未登录
				<view 
                    class="navigator" 
                    :class="'text-'+themeColor.name" 
                    @tap="navToLogin('/pages/public/logintype')"
				>登录/注册 ></view>
			</view>
		</view>
	</view>
</template>
<script src = './notify'>

</script>
<style lang="scss">
	@import './notify.scss'
</style>
