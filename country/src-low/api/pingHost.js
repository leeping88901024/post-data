var ping = require('ping')

const PingHost = async (host) => {
    return new Promise(async (resolve, reject) => {
        try {
            var res = await ping.promise.probe(host)
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    PingHost
}