import { useState } from "react"

type ProcurementInfoData = {
    procurementNumber?: string
    postDate?: string
    procurementName?: string
    negotiationType?: string
    evaluationType?: string
    winnerType?: string
    biddingType?: string
    currencyType?: string
    priceIncludeTax?: boolean
}
export function useCardProcurementInfo() {
    const [procurementData, setProcurementData] = useState<ProcurementInfoData | null>(null)

    

    return {procurementData}
}
