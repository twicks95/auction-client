import React from "react"
import CardShadow from "../atoms/container/CardShadow"
import AntdButton from "../atoms/button/AntdButton"
import Image from "next/image"
import AntdDivider from "../atoms/divider/AntdDivider"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import PlusCircleIcon from "@/assets/icon/line/plus-circle-line-white.svg"
import EmptyCardNotification from "../molecules/EmptyCardNotification"
import LogisticIcon from "@/assets/illustration/logistic.svg"

function CardItemList() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Item List</TextGreyDarken>
                </h2>
                <AntdButton type="primary" size="middle">
                    <div className="flex gap-3">
                        <Image src={PlusCircleIcon} alt="plus" width={16} height={16} />
                        <span>Add Item</span>
                    </div>
                </AntdButton>
            </div>
            <AntdDivider className="!m-0" />
            <EmptyCardNotification
                withAlert={true}
                withIllustrationMessage={true}
                alertMessage="Add at least one item to submit this procurement"
                illustrationClassName="-ml-4"
                illustrationIcon={LogisticIcon}
            />
        </CardShadow>
    )
}

export default CardItemList
