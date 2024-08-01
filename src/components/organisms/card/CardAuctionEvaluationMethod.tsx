import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import AntdSelect from "@/components/atoms/select/AntdSelect"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import React from "react"

function CardAuctionEvaluationMethod() {
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Evaluation Method</TextGreyDarken>
                </h2>
            </div>
            <AntdDivider className="!m-0" />
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Auction Type</span>
                <AntdSelect
                    className="col-start-4 col-span-4"
                    defaultValue="lucy"
                    allowClear
                    options={[{ value: "lucy", label: "Lucy" }]}
                />
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Auction Model</span>
                <AntdSelect
                    className="col-start-4 col-span-4"
                    defaultValue="lucy"
                    allowClear
                    options={[{ value: "lucy", label: "Lucy" }]}
                />
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Period Type</span>
                <AntdSelect
                    className="col-start-4 col-span-4"
                    defaultValue="lucy"
                    allowClear
                    options={[{ value: "lucy", label: "Lucy" }]}
                />
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Start Time</span>
                <AntdSelect
                    className="col-start-4 col-span-4"
                    defaultValue="lucy"
                    allowClear
                    options={[{ value: "lucy", label: "Lucy" }]}
                />
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Minimal Decrement</span>
                <AntdSelect
                    className="col-start-4 col-span-4"
                    defaultValue="lucy"
                    allowClear
                    options={[{ value: "lucy", label: "Lucy" }]}
                />
            </div>
        </CardShadow>
    )
}

export default CardAuctionEvaluationMethod
