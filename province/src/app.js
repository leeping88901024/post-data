var {
    OrgId, 
    baseUrl,
	TBiBldIssueSummary,  //6
} = require('./config')
var {
	post_date_from,
	post_date_to
} = require('./config-post-date')
var { upload, getStatus } = require('./api')
var oracledb = require('oracledb')

var app = (baseUrl) => {
    var data = getStatus(`${baseUrl}/Status`)
    const { errMsg } = data
    if (!errMsg) {
        console.error(errMsg)
        return
    }
    var sql
    var bindPara
    bindPara = {
        date_from: post_date_from,
        date_to: post_date_to,
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }
    sql = `BEGIN :ret := f2webshangdong.getTBiBldIssueSummary(:date_from, :date_to); END;`
    var ret = await upload(sql, OrgId, TBiBldIssueSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
}

app(baseUrl);