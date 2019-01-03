var oracledb = require('oracledb')
const { upload } = require('./api')
const { base } = require('./config')

/*
const BLOODSTATION_INFO = 'api/bloodstation/update'  // 3.血站基本信息接口 => 以下要准备数据
const BLOODSTATION_SERVINFO = 'api/bloodstation/serviceinformation/update'  // 4.采供血服务总体信息接口
const BLOODSTATION_WKR = 'api/bloodstation/worker/update'  // 5.人员基本信息接口
const BLOODSTATION_SPRDSINFO = 'api/bloodstation/spreaddiseaseinfo/update'  // 6.输血传播疾病感染情况
*/

const { 
    BLOODSTATION_REAGENT, // 1. 检测试剂信息
    BLOODSTATION_PREP, // 2. 血液制备记录
    BLOODSTATION_ISSUE, // 3. 血液供应记录
    BLOODSTATION_ADJUST, // 4. 血液调剂记录
    BLOODSTATION_SCRAPPED, // 5. 血液报废记录
    BLOODSTATION_STOCKRECORD, // 6. 血液库存记录
    BLOODSTATION_DONOR, // 7. 献血者信息接口
    BLOODSTATION_UNUSUAL, // 8. 特殊稀有血型献血者信息
    BLOODSTATION_PAYBACK, // 9. 无偿献血偿还记录
 } = base

var sql
var bindPara 

/*
bindPara = {
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_issue; end;`
upload(BLOODSTATION_REAGENT, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful 1. BLOODSTATION_REAGENT upload to server')
    }
})


bindPara = {
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_issue; end;`
upload(BLOODSTATION_PREP, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful 2. BLOODSTATION_PREP upload to server')
    } else {
		console.log(ret)
	}
})

// 3. 血液供应记录   ___________OK_____________
bindPara = {
	date_from:'2001/01/01',
	date_to:'2004/01/01',
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_issue(:date_from, :date_to); end;`
upload(BLOODSTATION_ISSUE, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 3. BLOODSTATION_ISSUE to server')
    } else {
		console.log(ret)
	}
})

// 4. 血液调剂记录    ___________OK but + 调入_____________
bindPara = {
	date_from:'2001/01/01',
	date_to:'2004/01/01',
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_adjust(:date_from, :date_to); end;`
upload(BLOODSTATION_ADJUST, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 4. BLOODSTATION_ADJUST to server')
    } else {
		console.log(ret)
	}
})


// 5. 血液报废记录    ___________OK_____________
bindPara = {
	date_from:'2018/01/10',
	date_to:'2018/01/15',
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_scrapped(:date_from, :date_to); end;`
upload(BLOODSTATION_SCRAPPED, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 5. BLOODSTATION_SCRAPPED to server')
    } else {
		console.log(ret)
	}
})

// 6. 库存记录    ___________OK_____________
bindPara = {
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_stockrecord; end;`
upload(BLOODSTATION_STOCKRECORD, bindPara, sql, 1000).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 6. BLOODSTATION_STOCKRECORD to server')
    } else {
		console.log(ret)
	}
})
*/

// 7. 献血者档案信息
bindPara = {
	date_from:'2018/01/01',
	date_to:'2018/01/10',
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_donor(:date_from, :date_to); end;`
upload(BLOODSTATION_DONOR, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 7. BLOODSTATION_DONOR to server')
    } else {
		console.log(ret)
	}
})
/*
bindPara = {
	date_from:'2018/01/10',
	date_to:'2018/01/15',
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_unusual(:date_from, :date_to); end;`
upload(BLOODSTATION_UNUSUAL, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 8. BLOODSTATION_UNUSUAL to server')
    } else {
		console.log(ret)
	}
})

bindPara = {
	date_from:'2018/01/10',
	date_to:'2018/01/15',
	ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
}
sql = `begin :ret := hhhhhhhh.bloodstation_payback(:date_from, :date_to); end;`
upload(BLOODSTATION_PAYBACK, bindPara, sql, 100).then(ret => {
    const { success } = ret
    if (success === 1) {
        console.log('successful upload 9. BLOODSTATION_PAYBACK to server')
    } else {
		console.log(ret)
	}
})
*/