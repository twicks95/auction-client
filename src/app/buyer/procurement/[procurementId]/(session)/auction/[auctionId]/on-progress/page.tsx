import AntdBreadcrumb from "@/components/atoms/breadcrumb/AntdBreadcrumb"
import CardAuctionInfoSession from "@/components/organisms/card/CardAuctionInfoSession"
import CardAuctionTimer from "@/components/organisms/card/CardAuctionTimer"
import React from "react"
import CardBuyerAuctionOfferLogs from "@/components/organisms/card/CardBuyerAuctionOfferLogs"
import CardAuctionParticipantListOnGoing from "@/components/organisms/card/CardAuctionParticipantListOnGoing"
import PageFooter from "@/components/molecules/PageFooter"
import PageHeader from "@/components/molecules/PageHeader"

function BuyerAuctionInProgress() {
    return (
        <div className="px-9 py-9">
            <div className="flex flex-col gap-5">
                <AntdBreadcrumb />
                <PageHeader title="Auction Status" statusTag="ON_GOING" />
                <div className="grid grid-cols-12 gap-4 relative">
                    <div className={`col-span-9 h-full max-h-[780px]`}>
                        <CardBuyerAuctionOfferLogs />
                    </div>
                    <div className="col-start-10 col-span-3 gap-4 flex flex-col">
                        <CardAuctionTimer sessionStatus="ON_GOING" />
                        <CardAuctionInfoSession />
                    </div>
                </div>
                <CardAuctionParticipantListOnGoing />
                <PageFooter />
            </div>
        </div>
    )
}

export default BuyerAuctionInProgress
