'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require("babel-polyfill");
var oracledb = require('oracledb');

var _require = require('./api'),
    upload = _require.upload;

var _require2 = require('./config'),
    base = _require2.base;

var _require3 = require('./utils'),
    result = _require3.result;

var _require4 = require('./config'),
    post_date = _require4.post_date;

var fetchNum = base.fetchNum,
    BLOODSTATION_REAGENT = base.BLOODSTATION_REAGENT,
    BLOODSTATION_PREP = base.BLOODSTATION_PREP,
    BLOODSTATION_ISSUE = base.BLOODSTATION_ISSUE,
    BLOODSTATION_ADJUST = base.BLOODSTATION_ADJUST,
    BLOODSTATION_SCRAPPED = base.BLOODSTATION_SCRAPPED,
    BLOODSTATION_STOCKRECORD = base.BLOODSTATION_STOCKRECORD,
    BLOODSTATION_DONOR = base.BLOODSTATION_DONOR,
    BLOODSTATION_UNUSUAL = base.BLOODSTATION_UNUSUAL,
    BLOODSTATION_PAYBACK = base.BLOODSTATION_PAYBACK;
var time_interval = post_date.time_interval;


var schedule = function () {
				var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
								var sql, bindPara, ret1, ret2, ret3, ret4, ret5, ret7, ret8, ret9;
								return regeneratorRuntime.wrap(function _callee$(_context) {
												while (1) {
																switch (_context.prev = _context.next) {
																				case 0:
																								// -b
																								bindPara = {
																												ret: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }

																												// 1. 检测试剂信息
																								};sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/businessinfo/reagent/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_reagent(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/businessinfo/reagent/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/businessinfo/reagent/update\';\n\t  commit;\n\tend;';
																								_context.next = 4;
																								return upload(BLOODSTATION_REAGENT, bindPara, sql, fetchNum);

																				case 4:
																								ret1 = _context.sent;

																								result(ret1, BLOODSTATION_REAGENT);

																								// 2. 血液制备记录
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/businessinfo/preparation/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_prep(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/businessinfo/preparation/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/businessinfo/preparation/update\';\n\t  commit;\n\tend;';
																								_context.next = 9;
																								return upload(BLOODSTATION_PREP, bindPara, sql, fetchNum);

																				case 9:
																								ret2 = _context.sent;

																								result(ret2, BLOODSTATION_PREP);

																								// 3. 血液供应记录   
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/businessinfo/publicuse/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_issue(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/businessinfo/publicuse/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/businessinfo/publicuse/update\';\n\t  commit;\n\tend;';
																								_context.next = 14;
																								return upload(BLOODSTATION_ISSUE, bindPara, sql, fetchNum);

																				case 14:
																								ret3 = _context.sent;

																								result(ret3, BLOODSTATION_ISSUE);

																								// 4. 血液调剂记录
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/businessinfo/adjust/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_adjust(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/businessinfo/adjust/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/businessinfo/adjust/update\';\n\t  commit;\n\tend;';
																								_context.next = 19;
																								return upload(BLOODSTATION_ADJUST, bindPara, sql, fetchNum);

																				case 19:
																								ret4 = _context.sent;

																								result(ret4, BLOODSTATION_ADJUST);

																								// 5. 血液报废记录
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/businessinfo/scrapped/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_scrapped(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/businessinfo/scrapped/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/businessinfo/scrapped/update\';\n\t  commit;\n\tend;';
																								_context.next = 24;
																								return upload(BLOODSTATION_SCRAPPED, bindPara, sql, fetchNum);

																				case 24:
																								ret5 = _context.sent;

																								result(ret5, BLOODSTATION_SCRAPPED);

																								// 7. 献血者信息接口
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/devotepeople/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_donor(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/devotepeople/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/devotepeople/update\';\n\t  commit;\n\tend;';
																								_context.next = 29;
																								return upload(BLOODSTATION_DONOR, bindPara, sql, fetchNum);

																				case 29:
																								ret7 = _context.sent;

																								result(ret7, '7.' + BLOODSTATION_DONOR);

																								// 8. 特殊稀有血型献血者信息
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/devotepeople/unusual/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_unusual(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/devotepeople/unusual/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/devotepeople/unusual/update\';\n\t  commit;\n\tend;';
																								_context.next = 34;
																								return upload(BLOODSTATION_UNUSUAL, bindPara, sql, fetchNum);

																				case 34:
																								ret8 = _context.sent;

																								result(ret8, BLOODSTATION_UNUSUAL);

																								// 9. 无偿献血偿还记录 
																								sql = 'declare\n\t last_post varchar2(100);\n\t now_post varchar2(100);\n\tbegin\n\t  select t.sign_date into last_post from CEN_SCHEDULE2 t where t.sign_type = \'api/bloodstation/management/payback/update\';\n\t  select to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\') into now_post from dual;\n\t  :ret := f2webpostcountry.bloodstation_payback(last_post, now_post);\n\t  -- \u63D2\u5165\u6216\u8005\u53D8\u66F4\u65F6\u95F4\u6807\u8BB0\n\t  -- insert into cen_schedule2(sign_date, sign_type, post_date) values(now_post, \'api/bloodstation/management/payback/update\',sysdate)\n\t  update cen_schedule2 t set t.sign_date = to_char(sysdate,\'yyyy-MM-dd HH24:mi:ss\'), t.post_date = sysdate where t.sign_type = \'api/bloodstation/management/payback/update\';\n\t  commit;\n\tend;';
																								_context.next = 39;
																								return upload(BLOODSTATION_PAYBACK, bindPara, sql, fetchNum);

																				case 39:
																								ret9 = _context.sent;

																								result(ret9, BLOODSTATION_PAYBACK);

																								// -s

																								// 6. 库存记录  -- 覆盖
																								sql = 'begin :ret := f2webpostcountry.bloodstation_stockrecord; end;';
																								_context.next = 44;
																								return upload(BLOODSTATION_STOCKRECORD, bindPara, sql, fetchNum);

																				case 44:
																								ret5 = _context.sent;

																								result(ret5, BLOODSTATION_STOCKRECORD);

																				case 46:
																				case 'end':
																								return _context.stop();
																}
												}
								}, _callee, undefined);
				}));

				return function schedule() {
								return _ref.apply(this, arguments);
				};
}();

setInterval(schedule, time_interval);