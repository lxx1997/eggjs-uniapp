import qs from "qs";
import {getToken, setToken} from '@/utils/authToken'
const baseUrl = "http://192.168.0.114:7001/api/v1/"
const request = (url, method, data) => {
  const requestUrl = `${baseUrl}${url}`;
  var headers = {}
  // 如果是上传文件, 直接走uniapp原生请求,设置content-type
	if (method === 'GET') {
		headers = {
		  "Authorization": getToken(),
		  "X-Requested-With": "XMLHttpRequest",
		  "Accept": "application/json",
		  "Content-Type": "application/json; charset=UTF-8"
		}
	} else {
		headers = {
		  "Authorization": getToken(),
		  "X-Requested-With": "XMLHttpRequest",
		  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		data = qs.stringify(data)
	}
  // 封装一个promise请求,以便能够将正确信息和错误信息返回
  let promise = new Promise((resolve, reject) => {
    uni.request({
      url: requestUrl,
      method: method,
      header: headers,
      data: data,
      success: (res) => {
        if(res.data.code === 200) {
          resolve(res.data.data)
        } else {
			if(res.data.code === 401) {
				setToken('')
				uni.setStorageSync('login', false)
				uni.navigateTo({
					url: "/pages/login/user-login"
				})
				reject(res.data)
			} else {
				reject(res.data)
			}
        }
      },
      fail: (res) => {
        reject(res.data)
      }
    })
  })
  return promise
}
export default request