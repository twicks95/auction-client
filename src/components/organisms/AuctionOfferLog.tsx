import Image from "next/image"
import React, { RefObject, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import DisqualifyAlertIcon from "@/assets/icon/line/alert-line-red.svg"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import { formatDisplayCurrency } from "@/lib/generalUtils"
import { format } from "date-fns"
import AntdButton from "../atoms/button/AntdButton"
import XCircleIcon from "@/assets/icon/line/x-circle-line-white-sm.svg"
import XCircleRedIcon from "@/assets/icon/line/x-circle-line-red-sm.svg"
import TextGrey from "../atoms/text/TextGrey"
import AntdDivider from "../atoms/divider/AntdDivider"
import ModalBuyerConfirmDisqualifyOffer, {
    ModalBuyerConfirmDisqualifyOfferRef,
} from "../molecules/ModalBuyerConfirmDisqualifyOffer"
import { AuctionVendorOffer } from "./BuyerAuctionLogs"
import { Tooltip } from "antd"

export interface BuyerDisplayOfferLogProps {
    readonly passingbuyerdisplayofferlogref?: RefObject<BuyerDisplayOfferLogRef>
    readonly offerData: AuctionVendorOffer
    readonly onApproveDisqualify: (offerId: number) => Promise<AuctionVendorOffer>
}

export interface BuyerDisplayOfferLogRef {
    readonly setToDisqualified: () => void
}

const BuyerDisplayOfferLog = React.memo((props: BuyerDisplayOfferLogProps) => {
    const offerIdRef = useRef<number>(props.offerData.id)
    const modalBuyerConfirmDisqualifyOfferRef = useRef<ModalBuyerConfirmDisqualifyOfferRef>(null)
    const [offerState, setOfferState] = useState<{ isDisqualified: boolean; requestToDisqualified: boolean }>({
        isDisqualified: false,
        requestToDisqualified: false,
    })

    useImperativeHandle(props.passingbuyerdisplayofferlogref, () => ({
        setToDisqualified: () => {
            console.log("REF ACTION", {
                offerIdProp: props.offerData.id,
                offerIdRef: offerIdRef.current,
                offer: props.offerData.totalOffer,
            })
            // setOfferState((prev) => ({ ...prev, isDisqualified: true }))
            // props.offerId === offerIdRef.current && setOfferState((prev) => ({ ...prev, isDisqualified: true }))
        },
    }))

    const handleDisqualify = async () => {
        modalBuyerConfirmDisqualifyOfferRef.current?.open(props.offerData)
    }

    const handleApproveDisqualify = async () => {
        try {
            modalBuyerConfirmDisqualifyOfferRef.current?.setLoading(true)
            await props.onApproveDisqualify(props.offerData.id).then(() => {
                console.log("CLOSE MODAL")
                modalBuyerConfirmDisqualifyOfferRef.current?.setLoading(false)
                modalBuyerConfirmDisqualifyOfferRef.current?.close()
            })
        } catch (error) {}
    }

    return (
        <>
            {props.offerData.requestToDisqualified || offerState.requestToDisqualified ? (
                <div className="bg-red-100 py-[0.625rem] px-[1.125rem] rounded-t-small-5px flex gap-2">
                    <Image
                        src={DisqualifyAlertIcon}
                        alt="disqualify-icon"
                        height={0}
                        width={0}
                        style={{ height: "1rem", width: "auto" }}
                    />
                    <span className="text-red text-xs">Vendor request to disqualified this price.</span>
                </div>
            ) : (
                <></>
            )}
            {props.offerData.isDisqualified ? (
                <BuyerDisplayDisqualifiedOffer offerData={props.offerData} />
            ) : (
                <div
                    className={`flex justify-between p-[1.125rem] bg-white ${props.offerData.requestToDisqualified ? "rounded-t-none rounded-b-small-5px" : "rounded-small-5px"}`}
                >
                    <div className="flex flex-col ">
                        <TextGreyDarken className="text-xs">
                            {props.offerData.vendorName ?? "PT Sangkuriang Indah"}
                        </TextGreyDarken>
                        <TextGreyDarken className="text-base font-medium">
                            {props.offerData.totalOffer
                                ? formatDisplayCurrency(props.offerData.totalOffer)
                                : formatDisplayCurrency(540000000000)}{" "}
                            IDR
                        </TextGreyDarken>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        <TextGreyDarken className="text-xs">
                            {props.offerData.offerDate
                                ? format(props.offerData.offerDate, "dd/MM/yyyy - HH:mm:ss")
                                : format(
                                      new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
                                      "dd/MM/yyyy - HH:mm:ss",
                                  )}
                        </TextGreyDarken>
                        {props.offerData.requestToDisqualified && (
                            <AntdButton
                                type="primary"
                                customtype="danger"
                                size="small"
                                className="!px-4 !py-1"
                                onClick={handleDisqualify}
                                // onClick={props.onDisqualify}
                            >
                                <div className="flex gap-3">
                                    <Image src={XCircleIcon} alt="plus" width={13} height={13} />
                                    <span className="text-sm">Disqualify</span>
                                </div>
                            </AntdButton>
                        )}
                    </div>
                    <ModalBuyerConfirmDisqualifyOffer
                        passingref={modalBuyerConfirmDisqualifyOfferRef}
                        offerToDisqualify={props.offerData}
                        onButtonDisqualify={handleApproveDisqualify}
                    />
                </div>
            )}
        </>
    )
})
BuyerDisplayOfferLog.displayName = "BuyerDisplayOfferLog"

const RenderPICName = (props: { picName: string }) => {
    return (
        <Tooltip placement="left" title={props.picName}>
            <>{props.picName.length > 15 ? `${props.picName.substring(0, 15)}...` : props.picName}</>
        </Tooltip>
    )
}

function BuyerDisplayDisqualifiedOffer(
    props: Readonly<Omit<BuyerDisplayOfferLogProps, "passingbuyerdisplayofferlogref" | "onApproveDisqualify">>,
) {
    return (
        <div className="flex flex-row justify-between items-center p-[1.125rem] bg-red-100 rounded-small-5px border ">
            <div className="flex flex-col">
                <TextGrey className="text-xs">{props.offerData.vendorName ?? "PT Sangkuriang Indah"}</TextGrey>
                <TextGrey className="text-base font-medium">
                    {props.offerData.totalOffer
                        ? formatDisplayCurrency(props.offerData.totalOffer)
                        : formatDisplayCurrency(540000000000)}{" "}
                    IDR
                </TextGrey>
            </div>
            <AntdDivider type="vertical" className="" />
            <div className="text-xs w-[43%]">
                <TextGreyDarken className="font-bold">Reason</TextGreyDarken>{" "}
                <TextGreyDarken>
                    {!props.offerData.disqualifyReason ? <div>-</div> : <div>{props.offerData.disqualifyReason}</div>}
                </TextGreyDarken>
            </div>
            <AntdDivider type="vertical" className="" />
            <div className="flex flex-col gap-2 items-end">
                <TextGreyDarken className="text-xs">
                    {props.offerData.offerDate
                        ? format(props.offerData.offerDate, "dd/MM/yyyy - HH:mm:ss")
                        : format(
                              new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
                              "dd/MM/yyyy - HH:mm:ss",
                          )}
                </TextGreyDarken>
                <div className="flex gap-3 justify-end">
                    <Image src={XCircleRedIcon} alt="plus" width={13} height={13} />
                    <span className="text-sm text-accent-red font-bold">Disqualified</span>
                </div>
                <TextGreyDarken className="text-xs text-end">
                    <span className="font-bold">PIC</span>{" "}
                    {props.offerData.vendorPIC ? (
                        <RenderPICName picName={props.offerData.vendorPIC} />
                    ) : (
                        "Salma Elimatul Sadiah"
                    )}
                </TextGreyDarken>
            </div>
        </div>
    )
}

function VendorDisplayOfferLog() {
    return <div>BuyerAuctionOfferLog</div>
}

export { BuyerDisplayOfferLog, VendorDisplayOfferLog }
