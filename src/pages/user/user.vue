<template>
<view class="userinfo-content">
  <view class="userinfo-info-content">
    <u-avatar src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"></u-avatar>
    <view class="userinfo-info-center" v-if="isLogin">
      <navigator url="/pages/user/user_info" redirect hover-class="none" class="userinfo-info-name">{{username}}</navigator>
      <view class="userinfo-info-level"><i class="icon iconfont iconicon-test2"></i>普通用户</view>
    </view>
    <view class="userinfo-info-login" v-else>
      <navigator url="/pages/login/user-login" redirect hover-class="none" class="link-type">登录</navigator>/
      <navigator url="/pages/login/user-register" redirect hover-class="none" class="link-type">注册</navigator>
    </view>
    <view class="userinfo-info-right">
      <i @click="handleUserInfo" class="icon iconfont iconicon5"></i>
    </view>
  </view>
  <u-grid :col="4" class="margin-top">
    <u-grid-item>
      <i class="icon iconfont iconfabu"></i>
      <view class="grid-text">发布</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont icon8"></i>
      <view class="grid-text">关注/收藏</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont iconqiandao"></i>
      <view class="grid-text">签到福利</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont iconicon52"></i>
      <view class="grid-text">阅读时长</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont icongexingzhuangban"></i>
      <view class="grid-text">我的装扮</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont iconqiapai"></i>
      <view class="grid-text">我的卡牌</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont iconhuizhang"></i>
      <view class="grid-text">徽章/称号</view>
    </u-grid-item>
    <u-grid-item>
      <i class="icon iconfont icontubiao1shuxiaoshuo"></i>
      <view class="grid-text">浏览记录</view>
    </u-grid-item>
  </u-grid>
  <view class="cu-list menu sm-border card-menu margin-top" >
    <view class="cu-item arrow" >
      <text class="text-grey">VIP</text>
    </view>
    <view class="cu-item arrow" >
      <text class="text-grey">钱包</text>
    </view>

    <view class="cu-item arrow" >
      <text class="text-grey">我的评论</text>
    </view>

    <view class="cu-item arrow" >
      <text class="text-grey">留言反馈</text>
    </view>

    <view class="cu-item arrow">
      <text class="text-grey">设置</text>
    </view>
  </view>
</view>
</template>

<script>
import isLogin from '@/utils/login'
export default {
  data () {
    return {
      username: '测试账户',
      isLogin: false
    }
  },
  onLoad () {
    this.isLogin = isLogin()
  },
  methods: {
    handleUserInfo () {
      if (this.isLogin) {
        uni.navigateTo({
          url: 'user_info'
        })
      };
    }
  }
}
</script>

<style lang="scss">
.userinfo-content {
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow: auto;
.grid-text {
  font-size: 28rpx;
  margin-top: 4rpx;
  color: $u-type-info;
}
.u-grid-item {
  font-size: 30rpx;
}
.userinfo-info-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200rpx;
  padding: 0 40rpx;
  background-color: #FFFFFF;
  margin: 0 10rpx;
  margin-top: 30rpx;
  border-radius: 70rpx;
  .userinfo-info-avator {
    height: 128rpx;
    width: 128rpx;
  }
  .userinfo-info-center {
    flex: 1;
    height: 100rpx;
    margin: 0 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    .userinfo-info-level{
      i {
        color: red;
        font-size: 40rpx;
        margin-right: 30rpx;
      }
    }
  }
  .userinfo-info-login{
    flex: 1;
    margin: 0 30rpx;
    text-align: left;
  }
  .userinfo-info-right {
    margin-right: 10rpx;
    width: 50rpx;
    text-align: center;
    i {
      font-size: 48rpx;
      color: #000000;
      opacity: .3;
    }
  }
}
.userinfo-info-func{
  display: flex;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  margin: 0 30rpx;
  margin-top: 40rpx;
  height: 300rpx;
  border-radius: 20rpx;
  &-detail {
    width: 25%;
    text-align: center;
    height: 150rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    i {
      font-size: 40rpx;
      color: #39B54A;
    }
  }
}
}
</style>
