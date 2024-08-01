"use client"
import React, { forwardRef, RefObject, useImperativeHandle, useRef, useState } from "react"
import { AntdInputText } from "../atoms/input/AntdInput"
import { InputRef, Radio, RadioChangeEvent, Select } from "antd"
import AntdButton from "../atoms/button/AntdButton"
import AntdModal, { ModalRef } from "../molecules/Modal"
import useModalNewProcurement from "@/hooks/component/useNewProcurementFormModal"
import { AntdRadio } from "../atoms/radio/AntdRadio"
import AntdSelect from "../atoms/select/AntdSelect"
const { Group } = Radio

export interface NewProcurementFormModalProps {
    passingref: RefObject<NewProcurementFormModalRef>
}

export interface NewProcurementFormModalRef {
    open: (cb?: () => void) => void
    close: (cb?: () => void) => void
}

const NewProcurementFormModal = (props: NewProcurementFormModalProps) => {
    const modalRef = useRef<ModalRef>(null)
    const procurementNameRef = useRef<InputRef>(null)
    const negotiationTypeRef = useRef()
    // const evaluationTypeRef = useRef()
    // const winnerTypeRef = useRef()
    const { handleSubmit } = useModalNewProcurement(modalRef, procurementNameRef, negotiationTypeRef)

    useImperativeHandle(props.passingref, () => ({
        open: (cb?: () => void) => modalRef.current?.open(cb),
        close: (cb?: () => void) => modalRef.current?.close(cb),
    }))

    return (
        <AntdModal
            passingref={modalRef}
            centered={true}
            okLabel="Apply"
            showHeader={true}
            closeIcon={false}
            title="Procurement Info"
            onButtonOK={handleSubmit}
            actionButtonToRender="cancel-ok"
        >
            <div className="flex flex-col gap-4">
                <div className="text-sm grid grid-cols-12 items-center">
                    <span className="col-span-4">Procurement Name</span>
                    <AntdInputText
                        passingref={procurementNameRef}
                        size="middle"
                        className="col-start-5 col-span-8"
                        placeholder="Type procurement name"
                    />
                </div>
                <div className="text-sm grid grid-cols-12">
                    <span className="col-span-4">Negotiation Type</span>
                    <AntdSelect
                        className="col-start-5 col-span-8"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                </div>
                <div className="text-sm grid grid-cols-12">
                    <span className="col-span-4">Evaluation Type</span>
                    <AntdSelect
                        className="col-start-5 col-span-8"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                </div>
                <div className="text-sm grid grid-cols-12">
                    <span className="col-span-4">Winner Type</span>
                    <AntdSelect
                        className="col-start-5 col-span-8"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                </div>
                <div className="text-sm grid grid-cols-12">
                    <span className="col-span-4">Bidding Type</span>
                    <AntdSelect
                        className="col-start-5 col-span-8"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                </div>
                <div className="text-sm grid grid-cols-12">
                    <span className="col-span-4">Currency Type</span>
                    <AntdSelect
                        className="col-start-5 col-span-8"
                        defaultValue="lucy"
                        allowClear
                        options={[{ value: "lucy", label: "Lucy" }]}
                    />
                </div>
                <div className="text-sm grid grid-cols-12">
                    <span className="col-span-4">Price Include Tax</span>
                    <Group className="col-start-5 col-span-8">
                        <AntdRadio value={true} label="Yes" />
                        <AntdRadio value={false} label="No" />
                    </Group>
                </div>
            </div>
        </AntdModal>
    )
}

export default NewProcurementFormModal
