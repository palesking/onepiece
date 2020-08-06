<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError:function(err){
			console.log("出现异常了",err)
		}
	}
</script>

<style>
	@import url("./static/fonts/iconfont.css");
	/*每个页面公共css */
	.box2{
		background-color: #FFC0CB;
	}
</style>
