"use client"
import React, { useRef, useState } from "react"
import CardShadow from "../atoms/container/CardShadow"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdButton from "../atoms/button/AntdButton"
import AntdDivider from "../atoms/divider/AntdDivider"
import { AntdInputText } from "../atoms/input/AntdInput"
import AntdSelect from "../atoms/select/AntdSelect"
import { AntdRadio } from "../atoms/radio/AntdRadio"
import { InputRef, Radio } from "antd"
const { Group } = Radio

interface CardProcurementInfoProps {
    readonly editable: boolean
}

function CardProcurementInfo(props: CardProcurementInfoProps) {
    const procurementNameRef = useRef<InputRef>(null)
    const [edit, setEdit] = useState<boolean>(false)
    const [onSaving, setOnSaving] = useState<boolean>(false)
    const handleEdit = () => {
        setEdit(true)
    }
    const handleSaveEdit = () => {
        setOnSaving(true)
        setTimeout(() => {
            setEdit(false)
            setOnSaving(false)
        }, 5000)
    }
    return (
        <CardShadow className="flex flex-col gap-4 px-4 py-8">
            <div className="flex justify-between items-center">
                <h2>
                    <TextGreyDarken className="text-lg font-medium">Procurement Info</TextGreyDarken>
                </h2>
                {props.editable && (
                    <>
                        {!edit ? (
                            <AntdButton type="primary" size="middle" onClick={handleEdit}>
                                <span>Edit Procurement Info</span>
                            </AntdButton>
                        ) : (
                            <AntdButton type="primary" size="middle" onClick={handleSaveEdit} loading={onSaving}>
                                <span>Save Procurement Info</span>
                            </AntdButton>
                        )}
                    </>
                )}
            </div>
            <AntdDivider className="!m-0" />
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Procurement Number</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">PROCINI/001/2020</span>
                ) : (
                    <AntdInputText
                        passingref={procurementNameRef}
                        size="middle"
                        className="col-start-4 col-span-9"
                        placeholder="Type procurement name"
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Post Date</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">08 August 2020</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Procurement Name</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Pengadaan Peralatan Kerja Divisi HRD</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Negotiation Type</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Reverse Auction</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Evaluation Type</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Passing Grade</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Winner Type</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Single Winner</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Bidding Type</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Total Price by Unit Price</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Currency Type</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Multi Currency</span>
                ) : (
                    <AntdSelect
                        className="col-start-4 col-span-9"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                )}
            </div>
            <div className="text-sm grid grid-cols-12 items-center">
                <span className="col-span-3">Price Include Tax</span>
                {!edit ? (
                    <span className="col-start-4 col-span-9">Yes</span>
                ) : (
                    <Group className="col-start-4 col-span-9">
                        <AntdRadio value={true} label="Yes" />
                        <AntdRadio value={false} label="No" />
                    </Group>
                )}
            </div>
        </CardShadow>
    )
}

export default CardProcurementInfo
