import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import AlertInfoCard from "@/components/molecules/AlertInfoCard"
import React from "react"

function CardAuctionItemList() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Item List</TextGreyDarken>
                </h2>
            </div>
            <AntdDivider className="!m-0" />
            <AlertInfoCard alertMessage="Selected item will be included into Auction Session." />
        </CardShadow>
    )
}

export default CardAuctionItemList
