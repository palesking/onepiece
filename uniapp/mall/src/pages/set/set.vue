<template>
	<view class="set">
		<view
			class="list-cell b-b"
			:class="{ 'm-t': item.class === 'mT' }"
			v-for="item in setList"
			:key="item.title"
			@tap="navTo(item.url)"
			hover-class="cell-hover"
			:hover-stay-time="50"
		>
			<text class="cell-tit">{{ item.title }}</text>
			<text class="cell-tip">{{ item.content }}</text>
			<text class="cell-more iconfont iconyou"></text>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="list-cell m-t">
			<text class="cell-tit">消息推送</text>
			<switch :checked="notifyChecked" :color="themeColor.color" />
		</view>
		<!-- #endif -->
		<view class="cu-list menu sm-border card-menu" v-if="styleUserIsOpen">
			<view class="cu-item">
				<view class="content flex align-center">
					<text
						class="cuIcon-colorlens"
						:class="'text-' + themeColor.name"
					></text>
					<view
						class="padding solid radius shadow-blur"
						:class="'bg-' + themeColor.name"
					></view>
					<view class="title">
                        主题色：
                        <text :class="'text-' + themeColor.name">{{ themeColor.title }}</text>
                    </view>
				</view>
				<view class="action">
					<button
						class="cu-btn round shadow"
						@click="showColorModal"
						:class="'bg-' + themeColor.name"
					>
						<text class="cuIcon-colorlens"></text> 
                        选择主题
					</button>
				</view>
			</view>
		</view>
		<view
			class="list-cell log-out-btn"
			:class="'text-' + themeColor.name"
			@tap="toLogout"
		>
			<text class="cell-tit">退出登录</text>
		</view>
		<!-- modal -->
		<!-- 选择颜色模态框 -->
		<view class="cu-modal" :class="{ show: colorModal }">
			<view class="cu-dialog">
				<view class="cu-bar justify-end solid-bottom">
					<view class="content">选择颜色</view>
					<view class="action" @tap="colorModal = false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="grid col-5 padding">
					<view
						class="padding-xs"
						v-for="(item, index) in themeList"
						:key="index"
						@tap="SetColor(item)"
						:data-color="item.name"
					>
						<view class="padding-tb radius" :class="'bg-' + item.name">
							{{ item.title }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script src='./set'>

</script>
<style lang="scss">
	@import './set.scss'
</style>
