export function getToken() {
  // uni.getStorage({
  //   key: 'token',
  //   success: function(res:any) {
  //     console.log(res.data)
  //     return res.data
  //   }
  // })
  return uni.getStorageSync('token')
}
export function setToken(toke){
  uni.setStorageSync('token', token)
}