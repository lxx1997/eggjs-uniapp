<template>
<view class="novel-update">
  <u-cell-group>
    <u-field
      v-model="form.novelName"
      label="书名"
      placeholder="请填写书名"
    />
    <!-- <u-field
      v-model="form.tag"
      label="分类"
      :disabled="true"
      @click="handleShowSelect"
      placeholder="请选择分类"
    /> -->
    <view class="novel-update-conent">
      <text class="novel-update-conent-title">分类</text>
      <picker class="novel-update-conent-picker" mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="index" :range="list">
        <view class="uni-input">{{list[0][index[0]]}}, {{list[1][index[1]]}}</view>
      </picker>
    </view>
    <view class="novel-update-conent novel-update-conent1">
      <text class="novel-update-conent-title">简介</text>
      <div class="novel-update-conent-textarea">
      <editor class="novel-update-conent-textarea" max-length="30000" id="editor" placeholder="填写文章内容" @ready="onEditorReady" @input="onEditorInput"></editor>
      </div>
    </view>
  </u-cell-group>
  <view class="novel-update-btn">
    <u-button :custom-style="customStyle" size="default">提交</u-button>
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
        tag: null,
        content: null
      },
      editorCtx: null,
      customStyle: {
        width: '400rpx',
        height: '80rpx',
        borderRadius: '100rpx',
        border: '1px solid #000',
        backgroundColor: '#F5DEB3'
      },
      index: [0, 0],
      list: []
    }
  },
  created () {
    this.list = [['男生', '女生'], [...this.$const.novelTagsBoys]]
    console.log(this.list)
  },
  methods: {
    onEditorReady () {
      uni.createSelectorQuery().select('#editor').context((res) => {
        this.editorCtx = res.context
        this.editorCtx.setContents(this.initText)
      }).exec()
    },
    onEditorInput (e) {
      this.form.content = e.detail.html
    },
    handleShowSelect () {
      this.sheetShow = true
    },
    handleSelectTag (index) {
      this.form.tag = this.list[index].text
    },
    // bindPickerChange (e) {
    //   console.log(e)
    //   this.index = e.detail.value
    // }
    bindMultiPickerColumnChange (e) {
      this.index[e.detail.column] = e.detail.value
      switch (e.detail.value) {
        case 0:
          this.list[1] = [...this.$const.novelTagsBoys]
          this.index[1] = 0
          break
        case 1:
          this.list[1] = [...this.$const.novelTagsGirls]
          this.index[1] = 0
          break
      }
      this.$forceUpdate()
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
