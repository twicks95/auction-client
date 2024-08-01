import React from "react"
import CardShadow, { Shadow } from "../atoms/container/CardShadow"
import ContainerGrid from "../atoms/container/ContainerGrid"
import Image from "next/image"
import { Props } from "@/interface/componentPropsInterface"
import OnboardingAuction from "@/assets/images/onboarding-auction.png"
import RuangAuctionBrandLogo from "@/assets/brand/auction-banner-full-white.svg"

function BuyerLoginRegisterTemplate(props: Props) {
    return (
        <div className="flex justify-center items-center w-screen min-h-screen px-[6.5rem]">
            <CardShadow shadow={Shadow.SMALL} className="bg-white w-full rounded-medium-12px !my-[5.625rem]">
                <ContainerGrid className="grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative h-full rounded-medium-12px overflow-clip">
                        <Image
                            src={OnboardingAuction}
                            alt="auction-login-image"
                            height={0}
                            width={0}
                            priority
                            style={{ width: "100%", height: "auto" }}
                            className="absolute rounded-medium-12px h-fit"
                        />
                        <div className="flex flex-col justify-center items-center gap-5 bg-linear-gradient-blue-ocean absolute top-0 left-0 h-full w-full rounded-medium-12px">
                            <Image
                                src={RuangAuctionBrandLogo}
                                alt="auction-brand-image"
                                height={0}
                                width={0}
                                style={{ width: "30%", height: "auto" }}
                            />
                            <span className="text-white text-[2rem] font-bold">Ruang Auction by Promise</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 h-full px-9 py-14 ">{props.children}</div>
                </ContainerGrid>
            </CardShadow>
        </div>
    )
}

export default BuyerLoginRegisterTemplate
