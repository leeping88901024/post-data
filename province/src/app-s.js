var {
    OrgId, 
    baseUrl,
    TBiUseBldOrgan,  //1
	TBiBldAllocation,  //2
	TBiBldReimburs,   //4
	TBiBldAllocationSummary,  //5 
	TBiHospitalInfo, //12
	TBiHospStock, //15
	TBiHospStockDetail,  //16
} = require('./config')
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
	
	// ## 小数据
	// 1.用血机构数据集 TBiUseBldOrgan
	bindPara = {
		ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
	}
	sql = `BEGIN :ret := f2webshangdong.getTBiUseBldOrgan; END;`
	upload(sql, OrgId, TBiUseBldOrgan, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	// upload(sql, OrgId, 'TBiUseBldOrgan', '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataservbat`, { OrgId }, '665'); //

	// 2.血液调拨信息数据集 TBiBldAllocation
	
	sql = `BEGIN :ret := f2webshangdong.getTBiBldAllocation; END;`
	upload(sql, OrgId, TBiBldAllocation, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	
	// 3.用血退费信息(互助金)数据集 TBiBldRefund
	
	// 4.用血偿还信息数据集 TBiBldReimburs
	
	sql = `BEGIN :ret := f2webshangdong.getTBiBldReimburs; END;`
	upload(sql, OrgId, TBiBldReimburs, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);

	// 5.血液调拨汇总数据集 TBiBldAllocationSummary
	
	sql = `BEGIN :ret := f2webshangdong.getTBiBldAllocationSummary; END;`
	upload(sql, OrgId, TBiBldAllocationSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	
	// 12.医院基本信息数据集 TBiHospitalInfo
	sql = `BEGIN :ret := f2webshangdong.getTBiHospitalInfo; END;`
	upload(sql, OrgId, TBiHospitalInfo, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);

	// 15.医院库存汇总数据集 TBiHospStock
	sql = `BEGIN :ret := f2webshangdong.getTBiHospStock; END;`
	upload(sql, OrgId, TBiHospStock, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	
	// 16.医院库存明细信息数据集 TBiHospStockDetail
	sql = `BEGIN :ret := f2webshangdong.getTBiHospStockDetail; END;`
	upload(sql, OrgId, TBiHospStockDetail, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
})