<template>
<view class="novel-introduction" @click="handleToDetail">
  <!-- 图书列表 -->
  <view class="novel-intro-image">
    <image style="width: 150rpx; max-height: 200rpx; background-color: #eeeeee;" :src="item.src" @error="imageError"></image>
  </view>
  <view class="novel-intro-text">
    <text class="novel-intro-text-name">文章名称</text>
    <text class="novel-intro-text-detail">分类 . 状态. 字数</text>
    <text class="novel-intro-text-describe">描述</text>
  </view>
</view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    imageError (e) {
      console.error('image发生error事件，携带值为' + e.detail.errMsg)
    },
    // 跳转详情
    handleToDetail () {

    }
  }
}
</script>

<style scoped lang="scss">
.novel-introduction {
  display: flex;
  justify-content: space-between;
  .novel-intro-text {
    flex: 1;
    padding-left: 40rpx;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    &-name {
      font-size: 34rpx;
      font-weight: bold;
    }
    &-detail {
      font-size: 30rpx;
      opacity: .5;
    }
    &-describe {
      opacity: .5;
    }
  }
}
</style>
