<template>
<view class="userinfo-content">
<view class="cu-list menu sm-border card-menu margin-top" >
  <view class="cu-item" >
    <view class="content">
      <text class="text-black">头像</text>
      <u-avatar size="mini" :src="avator"></u-avatar>
    </view>
    <view class="action icon-edit" @click="handleChooseImage">
      <i class="icon iconfont iconicon5"></i>
    </view>
  </view>
  <view class="cu-item" >
    <view class="content">
      <text class="text-black">昵称</text>
    </view>
    <view class="action icon-edit" @click="handleEditName">
      <text>{{form.name}}</text>
      <i class="icon iconfont iconicon5"></i>
    </view>
  </view>
  <view class="cu-item" >
    <view class="content">
      <text class="text-black">用户名</text>
    </view>
    <view class="action icon-edit" @click="handleEditUsername">
      <text>{{form.username}}</text>
      <i class="icon iconfont iconicon5"></i>
    </view>
  </view>
  <view class="cu-item" >
    <view class="content">
      <text class="text-black">个人描述</text>
    </view>
    <view class="action icon-edit" @click="handleEditDescribe">
      <text>{{form.describe}}</text>
      <i class="icon iconfont iconicon5"></i>
    </view>
  </view>
  <view class="cu-item">
    <view class="content">
      <text class="text-black">重置密码</text>
    </view>
    <view class="action icon-edit" @click="handleResetPassword">
      <i class="icon iconfont iconicon5"></i>
    </view>
  </view>
  <view>
    <u-keyboard ref="uKeyboard" mode="car" v-model="show"></u-keyboard>
  </view>
</view>
</view>
</template>

<script>
import { getToken } from '@/utils/authToken'
// eslint-disable-next-line camelcase
const default_form = {
  avator: '',
  name: '',
  username: '',
  describe: ''
}
export default {
  data () {
    return {
      form: Object.assign({}, default_form),
      avator: '',
      show: false
    }
  },
  created () {
    this.handleGetUserinfo()
  },
  methods: {
    handleGetUserinfo () {
      this.$request('userinfo', 'GET').then((res) => {
        this.form.username = res.username
        this.form.describe = res.describe
        this.form.name = res.name
        this.form.avator = res.avator
      }).catch((err) => {
        console.log(err)
      })
    },
    handleEditUsername () {
      uni.navigateTo({
        url: 'user_edit?title=用户名&placeholder=请输入用户名&field=username'
      })
    },
    handleResetPassword () {
      uni.navigateTo({
        url: 'user_edit?title=密码&placeholder=请输入密码&field=password'
      })
    },
    handleEditDescribe () {
      uni.navigateTo({
        url: 'user_edit?title=个人描述&placeholder=请输入个人描述&field=describe'
      })
    },
    handleEditName () {
      uni.navigateTo({
        url: 'user_edit?title=昵称&placeholder=请输入昵称&field=name'
      })
    },
    //  上传文件
    handleChooseImage () {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          uni.uploadFile({
            url: 'http://192.168.0.114:7001/api/v1/files',
            filePath: res.tempFilePaths[0],
            name: res.tempFiles[0].name,
            header: {
              Authorization: getToken()
            },
            success: (res) => {
              this.avator = 'http://192.168.0.114:7001' + JSON.parse(res.data).data.path
              uni.showToast({
                title: '上传成功'
              })
            },
            fail: (err) => {
              console.error(err)
              uni.showToast({
                title: '上传失败'
              })
            }
          })
        }
      })
    },
    handleShowImage () {
      uni.previewImage({
        urls: [this.avator]
      })
    }
  }
}
</script>

<style lang="scss">
.userinfo-content{
  height: 100%;
  overflow: hidden;
  .content {
    display: flex;
    justify-content: space-between;
  }
}
.icon-edit{
  font-size: 30rpx;
  opacity: .6;
}
// 遮罩层
.bg-mask{
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #999999;
  opacity: .4;
  position: absolute;
}
.cu-card {
  position: absolute;
  bottom: 0;
  height: 400rpx;
  width: 100%;
  &>.cu-item {
    margin-top: 140rpx;
  }
  .cu-item {
    width: 100%;
    .cu-form-group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .label-name {
        width: 150rpx;
        text-align: center;
      }
      input {
        flex: 1;
      }
    }
  }
}
</style>
