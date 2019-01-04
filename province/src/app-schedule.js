var {
	OrgId, 
    baseUrl,
    TBiUseBldOrgan,  //1
	TBiBldAllocation,  //2
	TBiBldRefund,  //3
	TBiBldReimburs,   //4
	TBiBldAllocationSummary,  //5 
	TBiBldIssueSummary,  //6
	TBiBldIssuing,  //7
	TBiOrgOrderBld,  //8
	TBiOrgOrderBldSummary,  //9 
	TBiBldIssuingDetail, //10
	TBiBlacklist,  //11
	TBiHospitalInfo, //12
	TBiHospIllmanUsebld, //13
	TBiHospTransReaction, //14
	TBiHospStock, //15
	TBiHospStockDetail,  //16
} = require('./config')
var { upload, getStatus } = require('./api')
var oracledb = require('oracledb')
var sql
var bindPara


function schedule() {
	getStatus(`${baseUrl}/Status`).then(data => {
	console.log(data)
	const { errMsg } = data
	if (!errMsg) {
		console.error(errMsg)
		return
	}
	// 7.血站血液发放单数据集 TBiBldIssuing
	bindPara = {
		ret:  { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
	}
	
	// ### 发血
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiBldIssuing';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.getTBiBldIssuing(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiBldIssuing',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiBldIssuing';
	  commit;
	end;`
	var ret7 = await upload(sql, OrgId, TBiBldIssuing, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000)
	console.log(`数据集（最新）: ${TBiBldIssuing} 上传完毕。Flag: ${ret7}`)
	// 变更sql和参数
	
	// 10.血液发放单明细数据集 TBiBldIssuingDetail
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiBldIssuingDetail';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.getTBiBldIssuingDetail(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiBldIssuingDetail',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiBldIssuingDetail';
	  commit;
	end;`
	var ret10 = await upload(sql, OrgId, TBiBldIssuingDetail, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	console.log(`数据集（最新）: ${TBiBldIssuingDetail} 上传完毕。Flag: ${ret10}`)

	// 6.血液发放汇总数据集 TBiBldIssueSummary
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiBldIssueSummary';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.getTBiBldIssueSummary(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiBldIssueSummary',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiBldIssueSummary';
	  commit;
	end;`
	var ret6 = await upload(sql, OrgId, TBiBldIssueSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	console.log(`数据集（最新）: ${TBiBldIssueSummary} 上传完毕。Flag: ${ret6}`)

	// ### 订血
	// 8.机构订血单据信息数据集 TBiOrgOrderBld
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiOrgOrderBld';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.getTBiOrgOrderBld(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiOrgOrderBld',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiOrgOrderBld';
	  commit;
	end;`
	upload(sql, OrgId, TBiOrgOrderBld, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	
	// ##########################先传8#############################
	// 9.机构订血单据汇总信息数据集 TBiOrgOrderBldSummary
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiOrgOrderBldSummary';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.getTBiOrgOrderBldSummary(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiOrgOrderBldSummary',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiOrgOrderBldSummary';
	  commit;
	end;`
	var ret9 = await upload(sql, OrgId, TBiOrgOrderBldSummary, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	console.log(`数据集（最新）: ${TBiOrgOrderBldSummary} 上传完毕。Flag: ${ret9}`)

	// 11.黑名单信息数据集 TBiBlacklist
	// 最早数据 1990/12/31
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiBlacklist';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.getTBiBlacklist(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiBlacklist',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiBlacklist';
	  commit;
	end;`
    var ret11 = await upload(sql, OrgId, TBiBlacklist, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	console.log(`数据集（最新）: ${TBiBlacklist} 上传完毕。Flag: ${ret11}`)

	// ## 医院
	// 13.医院患者用血信息数据集 TBiHospIllmanUsebld
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiHospIllmanUsebld';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.get_tbihospillmanusebld(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiHospIllmanUsebld',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiHospIllmanUsebld';
	  commit;
	end;`
    var ret13 = await upload(sql, OrgId, TBiHospIllmanUsebld, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	console.log(`数据集（最新）: ${TBiHospIllmanUsebld} 上传完毕。Flag: ${ret13}`)

	// 14.医院输血反应信息数据集 TBiHospTransReaction
	sql = `declare
	 last_post varchar2(100);
	 now_post varchar2(100);
	begin
	  -- 取上次记录的时间
	  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = 'TBiHospTransReaction';
	  select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') into now_post from dual;
	  :ret := f2webshangdong.gettbihosptransreaction(last_post, now_post);
	  -- 插入或者变更时间标记
	  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, 'TBiHospTransReaction',sysdate)
	  update cen_schedule2 t set t.sign_date = to_char(sysdate,'yyyy-MM-dd HH24:mi:ss'), t.post_date = sysdate where t.sign_type = 'TBiHospTransReaction';
	  commit;
	end;`
	var ret14 = await upload(sql, OrgId, TBiHospTransReaction, '20563ef7e39645a984fac3b799282ec5', '10', `${baseUrl}/uploaddataserv`, bindPara, {}, 1000);
	console.log(`数据集（最新）: ${TBiHospTransReaction} 上传完毕。Flag: ${ret14}`)
	console.log('最新数据上传完毕')
})
}

setInterval(schedule, 1000 * 60* 60);