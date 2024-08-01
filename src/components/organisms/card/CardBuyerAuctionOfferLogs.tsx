import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import DisqualifyAlertIcon from "@/assets/icon/line/alert-line-red.svg"
import BuyerAuctionLogs from "../BuyerAuctionLogs"

function CardBuyerAuctionOfferLogs() {
    return (
        <CardShadow className={`flex flex-col gap-4 p-4 h-full`}>
            <div className="flex justify-between">
                <TextGreyDarken className="text-lg font-medium">Price Offer Logs</TextGreyDarken>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-3">
                        <TextGreyDarken className="text-xs leading-none">PT Sangkuriang Indah</TextGreyDarken>
                        <TextGreyDarken className="text-base font-bold leading-none">
                            19,000,000,000.00 IDR
                        </TextGreyDarken>
                    </div>
                    <AntdDivider type="vertical" className="!h-full" />
                    <div className="flex items-center gap-2">
                        <Image src={DisqualifyAlertIcon} alt="disqualify-alert" height={40} width={40} />
                        <div className="text-accent-red flex flex-col gap-2">
                            <span className="text-base font-bold underline leading-none">3 Price</span>
                            <span className="text-xs leading-none">Need to disqualify</span>
                        </div>
                    </div>
                </div>
            </div>
            <BuyerAuctionLogs />
        </CardShadow>
    )
}

export default CardBuyerAuctionOfferLogs
