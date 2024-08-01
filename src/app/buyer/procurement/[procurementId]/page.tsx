"use client"
import AntdBreadcrumb from "@/components/atoms/breadcrumb/AntdBreadcrumb"
import AntdButton from "@/components/atoms/button/AntdButton"
import AntdDivider from "@/components/atoms/divider/AntdDivider"
import TextGrey from "@/components/atoms/text/TextGrey"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import Image from "next/image"
import React, { useRef } from "react"
import ArrowUpLeftIcon from "@/assets/icon/line/arrow-up-left-line-grey.svg"
import CardShadow from "@/components/atoms/container/CardShadow"
import AntdTag from "@/components/atoms/tag/Tag"
import CaretRightBlueIcon from "@/assets/icon/solid/caret-right-blue.svg"

import CardItemList from "@/components/organisms/CardItemList"
import CardVendorList from "@/components/organisms/CardVendorList"
import CardEvaluationScore from "@/components/organisms/CardEvaluationScore"
import CardAuctionSession from "@/components/organisms/CardAuctionSession"
import CardNegotiationSession from "@/components/organisms/CardNegotiationSession"
import { ConfigProvider, Steps } from "antd"
import CardProcurementInfo from "@/components/organisms/CardProcurementInfo"
import { theme } from "@/shared/constant"
import { motion, useScroll, useSpring } from "framer-motion"
import SubmitProcurementConfirmModal, {
    SubmitProcurementConfirmModalRef,
} from "@/components/organisms/modal/SubmitProcurementConfirmModal"

function ProcurementDetail() {
    const SubmitProcurementConfirmModalRef = useRef<SubmitProcurementConfirmModalRef>(null)
    const componentRef = useRef<HTMLDivElement>(null)
    const onChange = (value: number) => {
        console.log("onChange:", value)
        // setCurrent(value);
    }

    const { scrollYProgress } = useScroll() // Track scroll position
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 }) // Create a spring value
    const variants = {
        before: { opacity: 0 },
        after: { opacity: 1 },
    }
    return (
        <div className="grid grid-cols-12">
            <div className="flex flex-col gap-5 col-start-1 col-span-10 px-9 py-9">
                <AntdBreadcrumb />
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <AntdButton type="link" className="flex items-center">
                            <Image src={ArrowUpLeftIcon} alt="arrow-up-left" width={14} height={14} />
                            <TextGrey>
                                <span>Back</span>
                            </TextGrey>
                        </AntdButton>
                        <AntdDivider type="vertical" />
                        <h1>
                            <TextGreyDarken className="text-2xl font-bold">Initiation</TextGreyDarken>
                        </h1>
                        <AntdTag status="OPEN" />
                    </div>
                    <CardProcurementInfo editable={true} />
                    <CardItemList />
                    <div id="vendor-list">
                        <CardVendorList />
                    </div>
                    <CardEvaluationScore />
                    <CardAuctionSession />
                    <CardNegotiationSession />
                    <div className="flex justify-center">
                        <AntdButton
                            type="primary"
                            size="large"
                            onClick={() => SubmitProcurementConfirmModalRef.current?.open()}
                        >
                            Submit
                        </AntdButton>
                    </div>
                </div>
            </div>
            <div className="relative col-start-11 col-span-2 mt-12">
                <div className="sticky top-6 flex">
                    {/* <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: theme.colors.blueDeepOcean,
                                controlHeight: 32,
                                padding: 0,
                                lineHeight: 14
                            },
                            components: {
                                Steps: {
                                    customIconSize: 12,
                                    customIconFontSize: 12,
                                    iconSizeSM: 12,
                                    titleLineHeight: 14,
                                },
                            },
                        }}
                    >
                        <Steps
                            onChange={onChange}
                            current={2}
                            initial={3}
                            progressDot={false}
                            direction="vertical"
                            size="small"
                            className="font-medium"
                            
                            items={[
                                {
                                    title: <span>Procurement Info</span>,
                                    icon: <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} />,
                                },
                                {
                                    title: "Item List",
                                    icon: <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} />,
                                },
                                {
                                    title: "Vendor List",
                                    icon: <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} />,
                                },
                            ]}
                        />
                    </ConfigProvider> */}
                    <div>
                        <div className="flex gap-4 text-sm">
                            <Image src={CaretRightBlueIcon} alt="key-line-grey" width={10} height={10} />
                            <a
                                href="#vendor-list"
                                onClick={() => {
                                    console.log(componentRef)
                                    componentRef.current?.scrollIntoView({ behavior: "smooth" })
                                }}
                            >
                                Vendor List
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <SubmitProcurementConfirmModal passingref={SubmitProcurementConfirmModalRef} />
        </div>
    )
}

export default ProcurementDetail
