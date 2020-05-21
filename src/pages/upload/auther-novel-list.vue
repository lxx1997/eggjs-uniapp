<template>
<view class="auther-novel">
  <u-navbar :is-back="true" title="作者首页">
    <template v-solt:right>
      <view class="navbar-left" @click="handleCreateNovel">
        <i class="icon iconfont iconAPPxiazai-"></i>
      </view>
    </template>
  </u-navbar>
  <!-- 作者头像描述 -->
  <view class="auther-detail">
    <u-avatar size="130" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"></u-avatar>
    <view class="auther-detail-desc">
      <text class="auther-detail-desc-name">盘古混沌</text>
      <text class="auther-detail-desc-desc">dfasdfasdfasdfasdasdfsdfasdfasdfsdfsdf士大夫士大夫士大夫士大夫士大夫胜多负少的撒手动阀手动阀手动阀撒旦发射点发射点</text>
    </view>
  </view>
  <view class="dividing-line"></view>
  <!-- 作者作品个数和字数 -->
  <view class="author-word">
    <text class="author-word-work">作品数:3</text>
    <text class="author-word-num">总字数:7473万字</text>
  </view>
  <view class="dividing-line"></view>
  <view class="auther-work">
    <view class="auther-work-title">全部作品</view>
    <!-- 作者作品 -->
    <view class="wrap" v-for="i in 10" :key="i">
    <!-- 图书列表 -->
      <u-row  @click.native="handleToNovel(i)" gutter="16">
        <u-col span="12">
          <novel-list :item="item"></novel-list>
        </u-col>
      </u-row>
      <view class="dividing-line" style="margin: 0;"></view>
    </view>
  </view>
</view>

</template>

<script>
import NovelList from '@/components/NovelList/novel'
export default {
  components: {
    NovelList
  },
  data () {
    return {
      item: {
        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3360834600,1404834512&fm=26&gp=0.jpg'
      }
    }
  },
  methods: {
    handleToNovel (i) {
      console.log(1323)
      uni.navigateTo({
        url: `/pages/upload/auther-novel?id=${i}`
      })
    },
    handleCreateNovel () {
      uni.navigateTo({
        url: '/pages/upload/auther-novel-create'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.wrap {
  padding: 0 24rpx;
}

.u-row {
  margin: 20rpx 0;
}
/deep/ .u-slot-content {
  justify-content: flex-end;
  line-height: 44rpx;
  color: #000;
  padding-right: 20rpx;
  i {
    font-size: 32rpx;
  }
}
.dividing-line {
  margin: 0 20rpx;
  margin-top: 20rpx;
  border: 1rpx dotted rgba(0,0,0,0.2);
}
.auther-novel {
  height: 100%;
  background-color: #ffffff;
  overflow: auto;
  .auther-navbar {
    width: 100%;
    .u-back-wrap {
      float: left;
    }
    &-title {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 34rpx;
      margin-right: 34rpx;
      font-weight: bolder;
      span {
        display: block;
        text-align: center;
        width: 100%;
        font-size: 34rpx;
        font-weight: bolder;
      }
    }
  }
  .auther-detail {
    display: flex;
    justify-content: space-between;
    .u-avatar {
      margin-top: 30rpx;
      margin-left: 30rpx;
    }
    &-desc {
      flex: 1;
      padding-left: 40rpx;
      height: 130rpx;
      margin-top: 30rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
      &-name {
        font-size: 32rpx;
        font-weight: bold;
      }
      &-desc {
        color: #000;
        opacity: 0.5;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
    }
  }
  .author-word {
    display: flex;
    padding: 40rpx 20rpx 0 20rpx;
    text {
      flex: 1;
      padding-left: 40rpx;
    }
    &-work {
      font-size: 30rpx;
    }
    &-num {
      font-size: 30rpx;
      border-left: 4rpx solid rgba(0,0,0,0.4);
    }
  }
  .auther-work {
    &-title {
      margin-left: 40rpx;
      margin-top: 20rpx;
      border-left: 8rpx solid #ce1b1b;
      padding-left: 20rpx;
      font-size: 34rpx;
      font-weight: bolder;
    }
  }
}
</style>
