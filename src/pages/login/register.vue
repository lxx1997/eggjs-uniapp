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
        >
        </u-field>
        <u-field
          v-model="form.password"
          label="验证码"
          placeholder="请填写验证码"
        />
        <u-field
          v-model="form.password"
          label="验证码"
          placeholder="请填写验证码"
        />
        <view class="register-to-login-check">
          <u-checkbox-group @change="checkboxGroupChange">
            <u-checkbox
              v-model="checked"
            >
            <span style="font-size:24rpx;">同意用户协议</span>
            </u-checkbox>
          </u-checkbox-group>
          <p class="register-to-login">已有账号，点击<navigator class="link-type" url="/pages/login/register">注册</navigator></p>
        </view>
        <u-button type="primary" @tap="handleRegister">注册</u-button>
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
// eslint-disable-next-line camelcase
const default_form = {
  username: null,
  password: null,
  repassword: null
}
export default {
  data () {
    return {
      loading: false,
      form: Object.assign({}, default_form),
      checked: true
    }
  },
  methods: {
    handleRegister () {
      this.loading = true
      this.$request('register', 'GET', this.form).then((res) => {
        uni.setStorageSync('login', JSON.stringify(res))
        uni.navigateTo({
          url: '/pages/login/user-login'
        })
      })
    },
    handleChangeCheck () {
      this.checked = !this.checked
    },
    checkboxGroupChange () {

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
.register-to-login-check {
    display: flex;
    justify-content: space-between;
    padding-left: 20rpx;
    .u-checkbox__icon-wrap {
      margin-top: 10rpx;
    }
  .register-to-login {
    display: flex;
    justify-content: flex-end;
    font-size: 25rpx;
    padding: 0 30rpx;
    margin: 20rpx 40rpx 0;
  }
}
</style>
