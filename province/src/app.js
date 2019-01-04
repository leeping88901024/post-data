// 注使用同步的方式一个数据集传完传下一个数据集，执行该脚本后无需逐个执行app-b-*.js
var {
    OrgId, 
    baseUrl,
    TBiBldIssueSummary,  //6
    TBiBldIssuing,
    TBiBldIssuingDetail,
    TBiOrgOrderBld,
    TBiOrgOrderBldSummary,
    TBiBlacklist,
    TBiHospIllmanUsebld,
    TBiHospTransReaction,

} = require('./config')
var {
	post_date_from,
	post_date_to
} = require('./config-post-date')
var { upload, getStatus } = require('./api')
var oracledb = require('oracledb')

var app = async (baseUrl) => {
    var data = await getStatus(`${baseUrl}/Status`)
    console.log(data)
    const { errMsg } = data
    if (!errMsg) {
        console.error(errMsg)
        return
    }
    var sql
    var bindPara

    // -s
    bindPara = {
		ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
	}
	sql = `BEGIN :ret := f2webshangdong.getTBiUseBldOrgan; END;`
	var rets = await upload(sql, OrgId, TBiUseBldOrgan, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiUseBldOrgan} 上传完毕。Flag: ${rets}`)

	sql = `BEGIN :ret := f2webshangdong.getTBiBldAllocation; END;`
	rets = await upload(sql, OrgId, TBiBldAllocation, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiBldAllocation} 上传完毕。Flag: ${rets}`)
    
	sql = `BEGIN :ret := f2webshangdong.getTBiBldReimburs; END;`
	rets = await upload(sql, OrgId, TBiBldReimburs, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiBldReimburs} 上传完毕。Flag: ${rets}`)

	sql = `BEGIN :ret := f2webshangdong.getTBiBldAllocationSummary; END;`
	rets = await upload(sql, OrgId, TBiBldAllocationSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiBldReimburs} 上传完毕。Flag: ${rets}`)
    
	sql = `BEGIN :ret := f2webshangdong.getTBiHospitalInfo; END;`
    rets = await upload(sql, OrgId, TBiHospitalInfo, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiHospitalInfo} 上传完毕。Flag: ${rets}`)

	sql = `BEGIN :ret := f2webshangdong.getTBiHospStock; END;`
	rets = await upload(sql, OrgId, TBiHospStock, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiHospStock} 上传完毕。Flag: ${rets}`)
    
	sql = `BEGIN :ret := f2webshangdong.getTBiHospStockDetail; END;`
    rets = await upload(sql, OrgId, TBiHospStockDetail, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiHospStockDetail} 上传完毕。Flag: ${rets}`)

    // -b
    bindPara = {
        date_from: post_date_from,
        date_to: post_date_to,
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }
    sql = `BEGIN :ret := f2webshangdong.getTBiBldIssueSummary(:date_from, :date_to); END;`
    var ret0 = await upload(sql, OrgId, TBiBldIssueSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiBldIssueSummary} 上传完毕。Flag: ${ret0}`)
    // b-1
    sql = `BEGIN :ret := f2webshangdong.getTBiBldIssuing(:date_from, :date_to); END;`
    var ret1 = await upload(sql, OrgId, TBiBldIssuing, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
    console.log(`数据集: ${TBiBldIssuing} 上传完毕。Flag: ${ret1}`)
    // b-2
    sql = `BEGIN :ret := f2webshangdong.getTBiBldIssuingDetail(:date_from, :date_to); END;`
    var ret2 = await upload(sql, OrgId, TBiBldIssuingDetail, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiBldIssuingDetail} 上传完毕。Flag: ${ret2}`)
    // b-3
    sql = `BEGIN :ret := f2webshangdong.getTBiOrgOrderBld(:date_from, :date_to); END;`
    var ret3 = await upload(sql, OrgId, TBiOrgOrderBld, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiOrgOrderBld} 上传完毕。Flag: ${ret3}`)
    // b-4
    sql = `BEGIN :ret := f2webshangdong.getTBiOrgOrderBldSummary(:date_from, :date_to); END;`
    var ret4 = await upload(sql, OrgId, TBiOrgOrderBldSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiOrgOrderBldSummary} 上传完毕。Flag: ${ret4}`)
    // b-5
    sql = `BEGIN :ret := f2webshangdong.getTBiBlacklist(:date_from, :date_to); END;`
    var ret5 = await upload(sql, OrgId, TBiBlacklist, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiBlacklist} 上传完毕。Flag: ${ret5}`)
    // b-6
    sql = `BEGIN :ret := f2webshangdong.get_tbihospillmanusebld(:date_from, :date_to); END;`
    var ret6 = await upload(sql, OrgId, TBiHospIllmanUsebld, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiHospIllmanUsebld} 上传完毕。Flag: ${ret6}`)
    // b-7
    sql = `BEGIN :ret := f2webshangdong.gettbihosptransreaction(:date_from, :date_to); END;`
    var ret7 = await upload(sql, OrgId, TBiHospTransReaction, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
    console.log(`数据集: ${TBiHospTransReaction} 上传完毕。Flag: ${ret7}`)
    console.log(`时间为${post_date_from}~${post_date_to}的数据上传完毕，执行app-schedule启动定时上传最新数据。`)
}

app(baseUrl);