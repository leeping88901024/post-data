'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = require('axios');
var md5 = require('blueimp-md5');
var dayjs = require('dayjs');

var _require = require('../../config'),
    base = _require.base;

var BASEURL = base.BASEURL,
    TOKENURL = base.TOKENURL,
    PID = base.PID,
    KEY = base.KEY,
    UID = base.UID,
    TOKENURL2 = base.TOKENURL2;


var instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60 * 60 * 24, // 24h timeout
    headers: { 'Content-Type': 'application/json' }
});

var getToken = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new Promise(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                var tms, sign, res, data;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.prev = 0;
                                                tms = dayjs(new Date()).format('YYYYMMDDHHmmss');
                                                sign = md5((PID + tms).toLowerCase(), KEY).toLowerCase();
                                                _context.next = 5;
                                                return instance.post(TOKENURL, {
                                                    partner_id: PID,
                                                    tms: tms,
                                                    sign: sign
                                                });

                                            case 5:
                                                res = _context.sent;
                                                data = res.data;

                                                resolve(data);
                                                _context.next = 13;
                                                break;

                                            case 10:
                                                _context.prev = 10;
                                                _context.t0 = _context['catch'](0);

                                                reject(_context.t0);

                                            case 13:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined, [[0, 10]]);
                            }));

                            return function (_x, _x2) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getToken() {
        return _ref.apply(this, arguments);
    };
}();

var getToken2 = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.abrupt('return', new Promise(function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
                                var tms, sign, res, data;
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.prev = 0;
                                                tms = dayjs(new Date()).format('YYYYMMDDHHmmss');
                                                sign = md5((PID + UID + tms).toLowerCase(), KEY).toLowerCase();
                                                _context3.next = 5;
                                                return instance.post(TOKENURL2, {
                                                    partner_id: PID,
                                                    uid: UID,
                                                    tms: tms,
                                                    sign: sign
                                                });

                                            case 5:
                                                res = _context3.sent;
                                                data = res.data;

                                                resolve(data);
                                                _context3.next = 13;
                                                break;

                                            case 10:
                                                _context3.prev = 10;
                                                _context3.t0 = _context3['catch'](0);

                                                reject(_context3.t0);

                                            case 13:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, undefined, [[0, 10]]);
                            }));

                            return function (_x3, _x4) {
                                return _ref4.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function getToken2() {
        return _ref3.apply(this, arguments);
    };
}();

module.exports = {
    getToken: getToken,
    getToken2: getToken2
};