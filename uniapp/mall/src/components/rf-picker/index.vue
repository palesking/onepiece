<template>
	<view class="mpvue-picker">
		<view
			:class="{ pickerMask: showPicker }"
			@tap="maskClick"
			catchtouchmove="true"
		></view>
		<view
			class="mpvue-picker-content "
			:class="{ 'mpvue-picker-view-show': showPicker }"
		>
			<view class="mpvue-picker__hd" catchtouchmove="true">
				<view class="mpvue-picker__action" @tap="pickerCancel">取消</view>
				<view
					class="mpvue-picker__action"
					:style="{ color: themeColor.color }"
					@tap="pickerConfirm"
					>确定</view>
			</view>
			<!-- 单列 -->
			<picker-view
				indicator-style="height: 40px;"
				class="mpvue-picker-view"
				:value="pickerValue"
				@change="pickerChange"
				v-if="mode === 'selector' && pickerValueSingleArray.length > 0"
			>
				<block>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueSingleArray"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
				</block>
			</picker-view>
			<!-- 时间选择器 -->
			<picker-view
				indicator-style="height: 40px;"
				class="mpvue-picker-view"
				:value="pickerValue"
				@change="pickerChange"
				v-if="mode === 'timeSelector'"
			>
				<block>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueHour"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueMinute"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
				</block>
			</picker-view>
			<!-- 多列选择 -->
			<picker-view
				indicator-style="height: 40px;"
				class="mpvue-picker-view"
				:value="pickerValue"
				@change="pickerChange"
				v-if="mode === 'multiSelector'"
			>
				<block v-for="(n, index) in pickerValueMulArray.length" :key="index">
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index1) in pickerValueMulArray[n]"
							:key="index1"
							>{{ item.label }}</view>
					</picker-view-column>
				</block>
			</picker-view>
			<!-- 二级联动 -->
			<picker-view
				indicator-style="height: 40px;"
				class="mpvue-picker-view"
				:value="pickerValue"
				@change="pickerChangeMul"
				v-if="mode === 'multiLinkageSelector' && deepLength === 2"
			>
				<block>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueMulTwoOne"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueMulTwoTwo"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
				</block>
			</picker-view>
			<!-- 三级联动 -->
			<picker-view
				indicator-style="height: 40px;"
				class="mpvue-picker-view"
				:value="pickerValue"
				@change="pickerChangeMul"
				v-if="mode === 'multiLinkageSelector' && deepLength === 3"
			>
				<block>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueMulThreeOne"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueMulThreeTwo"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
					<picker-view-column>
						<view
							class="picker-item"
							v-for="(item, index) in pickerValueMulThreeThree"
							:key="index"
							>{{ item.label }}</view>
					</picker-view-column>
				</block>
			</picker-view>
		</view>
	</view>
</template>

<script src='./index.js'>

</script>

<style>
.pickerMask {
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
}

.mpvue-picker-content {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	transition: all 0.3s ease;
	transform: translateY(100%);
	z-index: 3000;
}

.mpvue-picker-view-show {
	transform: translateY(0);
}

.mpvue-picker__hd {
	display: flex;
	padding: 9px 15px;
	background-color: #fff;
	position: relative;
	text-align: center;
	font-size: 17px;
}

.mpvue-picker__hd:after {
	content: ' ';
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: 1px;
	border-bottom: 1px solid #e5e5e5;
	color: #e5e5e5;
	transform-origin: 0 100%;
	transform: scaleY(0.5);
}

.mpvue-picker__action {
	display: block;
	flex: 1;
	color: #1aad19;
}

.mpvue-picker__action:first-child {
	text-align: left;
	color: #888;
}

.mpvue-picker__action:last-child {
	text-align: right;
}

.picker-item {
	text-align: center;
	line-height: 40px;
	font-size: 16px;
}

.mpvue-picker-view {
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 238px;
	background-color: rgba(255, 255, 255, 1);
}
</style>
