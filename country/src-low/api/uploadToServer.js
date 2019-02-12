const axios = require('axios')
const { getACK, getToken2 } = require('./ACK')
const { base } = require('../config')

const { BASEURL, UID, PID  } = base

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60* 60 * 3,
    headers: { 'Content-Type': 'application/json' }
}) 

const uploadToServer = (postData, url) => {
	return new Promise( (resolve, reject) => {
        try {
            getACK().then(({data}) => {
                if (data.success ===1) {
                    getToken2().then(ret => {
                        const Token = ret.data
                        instance.post(url, postData, { headers: { Token, 'Pid': PID, 'Uid': UID } }).then(res => {
                            let { data } = res
                            resolve(data)
                        })
                    })
                } else {
                    reject('ACK fail')
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    uploadToServer,
}