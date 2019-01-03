const result = (ret, flag) => {
    const { success } = ret
    if (success === 1) {
        console.log(`upload to ${flag} successful.`)
    } else {
		console.log(ret)
	}
}

module.exports = {
    result
}