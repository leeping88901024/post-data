const axios = require('axios')
const { base } = require('../../config')
const { getToken2 } = require('./getToken')

const { BASEURL, BLOODSTATION_MARKED, NM, PID, UID } = base

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60* 10,
    headers: { 'Content-Type': 'application/json' }
})

const getACK = async () => {
    try {
        const ret = await getToken2()
        const Token = ret.data
        const res = await instance.post(BLOODSTATION_MARKED, { mc: NM }, { headers: { Token, 'Pid': PID, 'Uid': UID } })
        const { data } = res
        return { data, Token }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getACK,
    getToken2
}