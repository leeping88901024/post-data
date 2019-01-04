const result = (ret, flag) => {
    if (ret === 1) {
        console.log(`upload to ${flag} successful.`)
    } else {
		console.log(ret)
	}
}

module.exports = {
    result
}