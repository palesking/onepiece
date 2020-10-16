<template>
	<view class="content">
		<!--评价分类选项-->
		<view class="label">
			<view
				v-for="(label, index) in labelList"
				:class="index == labelIndex ? `text-${themeColor.name} on` : ''"
				@tap="getEvaluationList('', index, label.type)"
				:key="index"
			>
				{{ label.name }}
				({{ label.number }})
			</view>
		</view>
		<!--评价列表-->
		<view class="list" v-if="evaluationList.length > 0">
			<view class="row" v-for="(row, index) in evaluationList" :key="index">
				<view class="left">
					<view class="face">
						<image
							class="avatar"
							:src="row.member_head_portrait || headImg"
							mode="aspectFill"
						></image>
					</view>
				</view>
				<view class="right">
					<view class="name-date">
						<view class="username">
							{{ row.member_nickname || '匿名用户' }}
						</view>
						<view class="date">
							{{ row.created_at | time }}
						</view>
					</view>
					<view class="spec">
						<text> 购买类型: {{ row.sku_name || singleSkuText }} </text>
						<rf-rate
							size="16"
							disabled="true"
							:value="row.scores"
							:active-color="themeColor.color"
						/>
					</view>
					<view class="first">
						<view class="rat in10line">
							{{ row.content }}
						</view>
						<view class="img-video">
							<view class="box" v-for="item in row.covers" :key="item">
								<rf-image class="image" :src="item"></rf-image>
							</view>
						</view>
					</view>
					<view class="append" v-if="parseInt(row.has_again, 10) === 1">
						<view class="date">
							{{ row | againDay }}
						</view>
						<view class="rat">
							{{ row.again_content }}
						</view>
						<view class="img-video">
							<view class="box" v-for="item in row.again_covers" :key="item">
								<rf-image class="image" :src="item"></rf-image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="no-evaluation" v-else>
			暂无相关评价
		</view>
	</view>
</template>

<script src='./list'>
	
</script>

<style lang="scss">
	@import './list.scss'
</style>
