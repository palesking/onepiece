<!--eslint-disable-->
<template>
	<view class="interlayer">
		<block v-for="(n, i) in nodes" v-bind:key="i">
			<!--图片-->
			<view 
                v-if="n.name=='img'" 
                :class="'_img '+n.attrs.class" 
                :style="n.attrs.style" 
                :data-attrs="n.attrs"
                @tap="imgtap"
            >
				<rich-text 
                v-if="controls[i]!=0"
				:nodes="[{attrs:{src:loading&&(controls[i]||0)<2?loading:(lazyLoad&&!controls[i]?placeholder:(controls[i]==3?errorImg:n.attrs.src||'')),alt:n.attrs.alt||'',width:n.attrs.width||'',style:'-webkit-touch-callout:none;max-width:100%;display:block'+(n.attrs.height?';height:'+n.attrs.height:'')},name:'img'}]"/>
				<image 
                class="_image" 
                :src="lazyLoad&&!controls[i]?placeholder:n.attrs.src" 
                :lazy-load="lazyLoad"
				:show-menu-by-longpress="!n.attrs.ignore" 
                :data-i="i" 
                :data-index="n.attrs.i" 
                data-source="img"
				@load="loadImg"
				@error="error"/>
			</view>
			<!--文本-->
			<text v-else-if="n.type=='text'" decode>{{n.text}}</text>
			<!--#ifndef MP-BAIDU-->
			<text v-else-if="n.name=='br'">\n</text>
			<!--#endif-->
			<!--视频-->
			<view 
                v-else-if="((n.lazyLoad&&!n.attrs.autoplay)||(n.name=='video'&&!loadVideo))&&controls[i]==undefined"
				:id="n.attrs.id" :class="'_video '+(n.attrs.class||'')"
				:style="n.attrs.style" :data-i="i" @tap="_loadVideo"/>
			<video 
                v-else-if="n.name=='video'" 
                :id="n.attrs.id" 
                :class="n.attrs.class" 
                :style="n.attrs.style"
                :autoplay="n.attrs.autoplay||controls[i]==0"
                :controls="!n.attrs.autoplay||n.attrs.controls" 
                :loop="n.attrs.loop" 
                :muted="n.attrs.muted"
                :poster="n.attrs.poster" 
                :src="n.attrs.source[controls[i]||0]"
                :unit-id="n.attrs['unit-id']" 
                :data-id="n.attrs.id" 
                :data-i="i" 
                data-source="video" 
                @error="error"
                @play="play"/>
			<!--音频-->
			<audio 
                v-else-if="n.name=='audio'" 
                :ref="n.attrs.id" 
                :class="n.attrs.class" 
                :style="n.attrs.style"
                :author="n.attrs.author"
                :autoplay="n.attrs.autoplay" 
                :controls="n.attrs.controls" 
                :loop="n.attrs.loop" :name="n.attrs.name"
                :poster="n.attrs.poster"
                :src="n.attrs.source[controls[i]||0]" 
                :data-i="i" 
                :data-id="n.attrs.id" 
                data-source="audio"
                @error.native="error" @play.native="play"/>
			<!--链接-->
			<view 
                v-else-if="n.name=='a'" 
                :id="n.attrs.id" 
                :class="'_a '+(n.attrs.class||'')" 
                hover-class="_hover"
                :style="n.attrs.style"
                :data-attrs="n.attrs" @tap="linkpress">
				<trees class="_span" :nodes="n.children"/>
			</view>
			<!--广告-->
			<!--<ad v-else-if="n.name=='ad'" :class="n.attrs.class" :style="n.attrs.style" :unit-id="n.attrs['unit-id']" :appid="n.attrs.appid" :apid="n.attrs.apid" :type="n.attrs.type" :adpid="n.attrs.adpid" data-source="ad" @error="error" />-->
			<!--列表-->
			<view 
                v-else-if="n.name=='li'" 
                :id="n.attrs.id" 
                :class="n.attrs.class"
                :style="(n.attrs.style||'')+';display:flex'">
				<view v-if="n.type=='ol'" class="_ol-bef">{{n.num}}</view>
				<view v-else class="_ul-bef">
					<view v-if="n.floor%3==0" class="_ul-p1">█</view>
					<view v-else-if="n.floor%3==2" class="_ul-p2"/>
					<view v-else class="_ul-p1" style="border-radius:50%">█</view>
				</view>
				<!--#ifdef MP-ALIPAY-->
				<view class="_li">
					<trees :nodes="n.children" :lazyLoad="lazyLoad" :loading="loading"/>
				</view>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY-->
				<trees class="_li" :nodes="n.children" :lazyLoad="lazyLoad" :loading="loading"/>
				<!--#endif-->
			</view>
			<!--表格-->
			<view 
                v-else-if="n.name=='table'&&n.c" 
                :id="n.attrs.id" 
                :class="n.attrs.class"
                :style="(n.attrs.style||'')+';display:table'">
				<view 
                    v-for="(tbody, o) in n.children" 
                    v-bind:key="o" :class="tbody.attrs.class"
                    :style="(tbody.attrs.style||'')+(tbody.name[0]=='t'?';display:table-'+(tbody.name=='tr'?'row':'row-group'):'')">
					<view 
                        v-for="(tr, p) in tbody.children" 
                        v-bind:key="p" 
                        :class="tr.attrs.class"
                        :style="(tr.attrs.style||'')+(tr.name[0]=='t'?';display:table-'+(tr.name=='tr'?'row':'cell'):'')">
						<trees v-if="tr.name=='td'" :nodes="tr.children"/>
						<block v-else>
							<!--#ifdef MP-ALIPAY-->
							<view 
                                v-for="(td, q) in tr.children" 
                                v-bind:key="q" :class="td.attrs.class"
                                :style="(td.attrs.style||'')+(td.name[0]=='t'?';display:table-'+(td.name=='tr'?'row':'cell'):'')">
								<trees :nodes="td.children"/>
							</view>
							<!--#endif-->
							<!--#ifndef MP-ALIPAY-->
							<trees 
                            v-for="(td, q) in tr.children" 
                            v-bind:key="q" 
                            :class="td.attrs.class"
							:style="(td.attrs.style||'')+(td.name[0]=='t'?';display:table-'+(td.name=='tr'?'row':'cell'):'')"
							:nodes="td.children"/>
							<!--#endif-->
						</block>
					</view>
				</view>
			</view>
			<!--#ifdef APP-PLUS-->
			<iframe 
                v-else-if="n.name=='iframe'" 
                :style="n.attrs.style" :allowfullscreen="n.attrs.allowfullscreen"
                :frameborder="n.attrs.frameborder"
                :width="n.attrs.width" :height="n.attrs.height" :src="n.attrs.src"/>
			<embed 
                v-else-if="n.name=='embed'" 
                :style="n.attrs.style" 
                :width="n.attrs.width"
                :height="n.attrs.height"
                :src="n.attrs.src"/>
			<!--#endif-->
			<!--富文本-->
			<!--#ifdef MP-WEIXIN || MP-QQ || APP-PLUS-->
			<rich-text v-else-if="handler.use(n)" :id="n.attrs.id" :class="'_p __'+n.name" :nodes="[n]"/>
			<!--#endif-->
			<!--#ifndef MP-WEIXIN || MP-QQ || APP-PLUS-->
			<rich-text v-else-if="!n.c" :id="n.attrs.id" :nodes="[n]" style="display:inline"/>
			<!--#endif-->
			<!--#ifdef MP-ALIPAY-->
			<view v-else :id="n.attrs.id" :class="'_'+n.name+' '+(n.attrs.class||'')" :style="n.attrs.style">
				<trees :nodes="n.children" :lazyLoad="lazyLoad" :loading="loading"/>
			</view>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY-->
			<trees
                v-else 
                :class="(n.attrs.id||'')+' _'+n.name+' '+(n.attrs.class||'')" 
                :style="n.attrs.style"
                :nodes="n.children"
                :lazyLoad="lazyLoad" :loading="loading"/>
			<!--#endif-->
		</block>
	</view>
</template>
<script module="handler" lang="wxs" src="./handler.wxs"></script>
<script src='./trees.js'>
	
</script>

<style>
	@import './trees.scss'
</style>
