var oracledb = require('oracledb')
var dayjs = require('dayjs')

const { mapped } = require('./mapORCL')
const { uploadToServer } = require('./uploadToServer')
const { dbConn } = require('../config')

var batchs = 1
const upload = async (url, bindPara, sql, fetchNum) => {
    return new Promise(async (resolve, reject) => {
        try {
            // batchs = 1
            let conn
            conn = await oracledb.getConnection(dbConn)
            let result = await conn.execute(sql, bindPara)
            let ret = await fetchRowsFromRS(conn, result.outBinds.ret, fetchNum, url)
            resolve(ret)
        } catch (error) {
            reject(error)
        }
    })
}

const fetchRowsFromRS = async (connection, resultSet, numRows, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let rows = await resultSet.getRows(numRows)
            if (rows.length === 0) {
                console.log('no rows, or no more rows')
                console.log(`Posted ( ${url} ) dataSet successful from Database`)
                await doClose(connection, resultSet)
                resolve(2)
            } else if (rows.length > 0) {
                const postData = mapped(url, rows)
				// console.log(postData)
                var ret = await uploadToServer(postData, url)
                if (ret.success === 1) {
                    console.log(`Fetch(&Post) ( ${url} ) dataSet(#${batchs}}) successful from Database...`)
                    batchs ++
                    var p = fetchRowsFromRS(connection, resultSet, numRows, url)
                    resolve(p)
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}

// Note: connections should always be released when not needed
const doRelease = (connection) => {
    return new Promise(async (resolve, reject) => {
        try {
            let promise = connection.close()
            resolve(promise)
        } catch (error) {
            reject(error)
        }
    })
}
  
const doClose = (connection, resultSet) => {
    return new Promise(async (resolve, reject) => {
        try {
            let promise = await resultSet.close()
			await doRelease(connection)
            resolve(promise)
        } catch (error) {
            reject(error)
        }
    })
}
  

module.exports = {
    upload,
}