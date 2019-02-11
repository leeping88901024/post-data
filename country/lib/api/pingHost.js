'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ping = require('ping');

var PingHost = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(host) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new Promise(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                var res;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.prev = 0;
                                                _context.next = 3;
                                                return ping.promise.probe(host);

                                            case 3:
                                                res = _context.sent;

                                                resolve(res);
                                                _context.next = 10;
                                                break;

                                            case 7:
                                                _context.prev = 7;
                                                _context.t0 = _context['catch'](0);

                                                reject(_context.t0);

                                            case 10:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined, [[0, 7]]);
                            }));

                            return function (_x2, _x3) {
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

    return function PingHost(_x) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    PingHost: PingHost
};