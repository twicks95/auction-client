import React from "react"
import CardShadow from "../atoms/container/CardShadow"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdButton from "../atoms/button/AntdButton"
import Image from "next/image"
import AntdDivider from "../atoms/divider/AntdDivider"
import PlusCircleIcon from "@/assets/icon/line/plus-circle-line-white.svg"
import UsersIcon from "@/assets/illustration/users.svg"
import EmptyCardNotification from "../molecules/EmptyCardNotification"

function CardVendorList() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Vendor List</TextGreyDarken>
                </h2>
                <AntdButton type="primary" size="middle">
                    <div className="flex gap-3">
                        <Image src={PlusCircleIcon} alt="plus" width={16} height={16} />
                        <span>Add Vendor</span>
                    </div>
                </AntdButton>
            </div>
            <AntdDivider className="!m-0" />
            <EmptyCardNotification
                withAlert={true}
                withIllustrationMessage={true}
                alertMessage="Add at least one vendor to submit this procurement"
                illustrationIcon={UsersIcon}
            />
        </CardShadow>
    )
}

export default CardVendorList
