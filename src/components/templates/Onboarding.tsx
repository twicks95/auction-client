"use client"
import React, { useState } from "react"
import OnboardingGeneralInfo from "../organisms/OnboardingGeneralInfo"
import Image from "next/image"
import AuctionBrand from "@/assets/brand/auction-banner.png"
import { Steps } from "antd"
import OnboardingAddressInfo from "../organisms/OnboardingAddressInfo"
import OnBoardingLegalInfo from "../organisms/OnBoardingLegalInfo"
function OnBoarding() {
    const [current, setCurrent] = useState(0)

    const onChange = (value: number) => {
        console.log("onChange:", value)
        setCurrent(value)
    }

    return (
        <div className="grid grid-flow-col grid-cols-12">
            <div className="relative h-full col-span-2">
                <div className="sticky pl-11 top-8 h-6">
                    <Image
                        src={AuctionBrand}
                        alt="-ruang-auction-logo"
                        width={0}
                        height={0}
                        priority
                        style={{ width: "auto", height: "100%" }}
                    />
                </div>
            </div>

            <div className="flex justify-center py-28 col-start-3 col-span-8 w-full">
                <div className="flex flex-col gap-10 justify-center h-fit w-[60%]">
                    <OnboardingGeneralInfo />
                    <OnboardingAddressInfo />
                    <OnBoardingLegalInfo />
                </div>
            </div>

            <div className="relative col-start-11 col-span-2">
                <div className="sticky top-0 pt-32 flex justify-center">
                    <Steps
                        current={current}
                        onChange={onChange}
                        direction="vertical"
                        items={[
                            {
                                title: "Step 1",
                                description: "General Info",
                            },
                            {
                                title: "Step 2",
                                description: "Address Info",
                            },
                            {
                                title: "Step 3",
                                description: "Legal Info",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default OnBoarding
