<template>
	<view class="uni-countdown">
		<text class="tip in1line">{{ tip }}</text>
		<view
			v-if="showDay"
			:style="{
				borderColor: borderColor,
				color: color,
				background: backgroundColor
			}"
			class="uni-countdown__number"
			>{{ d }}</view>
		<view
			v-if="showDay"
			:style="{ color: splitorColor }"
			class="uni-countdown__splitor"
			>天</view>
		<view
			:style="{
				borderColor: borderColor,
				color: color,
				background: backgroundColor
			}"
			class="uni-countdown__number"
			>{{ h }}</view>
		<view :style="{ color: splitorColor }" class="uni-countdown__splitor">
            {{ showColon ? ':' : '时' }}
        </view>
		<view
			:style="{
				borderColor: borderColor,
				color: color,
				background: backgroundColor
			}"
			class="uni-countdown__number"
			>{{ i }}</view>
		<view :style="{ color: splitorColor }" class="uni-countdown__splitor">
            {{ showColon ? ':' : '分' }}
        </view>
		<view
			:style="{
				borderColor: borderColor,
				color: color,
				background: backgroundColor
			}"
			class="uni-countdown__number"
			>{{ s }}</view>
		<view
			v-if="!showColon"
			:style="{ color: splitorColor }"
			class="uni-countdown__splitor"
			>秒</view>
	</view>
</template>
<script src='./index'>

</script>
<style lang="scss">
.tip {
	font-size: $font-sm;
	color: $font-color-dark;
	font-weight: 550;
	margin-right: 4upx;
}

.uni-countdown {
	padding: 2upx 0;
	display: inline-flex;
	flex-wrap: nowrap;
	justify-content: center;
}

.uni-countdown__splitor {
	justify-content: center;
	line-height: 36upx;
	padding: 0 2upx;
}

.uni-countdown__number {
	line-height: 32upx;
	justify-content: center;
	height: 32upx;
	border-radius: 6upx;
	margin: 0 5upx;
	border: 1px solid #000;
	font-size: 24upx;
	padding: 0 6upx;
}
</style>
