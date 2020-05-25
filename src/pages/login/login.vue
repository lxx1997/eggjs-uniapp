<template>
  <view class="uni-container">
    <view class="uni-login-header">
      <text class="uni-login-title">天啦噜</text>
    </view>
    <view class="uni-login-container">
      <u-cell-group>
        <u-field
          v-model="form.username"
          label="手机号"
          placeholder="请填写手机号"
        />
        <u-field
          v-model="form.password"
          label="验证码"
          placeholder="请填写验证码"
        />
        <p class="login-to-register">没有账号，点击<navigator class="link-type" url="/pages/login/register">注册</navigator></p>
        <button type="primary" @tap="handleSubmit">登录</button>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
/*
* uniapp 钩子函数执行顺序
* beforeCreate > onLoad > onShow > create > beforeMount > onReady > mounted
* onHide  页面隐藏时出发
* onSHow  页面展示时出发，如果是首页面则不会出发
*/
// import {setToken} from '~@/utils/authToken'
import { setToken } from '@/utils/authToken'
// eslint-disable-next-line camelcase
const default_form = {
  username: null,
  password: null
}
export default {
  data () {
    return {
      loading: false,
      form: Object.assign({}, default_form)
    }
  },
  onLoad () {
    this.form = Object.assign({}, JSON.parse(uni.getStorageSync('login') ? uni.getStorageSync('login') : '{}'))
  },
  methods: {
    handleSubmit () {
      this.loading = true
      this.$request('login', 'GET', { ...this.form }).then((res) => {
        console.log(res)
        setToken(res.token)
        uni.setStorageSync('login', true)
        uni.showToast({
          title: '登录成功',
          duration: 1000,
          icon: 'success',
          success: (res) => {
            console.log(res)
            uni.switchTab({
              url: '/pages/user/user'
            })
          }
        })
      }).catch((err) => {
        console.log(err)
        uni.showToast({
          title: err.msg,
          duration: 3000,
          icon: 'none'
        })
      })
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
    .u-field {
      border: 1px dotted #999999;
      margin: 0 20rpx;
      margin-top: 20rpx;
    }
    uni-button {
      margin: 0 100rpx;
      margin-top: 100rpx;
    }
  }
}
  .login-to-register {
    display: flex;
    justify-content: flex-start;
    font-size: 25rpx;
    padding: 0 30rpx;
    margin: 40rpx 0;
  }
</style>
