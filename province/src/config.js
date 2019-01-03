// 
const baseUrl = 'http://11.1.3.241:8080/lw/api'
const dbConn = {
    user          : "F2WEBSHANDONGUP",
    password      : "7V1i436483BuS1BGe5T2Q4fY",
    connectString : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.0.199)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=nbsss)))"
}
// 血站编码
// 淄博 01605
// 聊城 01611
const OrgId = '01611'

const TBiUseBldOrgan = 'TBiUseBldOrgan'
const TBiBldAllocation = 'TBiBldAllocation'
const TBiBldRefund = 'TBiBldRefund'
const TBiBldReimburs = 'TBiBldReimburs'
const TBiBldAllocationSummary = 'TBiBldAllocationSummary'
const TBiBldIssueSummary = 'TBiBldIssueSummary'
const TBiBldIssuing = 'TBiBldIssuing'
const TBiOrgOrderBld = 'TBiOrgOrderBld'
const TBiOrgOrderBldSummary =  'TBiOrgOrderBldSummary'
const TBiBldIssuingDetail = 'TBiBldIssuingDetail'
const TBiBlacklist = 'TBiBlacklist'
const TBiHospitalInfo = 'TBiHospitalInfo'  
const TBiHospIllmanUsebld =  'TBiHospIllmanUsebld'
const TBiHospTransReaction = 'TBiHospTransReaction'
const TBiHospStock = 'TBiHospStock'
const TBiHospStockDetail = 'TBiHospStockDetail'


module.exports = {
	baseUrl,
	dbConn,
	OrgId,
	TBiUseBldOrgan,
	TBiBldAllocation,
	TBiBldRefund,
	TBiBldReimburs, 
	TBiBldAllocationSummary, 
	TBiBldIssueSummary,
	TBiBldIssuing,
	TBiOrgOrderBld, 
	TBiOrgOrderBldSummary, 
	TBiBldIssuingDetail, 
	TBiBlacklist,
	TBiHospitalInfo, 
	TBiHospIllmanUsebld, 
	TBiHospTransReaction, 
	TBiHospStock, 
	TBiHospStockDetail,
}