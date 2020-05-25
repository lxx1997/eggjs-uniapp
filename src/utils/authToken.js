export function getToken () {
  return uni.getStorageSync('token')
}
export function setToken (token) {
  uni.setStorageSync('token', token)
}
