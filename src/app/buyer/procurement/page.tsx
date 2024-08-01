"use client"
import AntdBreadcrumb from "@/components/atoms/breadcrumb/AntdBreadcrumb"
import AntdButton from "@/components/atoms/button/AntdButton"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import Image from "next/image"
import React, { useRef } from "react"
import PlusCircleIcon from "@/assets/icon/line/plus-circle-line-white.svg"
import NewProcurementForm, { NewProcurementFormModalRef } from "@/components/organisms/NewProcurementFormModal"

function Procurement() {
    const newProcurementFormRef = useRef<NewProcurementFormModalRef>(null)
    return (
        <div className="flex flex-col gap-5 p-9">
            <AntdBreadcrumb />
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h1>
                        <TextGreyDarken className="text-2xl font-bold">Initiation</TextGreyDarken>
                    </h1>
                    <AntdButton type="primary" size="large" onClick={() => newProcurementFormRef.current?.open()}>
                        <div className="flex gap-3">
                            <Image src={PlusCircleIcon} alt="plus" width={20} height={20} />
                            <span>New Initiation</span>
                        </div>
                    </AntdButton>
                </div>
                <AntdDivider className="!m-0" />
            </div>
            <NewProcurementForm passingref={newProcurementFormRef} />
        </div>
    )
}

export default Procurement
