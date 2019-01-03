var oracledb = require('oracledb')
var dayjs = require('dayjs')

const { mapped } = require('./mapORCL')
const { uploadToServer } = require('./uploadToServer')
const { dbConn } = require('../config')

const upload = async (url, bindPara, sql, fetchNum) => {
    return new Promise(async (resolve, reject) => {
        try {
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
                await doClose(connection, resultSet)
                resolve(2)
            } else if (rows.length > 0) {
                const postData = mapped(url, rows)
				// console.log(postData)
                var ret = await uploadToServer(postData, url)
                var p = fetchRowsFromRS(connection, resultSet, numRows, url)
                resolve(p)
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