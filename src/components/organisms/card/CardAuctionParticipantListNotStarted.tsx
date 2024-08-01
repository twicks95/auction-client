import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import AlertInfoCard from "@/components/molecules/AlertInfoCard"
import React from "react"

function CardAuctionParticipantListNotStarted() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Vendor List</TextGreyDarken>
                </h2>
            </div>
            <AntdDivider className="!m-0" />
            {/* <AlertInfoCard alertMessage="Selected vendor will be invited to participate in Auction Session." /> */}
            <div className="flex items-center gap-10">
                <TextGreyDarken className="text-sm font-bold">Due Date Confirmation</TextGreyDarken>
                <div className="text-xs flex gap-4">
                    <TextGreyDarken>Thursday, 15 July 2024</TextGreyDarken>
                    <TextGreyDarken>05:25:00</TextGreyDarken>
                </div>
            </div>
        </CardShadow>
    )
}

export default CardAuctionParticipantListNotStarted
