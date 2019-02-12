const { test } = require('./data')
const axios = require('axios')
const { getACK, getToken2 } = require('./api/ACK')
const { base } = require('./config')
const { mapped } = require('./api/mapORCL')

const { BASEURL, UID, PID  } = base

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60 * 60 * 24, // 24h timeout
    headers: { 'Content-Type': 'application/json' }
})  

const uploadToServer = async (postData, url) => {
	return new Promise(async (resolve, reject) => {
        try {
            const { data } = await getACK()
            if (data.success ===1) {
                const ret = await getToken2()
                const Token = ret.data
                console.log(Token)
                const res = await instance.post(url, postData, { headers: { Token, 'Pid': PID, 'Uid': UID } })
                console.log(res)
                let { data } = res
                resolve(data)
            } else {
                reject('ACK fail')
            }
        } catch (error) {
            reject(error)
        }
    })
}
const postData = mapped('api/bloodstation/devotepeople/update', test.arr7)
uploadToServer(postData, 'api/bloodstation/devotepeople/update')