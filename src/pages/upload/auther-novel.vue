<template>
<view class="auther-novel">
  <view class="auther-novel-novel">
    <view class="auther-novel-novel-top" style="background:url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3360834600,1404834512&fm=26&gp=0.jpg) no-repeat 100%">
    </view>
    <view class="go-back">
      <i class="icon iconfont iconIcon-fanhui"></i>
    </view>
    <view class="auther-novel-novel-bottom">
      <image class="auther-novel-novel-bottom-img" :src="item.src" />
      <view class="auther-novel-novel-bottom-rate">
        <text  class="auther-novel-novel-bottom-rate-point">{{current}}</text><u-rate :count="5" :current="current" active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></u-rate>
      </view>
      <text class="auther-novel-novel-bottom-title" title="从零开始的异世界生活" >从零开始的异世界生活dfsdfsdafsdfasdsdfsdfs</text>
    </view>
  </view>
  <view class="auther-novel-comment">

  </view>
  <view class="auther-novel-btns">
    <u-button @click="handleEndNovel" :custom-style="customStyle" :ripple="true" size="default">完结</u-button>
    <u-button @click="handleUpdateNovel" :custom-style="customStyle" size="default">更新</u-button>
  </view>
</view>
</template>

<script>
export default {
  data () {
    return {
      item: {
        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3360834600,1404834512&fm=26&gp=0.jpg'
      },
      current: '3.4',
      customStyle: {
        width: '200rpx',
        borderRadius: '100rpx',
        border: '1px solid #000',
        backgroundColor: '#F5DEB3'
      }
    }
  },
  created () {

  },
  methods: {
    handleEndNovel () {

    },
    handleUpdateNovel () {

    }
  }
}
</script>
<style scoped lang="scss">
.auther-novel {
  height: 100%;
  &-novel {
    height: 600rpx;
    background: #ffffff;
    position: relative;
    overflow: hidden;
    &-top {
      height: 300rpx;
      width: 100%;
      overflow: hidden;
      position: absolute;
      opacity: .5;
    }
    .go-back {
      position: absolute;
      color: #ffffff;
      margin-top: 10rpx;
      margin-left: 10rpx;
      i {
        font-size: 40rpx;
        opacity: 1;
      }
    }
    &-bottom {
      position: absolute;
      background-color: rgba(0, 0, 0, 0);
      top: 100rpx;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &-img {
        width: 200rpx;
        max-height: 300rpx;
        background-color: #eeeeee;
        margin-left: 50%;
        transform: translateX(-50%);
      }
      &-rate {
        display: flex;
        justify-content: space-around;
        margin-left: 50%;
        transform: translateX(-50%);
        &-point {
          font-size: 40rpx;
          font-weight: border;
          margin-top: 20rpx;
        }
        .u-rate {
          margin-top: 30rpx;
          display: flex;
          justify-content: space-evenly;
        }
      }
      &-title {
        margin-top: 20rpx;
        font-size: 40rpx;
        font-weight: border;
        max-width: 500rpx;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        // margin-left: 50%;
        // transform: translateX(-50%);
        span {
          width: 90%;
        }
      }
    }
  }
  &-btns {
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    width: 100%;
    bottom: 20rpx;
  }
}
</style>
