"use client"
import AntdBreadcrumb from "@/components/atoms/breadcrumb/AntdBreadcrumb"
import AntdButton from "@/components/atoms/button/AntdButton"
import React from "react"
import CardAuctionParticipantListNotStarted from "@/components/organisms/card/CardAuctionParticipantListNotStarted"
import CardAuctionInfoSession from "@/components/organisms/card/CardAuctionInfoSession"
import CardAuctionTimer from "@/components/organisms/card/CardAuctionTimer"
import { useRouter } from "next/navigation"
import PageHeader from "@/components/molecules/PageHeader"

function BuyerAuctionNotStarted() {
    const { back } = useRouter()
    return (
        <div className="px-9 py-9">
            <div className="flex flex-col gap-5">
                <AntdBreadcrumb />
                <PageHeader title="Auction Session" statusTag="NOT_STARTED" />
                <div className="grid grid-cols-12 gap-4 relative">
                    <div className="col-span-9 space-y-5">
                        <CardAuctionParticipantListNotStarted />
                        <div className="flex justify-center space-x-4">
                            <AntdButton type="default" size="large" className="w-full" onClick={() => back()}>
                                Back
                            </AntdButton>
                        </div>
                    </div>
                    <div className="col-start-10 col-span-3 gap-4 flex flex-col">
                        <CardAuctionTimer sessionStatus="NOT_STARTED" />
                        <CardAuctionInfoSession />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerAuctionNotStarted
