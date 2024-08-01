"use client"
import { Modal } from "antd"
import React, { RefObject, useEffect, useImperativeHandle, useState } from "react"
import AntdButton from "../atoms/button/AntdButton"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdDivider from "../atoms/divider/AntdDivider"
import Image from "next/image"
import CloseIcon from "@/assets/icon/line/x-square-line-grey.svg"
// import { ModalRef } from "./Modal"
import { AuctionVendorOffer } from "../organisms/BuyerAuctionLogs"
import { format } from "date-fns"
import { formatDisplayCurrency } from "@/lib/generalUtils"

interface ModalBuyerConfirmDisqualifyOfferProps {
    passingref: RefObject<ModalBuyerConfirmDisqualifyOfferRef>
    readonly offerToDisqualify: AuctionVendorOffer
    readonly onButtonDisqualify: () => Promise<any>
}

export interface ModalBuyerConfirmDisqualifyOfferRef {
    open: (vendorOffer: AuctionVendorOffer) => void
    close: () => void
    setLoading: (loading: boolean) => void
}

function ModalBuyerConfirmDisqualifyOffer(props: Readonly<ModalBuyerConfirmDisqualifyOfferProps>) {
    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [vendorOffer, setVendorOffer] = useState<AuctionVendorOffer>(props.offerToDisqualify)

    useImperativeHandle(props.passingref, () => ({
        open: (vendorOffer) => {
            setVendorOffer((prev) => ({ ...prev, vendorOffer }))
            setOpen(true)
        },
        close: () => setOpen(false),
        setLoading: (loading: boolean) => setIsLoading(loading),
    }))

    useEffect(() => {
        console.log({ modal: vendorOffer })
    }, [vendorOffer])

    return (
        <Modal
            open={open}
            centered={true}
            title={false} // [x] don't change this to keep hide title from default Antd Modal component. We costume itself
            closeIcon={false} // [x] don't change this to keep hide close icon from default Antd Modal component. We costume itself
            destroyOnClose={true}
            className="!w-fit"
            styles={{
                content: {
                    padding: "2rem", // 32px
                    paddingTop: "2rem", //32px, 88px
                    minWidth: "35.8125rem", // 573px
                },
                footer: { marginTop: "2rem" }, // 32px
            }}
            footer={[
                <AntdButton
                    disabled={isLoading}
                    key="cancel"
                    size="large"
                    type="default"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </AntdButton>,
                <AntdButton
                    key="ok"
                    size="large"
                    type="primary"
                    customtype="danger"
                    loading={isLoading}
                    // disabled={props.disabledButton}
                    onClick={props.onButtonDisqualify}
                    style={{ marginLeft: "1rem" }}
                >
                    Disqualify
                </AntdButton>,
            ]}
        >
            <div className="flex justify-between items-center">
                <TextGreyDarken className="text-lg font-medium">Price Disqualification</TextGreyDarken>

                <AntdButton type="link" className="!p-0" onClick={() => setOpen(false)}>
                    <Image src={CloseIcon} alt="close" height={0} width={0} priority />
                </AntdButton>
            </div>
            <AntdDivider className="!my-4" />
            <div className="flex flex-col gap-4">
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Session Number</span>
                    <span className="col-start-5 col-span-8">AUC200909090</span>
                </div>
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Participant</span>
                    <span className="col-start-5 col-span-8">{props.offerToDisqualify.vendorName}</span>
                </div>
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Item</span>
                    <span className="col-start-5 col-span-8">
                        Screen projector motorized 150” 4:3 Layar Proyektor Elektrik 150 Inch
                    </span>
                </div>
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Offering Time</span>
                    <span className="col-start-5 col-span-8">
                        {props.offerToDisqualify.offerDate
                            ? format(new Date(props.offerToDisqualify.offerDate), "dd MMM yyyy, HH:mm:ss")
                            : "-"}
                    </span>
                </div>
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Price</span>
                    <span className="col-start-5 col-span-8">
                        {props.offerToDisqualify.totalOffer
                            ? formatDisplayCurrency(props.offerToDisqualify.totalOffer)
                            : "-"}{" "}
                        <span className="font-bold">IDR</span>
                    </span>
                </div>
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Indicator</span>
                    <span className="col-start-5 col-span-8">Price under 20%</span>
                </div>
                <div className="text-xs grid grid-cols-12 items-center">
                    <span className="col-span-4">Reason</span>
                    <span className="col-start-5 col-span-8">{props.offerToDisqualify.disqualifyReason}</span>
                </div>
            </div>
        </Modal>
    )
}

export default ModalBuyerConfirmDisqualifyOffer
