<template>
	<view class="invoice-list">
		<view class="rf-list" v-if="invoiceList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in invoiceList"
				@tap="checkInvoice(item)"
				:key="index"
				@longtap="deleteInvoice(item.id)"
			>
				<view class="mid">
					<view class="t-box">
						<text v-if="parseInt(item.is_default, 10) === 1" class="tag" :class="['text-' + themeColor.name]"
							>默认</text
						>
						<text>发票抬头: {{ item.title }}</text>
					</view>
					<view class="u-box">
						[{{ parseInt(item.type, 10) === 1 ? '公司' : '个人' }}] —
						{{ item.duty_paragraph || '个人发票无税号' }}
					</view>
				</view>
				<view class="right">
					<text
						class="iconfont iconbianji"
						@tap.stop="addInvoice('edit', item.id)"
					></text>
				</view>
			</view>
			<text class="tips" :class="'text-' + themeColor.name" v-if="invoiceList.length > 0">
				提示：长按可删除当前发票。最多只能存在一个默认发票。
			</text>
			<rf-load-more v-if="invoiceList.length > 0" :status="loadingType" />
		</view>
		<view class="add-btn-wrapper">
			<button class="add-btn" :class="'bg-' + themeColor.name" @tap="addInvoice('add')">新增发票</button>
		</view>
		<rf-empty
			info="暂无发票"
			v-if="invoiceList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./invoice'>

</script>

<style lang="scss">
	@import './invoice.scss'
</style>
