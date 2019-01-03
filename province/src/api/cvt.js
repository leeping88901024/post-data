// 1.数据转换
function CVTTBiUseBldOrgan(rows) {
    const ret = rows.map(x => {
        return {
            UseBldOrgId: x[0],
            OrgId: x[1],
            UseBldOrgCode: x[2],
            UseBldOrgName: x[3],
            UseBldOrgType: x[4],
            HospitalGradeId: x[5],
            IsNetworking: x[6],
            Spell: x[7],
            Sort: x[8],
            Code: x[9],
            IsUsed: x[11],
            OperType: x[12],
            UploadDataId: x[13],
        }
    })
	return ret
}

// 2.血液调拨信息数据集
function CVTTBiBldAllocation(rows) {
    const ret = rows.map(x => {
        return {
            AllocationId: x[0],
            IssueBld: x[1],
            ReceiveBld: x[2],
            AllocationType: x[3],
            ApprovalBill: x[4],
            AllocationDate: x[5],
            OrderModel: x[6],
            OperType: x[7],
            UploadDataId: x[8],
        }
    })
	return ret
}

// 3.用血退费信息数据集
function CVTTBiBldRefund(rows) {
    const ret = rows.map(x => {
        return {
            RefundId: x[0],
            DonorOrgId: x[1],
            DonorArchiveId: x[2],
            DonorName: x[3],
            RelationType: x[4],
            UseBldOrgId: x[5],
            UseBldName: x[6],
            UseBldIdentityType: x[7],
            UseBldIdentityCode: x[8],
			UseBldDate: x[9],
            UseBldBill: x[10],
            RefundReason: x[11],
			RefundMoney: x[12],
            RefundDate: x[13],
            InfoSource: x[14],
			RefundOrgType: x[15],
            RefundOrgId: x[16],
            OperType: x[17],
			UploadDataId: x[18],
        }
    })
	return ret
}

// 4.用血偿还信息数据集 
function CVTTBiBldReimburs(rows) {
    const ret = rows.map(x => {
        return {
            ReimbursId: x[0],
            DonorOrgId: x[1],
            DonorArchiveId: x[2],
            DonorName: x[3],
            RelationType: x[4],
            UseBldOrgId: x[5],
            UseBldName: x[6],
            UseBldIdentityType: x[7],
            UseBldIdentityCode: x[8],
			UseBldDate: x[9],
            ReimbursBldVolume: x[10],
            ReimbursMoney: x[11],
			ReimbursDate: x[12],
            ReimbursWholeVol: x[13],
            ReimbursApheresisVol: x[14],
			UseBldBill: x[15],
            UseBldOrgName: x[16],
            InfoSource: x[17],
			ReimbursOrgType: x[18],
			ReimbursOrgId: x[19],
            OperType: x[20],
			UploadDataId: x[21],
        }
    })
	return ret
}

// 5.血液调拨汇总数据集
function CVTTBiBldAllocationSummary(rows) {
    const ret = rows.map(x => {
        return {
            IssueBld: x[0],
            ReceiveBld: x[1],
            AllocationId: x[2],
            ProdClassId: x[3],
            Abo: x[4],
            Rhd: x[5],
            SpecVolume: x[6],
			Count: x[7],
            OperType: x[8],
            UploadDataId: x[9],
        }
    })
	return ret
}

// 6.血液发放汇总数据集
function CVTTBiBldIssueSummary(rows) {
    const ret = rows.map(x => {
        return {
            OrgId: x[0],
            IssueBldBill: x[1],
            ProdClassId: x[2],
            Abo: x[3],
            Rhd: x[4],
            SpecVolume: x[5],
            Count: x[6],
            OperType: x[7],
            UploadDataId: x[8],
        }
    })
	return ret
}

// 7.血站血液发放单
function CVTTBiBldIssuing(rows) {
    const ret = rows.map(x => {
        return {
            OrgId: x[0],
            IssueBldBill: x[1],
            UseBldOrg: x[2],
            IssueBldReason: x[3],
            IssueType: x[4],
            IssueBldDate: x[5],
            OperType: x[6],
            UploadDataId: x[7],
        }
    })
	return ret
}

