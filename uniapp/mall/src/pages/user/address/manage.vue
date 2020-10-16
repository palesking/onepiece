<template>
	<view class="address-manage rf-row-wrapper">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input
				class="input"
				type="text"
				v-model="addressData.realname"
				@blur="handleRealNameChange"
				placeholder="收货人姓名"
				placeholder-class="placeholder"
			/>
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input
				class="input"
				type="number"
				v-model="addressData.mobile"
				@blur="handleMobileChange"
				placeholder="收货人手机号码"
				placeholder-class="placeholder"
			/>
		</view>
		<view class="row b-b">
			<text class="tit">选择地址</text>
			<!--地址三级联动-->
			<rf-pick-regions
				:addressData="addressData"
				@getRegions="handleGetRegions"
			>
			</rf-pick-regions>
		</view>
		<view class="row b-b">
			<text class="tit">详细地址</text>
			<input
				class="input"
				type="text"
				v-model="addressData.address_details"
				@blur="bindAddressDetailsChange"
				placeholder="请输入详细地址"
				placeholder-class="placeholder"
			/>
		</view>
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch
				:checked="addressData.is_default ? true : false"
				:color="themeColor.color"
				@change="switchChange"
			/>
		</view>
		<button
			class="add-btn"
			:class="'bg-' + themeColor.name"
			:disabled="btnLoading"
			:loading="btnLoading"
			@tap="confirm"
		>
			提交
		</button>

		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./manage'>

</script>

<style lang="scss">
	@import './manage.scss'
</style>
