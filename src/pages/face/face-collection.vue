<template>
  <view class="face-collection">
    <view class="face-collection-circle">
      <view class="face-collection-circle1">
      </view>
      <view class="face-collection-circle2">
      </view>
      <view class="face-col-inner-circle1">
        <view class="face-col-inner-circle2">
      </view>
      <view class="face-col-inner-circle3">
      </view>
      </view>
    </view>
    <view class="face-collection-btn">
      <button type="primary">确定</button>
    </view>
  </view>
</template>

<style lang="scss">
  .face-collection{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 200rpx 0;
    .face-collection-circle{
      height: 700rpx;
      width: 100%;
      position: relative;
      uni-view{
        position: absolute;
        left: 50%;
      }
    }
    .face-collection-circle1 {
      height: 300rpx;
      width: 600rpx;
      border: 1rpx solid #666;
      border-top-left-radius: 300rpx;
      border-top-right-radius: 300rpx;
      border-bottom: none;
      transform-style: preserve-3d;
      transform-origin: bottom;
      transform: translateX(-50%) rotateZ(-140deg);
    }
    .face-collection-circle2 {
      height: 280rpx;
      width: 560rpx;
      margin-top: 20rpx;
      border: 1rpx solid #666;
      border-top-left-radius: 280rpx;
      border-top-right-radius: 280rpx;
      border-bottom: none;
      transform-style: preserve-3d;
      transform-origin: 286rpx 280rpx ;
      transform: translateX(-50%) rotateZ(-2deg);
    }
    .face-col-inner-circle1 {
      height: 520rpx;
      width: 520rpx;
      margin-top: 40rpx;
      border: 2rpx solid #333;
      overflow: hidden;
      background-color: rgb(221, 201, 201);
      border-radius: 270rpx;
      transform-style: preserve-3d;
      transform-origin: 270rpx 270rpx ;
      transform: translateX(-50%);
    }
    .face-col-inner-circle2 {
      height: 400rpx;
      width: 400rpx;
      border: 2rpx solid #333;
      background-color: #fff;
      border-radius: 270rpx;
      transform-style: preserve-3d;
      transform-origin: 270rpx 270rpx ;
      transform: translateX(-50%);
    }.face-col-inner-circle3 {
      height: 400rpx;
      width: 400rpx;
      border: 2rpx solid #333;
      background-color: #fff;
      border-radius: 270rpx;
      transform-style: preserve-3d;
      transform-origin: 270rpx 270rpx ;
      transform: translateX(-50%) translateY(100%);
    }
    .face-collection-btn{
      width: 100%;
      padding: 0 100rpx;
      uni-button{
        border-radius: 50rpx;
      }
    }
  }
</style>