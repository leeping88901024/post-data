var oracledb = require('oracledb')
var dayjs = require('dayjs')

const { mapped } = require('./mapORCL')
const { uploadToServer } = require('./uploadToServer')
const { dbConn } = require('../config')

var batchs = 1
const upload = (url, bindPara, sql, fetchNum) => {
    return new Promise((resolve, reject) => {
        try {
            oracledb.getConnection(dbConn).then(conn => {
                conn.execute(sql, bindPara).then(result => {
                    fetchRowsFromRS(conn, result.outBinds.ret, fetchNum, url).then(ret => {
                        resolve(ret)
                    })
                })
            })
        } catch (error) {
            reject(error)
        }
    })
}

const fetchRowsFromRS = (connection, resultSet, numRows, url) => {
    return new Promise((resolve, reject) => {
        try {
            resultSet.getRows(numRows).then(rows => {
                if (rows.length === 0) {
                    // console.log('no rows, or no more rows')
                    console.log(`Posted ( ${url} ) dataSet successful from Database`)
                    doClose(connection, resultSet).then(() => {
                        resolve(2)
                    })
                } else if (rows.length > 0) {
                    const postData = mapped(url, rows)
                    // console.log(postData)
                    uploadToServer(postData, url).then(ret => {
                        if (ret.success === 1) {
                            console.log(`Fetch(&Post) ( ${url} ) dataSet(#${batchs}}) successful from Database...`)
                            batchs ++
                            var p = fetchRowsFromRS(connection, resultSet, numRows, url)
                            resolve(p)
                        } else {
                            console.log(`Fail post, message: ${JSON.stringify(ret)}`)
                        }
                    })
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

// Note: connections should always be released when not needed
const doRelease = (connection) => {
    return new Promise((resolve, reject) => {
        try {
            const promise = connection.close()
            resolve(promise)
        } catch (error) {
            reject(error)
        }
    })
}
  
const doClose = (connection, resultSet) => {
    return new Promise((resolve, reject) => {
        try {
            resultSet.close().then(promise => {
                doRelease(connection).then(() => {
                    resolve(promise)
                })
            })
        } catch (error) {
            reject(error)
        }
    })
}
  

module.exports = {
    upload,
}