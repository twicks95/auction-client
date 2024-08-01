"use client"
import React from "react"
import AntdButton from "../atoms/button/AntdButton"
import Image from "next/image"
import TextGrey from "../atoms/text/TextGrey"
import AntdDivider from "../atoms/divider/AntdDivider"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdTag from "../atoms/tag/Tag"
import ArrowUpLeftIcon from "@/assets/icon/line/arrow-up-left-line-grey.svg"
import { useRouter } from "next/navigation"

function PageHeader(props: { title: string; statusTag: string }) {
    const { back } = useRouter()
    return (
        <div className="flex items-center gap-3">
            <AntdButton type="link" className="flex items-center" onClick={() => back()}>
                <Image src={ArrowUpLeftIcon} alt="arrow-up-left" width={14} height={14} />
                <TextGrey>
                    <span>Back</span>
                </TextGrey>
            </AntdButton>
            <AntdDivider type="vertical" />
            <h1>
                <TextGreyDarken className="text-2xl font-bold">{props.title ?? "Page Title"}</TextGreyDarken>
            </h1>
            <AntdTag status={props.statusTag ?? "ON_GOING"} />
        </div>
    )
}

export default PageHeader
