import React from "react"
import CardShadow from "../atoms/container/CardShadow"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdDivider from "../atoms/divider/AntdDivider"
import Image from "next/image"
import EmptyCardNotification from "../molecules/EmptyCardNotification"
import DollarPlusIcon from "@/assets/illustration/dollar-plus-large.svg"
import AntdButton from "../atoms/button/AntdButton"
import CaretCircleRightIcon from "@/assets/icon/line/caret-circle-right-white.svg"

function CardNegotiationSession() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Negotiation Session</TextGreyDarken>
                </h2>
            </div>
            <AntdDivider className="!m-0" />
            <div className="flex flex-col items-center gap-4">
                <EmptyCardNotification withIllustrationMessage={false} illustrationIcon={DollarPlusIcon} />
                <AntdButton type="primary" size="middle">
                    <div className="flex gap-3">
                        <span>Continue to negotiation</span>
                        <Image src={CaretCircleRightIcon} alt="plus" width={16} height={16} />{" "}
                    </div>
                </AntdButton>
            </div>
        </CardShadow>
    )
}

export default CardNegotiationSession
