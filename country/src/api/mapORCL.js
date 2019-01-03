
const mapped = (url, rows) => {
    switch (url) {
        case 'api/bloodstation/businessinfo/reagent/update':
            // 1
            const ret1 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Sbm: x[1],
                    Jc_xm: x[2],
                    Jc_jg: x[3],
                    Jc_sj: x[4],
                    Jc_sjmc: x[5],
                    Jc_sj_cjmc: x[6],
                    Jc_sj_ph: x[7],
                    Jc_sj_yxq: x[8]
                }
            })
            return ret1
        case 'api/bloodstation/businessinfo/preparation/update':
            // 2
            const ret2 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Xxbh: x[1],
                    Qscp_desc_code: x[2],
                    Qscp_mc: x[3],
                    Qscp_rl: x[4],
                    Zbcp_desc_code: x[5],
                    Zbcp_mc: x[6],
                    Zbcp_rl: x[7],
                    Zb_sj: x[8],
                    Zbcp_zt: x[9],
                    Sx_sj: x[10]
                }
            })
            return ret2
        case 'api/bloodstation/businessinfo/publicuse/update':
            // 3
            const ret3 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Xxbh: x[1],
                    Desc_code: x[2],
                    Cp_mc: x[3],
                    Tjlb: x[4],
                    Rl: x[5],
                    Gycz_sj: x[6],
                    Abo_type: x[7],
                    Rhd_type: x[8],
                    Gy_jgdm: x[9],
                    Gy_jgmc: x[10]
                }
            })
            return ret3
        case 'api/bloodstation/businessinfo/adjust/update':
            // 4
            const ret4 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Xxbh: x[1],
                    Desc_code: x[2],
                    Cp_mc: x[3],
                    Tjlb: x[4],
                    Rl: x[5],
                    Tjzt: x[6],
                    Tjfw: x[7],
                    Tjcz_sj: x[8],
                    Abo_type: x[9],
                    Rhd_type: x[10],
                    Tj_xz_jgdm: x[11],
                    Tj_xz_mc: x[12]
                }
            })
            return ret4
        case 'api/bloodstation/businessinfo/scrapped/update':
            // 5
            const ret5 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Xxbh: x[1],
                    Desc_code: x[2],
                    Cp_mc: x[3],
                    Rl: x[4],
                    Bf_lb: x[5],
                    Bfcz_sj: x[6],
                    Bf_jg: x[7],
                    Hsjc_jl: x[8],
                    Altjc_jg: x[9],
                    Hcvjc_jg: x[10],
                    Hbvjc_jg: x[11],
                    Hivjc_jg: x[12],
                    Mdjc_jg: x[13]
                }
            })
            return ret5
        case 'api/bloodstation/businessinfo/stockrecord/update':
            // 6
            const ret6 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Xxbh: x[1],
                    Desc_code: x[2],
                    Cp_mc: x[3],
                    Rl: x[4],
                    Abo_type: x[5],
                    Rhd_type: x[6]
                }
            })
            return ret6
        case 'api/bloodstation/devotepeople/update':
            // 7
            const ret7 = rows.map( x => {
                return {
                    Bm: x[0],
                    Xm: x[1],
                    Zjlx: x[2],
                    Sfz: x[3],
                    Csrq: x[4],
                    Sex: x[5],
                    Nationality: x[6],
                    Mz: x[7],
                    Zy: x[8],
                    Xuel: x[9],
                    Mobile: x[10],
                    Au_address: x[11],
                    Abo_type: x[12],
                    Rhd_type: x[13],
                    Pb_zt: x[14],
                    Pb_reason: x[15],
                    Hiv_yang: x[16],
                    Hiv_qrrq: x[17],
                    Pb_jsrq: x[18],
                    Is_fixed: x[29]
                }
            })
            return ret7
        case 'api/bloodstation/devotepeople/unusual/update':
            // 8
            const ret8 = rows.map( x => {
                return {
                    Bm: x[0],
                    Xm: x[1],
                    Zjlx: x[2],
                    Sfz: x[3],
                    Xx_xt: x[4],
                    Xx_bx: x[5]
                }
            })
            return ret8
        case 'api/bloodstation/management/payback/update':
            // 9
            const ret9 = rows.map( x => {
                return {
                    Customize_KID: x[0],
                    Jgdm: x[1],
                    Xm: x[2],
                    Sfz: x[3],
                    Back_Amount: x[4],
                    Back_Money: x[5],
                    Back_Rq: x[6],
                    Hospital: x[7],
                    In_Amount: x[8],
                    Xd_Amount: x[9],
                    Xxz_Gx: x[10],
                    Xxz_Bm: x[11],
                    Xxz_Xm: x[12],
                    Xxz_Sfz: x[13],
                }
            })
            return ret9
        default:
            break;
    }
}


module.exports = {
    mapped,
}