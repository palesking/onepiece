<template>
	<view class="rf-account-level" v-if="!loading">
		<view class="title">会员级别列表</view>
		<view class="advance-area">
			<view class="flex-box tc thead">
				<view class="item-3">级别名称</view>
				<view class="item-3">升级条件(元)</view>
				<view class="item-3">说明</view>
			</view>
			<view
				class="flex-box table tc"
				v-for="(item, index) in memberLevelList"
				:key="index"
			>
				<text class="item-3">
					{{ item.name }}
				</text>
				<text class="item-3">
					消费满<text :class="'text-' + themeColor.name">{{ item.money }}</text>元
				</text>
				<text class="item-3 font-sm">
					<text>根据具体商品进行折扣</text>
				</text>
			</view>
		</view>
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./level'>

</script>
<style scoped lang="scss">
	@import './level.scss'

</style>
