<template>
	<view>
		<view>
			<text>详情页面</text>
		</view>
		<view>
			<text selectable space="emsp">唱歌 跳舞打篮球</text>
		</view>
		<view>
			<text selectable space="ensp">唱歌 跳舞打篮球</text>
		</view>
		<view> 
			<text selectable space="nbsp" style="font-size: 20px;color: #4CD964;">唱歌    跳舞打篮球</text>
		</view>
		<view>
			<text decode>唱歌&nbsp;&amp;跳舞打篮球</text>
		</view>
		<view class="box" hover-class="boxactive" :hover-start-time="2000" :hover-stay-time="2000">大盒子
			<view class="boxone" hover-class="box1active" hover-stop-propagation>
				小盒子
			</view>
		</view>
		<button type="default">按钮</button>
		<button type="default" size="mini">按钮</button>
		<button type="default" plain>按钮</button>
		<button type="default" disabled>按钮</button>
		<button type="default" loading>按钮</button>
		<image src="../../static/cxk.gif"></image>
		<image src="../../static/cxk.gif" mode="aspectFill"></image>
		<image src="../../static/cxk.gif" mode="aspectFit"></image>
	</view>
</template>

<script>
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background-color: #3F536E;
	}
	.boxactive{
		background-color: #4CD964;
	}
	.boxone{
		width: 50px;
		height: 50px;
		background-color: pink;
	}
	.box1active{
		background-color: green; 
	}
</style>
