<template>
	<view class="container product-list">
		<view class="rf-header-box">
			<view class="rf-header" :style="{width:width+'px',height:height+'px'}">
				<view class="rf-back" :style="{marginTop:arrowTop+'px'}" @tap="back">
					<text class="iconfont iconzuo"></text>
				</view>
				<view class="input-box" :style="{marginTop:inputTop+'px'}">
					<input
						v-model="keyword"
						@confirm="search"
						placeholder="请输入关键字"
						placeholder-style="font-size: 24upx; color:#ccc;"
						type="text" />
					<text class="icon iconfont iconsousuo2" @tap.stop="search"></text>
				</view>
			</view>
		</view>
		<view class="rf-header-screen" :style="{top:height+'px'}">
			<view class="rf-screen-top">
				<view 
                    class="rf-top-item rf-icon-ml" 
                    :class="[tabIndex==0? `text-${themeColor.name} rf-bold`:'']" 
                    data-index="0" 
                    @tap="screen"
                >
					<text>{{selectedName}}</text>
					<text 
                        class="iconfont" 
                        :class="selectH>0?'iconshang':'iconxia'" 
                        :style="{color: tabIndex==0? themeColor.color:'#444'}"
                    ></text>
				</view>
				<view class="rf-top-item" :class="[tabIndex == 1?`text-${themeColor.name} rf-bold`:'']" @tap="screen" data-index="1">
					销量
				</view>
				<view class="rf-top-item" @tap="screen" data-index="2">
					<text class="iconfont" :class="isList>0? 'iconliebiaoqiehuan':'iconfenlei'"></text>
				</view>
				<view class="rf-top-item rf-icon-ml" @tap="screen" data-index="3">
					<text>筛选</text>
					<!--<rf-icon name="screen" :size="12" color="#333" rf-icon-class="rf-ml" :bold="true"></rf-icon>-->
				</view>
				<!--下拉选择列表--综合-->
				<view class="rf-dropdownlist" :class="[selectH>0?'rf-dropdownlist-show':'']" :style="{height:selectH+'upx'}">
					<view 
                        class="rf-dropdownlist-item rf-icon-middle" 
                        :class="[item.selected?'rf-bold':'']" 
                        v-for="(item,index) in dropdownList" 
                        :key="index" 
                        @tap.stop="dropdownItem" 
                        :data-index="index"
                    >
						<text class="rf-ml rf-middle">{{item.name}}</text>
						<text class="iconfont icongouxuan" :class="'text-' + themeColor.name" v-if="item.selected"></text>
					</view>
				</view>
				<view class="rf-dropdownlist-mask" :class="[selectH>0?'rf-mask-show':'']" @tap.stop="hideDropdownList"></view>
				<!--下拉选择列表--综合-->
			</view>
			<view class="rf-screen-bottom">
				<block v-for="(item,index) in attrArr" :key="index">
					<view 
                        class="rf-bottom-item rf-icon-ml" 
                        :class="[item.isActive ? `bg-${themeColor.name} rf-btmItem-active` : 
                        'rf-btmItem-normal',attrIndex==index?'rf-btmItem-tap':'']" 
                        :data-index="index" 
                        @tap="btnDropChange"
                    >
						<view 
                            class="rf-bottom-text" e
                            :class="[attrIndex==index?'rf-active':'']">{{item.isActive?item.selectedName:item.name}}
                        </view>
						<text 
                            class="iconfont" 
                            :class="attrIndex==index?'iconshang':'iconxia'" 
                            :size="14" 
                            :color="attrIndex==index || item.isActive?'$base-color':'#444'" 
                            rf-icon-class="rf-ml" v-if="item.list.length>0"
                        ></text>
					</view>
				</block>
			</view>
		</view>
		<view class="product-list-wrapper">
			<rf-product-list 
                :bottom="0" 
                :list="productList" 
                :isList="isList" 
                :style="{paddingTop: dropScreenH+10 + 'upx' }"
            ></rf-product-list>
		</view>
		<rf-load-more :status="loadingType" v-if="productList.length > 0"></rf-load-more>
		<rf-empty :info="errorInfo || '该分类暂无商品'" v-if="productList.length === 0 && !loading"></rf-empty>
		<!--顶部下拉筛选弹层 属性-->
		<rf-top-drawer bgcolor="#f7f7f7" :show="dropScreenShow" :paddingbtm="110" :translatey="dropScreenH" @close="btnCloseDrop">
			<scroll-view class="rf-scroll-box" scroll-y :scroll-top="scrollTop">
				<view class="rf-seizeaseat-20"></view>
				<view 
                    class="rf-drop-item rf-icon-middle" 
                    :class="[item.selected?'rf-bold':'']" 
                    v-for="(item,index) in attrData" 
                    :key="index"
                    @tap.stop="btnSelected" 
                    :data-index="index"
                >
					<text 
                        class="iconfont icongouxuan" 
                        :class="'text-' + themeColor.name" 
                        :size="16" 
                        :bold="true" 
                        v-if="item.selected" 
                        rf-icon-class="rf-middle"
                    ></text>
					<text class="rf-ml rf-middle">{{item.name}}</text>
				</view>
				<view class="rf-seizeaseat-30"></view>
			</scroll-view>
			<view class="rf-drop-btnbox">
				<view class="rf-drop-btn" :class="'text-' + themeColor.name" :hover-stay-time="150" @tap="reset">重置</view>
				<view class="rf-drop-btn" :class="'bg-' + themeColor.name" :hover-stay-time="150" @tap="btnSure">确定</view>
			</view>
		</rf-top-drawer>
		<!---顶部下拉筛选弹层 属性-->
		<!--左抽屉弹层 筛选 -->
		<uni-drawer
			class="rf-drawer"
			:visible="drawer"
			mode="right"
			@close="closeDrawer()"
		>
			<view class="rf-drawer-box" :style="{paddingTop:height+'px'}">
				<scroll-view class="rf-drawer-scroll" scroll-y :style="{height:drawerH+'px'}">
					<view class="rf-drawer-title">
						<text class="rf-title-bold">价格区间</text>
						<view class="rf-attr-right" :class="'text-' + themeColor.name">
							<text>请输入价格区间</text>
						</view>
					</view>
					<view class="rf-drawer-content">
						<input 
                            placeholder-class="rf-phcolor" 
                            v-model="minPrice" 
                            class="rf-input" 
                            placeholder="最低价" 
                            maxlength="11" 
                            type='number' />
						<text>-</text>
						<input 
                            placeholder-class="rf-phcolor" 
                            v-model="maxPrice"  
                            class="rf-input" 
                            placeholder="最高价" 
                            maxlength="11" 
                            type='number' 
                        />
					</view>
					<view class="rf-drawer-title">
						<text class="rf-title-bold">全部分类</text>
						<view class="rf-all-box rf-icon-ml">
							<view class="rf-attr-right" :class="'text-' + themeColor.name">{{ currentCateStr }}</view>
						</view>
					</view>
					<view class="rf-drawer-content rf-flex-attr">
						<view 
                            class="rf-attr-item" 
                            :class="[item.isActive ? `bg-${themeColor.name} rf-btmItem-active` : 'rf-btmItem-normal']" 
                            v-for="(item, index) in productCateList" :key="item.id"
                            @tap.stop="cateBtnSelected(index)"
                        >
							<view class="rf-attr-ellipsis">{{ item.title }}</view>
						</view>
					</view>

					<view class="rf-drawer-title">
						<text class="rf-title-bold">品牌</text>
						<view class="rf-all-box rf-icon-ml">
							<view class="rf-attr-right" :class="'text-' + themeColor.name">{{ currentBrandStr }}</view>
						</view>
					</view>
					<view class="rf-drawer-content rf-flex-attr">
						<view 
                            class="rf-attr-item" 
                            :class="[item.isActive ? `bg-${themeColor.name} rf-btmItem-active` : 'rf-btmItem-normal']" 
                            v-for="(item, index) in brandList" :key="item.id" 
                            @tap.stop="brandBtnSelected(index)"
                        >
							<view class="rf-attr-ellipsis">{{ item.title }}</view>
						</view>
					</view>
					<view class="rf-safearea-bottom"></view>
				</scroll-view>
				<view class="rf-attr-btnbox">
					<view class="rf-attr-safearea">
						<view 
                            class="rf-drawer-btn rf-drawerbtn-black" 
                            :class="'text-' + themeColor.name" 
                            hover-class="rf-white-hover" 
                            :hover-stay-time="150" 
                            @tap="reset"
                        >重置</view>
						<view 
                            class="rf-drawer-btn rf-drawerbtn-primary" 
                            :class="'bg-' + themeColor.name" 
                            hover-class="rf-red-hover" 
                            :hover-stay-time="150" 
                            @tap="closeDrawer"
                        >确定</view>
					</view>
				</view>
			</view>
		</uni-drawer>
		<!--左抽屉弹层 筛选-->
		<!--页面加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./list'>
	
</script>
<style lang="scss">
	@import './list.scss';
</style>
