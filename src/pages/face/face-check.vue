<template>
  <view class="face-check">
    <view class="face-check-tips">系统检测到你还没有录入人脸数据，请先进行人脸采集</view>
    <button class="face-check-btn" @click="handleToCollection" type="primary">采集</button>
  </view>
</template>

<script lang="ts">
export default {
  methods: {
    handleToCollection() {
      uni.navigateTo({
        url:'/pages/face/face-collection'
      })
    }
  }
}
</script>

<style lang="scss">
  .face-check {
    height: 1000rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    padding: 300rpx 0;
    .face-check-tips {
      font-size: 35rpx;
      width: 60%;
      color: #666;
      text-align: center;
    }
    .face-check-btn {
      width: 80%;
      border-radius: 50rpx;
    }
  }
</style>