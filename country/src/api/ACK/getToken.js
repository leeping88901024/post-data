const axios = require('axios')
var md5 = require('blueimp-md5')
var dayjs = require('dayjs')
const { base } = require('../../config')

const { BASEURL, TOKENURL, PID, KEY, UID, TOKENURL2 } = base

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60* 10,
    headers: { 'Content-Type': 'application/json' }
}) 

const getToken = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            var tms = dayjs(new Date()).format('YYYYMMDDHHmmss')
            var sign = md5((PID + tms).toLowerCase(), KEY).toLowerCase()
            const res = await instance.post(TOKENURL, {
                partner_id: PID,
                tms,
                sign
            })
            const { data } = res
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

const getToken2 = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            var tms = dayjs(new Date()).format('YYYYMMDDHHmmss')
            var sign = md5((PID + UID + tms).toLowerCase(), KEY).toLowerCase()
            const res = await instance.post(TOKENURL2, {
                partner_id: PID,
                uid: UID,
                tms,
                sign
            })
            const { data } = res
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getToken,
    getToken2
}
