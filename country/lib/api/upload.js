'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var oracledb = require('oracledb');
var dayjs = require('dayjs');

var _require = require('./mapORCL'),
    mapped = _require.mapped;

var _require2 = require('./uploadToServer'),
    uploadToServer = _require2.uploadToServer;

var _require3 = require('../config'),
    dbConn = _require3.dbConn;

var batchs = 1;
var upload = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, bindPara, sql, fetchNum) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new Promise(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                var conn, result, ret;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.prev = 0;

                                                // batchs = 1
                                                conn = void 0;
                                                _context.next = 4;
                                                return oracledb.getConnection(dbConn);

                                            case 4:
                                                conn = _context.sent;
                                                _context.next = 7;
                                                return conn.execute(sql, bindPara);

                                            case 7:
                                                result = _context.sent;
                                                _context.next = 10;
                                                return fetchRowsFromRS(conn, result.outBinds.ret, fetchNum, url);

                                            case 10:
                                                ret = _context.sent;

                                                resolve(ret);
                                                _context.next = 17;
                                                break;

                                            case 14:
                                                _context.prev = 14;
                                                _context.t0 = _context['catch'](0);

                                                reject(_context.t0);

                                            case 17:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined, [[0, 14]]);
                            }));

                            return function (_x5, _x6) {
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

    return function upload(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
    };
}();

var fetchRowsFromRS = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(connection, resultSet, numRows, url) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.abrupt('return', new Promise(function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
                                var rows, postData, ret, p;
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.prev = 0;
                                                _context3.next = 3;
                                                return resultSet.getRows(numRows);

                                            case 3:
                                                rows = _context3.sent;

                                                if (!(rows.length === 0)) {
                                                    _context3.next = 11;
                                                    break;
                                                }

                                                // console.log('no rows, or no more rows')
                                                console.log('Posted ( ' + url + ' ) dataSet successful from Database');
                                                _context3.next = 8;
                                                return doClose(connection, resultSet);

                                            case 8:
                                                resolve(2);
                                                _context3.next = 17;
                                                break;

                                            case 11:
                                                if (!(rows.length > 0)) {
                                                    _context3.next = 17;
                                                    break;
                                                }

                                                postData = mapped(url, rows);
                                                // console.log(postData)

                                                _context3.next = 15;
                                                return uploadToServer(postData, url);

                                            case 15:
                                                ret = _context3.sent;

                                                if (ret.success === 1) {
                                                    console.log('Fetch(&Post) ( ' + url + ' ) dataSet(#' + batchs + '}) successful from Database...');
                                                    batchs++;
                                                    p = fetchRowsFromRS(connection, resultSet, numRows, url);

                                                    resolve(p);
                                                } else {
                                                    console.log('Fail post, message: ' + JSON.stringify(ret));
                                                }

                                            case 17:
                                                _context3.next = 22;
                                                break;

                                            case 19:
                                                _context3.prev = 19;
                                                _context3.t0 = _context3['catch'](0);

                                                reject(_context3.t0);

                                            case 22:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, undefined, [[0, 19]]);
                            }));

                            return function (_x11, _x12) {
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

    return function fetchRowsFromRS(_x7, _x8, _x9, _x10) {
        return _ref3.apply(this, arguments);
    };
}();

// Note: connections should always be released when not needed
var doRelease = function doRelease(connection) {
    return new Promise(function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
            var promise;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            try {
                                promise = connection.close();

                                resolve(promise);
                            } catch (error) {
                                reject(error);
                            }

                        case 1:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function (_x13, _x14) {
            return _ref5.apply(this, arguments);
        };
    }());
};

var doClose = function doClose(connection, resultSet) {
    return new Promise(function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
            var promise;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return resultSet.close();

                        case 3:
                            promise = _context6.sent;
                            _context6.next = 6;
                            return doRelease(connection);

                        case 6:
                            resolve(promise);
                            _context6.next = 12;
                            break;

                        case 9:
                            _context6.prev = 9;
                            _context6.t0 = _context6['catch'](0);

                            reject(_context6.t0);

                        case 12:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined, [[0, 9]]);
        }));

        return function (_x15, _x16) {
            return _ref6.apply(this, arguments);
        };
    }());
};

module.exports = {
    upload: upload
};