<template>
	<view class="uni-calendar" @touchmove.stop.prevent="clean">
		<view v-if="!insert&&show" class="uni-calendar__mask" :class="{'uni-calendar--mask-show':aniMaskShow}" @tap="clean"></view>
		<view v-if="insert || show" class="uni-calendar__content" :class="{'uni-calendar--fixed':!insert,'uni-calendar--ani-show':aniMaskShow}">
			<view v-if="!insert" class="uni-calendar__header uni-calendar--fixed-top">
				<view class="uni-calendar__header-btn-box" @tap="close">
					<text class="uni-calendar__header-text uni-calendar--fixed-width">取消</text>
				</view>
				<view class="uni-calendar__header-btn-box" @tap="confirm">
					<text class="uni-calendar__header-text uni-calendar--fixed-width">确定</text>
				</view>
			</view>
			<view class="uni-calendar__header">
				<view class="uni-calendar__header-btn-box" @tap="pre">
					<view class="uni-calendar__header-btn uni-calendar--left"></view>
				</view>
				<text class="uni-calendar__header-text">{{ (nowDate.year||'') +'年'+( nowDate.month||'') +'月'}}</text>
				<view class="uni-calendar__header-btn-box" @tap="next">
					<view class="uni-calendar__header-btn uni-calendar--right"></view>
				</view>
				<text class="uni-calendar__backtoday" @tap="backtoday">回到今天</text>
				<text class="uni-calendar__all" @tap="searchAll">查看所有</text>
			</view>
			<view class="uni-calendar__box">
				<view class="uni-calendar__box-bg">
					<text class="uni-calendar__box-bg-text">{{nowDate.month}}</text>
				</view>
				<view class="uni-calendar__weeks" v-for="(item,weekIndex) in weeks" :key="weekIndex">
					<view class="uni-calendar__weeks-item" v-for="(weeks,weeksIndex) in item" :key="weeksIndex">
						<rf-calendar-item :weeks="weeks" :calendar="calendar" :selected="selected" :lunar="lunar" @change="choiceDate"></rf-calendar-item>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script src='./rf-calendar.js'>
	
</script>

<style lang="scss" scoped>
	@import './rf-calendar.scss'
</style>
