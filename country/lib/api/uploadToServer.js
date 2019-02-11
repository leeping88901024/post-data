'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = require('axios');

var _require = require('./ACK'),
    getACK = _require.getACK,
    getToken2 = _require.getToken2;

var _require2 = require('../config'),
    base = _require2.base;

var BASEURL = base.BASEURL,
    UID = base.UID,
    PID = base.PID;


var instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60 * 60 * 3,
    headers: { 'Content-Type': 'application/json' }
});

var uploadToServer = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(postData, url) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new Promise(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                var _ref3, data, ret, Token, res, _data;

                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.prev = 0;
                                                _context.next = 3;
                                                return getACK();

                                            case 3:
                                                _ref3 = _context.sent;
                                                data = _ref3.data;

                                                if (!(data.success === 1)) {
                                                    _context.next = 17;
                                                    break;
                                                }

                                                _context.next = 8;
                                                return getToken2();

                                            case 8:
                                                ret = _context.sent;
                                                Token = ret.data;
                                                _context.next = 12;
                                                return instance.post(url, postData, { headers: { Token: Token, 'Pid': PID, 'Uid': UID } });

                                            case 12:
                                                res = _context.sent;
                                                _data = res.data;

                                                resolve(_data);
                                                _context.next = 18;
                                                break;

                                            case 17:
                                                reject('ACK fail');

                                            case 18:
                                                _context.next = 23;
                                                break;

                                            case 20:
                                                _context.prev = 20;
                                                _context.t0 = _context['catch'](0);

                                                reject(_context.t0);

                                            case 23:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined, [[0, 20]]);
                            }));

                            return function (_x3, _x4) {
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

    return function uploadToServer(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    uploadToServer: uploadToServer
};