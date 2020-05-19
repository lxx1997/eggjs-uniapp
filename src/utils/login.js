export default function isLogin() {
	return uni.getStorageSync("login");
}