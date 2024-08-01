import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import AlertInfoCard from "@/components/molecules/AlertInfoCard"
import React from "react"

function CardAuctionParticipantListOnGoing() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Vendor List</TextGreyDarken>
                </h2>
            </div>
            <AntdDivider className="!m-0" />
            <AlertInfoCard alertMessage="Selected vendor will be invited to participate in Auction Session." />
        </CardShadow>
    )
}

export default CardAuctionParticipantListOnGoing
