var axios = require('axios')
var oracledb = require('oracledb')

const {
	CVTTBiUseBldOrgan,  //1
	CVTTBiBldAllocation,  //2
	CVTTBiBldReimburs,  //4
	CVTTBiBldRefund,  //3
	CVTTBiBldAllocationSummary, //5
	CVTTBiBldIssueSummary,  //6
	CVTTBiBldIssuing,  //7
	CVTTBiOrgOrderBld,  //8
	CVTTBiOrgOrderBldSummary,  //9
	CVTTBiBldIssuingDetail,  //10
	CVTTBiBlacklist,  //11
	CVTTBiHospitalInfo,  //12
	CVTTBiHospIllmanUsebld,  //13
	CVTTBiHospTransReaction,  //14
	CVTTBiHospStock,  //15
	CVTTBiHospStockDetail,  //16
} = require('./cvt')
const { dbConn } = require('../config')

const { PingHost } = require('./checkHost')

// 使用https在这里设置证书

const instance = axios.create({
	timeout: 1000 * 60 * 60,
	  
})


// get 请求
async function getStatus(url) {
	return new Promise(async (resolve, reject) => {
        try {
            const res = await instance.get(url)
			const { data } = res
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function postDataToServ (url, postData) {
	return new Promise(async (resolve, reject) => {
        try {
            const res = await instance.post(url,postData)
		const { data } = res
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

// 发送的数据集
// dataFlag 和 data 是一一对应的，data向外屏蔽，暴力 dataFlag
function postDataFormat(rows, orgId, UploadParam, uuid, transNum, batch) {
	var format
	switch (UploadParam) {
		// 1.用血机构数据集
		case 'TBiUseBldOrgan':
			format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiUseBldOrgan(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
		// 2.
		case 'TBiBldAllocation':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldAllocation(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
		// 4.
		case 'TBiBldReimburs':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldReimburs(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 3.
		case 'TBiBldRefund':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldRefund(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 5.
		case 'TBiBldAllocationSummary':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldAllocationSummary(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 6.
		case 'TBiBldIssueSummary':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldIssueSummary(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 7.
		case 'TBiBldIssuing':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldIssuing(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 8.
		case 'TBiOrgOrderBld':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiOrgOrderBld(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 9.
		case 'TBiOrgOrderBldSummary':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiOrgOrderBldSummary(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 10.
		case 'TBiBldIssuingDetail':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBldIssuingDetail(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 11.
		case 'TBiBlacklist':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiBlacklist(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 12.
		case 'TBiHospitalInfo':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiHospitalInfo(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 13.
		case 'TBiHospIllmanUsebld':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiHospIllmanUsebld(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 14.
		case 'TBiHospTransReaction':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiHospTransReaction(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 15.
		case 'TBiHospStock':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiHospStock(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
			// 16.
		case 'TBiHospStockDetail':
		    format = {
				uuid: uuid,
				orgId: orgId,
				transNum: transNum,
				dataFlag: UploadParam,
				datas: CVTTBiHospStockDetail(rows)
			}
			if(!batch) {
				return format;
			} else {
				return Object.assign(format, { batch: batch })
			}
			break;
		default:
			break;
	}
}
/**
 * @param sqlStr 获取数据sql字符串
 * @param OrgId 5位血站编码(即:上传数据机构编码)
 * @param UploadParam 上传数据标识，不同标识代表不同的业务数据
 * @param uuid 校验码，确保每次请求唯一
 * @param transNum 传输条数,(即:本次数据传输条数)
 * @param url post url
 * @param bindPara 数据库绑定参数 {}
 * @param batch 不是批量则为 {}
 * @param fetchNum 游标fetch数据的条数
 */
var batchs = 1
async function upload(sqlStr, OrgId, UploadParam, uuid, transNum, url, bindPara, batch, fetchNum) {
	return new Promise(async (resolve, reject) => {
        try {
			// batchs = 1
            var connection =  await oracledb.getConnection(dbConn)
			var result =  await connection.execute(sqlStr, bindPara)
			var ret = await fetchRowsFromRS(connection, result.outBinds.ret, fetchNum, OrgId, UploadParam, uuid, transNum, batch, url)
			// console.log(`xxxxx${ret}`)
			resolve(ret)
        } catch (error) {
            reject(error)
        }
    })
}
 async function fetchRowsFromRS(connection, resultSet, numRows, OrgId, UploadParam, uuid, transNum, batch, url) {
	 return new Promise(async (resolve, reject) => {
        try {
              // batchs ++
			  var rows = await resultSet.getRows(numRows)
			  if (rows.length === 0) {   // no rows, or no more rows
					// console.log(`Posted ${UploadParam} dataSet successful from Database`)
					doClose(connection, resultSet); // always close the ResultSet
					resolve(2) // 传送完后 resolve => 执行349行
				  } else if (rows.length > 0) {
					const postData = postDataFormat(rows, OrgId, UploadParam, uuid, transNum, batch)
					// console.log(postData)
					var data = await postDataToServ(url, postData) // 这里可以根据fetch的条数逐批量上传
					if (data) {
						const { errMsg } = data
						if (errMsg != null) {
							// console.log(`Fetch(&Post) ${UploadParam} dataSet(#${batchs}}) successful from Database...`)
							batchs ++
							var ret = await fetchRowsFromRS(connection, resultSet, numRows, OrgId, UploadParam, uuid, transNum, batch, url)
							// console.log(`逐个跳出递归${ret}`)
							resolve(ret)
						} else {
							console.log(errMsg)
						}
					}
				  }
        } catch (error) {
            reject(error)
        }
    })
}

// Note: connections should always be released when not needed
function doRelease(connection) {
  connection.close(
    function(err) {
      if (err) {
        console.log(err)
      }
    });
}

function doClose(connection, resultSet) {
  resultSet.close(
    function(err) {
      if (err) {
          console.log(err)
	  }
      doRelease(connection);
    });
}


module.exports = {
	postDataToServ,
    getStatus,
	upload,
	PingHost
}