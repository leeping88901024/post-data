var {
    OrgId, 
    baseUrl,
	TBiBlacklist,  //11
} = require('./config')
var {
	post_date_from,
	post_date_to
} = require('./config-post-date')
var { upload, getStatus } = require('./api')
var oracledb = require('oracledb')

// 查看服务是否正常的探针。双方相互提供服务，供双方判断服务状态。
getStatus(`${baseUrl}/Status`).then(data => {
	console.log(data)
	const { errMsg } = data
	if (!errMsg) {
		console.error(errMsg)
		return
	}
	// async post data here ...
	var sql
    var bindPara

	// 11.黑名单信息数据集 TBiBlacklist
	bindPara = {
		date_from: post_date_from,
		date_to: post_date_to,
		ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
	}
	sql = `BEGIN :ret := f2webshangdong.getTBiBlacklist(:date_from, :date_to); END;`
	upload(sql, OrgId, TBiBlacklist, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
})