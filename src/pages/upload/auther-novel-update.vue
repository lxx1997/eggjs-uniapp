<template>
<view class="novel-update">
  <u-cell-group>
    <u-field
      v-model="form.novelName"
      label="书名"
      placeholder="请填写手机号"
    />
    <u-field
      v-model="form.novelCharacter"
      label="章节名"
      placeholder="请填写章节名"
    />
    <view class="novel-update-conent novel-update-conent1">
      <text class="novel-update-conent-title">内容</text>
      <!-- <textarea class="novel-update-conent-textarea" placeholder="请输入章节内容"></textarea> -->
      <editor class="novel-update-conent-textarea" max-length="300000" id="editor" placeholder="填写文章内容" @ready="onEditorReady" @input="onEditorInput"></editor>
    </view>
  </u-cell-group>
  <view class="novel-update-btn">
    <u-button :custom-style="customStyle" size="default">提交</u-button>
  </view>
</view>
</template>

<script>
export default {
  data () {
    return {
      form: {
        novelName: null,
        novelCharacter: null,
        content: null
      },
      initText: '<p>jasdfashdfasdfjasdfjkas</p>',
      customStyle: {
        width: '400rpx',
        height: '80rpx',
        borderRadius: '100rpx',
        border: '1px solid #000',
        backgroundColor: '#F5DEB3'
      }
    }
  },
  methods: {
    onEditorReady () {
      uni.createSelectorQuery().select('#editor').context((res) => {
        this.editorCtx = res.context
        this.editorCtx.insertText({
          text: this.initText
        })
      }).exec()
    },
    onEditorInput (e) {
      this.form.content = e.detail.html
    }
  }
}
</script>

<style lang="scss">
.novel-update {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  .u-cell-box {
    flex: 1;
    overflow: auto;
    /deep/ .u-cell-item-box {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    // /deep/ .margin-top {
    //   margin-top: 20rpx;
    // }
    .novel-update-conent1 {
      flex: 1;
      height: 100%;
      overflow: auto;
    }
    .novel-update-conent {
      display: flex;
      justify-content: space-between;
      // margin-top: 10rpx;
      padding: 20rpx 0 ;
      &-title {
        display: block;
        padding-left: 26rpx;
        font-size: 30rpx;
        width: 140rpx;
      }
      &-textarea {
        flex: 1;
        height: 100%;
        font-size: 28rpx;
        overflow: auto;
      }
      &-picker {
        flex: 1;
        font-size: 28rpx;
      }
    }
  }
  .novel-update-btn {
    height: 100rpx;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
