import React from "react"
import CardShadow from "../atoms/container/CardShadow"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdButton from "../atoms/button/AntdButton"
import Image from "next/image"
import AntdDivider from "../atoms/divider/AntdDivider"
import PlusCircleIcon from "@/assets/icon/line/plus-circle-line-white.svg"
import EmptyCardNotification from "../molecules/EmptyCardNotification"
import WritingIcon from "@/assets/illustration/writing.svg"

function CardEvaluationScore() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Evaluation Score</TextGreyDarken>
                </h2>
                <AntdButton type="primary" size="middle">
                    <div className="flex gap-3">
                        <Image src={PlusCircleIcon} alt="plus" width={16} height={16} />
                        <span>Scoring Percentage</span>
                    </div>
                </AntdButton>
            </div>
            <AntdDivider className="!m-0" />
            <EmptyCardNotification
                withAlert={true}
                withIllustrationMessage={true}
                alertMessage="Define the Administration, Technical, and Price Scale to weight your score later"
                illustrationIcon={WritingIcon}
            />
        </CardShadow>
    )
}

export default CardEvaluationScore
