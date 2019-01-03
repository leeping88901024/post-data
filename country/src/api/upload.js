var oracledb = require('oracledb')
var dayjs = require('dayjs')
const { createLogger, format, transports } = require('winston')
const { combine, printf, timestamp } = format

const { mapped } = require('./mapORCL')
const { uploadToServer } = require('./uploadToServer')
const { dbConn } = require('../config')
const myFormat = printf(info => {
    return `${dayjs(info.timestamp).format('YYYY-MM-DDTHH:mm:ss SSS [Z] A')} ${info.level}: ${info.message}`;
  })

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
})


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
                return
            } else if (rows.length > 0) {
                const postData = mapped(url, rows)
				// console.log(postData)
                var ret = await uploadToServer(postData, url)
            }
            fetchRowsFromRS(connection, resultSet, numRows, url)
            resolve(ret)  // 注意：虽然每次都resolve，但只有第一次 upload 能收到,其后的 resolve 由 fetchRowsFromRS 收到，为什么这么奇怪呢，因为oracle递归的fetch数据
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