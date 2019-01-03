var {
    OrgId, 
    baseUrl,
	TBiBldIssuingDetail, //10
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
    
	// ## 数据量太大需按时间段上传
	// ## 发血
	
	// 6.血液发放汇总数据集 TBiBldIssueSummary
	// 从03年开始
	bindPara = {
		date_from: post_date_from,
		date_to: post_date_to,
		ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
	}
	
	// 10.血液发放单明细数据集 TBiBldIssuingDetail
	sql = `BEGIN :ret := f2webshangdong.getTBiBldIssuingDetail(:date_from, :date_to); END;`
	upload(sql, OrgId, TBiBldIssuingDetail, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
})