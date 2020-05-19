export default {
	// 设置缓存
	setStorage(name, data) {
		try {
			uni.setStorageSync(name, data);
		} catch(err) {
			console.error(err);
		}
	},
	// 获取缓存
	getStorage(name) {
		let data
		try {
			data = uni.getStorageSync(name);
		} catch(err) {
			console.error(err);
		}
		return data
	},
	// 删除指定缓存
	deleteStorage(name) {
		try {
			uni.removeStorageSync(name);
		} catch(err) {
			console.error(err);
		}
	},
	checkStorage(name) {
		let value
		try {
			let res = uni.getStorageInfoSync();
			value = res.keys.includes(name);
		} catch(err) {
			console.error(err);
		}
		return value;
	},
	clearStorage(name) {
		try {
			uni.clearStorageSync()
		} catch (err) {
			console.error(err)
		}
	}
}