var oracledb = require('oracledb')
const { upload } = require('./api')
const { base } = require('./config')
const { result } = require('./utils')
const { post_date } = require('./config')
const { 
    fetchNum,
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

 const {
     post_date_from,
     post_date_to
 } = post_date

const app = async () => {
    var sql
    var bindPara 
   // -b
   bindPara = {
        date_from: post_date_from,
        date_to: post_date_to ,
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }

    // 1. 检测试剂信息
    sql = `begin :ret := f2webpostcountry.bloodstation_reagent(:date_from, :date_to); end;`
    var ret1 = await upload(BLOODSTATION_REAGENT, bindPara, sql, fetchNum)
    result(ret1, BLOODSTATION_REAGENT)

    // 2. 血液制备记录
    sql = `begin :ret := f2webpostcountry.bloodstation_prep(:date_from, :date_to); end;`
    var ret2 = await upload(BLOODSTATION_PREP, bindPara, sql, fetchNum)
    result(ret2, BLOODSTATION_PREP)

    // 3. 血液供应记录    
    sql = `begin :ret := f2webpostcountry.bloodstation_issue(:date_from, :date_to); end;`
    var ret3 = await upload(BLOODSTATION_ISSUE, bindPara, sql, fetchNum)
    result(ret3, BLOODSTATION_ISSUE)

    // 4. 血液调剂记录
    sql = `begin :ret := f2webpostcountry.bloodstation_adjust(:date_from, :date_to); end;`
    var ret4 = await upload(BLOODSTATION_ADJUST, bindPara, sql, fetchNum)
    result(ret4, BLOODSTATION_ADJUST)

    // 5. 血液报废记录
    sql = `begin :ret := f2webpostcountry.bloodstation_scrapped(:date_from, :date_to); end;`
    var ret5 = await upload(BLOODSTATION_SCRAPPED, bindPara, sql, fetchNum)
    result(ret5, BLOODSTATION_SCRAPPED)

    // 7. 献血者信息接口
    sql = `begin :ret := f2webpostcountry.bloodstation_donor(:date_from, :date_to); end;`
    var ret7 = await upload(BLOODSTATION_DONOR, bindPara, sql, fetchNum)
    result(ret7, `7.${BLOODSTATION_DONOR}`)

    // 8. 特殊稀有血型献血者信息
    sql = `begin :ret := f2webpostcountry.bloodstation_unusual(:date_from, :date_to); end;`
    var ret8 = await upload(BLOODSTATION_UNUSUAL, bindPara, sql, fetchNum)
    result(ret8, BLOODSTATION_UNUSUAL)

    // 9. 无偿献血偿还记录 
    sql = `begin :ret := f2webpostcountry.bloodstation_payback(:date_from, :date_to); end;`
    var ret9 = await upload(BLOODSTATION_PAYBACK, bindPara, sql, fetchNum)
    result(ret9, BLOODSTATION_PAYBACK)

    // -s

    // 6. 库存记录
    bindPara = {
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }
    sql = `begin :ret := f2webpostcountry.bloodstation_stockrecord; end;`
    var ret5 = await upload(BLOODSTATION_STOCKRECORD, bindPara, sql, fetchNum)
    result(ret5, BLOODSTATION_STOCKRECORD)
}

app()