export function getToken():String {
  // uni.getStorage({
  //   key: 'token',
  //   success: function(res:any) {
  //     console.log(res.data)
  //     return res.data
  //   }
  // })
  return uni.getStorageSync('token')
}
export function setToken(token: String):any {
  uni.setStorageSync('token', token)
}