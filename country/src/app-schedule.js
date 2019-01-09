var oracledb = require('oracledb')
const { upload } = require('./api')
const { base } = require('./config')
const { result } = require('./utils')
const { post_date } = require('./config')
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

 const {
     post_date_from,
     post_date_to
 } = post_date

const schedule = async () => {
    var sql
    var bindPara 
   // -b
   bindPara = {
        date_from: post_date_from,
        date_to: post_date_to ,
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }

    // 1. 检测试剂信息
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/businessinfo/reagent/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_reagent(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/businessinfo/reagent/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/businessinfo/reagent/update';
	  commit;
	end;`
    var ret1 = await upload(BLOODSTATION_REAGENT, bindPara, sql, 1000)
    result(ret1, BLOODSTATION_REAGENT)

    // 2. 血液制备记录
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/businessinfo/preparation/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_prep(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/businessinfo/preparation/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/businessinfo/preparation/update';
	  commit;
	end;`
    var ret2 = await upload(BLOODSTATION_PREP, bindPara, sql, 1000)
    result(ret2, BLOODSTATION_PREP)

    // 3. 血液供应记录   
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/businessinfo/publicuse/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_issue(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/businessinfo/publicuse/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/businessinfo/publicuse/update';
	  commit;
	end;`
    var ret3 = await upload(BLOODSTATION_ISSUE, bindPara, sql, 1000)
    result(ret3, BLOODSTATION_ISSUE)

    // 4. 血液调剂记录    ___________OK but + 调入_____________
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/businessinfo/adjust/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_adjust(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/businessinfo/adjust/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/businessinfo/adjust/update';
	  commit;
	end;`
    var ret4 = await upload(BLOODSTATION_ADJUST, bindPara, sql, 1000)
    result(ret4, BLOODSTATION_ADJUST)

    // 5. 血液报废记录
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/businessinfo/scrapped/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_scrapped(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/businessinfo/scrapped/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/businessinfo/scrapped/update';
	  commit;
	end;`
    var ret5 = await upload(BLOODSTATION_SCRAPPED, bindPara, sql, 1000)
    result(ret5, BLOODSTATION_SCRAPPED)

    // 7. 献血者信息接口
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/devotepeople/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_donor(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/devotepeople/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/devotepeople/update';
	  commit;
	end;`
    var ret7 = await upload(BLOODSTATION_DONOR, bindPara, sql, 1000)
    result(ret7, `7.${BLOODSTATION_DONOR}`)

    // 8. 特殊稀有血型献血者信息
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/devotepeople/unusual/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_unusual(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/devotepeople/unusual/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/devotepeople/unusual/update';
	  commit;
	end;`
    var ret8 = await upload(BLOODSTATION_UNUSUAL, bindPara, sql, 1000)
    result(ret8, BLOODSTATION_UNUSUAL)

    // 9. 无偿献血偿还记录 
    sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'api/bloodstation/management/payback/update';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := hhhhhhhh.bloodstation_payback(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'api/bloodstation/management/payback/update',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'api/bloodstation/management/payback/update';
	  commit;
	end;`
    var ret9 = await upload(BLOODSTATION_PAYBACK, bindPara, sql, 1000)
    result(ret9, BLOODSTATION_PAYBACK)

    // -s

    // 6. 库存记录  -- 覆盖
    bindPara = {
        ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }
    sql = `begin :ret := hhhhhhhh.bloodstation_stockrecord; end;`
    var ret5 = await upload(BLOODSTATION_STOCKRECORD, bindPara, sql, 1000)
    result(ret5, BLOODSTATION_STOCKRECORD)
}

//setInterval(schedule, 1000 * 60 * 10);
schedule()