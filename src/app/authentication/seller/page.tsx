"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import CardShadow, { Shadow } from "@/components/atoms/container/CardShadow"
import ContainerGrid from "@/components/atoms/container/ContainerGrid"
import TextGrey from "@/components/atoms/text/TextGrey"
import DropdownLanguage from "@/components/molecules/DropdownLanguage"
import RuangAuctionBrandLogo from "@/assets/brand/auction-banner.png"
import ArrowRightBlue from "@/assets/icon/line/arrow-right-line-blue.svg"
import FormContainer from "@/components/atoms/container/FormContainer"
import FormInputEmail from "@/components/molecules/FormInputEmail"
import AntdButton from "@/components/atoms/button/AntdButton"
import FormInput from "@/components/molecules/FormInput"
import { AntdInputOTP } from "@/components/atoms/input/AntdInput"

function SellerAuthentication() {
    const [waitSecondsLeft, setWaitSecondsLeft] = useState<number>(0)
    const [waiting, setWaiting] = useState<boolean>(false)

    const handleRequestOTP = () => {
        let waitTime = 10
        setWaiting(true)
        setWaitSecondsLeft(waitTime)
        let countWaitSecond = setInterval(() => {
            if (waitTime <= 0) {
                setWaiting(false)
                return clearInterval(countWaitSecond)
            } else {
                waitTime--, setWaitSecondsLeft(waitTime)
            }
        }, 1000)
    }

    return (
        <div className="flex justify-center items-center w-screen min-h-screen px-[6.5rem]">
            <CardShadow shadow={Shadow.SMALL} className="bg-white w-full rounded-medium-12px !my-[5.625rem]">
                <ContainerGrid className="grid-cols-1 md:grid-cols-2 h-full">
                    <div className="flex flex-col justify-center items-center gap-2 ">
                        <Image
                            src={RuangAuctionBrandLogo}
                            alt="auction-brand-image"
                            height={0}
                            width={0}
                            style={{ width: "30%", height: "auto" }}
                        />
                        <span className="text-white-darken-30 text-[2rem] font-bold text-center">
                            Ruang Auction by Promise
                        </span>
                    </div>
                    <div className="flex flex-col gap-10 h-full px-9 py-14">
                        <div className="flex flex-col gap-6">
                            <FormContainer>
                                <FormInputEmail />
                                <FormInput
                                    inputElement={<AntdInputOTP size="large" length={4} defaultValue="----" />}
                                />
                                <div className="flex items-center gap-2">
                                    <AntdButton
                                        type="link"
                                        linktype="primary"
                                        className="underline !font-medium w-fit"
                                        onClick={handleRequestOTP}
                                        loading={waiting}
                                    >
                                        {waiting ? `wait ${waitSecondsLeft}s for the next request` : "Request OTP"}
                                    </AntdButton>
                                    <Image src={ArrowRightBlue} alt="arrow-right-icon" height={12} width={12} />
                                </div>
                            </FormContainer>
                            <AntdButton type="primary" size="large" onClick={() => console.log("Click")}>
                                Log in
                            </AntdButton>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <TextGrey className="text-sm">Choose Language :</TextGrey>
                            <DropdownLanguage className="px-3 py-2 border border-white-darken-15 rounded-small-5px" />
                        </div>
                    </div>
                </ContainerGrid>
            </CardShadow>
        </div>
    )
}

export default SellerAuthentication
