import React from "react"
import ContainerGrid from "@/components/atoms/container/ContainerGrid"
import CardSummary from "@/components/organisms/CardSummary"
import HeroDashboard from "@/components/organisms/HeroDashboard"
import TotalInitiationIcon from "@/assets/illustration/folder-suitcase.svg"
import NewAuctionIcon from "@/assets/illustration/folder-search.svg"
import OngoingAuctionIcon from "@/assets/illustration/chat-square.svg"
import NegotiationIcon from "@/assets/illustration/dollar-plus-small.svg"
import CardTotalPotentialSaving from "@/components/organisms/CardTotalPotentialSaving"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ruang Auction | Dashboard",
    description: "A dashboard page for buyer procurement",
}

function Dashboard() {
    return (
        <div className="flex flex-col gap-6 bg-white p-9">
            <HeroDashboard profileName="Teguh Wicaksono" lastLoginTime={new Date()} />
            <div className="flex flex-col-reverse lg:flex-row gap-6">
                <CardTotalPotentialSaving totalPotentialSaving={825000000} />
                <div className="w-full lg:w-[40%]">
                    <ContainerGrid className="gap-3 grid-cols-2">
                        <CardSummary image={TotalInitiationIcon} label="Total Initiation" totalSummary={23} />
                        <CardSummary image={NewAuctionIcon} label="New Auction" totalSummary={3} />
                        <CardSummary image={OngoingAuctionIcon} label="Ongoing Auction" totalSummary={1} />
                        <CardSummary image={NegotiationIcon} label="Negotiation" totalSummary={1} />
                    </ContainerGrid>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
