// eslint-disable
	global.Parser = {};
	import trees from './trees';

	const errorImg = require('../libs/config.js').errorImg;
	export default {
		components: {
			trees
		},
		name: 'trees',
		data() {
			return {
				controls: [],
				placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',
				errorImg,
				loadVideo:
				// #ifdef APP-PLUS
					false
				// #endif
				// #ifndef APP-PLUS
				true
				// #endif
			};
		},
		props: {
			nodes: Array,
			lazyLoad: Boolean,
			loading: String
		},
		mounted() {
			for (this.top = this.$parent; this.top.$options.name != 'parser'; this.top = this.top.$parent) ;
			this.init();
		},
		// #ifdef APP-PLUS
		beforeDestroy() {
			this.observer && this.observer.disconnect();
		},
		// #endif
		methods: {
			init() {
				for (var i = this.nodes.length, n; n = this.nodes[--i];) {
					if (n.name == 'img') {
						this.top.imgList.setItem(n.attrs.i, n.attrs.src);
						// #ifdef APP-PLUS
						if (this.lazyLoad && !this.observer) {
							this.observer = uni.createIntersectionObserver(this).relativeToViewport({
								top: 500,
								bottom: 500
							});
							this.$nextTick(() => {
								this.observer.observe('._img', res => {
									if (res.intersectionRatio) {
										for (var j = this.nodes.length; j--;)
											if (this.nodes[j].name == 'img')
												this.$set(this.controls, j, 1);
										this.observer.disconnect();
									}
								});
							});
						}
						// #endif
					} else if (n.name == 'video' || n.name == 'audio') {
						var ctx;
						if (n.name == 'video') {
							ctx = uni.createVideoContext(n.attrs.id
								// #ifndef MP-BAIDU
								, this
								// #endif
							);
						} else if (this.$refs[n.attrs.id])
							ctx = this.$refs[n.attrs.id][0];
						if (ctx) {
							ctx.id = n.attrs.id;
							this.top.videoContexts.push(ctx);
						}
					}
				}
				// #ifdef APP-PLUS
				// APP 上避免 video 错位需要延时渲染
				setTimeout(() => {
					this.loadVideo = true;
				}, 1000);
				// #endif
			},
			play(e) {
				var contexts = this.top.videoContexts;
				if (contexts.length > 1 && this.top.autopause)
					for (var i = contexts.length; i--;)
						if (contexts[i].id != e.currentTarget.dataset.id)
							contexts[i].pause();
			},
			imgtap(e) {
				var attrs = e.currentTarget.dataset.attrs;
				if (!attrs.ignore) {
					var preview = true,
						data = {
							id: e.target.id,
							src: attrs.src,
							ignore: () => preview = false
						};
					global.Parser.onImgtap && global.Parser.onImgtap(data);
					this.top.$emit('imgtap', data);
					if (preview) {
						var urls = this.top.imgList,
							current = urls[attrs.i] ? parseInt(attrs.i) : (urls = [attrs.src], 0);
						uni.previewImage({
							current,
							urls
						});
					}
				}
			},
			loadImg(e) {
				var i = e.currentTarget.dataset.i;
				if (this.lazyLoad && !this.controls[i]) {
					// #ifdef QUICKAPP-WEBVIEW
					this.$set(this.controls, i, 0);
					this.$nextTick(function() {
						// #endif
						// #ifndef APP-PLUS
						this.$set(this.controls, i, 1);
						// #endif
						// #ifdef QUICKAPP-WEBVIEW
					});
					// #endif
				} else if (this.loading && this.controls[i] != 2) {
					// #ifdef QUICKAPP-WEBVIEW
					this.$set(this.controls, i, 0);
					this.$nextTick(function() {
						// #endif
						this.$set(this.controls, i, 2);
						// #ifdef QUICKAPP-WEBVIEW
					});
					// #endif
				}
			},
			linkpress(e) {
				var jump = true,
					attrs = e.currentTarget.dataset.attrs;
				attrs.ignore = () => jump = false;
				global.Parser.onLinkpress && global.Parser.onLinkpress(attrs);
				this.top.$emit('linkpress', attrs);
				if (jump) {
					// #ifdef MP
					if (attrs['app-id']) {
						return uni.navigateToMiniProgram({
							appId: attrs['app-id'],
							path: attrs.path
						});
					}
					// #endif
					if (attrs.href) {
						if (attrs.href[0] == '#') {
							if (this.top.useAnchor)
								this.top.navigateTo({
									id: attrs.href.substring(1)
								});
						} else if (attrs.href.indexOf('http') == 0 || attrs.href.indexOf('//') == 0) {
							// #ifdef APP-PLUS
							plus.runtime.openWeb(attrs.href);
							// #endif
							// #ifndef APP-PLUS
							uni.setClipboardData({
								data: attrs.href,
								success: () =>
									uni.showToast({
										title: '链接已复制'
									})
							});
							// #endif
						} else
							uni.navigateTo({
								url: attrs.href,
								fail() {
									uni.switchTab({
										url: attrs.href
									});
								}
							});
					}
				}
			},
			error(e) {
				var target = e.currentTarget,
					source = target.dataset.source,
					i = target.dataset.i;
				if (source == 'video' || source == 'audio') {
					// 加载其他 source
					var index = this.controls[i] ? this.controls[i].i + 1 : 1;
					if (index < this.nodes[i].attrs.source.length)
						this.$set(this.controls, i, index);
					if (e.detail.__args__)
						e.detail = e.detail.__args__[0];
				} else if (errorImg && source == 'img') {
					this.top.imgList.setItem(target.dataset.index, errorImg);
					this.$set(this.controls, i, 3);
				}
				this.top && this.top.$emit('error', {
					source,
					target,
					errMsg: e.detail.errMsg
				});
			},
			_loadVideo(e) {
				this.$set(this.controls, e.target.dataset.i, 0);
			}
		}
	};