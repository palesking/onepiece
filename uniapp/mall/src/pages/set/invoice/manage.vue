<template>
	<view class="invoice-manage rf-row-wrapper">
		<view class="row b-b">
			<text class="tit">发票类型</text>
			<radio-group class="invoice-type" @change="handleInvoiceTypeChange">
				<label
					class="invoice-type-item"
					v-for="(item, index) in invoiceType"
					:key="index"
				>
					<radio
						class="gender-item-radio"
						size="small"
						:color="themeColor.name"
						:value="'' + item.value"
						:checked="item.value === invoiceData.type"
					/>
					<text class="gender-item-text">{{ item.name }}</text>
				</label>
			</radio-group>
		</view>
		<view class="row b-b">
			<text class="tit">发票抬头</text>
			<input
				class="input"
				type="text"
				v-model="invoiceData.title"
				placeholder="请输入发票抬头"
				placeholder-class="placeholder"
			/>
		</view>
		<view class="row b-b" v-if="parseInt(invoiceData.type, 10) === 1">
			<text class="tit">发票税号</text>
			<input
				class="input"
				type="text"
				v-model="invoiceData.duty_paragraph"
				placeholder="请输入发票税号"
				placeholder-class="placeholder"
			/>
		</view>
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch
				:checked="invoiceData.is_default ? true : false"
				:color="themeColor.name"
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
	</view>
</template>

<script src='./manage'>

</script>

<style lang="scss">
	@import './manage.scss'
</style>
