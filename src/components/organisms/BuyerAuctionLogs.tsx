"use client"
import React, { useRef, useState } from "react"
import { AnimatedList } from "../magicui/animated-list"
import { BuyerDisplayOfferLog, BuyerDisplayOfferLogRef } from "./AuctionOfferLog"
import { Button } from "antd"

export interface AuctionVendorOffer {
    readonly id: number
    readonly vendorName: string
    readonly vendorPIC: string
    readonly offerDate: Date
    readonly totalOffer: number
    readonly requestToDisqualified: boolean
    readonly isDisqualified: boolean
    readonly disqualifyReason: React.ReactNode | null
}

// interface BuyerAuctionLogsProps {
//     passingbuyerauctionlogsref: RefObject<BuyerAuctionLogsRef>
// }

// export interface BuyerAuctionLogsRef {
//     pushNewOffer?: (offerObject: any) => void
// }

const mockOffers = [
    {
        id: 1,
        vendorName: "PT Membership CI",
        vendorPIC: "Teguh Wicaksono",
        offerDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
        totalOffer: 8000000000,
        requestToDisqualified: true,
        isDisqualified: false,
        disqualifyReason: <p>Sorry, i have to regret this offer. Please approve. Thanks!</p>,
    },
    {
        id: 2,
        vendorName: "PT Sangkuriang Indah",
        vendorPIC: "Salma Elimatul Sadiah",
        offerDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
        totalOffer: 7550000000,
        requestToDisqualified: false,
        isDisqualified: false,
        disqualifyReason: null,
    },
    {
        id: 3,
        vendorName: "PT Membership CI",
        vendorPIC: "Teguh Wicaksono",
        offerDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
        totalOffer: 6250000000,
        requestToDisqualified: false,
        isDisqualified: false,
        disqualifyReason: null,
    },
    {
        id: 4,
        vendorName: "PT Sangkuriang Indah",
        vendorPIC: "Salma Elimatul Sadiah Panjang Banget Namanya",
        offerDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
        totalOffer: 5000000000,
        requestToDisqualified: false,
        isDisqualified: true,
        disqualifyReason: <p>Unwanted offer. Accidentally submitted the wrong price by me. Please approve. Thanks</p>,
    },
]

function BuyerAuctionLogs() {
    // const offersRef = useRef<AuctionVendorOffer[]>([])
    const buyerdisplayofferlogref = useRef<BuyerDisplayOfferLogRef>(null)
    const [vendorOffers, setVendorOffers] = useState<AuctionVendorOffer[]>(mockOffers)

    // useImperativeHandle(props.passingbuyerauctionlogsref, () => ({
    const pushNewOffer = () => {
        const offer = {
            id: vendorOffers.length,
            vendorName: "PT Membership CI",
            vendorPIC: "Teguh Wicaksono",
            offerDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
            totalOffer: 4000000000,
            requestToDisqualified: false,
            isDisqualified: false,
            disqualifyReason: <p>Sorry, i have to regret this offer. Please approve. Thanks!</p>,
        }
        setVendorOffers((prev) => prev.concat(offer))
    }
    // }))

    const handleDisqualify = () => {
        // console.log({ offerId })
        // setVendorOffers((prev) => {
        //     prev.find((offer) => offer.id === offerId)
        // })
        buyerdisplayofferlogref.current?.setToDisqualified()
    }

    const remapVendorOffers = (updatedVendorOfferData: AuctionVendorOffer) => {
        setVendorOffers((prev) => {
            /**
             * Find index of updated object
             * Get list of offers object before updated object ...prev.slice(0, arrayId)
             * Attach updated object ...[updatedVendorOfferData]
             * Get list of offers object after updated object ...prev.slice(arrayId + 1)
             */
            const arrayId = prev.findIndex((offer) => offer.id === updatedVendorOfferData.id)
            console.log({ prev, arrayId })
            /**
             * Why we use spread operator?
             * It is mandatory to use spread operator to trigger re-render if using react useState setter callback
             */
            return prev.length === 1 // condition if only one offer exist
                ? [...prev.slice(0, 0), { ...updatedVendorOfferData }] // remove item and add new updated one
                : [...prev.slice(0, arrayId), { ...updatedVendorOfferData }, ...prev.slice(arrayId + 1)]
        })
    }

    const wsListenUpdateToRequestDisqualified = (updatedVendorOfferData?: AuctionVendorOffer) => {
        const mockUpdatedVendorOfferData = {
            id: 2,
            vendorName: "PT Sangkuriang Indah",
            vendorPIC: "Salma Elimatul Sadiah",
            offerDate: new Date("Mon Jul 29 2024 12:25:22 GMT+0700 (Western Indonesia Time)"),
            totalOffer: 7550000000,
            requestToDisqualified: true,
            isDisqualified: false,
            disqualifyReason: (
                <p>Aduuh maaf, salah input. Mau inptu 8M tadi. Mintol di approve dong. Makasiih... ^_^</p>
            ),
        }
        remapVendorOffers(mockUpdatedVendorOfferData)
    }

    const wsListenUpdateOfferToDisqualified = async (offerId: number): Promise<any> => {
        // Do POST API call or WS Emitter along with offerId to update vendor offer data to Database and update UI after get response

        // Example process after success POST API call
        return new Promise<AuctionVendorOffer>((resolve, reject) => {
            let error = false
            setTimeout(() => {
                const offer = vendorOffers.find((offer) => offer.id === offerId)
                if (offer) {
                    remapVendorOffers({ ...offer, requestToDisqualified: false, isDisqualified: true })
                    resolve({ ...offer, requestToDisqualified: false, isDisqualified: true })
                }
            }, 5000)

            error && reject(false)
        })
    }

    return (
        <>
            <Button size="small" type="primary" onClick={pushNewOffer}>
                Add new offer
            </Button>
            <Button size="small" type="primary" onClick={() => wsListenUpdateToRequestDisqualified()}>
                Update offer to request disqualify
            </Button>
            <AnimatedList className="bg-pristine-grey rounded-small-5px p-4 overflow-y-scroll h-full">
                {vendorOffers.map((offer, index) => (
                    <BuyerDisplayOfferLog
                        key={offer.id}
                        offerData={offer}
                        onApproveDisqualify={wsListenUpdateOfferToDisqualified}
                    />
                ))}
            </AnimatedList>
        </>
    )
}

export default BuyerAuctionLogs
