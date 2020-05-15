<template>
	<view>
		<view class="">
      <u-cell-group>
        <u-field
          v-model="form.username"
          label="账号"
          algin="right"
          placeholder="请填写账号"
        >
        </u-field>
        
        <u-field
          v-model="form.password"
          label="面膜"
          placeholder="请填写密码"
        >
        </u-field>
      </u-cell-group>
    </view>
	</view>
</template>

<script>
const default_form = {
  usernmae: null,
  password: null
}
	export default {
		data() {
			return {
				form: Object.assign({}, default_form)
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