// 8.机构订血单据信息数据集
function CVTTBiOrgOrderBld(rows) {
    const ret = rows.map(x => {
        return {
            OrgId: x[0],
            OrderBldBill: x[1],
            OrderBldOrg: x[2],
            OrderType: x[3],
            IssueBldDate: x[4],
            OrderBldDate: x[5],
            OperType: x[6],
            UploadDataId: x[7],
        }
    })
	return ret
}

// 9.机构订血单据汇总信息数据集
function CVTTBiOrgOrderBldSummary(rows) {
    const ret = rows.map(x => {
        return {
            OrgId: x[0],
            OrderBldBill: x[1],
            ProdClassId: x[2],
            Abo: x[3],
            Rhd: x[4],
            SpecVolume: x[5],
            OrderBldOrg: x[6],
            OperType: x[7],
			UploadDataId: x[8],
        }
    })
	return ret
}

// 10.血站血液发放单明细
function CVTTBiBldIssuingDetail(rows) {
    const ret = rows.map(x => {
        return {
            OrgId: x[0],
            IssueBldBill: x[1],
            DonId: x[2],
            ProductId: x[3],
            ProdClassId: x[4],
            Abo: x[5],
            Rhd: x[6],
            BloodAmount: x[7],
			CollectDate: x[8],
			ManufactureDate: x[9],
            ExpireDate: x[10],
            BloodMoney: x[11],
            IssueBldReason: x[12],
            IsApheresis: x[13],
            OrderBldBill: x[14],
            OperType: x[15],
            UploadDataId: x[16],
        }
    })
	return ret
}

// 11.黑名单信息数据集
function CVTTBiBlacklist(rows) {
    const ret = rows.map(x => {
        return {
            BlacklistId: x[0],
            OrgId: x[1],
            IdentityTypeId: x[2],
            IdentityCode: x[3],
            Name: x[4],
            Birthday: x[5],
            SexId: x[6],
            DorStatus: x[7],
			DiscardReason: x[8],
			ForbidStartDate: x[9],
            ForbidEndDate: x[10],
            IsUsed: x[11],
            OperType: x[12],
            UploadDataId: x[13],
        }
    })
	return ret
}

// 12.医院基本信息数据集
function CVTTBiHospitalInfo(rows) {
    const ret = rows.map(x => {
        return {
            HospCode: x[0],
            OrgId: x[1],
            HospId: x[2],
            HospName: x[3],
            HospArtificialPerson: x[4],
            HospLevel: x[5],
            HospBed: x[6],
            HospTransDepRs: x[7],
            HospTransDepYjs: x[8],
			HospTransDepBk: x[9],
            HospTransDepZk: x[10],
            HospTransDepZz: x[11],
			HospTransDepWxl: x[12],
            HospTransDepArea: x[13],
            HospTransDepAlone: x[14],
			HospUsedBloodAmount: x[15],
            RegDate: x[16],
            SendFlag: x[17],
			HospPostCode: x[18],
			HospAddress: x[19],
            HospTel: x[20],
			HospManager: x[21],
			HospDepTel: x[22],
			HospDepManager: x[23],
            HospWebAddr: x[24],
			OperType: x[25],
			UploadDataId: x[26],
        }
    })
	return ret
}

// 13.医院患者用血信息数据集
function CVTTBiHospIllmanUsebld(rows) {
    const ret = rows.map(x => {
        return {
            HospCode: x[0],
            OrgId: x[1],
            HospId: x[2],
            DonId: x[3],
            ProductId: x[4],
            OperatorName: x[5],
            ProdClassId: x[6],
            BloodAbo: x[7],
            BloodRhd: x[8],
			UsedApplyBill: x[9],
            DeptName: x[10],
            DeptCode: x[11],
			InpatientNum: x[12],
            IllmanName: x[13],
            IllmanAge: x[14],
			IllmanAgeUnit: x[15],
            IllmanSex: x[16],
            IllmanBed: x[17],
			IllmanAbo: x[18],
			IllmanRhd: x[19],
            IllmanDiagnoseInfo: x[20],
			IllmanDiagnoseCode: x[21],
			IllmanIllHis: x[22],
			IllmanTransHis: x[23],
            AttendingDoctor: x[24],
			IllmanBqCode: x[25],
			IllmanTransfusionProp: x[26],
			BloodAmount: x[27],
			BloodUsedDate: x[28],
			BloodElapseDate: x[29],
			BloodMoneyOut: x[30],
			BloodOutDate: x[31],
			ProcFlag: x[32],
			TransfusionRoomOut: x[33],
			BloodOutReason: x[34],
			BloodOutPerson: x[35],
			AcroMethod: x[36],
			MainNj: x[37],
			MainRx: x[38],
			SideNj: x[39],
			SideRx: x[40],
			Ktsx: x[41],
			BloodApplyBill: x[42],
			BloodStoreIn: x[43],
			IdentityTypeId: x[44],
			IdentityCode: x[45],
			IsUpload: x[46],
			DataStatus: x[47],
			OperType: x[48],
			UploadDataId: x[49],
        }
    })
	return ret
}

