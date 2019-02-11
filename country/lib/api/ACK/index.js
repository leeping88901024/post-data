'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = require('axios');

var _require = require('../../config'),
    base = _require.base;

var _require2 = require('./getToken'),
    getToken2 = _require2.getToken2;

var BASEURL = base.BASEURL,
    BLOODSTATION_MARKED = base.BLOODSTATION_MARKED,
    NM = base.NM,
    PID = base.PID,
    UID = base.UID;


var instance = axios.create({
    baseURL: BASEURL,
    timeout: 1000 * 60 * 10,
    headers: { 'Content-Type': 'application/json' }
});

var getACK = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var ret, Token, res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return getToken2();

                    case 3:
                        ret = _context.sent;
                        Token = ret.data;
                        _context.next = 7;
                        return instance.post(BLOODSTATION_MARKED, { mc: NM }, { headers: { Token: Token, 'Pid': PID, 'Uid': UID } });

                    case 7:
                        res = _context.sent;
                        data = res.data;
                        return _context.abrupt('return', { data: data, Token: Token });

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 12]]);
    }));

    return function getACK() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    getACK: getACK,
    getToken2: getToken2
};