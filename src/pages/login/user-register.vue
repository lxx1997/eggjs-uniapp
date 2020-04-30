<template>
  <view class="uni-container">
    <view class="uni-login-header">
      <text class="uni-login-title">火星语</text> 
    </view>
    <view class="uni-login-container">
      <form :model="form" @submit="handleSubmit" @reset="handleReset">
        <view class="cu-form-group margin-top">
          <view class="title label-name">用户名</view>
          <input v-model="form.username" type="text" placeholder="请输入用户名" />
        </view>
        <view class="cu-form-group margin-top">
          <view class="title label-name">密码</view>
          <input v-model="form.password" type="password" placeholder="请输入密码" password />
        </view>
        <view class="cu-form-group margin-top">
          <view class="title label-name">重复密码</view>
          <input v-model="form.repassword" type="password" placeholder="请再次输入密码" password />
        </view>
        <button class="cu-btn bg-grey lg cu-btn fill margin-top" @click="handleRegister"> 注册 </button>
        <view class="pull-right margin-top margin-right" style="line-height:40rpx; ">
          已有账号，前往<navigator url="/pages/login/user-login" class="link-type" redirect hover-class="className">登录</navigator>
        </view>
        <view class="pull-left margin-top margin-left">
          <checkbox @click="handleChangeCheck" :class="checked ? 'checked' : ''" :checked="checked" />
          <text class="link-type">同意用户协议</text>
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
const default_form:Object = {
  username: null,
  password: null,
  repassword: null
}
interface registerData {
  loading: Boolean,
  form: Object,
  checked: Boolean
}
export default {
  data ():registerData {
    return {
      loading: false,
      form: Object.assign({}, default_form),
      checked: true
    }
  },
  methods: {
    handleRegister() {
      (this as any).loading = true
      console.log((this as any).form)
    },
    handleReset() {

    },
    handleChangeCheck() {
      (this as any).checked = !(this as any).checked
      console.log((this as any).checked)
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