// 14.医院输血反应信息数据集
function CVTTBiHospTransReaction(rows) {
    const ret = rows.map(x => {
        return {
            HospCode: x[0],
            OrgId: x[1],
            HospId: x[2],
            HospStoreOut: x[3],
            DonId: x[4],
            ProductId: x[5],
            DealMethod: x[6],
            MainKey: x[7],
            ReactionDate: x[8],
			ClinicSymptom: x[9],
            FeedbackPerson: x[10],
            RecreactionRecorder: x[11],
			RecreactionRecordDate: x[12],
            TransmitFlag: x[13],
            BloodAbo: x[14],
			BloodRhd: x[15],
            IllmanName: x[16],
            IllmanAgeUnit: x[17],
			IllmanSex: x[18],
			IllmanBed: x[19],
            IllmanDept: x[20],
			IllmanDiagnoseInfo: x[21],
			IllmanAbo: x[22],
			IllmanRhd: x[23],
            ProdClassId: x[24],
			BloodAmount: x[25],
			BloodUnit: x[26],
			BloodOutDate: x[27],
			IllmanTransHis: x[28],
			IllmanTransfusionProp: x[29],
			IllmanIllHis: x[30],
			IllmanDiagnoseCode: x[31],
			BloodElapseDate: x[32],
			DonorName: x[33],
			ReactionType: x[34],
			TransDeptDeal: x[35],
			DealResult: x[36],
			IllmanDieReason: x[37],
			IllmanDieDate: x[38],
			ReservedField: x[39],
			InpatientNum: x[40],
			DeptCode: x[41],
			AttendingDoctor: x[42],
			IllmanNation: x[43],
			DataStatus: x[44],
			OperType: x[45],
			UploadDataId: x[46],
        }
    })
	return ret
}

// 15.医院库存汇总数据集
function CVTTBiHospStock(rows) {
    const ret = rows.map(x => {
        return {
            HospCode: x[0],
            OrgId: x[1],
            HospId: x[2],
            ProdClassId: x[3],
            AAmount: x[4],
            BAmount: x[5],
            OAmount: x[6],
            AbAmount: x[7],
            StockDate: x[8],
			OperType: x[9],
            UploadDataId: x[10],
        }
    })
	return ret
}

// 16.医院库存明细信息数据集
function CVTTBiHospStockDetail(rows) {
    const ret = rows.map(x => {
        return {
            HospCode: x[0],
            OrgId: x[1],
            HospId: x[2],
            DonId: x[3],
            ProductId: x[4],
            DonorName: x[5],
            ProdClassId: x[6],
            Abo: x[7],
            Rhd: x[8],
			BloodAmount: x[9],
            CollectDate: x[10],
            ElapseDate: x[11],
			OutDate: x[12],
            InDate: x[13],
            ManufactureDate: x[14],
			StockDate: x[15],
            OperType: x[16],
            UploadDataId: x[17],
        }
    })
	return ret
}


module.exports = {
	CVTTBiUseBldOrgan,
	CVTTBiBldAllocation,
	CVTTBiBldReimburs,
	CVTTBiBldRefund,
	CVTTBiBldAllocationSummary,
	CVTTBiBldIssueSummary,
	CVTTBiBldIssuing,
	CVTTBiOrgOrderBld,
	CVTTBiOrgOrderBldSummary,
	CVTTBiBldIssuingDetail,
	CVTTBiBlacklist,
	CVTTBiHospitalInfo,
	CVTTBiHospIllmanUsebld,
	CVTTBiHospTransReaction,
	CVTTBiHospStock,
	CVTTBiHospStockDetail,
}