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

const app = () => {
    var sql
    var bindPara 
    
    // 6. 库存记录
    bindPara = {
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }
    sql = `begin :ret := f2webpostcountry.bloodstation_stockrecord; end;`
    upload(BLOODSTATION_STOCKRECORD, bindPara, sql, fetchNum).then(ret5 => {
        result(ret5, BLOODSTATION_STOCKRECORD)
    })
}

app()