"use client"
import Image from "next/image"
import React from "react"
import RuangAuctionLogo from "@/assets/brand/auction-banner-text-white.svg"
import LandingNavbarMenu from "./LandingNavbarMenu"
import AntdButton from "../atoms/button/AntdButton"
import DropdownLanguage from "../molecules/DropdownLanguage"
import AntdDivider from "../atoms/divider/AntdDivider"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/constant"
function LandingTopNavbar() {
    const { push } = useRouter()
    return (
        <div className="sticky top-0 h-20 bg-blue-deep-ocean w-full flex items-center gap-10 px-6 z-50">
            <Image
                src={RuangAuctionLogo}
                alt="RuangAuctionLogo"
                width={0}
                height={0}
                priority
                style={{ width: "auto", height: "2rem" }}
            />
            <div className="flex justify-between items-center w-full h-full">
                <LandingNavbarMenu />
                <div className="flex items-center gap-10">
                    <DropdownLanguage className="text-white" />
                    <AntdDivider type="vertical" className="!m-0 !p-0" />
                    <AntdButton
                        type="link"
                        className="!text-white font-medium text-base tracking-wide"
                        onClick={() => push(routes.login)}
                    >
                        Login
                    </AntdButton>
                    <AntdButton
                        type="primary"
                        size="large"
                        className="!bg-pristine-sat-40 hover:!bg-pristine-base !text-sm !font-bold tracking-wide"
                    >
                        Uji Coba Gratis
                    </AntdButton>
                </div>
            </div>
        </div>
    )
}

export default LandingTopNavbar
