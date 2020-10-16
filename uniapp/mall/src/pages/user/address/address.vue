<template>
	<view class="address-list">
		<view class="rf-list" v-if="addressList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in addressList"
				:key="index"
				@tap="checkAddress(item)"
			>
				<view
					class="mid"
					@longtap="deleteAddress(item.id)"
				>
					<view class="address-box">
						<text v-if="parseInt(item.is_default, 10) === 1" class="tag" :class="'text-' + themeColor.name">默认</text>
						<text class="address in1line">{{ item.address_name }} {{ item.address_details }}</text>
					</view>
					<view class="u-box">
						<text class="name">{{ item.realname }}</text>
						<text class="mobile">{{ item.mobile }}</text>
					</view>
				</view>
				<view class="right">
					<text class="iconfont iconbianji" @tap.stop="addAddress('edit', item.id)"></text>
				</view>
			</view>
			<text v-if="addressList.length > 0" class="tips" :class="'text-' + themeColor.name">
				提示：长按可删除当前收货地址。最多只能存在一个默认地址。
			</text>
			<rf-load-more v-if="addressList.length > 0" :status="loadingType" />
		</view>
		<view class="add-btn-wrapper">
			<button class="add-btn" :class="'bg-' + themeColor.name" @tap="addAddress('add')">新增地址</button>
		</view>
		<rf-empty
			:info="`暂无收货地址，请添加地址`"
			v-if="addressList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./address'>

</script>
<style lang="scss">
	@import './address.scss'
</style>
