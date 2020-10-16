<template name="yq-avatar">
	<view>
		<image
			:src="imgSrc.imgSrc"
			@tap="fSelect"
			:style="[imgStyle]"
			class="my-avatar"
		></image>
		<canvas
			canvas-id="avatar-canvas"
			id="avatar-canvas"
			class="my-canvas"
			:style="{ top: styleTop, height: cvsStyleHeight }"
			disable-scroll="false"
		></canvas>
		<canvas
			canvas-id="oper-canvas"
			id="oper-canvas"
			class="oper-canvas"
			:style="{ top: styleTop, height: cvsStyleHeight }"
			disable-scroll="false"
			@touchstart="fStart"
			@touchmove="fMove"
			@touchend="fEnd"
		></canvas>
		<canvas
			canvas-id="prv-canvas"
			id="prv-canvas"
			class="prv-canvas"
			disable-scroll="false"
			@touchstart="fHideImg"
			:style="{ height: cvsStyleHeight, top: prvTop }"
		></canvas>
		<view class="oper-wrapper" :style="{ display: styleDisplay }">
			<view class="oper">
				<view class="btn-wrapper" v-if="showOper">
					<view @tap="fSelect" hover-class="hover" :style="{ width: btnWidth }">
                        <text>重选</text>
                    </view>
					<view @tap="fClose" hover-class="hover" :style="{ width: btnWidth }">
                        <text>关闭</text>
                    </view>
					<view
						@tap="fRotate"
						hover-class="hover"
						:style="{ width: btnWidth, display: btnDsp }">
                        <text>旋转</text>
                    </view>
					<view @tap="fPreview" hover-class="hover" :style="{ width: btnWidth }">
                        <text>预览</text>
                    </view>
					<view @tap="fUpload" hover-class="hover" :style="{ width: btnWidth }">
                        <text>上传</text>
                    </view>
				</view>
				<view class="clr-wrapper" v-else>
					<slider
						class="my-slider"
						@change="fColorChange"
						block-size="25"
						value="0"
						min="-100"
						max="100"
						activeColor="red"
						backgroundColor="green"
						block-color="grey"
						show-value
					></slider>
					<view
						@tap="fPrvUpload"
						hover-class="hover"
						:style="{ width: btnWidth }"
						><text>上传</text></view
					>
				</view>
			</view>
		</view>
	</view>
</template>

<script src='./rf-avatar.js'> 

</script>

<style>
    @import './rf-avatar.scss'
</style>
