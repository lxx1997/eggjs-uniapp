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
		}
	}
</script>

<style lang="scss">
  /*每个页面公共css */
  @import "./styles/index.scss";
  // 引入colorui
  @import "./colorui/main.css";
  @import "./colorui/icon.css";
  // 引入icon
  @import  "./static/font_1804355_7iyuwljb5q/iconfont.css";
  @import 'uview-ui/theme.scss';
</style>
