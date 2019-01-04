// 注：一个数据集连接一次数据库，fetch完后释放连接,如果内存不够，则需限制cursor大小 => 按时间段上传
const post_date_from = '1970/01/01' // select 数据的的起止时间
const post_date_to = '2019/01/01'  
const fetchNum = 1000  // 一次fetch cursor(select)的数据条数
module.exports = {
    post_date_from,
    post_date_to,
    fetchNum
}