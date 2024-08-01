import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import CircleCountdown from "@/components/molecules/CircleCountdown"
import React from "react"

interface CardAuctionTimeProps {
    readonly sessionStatus: string
}

function CardAuctionTimer(props: CardAuctionTimeProps) {
    return (
        <CardShadow className="flex flex-col gap-4 p-4">
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-2">Date</TextGreyDarken>
                <TextGreyDarken className="col-start-3 col-span-10">10 July 2024</TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-2">Time</TextGreyDarken>
                <TextGreyDarken className="col-start-3 col-span-10">04:25:00</TextGreyDarken>
            </div>
            <AntdDivider className="!m-0" />
            <div className="flex justify-center">
                <CircleCountdown sessionStatus={props.sessionStatus} />
            </div>
        </CardShadow>
    )
}

export default CardAuctionTimer
