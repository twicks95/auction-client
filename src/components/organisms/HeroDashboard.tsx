"use client"

import Image from "next/image"
import React from "react"
import HeroDashboardIllustration from "@/assets/illustration/dashboard/dashboard-header-illustration.svg"
import HeroTextDashboard from "../molecules/HeroTextDashboard"
import BoxRoundedSmall from "../atoms/container/BoxRoundedSmall"

interface Props {
    readonly profileName?: string
    readonly lastLoginTime?: Date
}

function HeroDashboard(props: Props) {
    return (
        <BoxRoundedSmall className="h-32 lg:h-36 flex bg-blue-deep-ocean">
            <div className="relative h-full w-[30%] mr-8">
                <Image
                    src={HeroDashboardIllustration}
                    alt="hero-illustration"
                    priority
                    className="absolute left-0 bottom-0"
                />
            </div>
            <div className="flex items-center w-[70%]">
                <HeroTextDashboard profileName={props.profileName} lastLoginTime={props.lastLoginTime} />
            </div>
        </BoxRoundedSmall>
    )
}

export default HeroDashboard
