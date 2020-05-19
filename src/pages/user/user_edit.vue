<template>
<view class="userinfo-content">
  <view class="cu-form-group">
    <view class="label-name">{{editForm.title}}</view>
    <input v-model="editForm.value" type="text" :placeholder="editForm.placeholder" maxlength="200" name="input" />
  </view>
  <view class="cu-form-group">
    <button class="cu-btn bg-pink lg cu-btn fill margin-top" type="default" @click="handleSubmit">提交</button>
  </view>
</view>
</template>

<script>
// eslint-disable-next-line camelcase
const default_edit = {
  title: '',
  placeholder: '',
  field: '', // 改变字段
  value: '' // 值
}
export default {
  data () {
    return {
      editForm: Object.assign({}, default_edit)
    }
  },
  onLoad (option) {
    this.editForm.title = option.title
    this.editForm.placeholder = option.placeholder
    this.editForm.field = option.field
    uni.setNavigationBarTitle({
      title: option.title + '修改'
    })
  },
  methods: {
    // 提交修改
    handleSubmit () {
      this.$request('users', 'PUT', this.editForm).then((resData) => {
        uni.showToast({
          title: '修改成功',
          duration: 1000
        })
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }
}
</script>

<style lang="scss">
.userinfo-content{
  height: 100%;
  overflow: hidden;
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
</style>
