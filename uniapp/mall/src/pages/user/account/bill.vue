<template>
	<view class="account-bill">
		<!--顶部账单类型 全部/充值/消费-->
		<view class="navbar">
			<view
				v-for="(item, index) in billTypeList"
				:key="index"
				class="nav-item"
				:class="tabCurrentIndex === index ? `text-${themeColor.name} current` : ''"
				@tap="tabClick(index, item.state)"
			>
				{{ item.text }}
			</view>
		</view>
		<!--账单明细列表-->
		<view class="rf-bill-list" v-if="integralList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in integralList"
				:key="index"
			>
				<view class="mid">
					<view class="title">
						{{ item.remark }}
					</view>
					<view class="time">
						{{ item.created_at | time }}
					</view>
				</view>
				<view class="right">
					<text
						class="change-num"
						:class="parseFloat(item.num) >= 0 ? 'change-num-add' : 'change-num-reduce'"
						>{{ item.num | numFilter }}
					</text>
				</view>
			</view>
			<rf-load-more
				class="load-more"
				:status="loadingType"
				v-if="integralList.length > 0"
			></rf-load-more>
		</view>
		<rf-empty
			:info="'暂无账单记录'"
			v-if="integralList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./bill'>

</script>
<style scoped lang="scss">
	@import 'bill.scss'
</style>
