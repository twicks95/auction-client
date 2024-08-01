"use client"
import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import { capitalizeFirstLetterOfEachWordWithUnderscoreSplitter, formatDisplayCurrency } from "@/lib/generalUtils"
import { format } from "date-fns"
import React from "react"

interface CardAuctionInfoSessionProps {
    readonly auctionStartDate?: Date
    readonly auctionEndDate?: Date
    readonly auctionType?: string
    readonly minimalDecrement?: number
    readonly auctionModel?: string
    readonly evaluationMethod?: string
}

const mockupData = {
    startDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
    endDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
    auctionType: "OPEN",
    minimalDecrement: 225000,
    auctionModel: "REAL_TIME",
    evaluationMethod: "PASSING_GRADE",
}

function CardAuctionInfoSession(props: CardAuctionInfoSessionProps) {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8 h-full">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Auction Info</TextGreyDarken>
                </h2>
            </div>
            <AntdDivider className="!m-0" />

            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">Start Date Session</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.auctionStartDate
                        ? format(props.auctionStartDate, "dd MMMM yyyy")
                        : format(mockupData.startDate, "dd MMMM yyyy")}
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">End Date Session</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.auctionEndDate
                        ? format(props.auctionEndDate, "dd MMMM yyyy")
                        : format(mockupData.endDate, "dd MMMM yyyy")}
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">Start Time Session</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.auctionStartDate
                        ? format(props.auctionStartDate, "HH:mm:ss")
                        : format(mockupData.startDate, "HH:mm:ss")}
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">End Time Session</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {" "}
                    {props.auctionEndDate
                        ? format(props.auctionEndDate, "HH:mm:ss")
                        : format(mockupData.endDate, "HH:mm:ss")}
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">Auction Type</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.auctionType
                        ? capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(props.auctionType)
                        : capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(mockupData.auctionType)}
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">Minimal Decrement</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.minimalDecrement
                        ? formatDisplayCurrency(props.minimalDecrement)
                        : formatDisplayCurrency(mockupData.minimalDecrement)}{" "}
                    <span className="font-bold">IDR</span>
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">Auction Model</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.auctionModel
                        ? capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(props.auctionModel)
                        : capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(mockupData.auctionModel)}
                </TextGreyDarken>
            </div>
            <div className="text-xs grid grid-cols-12 gap-4 items-center">
                <TextGreyDarken className="col-span-5">Evaluation Method</TextGreyDarken>
                <TextGreyDarken className="col-start-6 col-span-7">
                    {props.evaluationMethod
                        ? capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(props.evaluationMethod)
                        : capitalizeFirstLetterOfEachWordWithUnderscoreSplitter(mockupData.evaluationMethod)}
                </TextGreyDarken>
            </div>
        </CardShadow>
    )
}

export default CardAuctionInfoSession
