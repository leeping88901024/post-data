const result = (ret, flag) => {
    if (ret === 2) {
        console.log(`上传至 ${flag} 的数据集上传成功。${new Date()}`)
    } else {
		console.log(ret)
	}
}

module.exports = {
    result
}