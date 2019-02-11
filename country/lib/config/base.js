'use strict';

/*
BASEURL = https://nbms.org.cn:9090
BASEURL_TEST = https://nbms.org.cn:8011


|-------------------------------------------------------------------------------------------------------------------
|               PID                  |               UID                  |         KEY         | BLOODSTATION NAME            
|------------------------------------|------------------------------------|---------------------|-------------------
|  66F1C718BB564D4C83EBE5F131B7CAE4  |  6D9A32E320B2452AA060CABA967E0E4B  |  partner&35010      |  福建省血液中心    
|------------------------------------|------------------------------------|---------------------|-------------------
|  1763D97BC64B4A968CA399AA1F34F06B  |  D66966214F56484AB53DD224E153F9CC  |  partner&37150      |  聊城市中心血站    
|------------------------------------|------------------------------------|---------------------|-------------------
|  D4818836BC6345DFB55AC6FE3EFDF113  |  59D4115425BA4035AC463D8DA0A88963  |  partner&35020      |  厦门市中心血站    
|------------------------------------|------------------------------------|---------------------|-------------------
|  8454F305947D4516B3C3774AA42AED67  |  0759839C7FA64E018565BE466A55E0BF  |  partner&hebsxueye  |  哈尔滨市血液中心  
|-------------------------------------------------------------------------------------------------------------------
*/

// production : https://nbms.org.cn:8011
// development: https://nbms.org.cn:9090
var BASEURL = 'https://nbms.org.cn:9090';

var PID = '1763D97BC64B4A968CA399AA1F34F06B';
var UID = 'D66966214F56484AB53DD224E153F9CC';
var KEY = 'partner&37150';
var NM = '聊城市中心血站';

var fetchNum = 1000;

// 
var TOKENURL = 'api/security/token'; // 获取访问令牌接口
var TOKENURL2 = 'api/security/unit/token'; // 获取访问令牌接口2
// 一、血站管理信息接口
var BLOODSTATION_MARKED = 'api/bloodstation_marked/create'; // 1.获取血站标记接口
var BLOODSTATION_ACK = 'api/bloodsattion/relation'; // 2.血站标记确认接口 => 可调用以下接口
var BLOODSTATION_INFO = 'api/bloodstation/update'; // 3.血站基本信息接口 => 以下要准备数据
var BLOODSTATION_SERVINFO = 'api/bloodstation/serviceinformation/update'; // 4.采供血服务总体信息接口
var BLOODSTATION_WKR = 'api/bloodstation/worker/update'; // 5.人员基本信息接口
var BLOODSTATION_SPRDSINFO = 'api/bloodstation/spreaddiseaseinfo/update'; // 6.输血传播疾病感染情况

// 我的任务
var BLOODSTATION_REAGENT = 'api/bloodstation/businessinfo/reagent/update'; // 1. 检测试剂信息
var BLOODSTATION_PREP = 'api/bloodstation/businessinfo/preparation/update'; // 2. 血液制备记录
var BLOODSTATION_ISSUE = 'api/bloodstation/businessinfo/publicuse/update'; // 3. 血液供应记录
var BLOODSTATION_ADJUST = 'api/bloodstation/businessinfo/adjust/update'; //  4. 血液调剂记录
var BLOODSTATION_SCRAPPED = 'api/bloodstation/businessinfo/scrapped/update'; //  5. 血液报废记录
var BLOODSTATION_STOCKRECORD = 'api/bloodstation/businessinfo/stockrecord/update'; // 6. 血液库存记录
var BLOODSTATION_DONOR = 'api/bloodstation/devotepeople/update'; //  7. 献血者信息接口
var BLOODSTATION_UNUSUAL = 'api/bloodstation/devotepeople/unusual/update'; // 8. 特殊稀有血型献血者信息
var BLOODSTATION_PAYBACK = 'api/bloodstation/management/payback/update'; // 9. 无偿献血偿还记录
// 二、采供血业务信息接口

module.exports = {
    BASEURL: BASEURL,
    PID: PID,
    UID: UID,
    KEY: KEY,
    NM: NM,
    TOKENURL: TOKENURL,
    TOKENURL2: TOKENURL2,
    fetchNum: fetchNum,
    BLOODSTATION_MARKED: BLOODSTATION_MARKED,
    BLOODSTATION_ACK: BLOODSTATION_ACK,
    BLOODSTATION_INFO: BLOODSTATION_INFO,
    BLOODSTATION_SERVINFO: BLOODSTATION_SERVINFO,
    BLOODSTATION_WKR: BLOODSTATION_WKR,
    BLOODSTATION_SPRDSINFO: BLOODSTATION_SPRDSINFO,
    BLOODSTATION_REAGENT: BLOODSTATION_REAGENT,
    BLOODSTATION_PREP: BLOODSTATION_PREP,
    BLOODSTATION_ISSUE: BLOODSTATION_ISSUE,
    BLOODSTATION_ADJUST: BLOODSTATION_ADJUST,
    BLOODSTATION_SCRAPPED: BLOODSTATION_SCRAPPED,
    BLOODSTATION_STOCKRECORD: BLOODSTATION_STOCKRECORD,
    BLOODSTATION_DONOR: BLOODSTATION_DONOR,
    BLOODSTATION_UNUSUAL: BLOODSTATION_UNUSUAL,
    BLOODSTATION_PAYBACK: BLOODSTATION_PAYBACK
};