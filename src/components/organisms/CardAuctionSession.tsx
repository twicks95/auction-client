"use client"
import React from "react"
import CardShadow from "../atoms/container/CardShadow"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdButton from "../atoms/button/AntdButton"
import Image from "next/image"
import AntdDivider from "../atoms/divider/AntdDivider"
import PlusCircleIcon from "@/assets/icon/line/plus-circle-line-white.svg"
import EmptyCardNotification from "../molecules/EmptyCardNotification"
import EmptyIllustrationIcon from "@/assets/illustration/chat-circle.svg"
import { useRouter, useParams } from "next/navigation"
import { routes } from "@/shared/constant"

function CardAuctionSession() {
    const { push } = useRouter()
    const { procurementId } = useParams()
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Auction Session</TextGreyDarken>
                </h2>
                <AntdButton type="primary" size="middle" onClick={() => push(routes.newAuctionSession(procurementId))}>
                    <div className="flex gap-3">
                        <Image src={PlusCircleIcon} alt="plus" width={16} height={16} />
                        <span>New Session</span>
                    </div>
                </AntdButton>
            </div>
            <AntdDivider className="!m-0" />
            <EmptyCardNotification
                withAlert={false}
                withIllustrationMessage={true}
                illustrationIcon={EmptyIllustrationIcon}
                illustrationMessage="No session available"
            />
        </CardShadow>
    )
}

export default CardAuctionSession
