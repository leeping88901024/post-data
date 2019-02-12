var ping = require('ping')

const PingHost = (host) => {
    return new Promise((resolve, reject) => {
        try {
            ping.promise.probe(host).then(res => {
                resolve(res)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    PingHost
}