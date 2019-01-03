const axios = require('axios')
const { getACK, getToken2 } = require('./ACK')
const { base } = require('../config')

const { BASEURL, UID, PID  } = base

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60* 10,
    headers: { 'Content-Type': 'application/json' }
}) 

const uploadToServer = async (postData, url) => {
	return new Promise(async (resolve, reject) => {
        try {
            const { data } = await getACK()
            if (data.success ===1) {
                const ret = await getToken2()
                const Token = ret.data
                const res = await instance.post(url, postData, { headers: { Token, 'Pid': PID, 'Uid': UID } })
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

module.exports = {
    uploadToServer,
}