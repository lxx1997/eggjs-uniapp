<template>
  <view class="uni-container">
    <view class="uni-login-header">
      <text class="uni-login-title">火星语</text> 
    </view>
    <view class="uni-login-container">
      <form @submit="handleSubmit" @reset="handleReset">
        <view class="cu-form-group margin-top">
          <view class="title label-name">用户名</view>
          <input type="text" placeholder="请输入用户名" />
        </view>
        <view class="cu-form-group margin-top">
          <view class="title label-name">密码</view>
          <input type="password" placeholder="请输入密码" password />
        </view>
        <button class="cu-btn bg-grey lg cu-btn fill margin-top" @click="handleSubmit"> 登录 </button>
        <view class="pull-right margin-top">
          没有账号，前往<navigator url="/pages/login/user-register" class="link-type" redirect hover-class="className">注册</navigator>
        </view>
      </form>
    </view>
  </view>
</template>

<script lang="ts">
/*
* uniapp 钩子函数执行顺序
* beforeCreate > onLoad > onShow > create > beforeMount > onReady > mounted
* onHide  页面隐藏时出发
* onSHow  页面展示时出发，如果是首页面则不会出发
*/
export default {
  data() {
    return {
      template: '这是一个基于typescript的uniapp框架',
      loading: false
    }
  },
  methods: {
    handleSubmit() {
      ;(this as any).loading = true
    },
    handleReset() {

    }
  }
}
</script>

<style lang="scss" scoped>
.uni-container{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  .uni-login-header {
    width: 100%;
    text-align: center;
    margin-top: 200rpx;
    .uni-login-title{
      font-family: Geneva;
      font-style: italic;
      font-size: 80rpx;
      color: rgba($color: #000000, $alpha: .5);
    }
  }
  .uni-login-container {
    margin-top: 30rpx;
    flex: 1;
    width: 100%;
    position: relative;
    .cu-form-group{
      border-radius: 30rpx;
      padding: 0 50rpx;
    }
    .label-name {
        text-align: right;
        color: #666;
        width: 150rpx;
      }
    }
  }
</style>