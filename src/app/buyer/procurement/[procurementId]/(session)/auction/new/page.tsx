"use client"
import AntdBreadcrumb from "@/components/atoms/breadcrumb/AntdBreadcrumb"
import AntdButton from "@/components/atoms/button/AntdButton"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import AntdTag from "@/components/atoms/tag/Tag"
import TextGrey from "@/components/atoms/text/TextGrey"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import CardProcurementInfo from "@/components/organisms/CardProcurementInfo"
import Image from "next/image"
import React, { useState } from "react"
import ArrowUpLeftIcon from "@/assets/icon/line/arrow-up-left-line-grey.svg"
import CaretRightBlueIcon from "@/assets/icon/solid/caret-right-blue.svg"
import CardAuctionEvaluationMethod from "@/components/organisms/card/CardAuctionEvaluationMethod"
import CardAuctionParticipantList from "@/components/organisms/card/CardAuctionParticipantList"
import CardAuctionItemList from "@/components/organisms/card/CardAuctionItemList"
import { useRouter, useParams } from "next/navigation"
import { routes } from "@/shared/constant"

function NewAuctionSession() {
    const { procurementId } = useParams()
    const { back, push } = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmitAuction = () => {
        // POST API call
        setLoading(true)
        setTimeout(() => {
            const auctionId = "d7b21272d12dbc"
            setLoading(false)
            push(routes.BuyerAuctionNotStarted(procurementId, auctionId))
        }, 5000)
    }
    return (
        <div className="grid grid-cols-12">
            <div className="flex flex-col gap-5 col-start-1 col-span-10 px-9 py-9">
                <AntdBreadcrumb />
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <AntdButton type="link" className="flex items-center">
                            <Image src={ArrowUpLeftIcon} alt="arrow-up-left" width={14} height={14} />
                            <TextGrey>
                                <span>Back</span>
                            </TextGrey>
                        </AntdButton>
                        <AntdDivider type="vertical" />
                        <h1>
                            <TextGreyDarken className="text-2xl font-bold">New Auction</TextGreyDarken>
                        </h1>
                        <AntdTag status="DRAFT" />
                    </div>
                    <CardProcurementInfo editable={false} />
                    <CardAuctionEvaluationMethod />
                    <CardAuctionItemList />
                    <CardAuctionParticipantList />
                    <div className="flex justify-center space-x-4">
                        <AntdButton type="default" size="large" disabled={loading} onClick={() => back()}>
                            Back
                        </AntdButton>
                        <AntdButton type="primary" size="large" loading={loading} onClick={handleSubmitAuction}>
                            Create session
                        </AntdButton>
                    </div>
                </div>
            </div>
            <div className="relative col-start-11 col-span-2 mt-12">
                <div className="sticky top-6 flex">
                    <div>
                        <div className="flex gap-4 text-sm">
                            <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} />
                            <a
                                href="#vendor-list"
                                // onClick={() => {
                                // console.log(componentRef)
                                // componentRef.current?.scrollIntoView({ behavior: "smooth" })
                                // }}
                            >
                                Procurement Info
                            </a>
                        </div>
                        <div className="flex gap-4 text-sm">
                            {/* <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} /> */}
                            <a
                                href="#vendor-list"
                                // onClick={() => {
                                // console.log(componentRef)
                                // componentRef.current?.scrollIntoView({ behavior: "smooth" })
                                // }}
                            >
                                Evaluation Method
                            </a>
                        </div>
                        <div className="flex gap-4 text-sm">
                            {/* <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} /> */}
                            <a
                                href="#vendor-list"
                                // onClick={() => {
                                // console.log(componentRef)
                                // componentRef.current?.scrollIntoView({ behavior: "smooth" })
                                // }}
                            >
                                Participant List
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewAuctionSession
