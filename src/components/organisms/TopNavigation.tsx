"use client"
import React from "react"
import DateClock from "../molecules/DateClock"
import DropdownProfile from "../molecules/DropdownProfile"
import DropdownLanguage from "../molecules/DropdownLanguage"
import Image from "next/image"
import QuestionCircleIcon from "@/assets/icon/line/question-circle-line-grey-sm.svg"
import Link from "next/link"
import AntdDivider from "../atoms/divider/AntdDivider"
import HiddenTopMenu from "./HiddenTopMenu"
import { usePathname } from "next/navigation"
const AUCTION_CLIENT_URL = process.env.NEXT_PUBLIC_AUCTION_CLIENT_URL

interface Props {
    readonly profileName: string
}

function TopNavigation(props: Props) {
    const pathName = usePathname()
    return (
        <>
            {pathName === "/buyer/onboarding" ? null : (
                <div className="bg-white shadow-sm px-9 py-8 flex justify-between items-center text-xs text-grey-darken-30">
                    <DateClock />
                    <div className="inline-block lg:hidden">
                        <HiddenTopMenu profileName={props.profileName ?? "Teguh Wicaksono"} />
                    </div>
                    <div className="hidden lg:inline-block">
                        <div className="flex items-center gap-3">
                            <DropdownLanguage />
                            <AntdDivider type="vertical" />
                            <Link href={`${AUCTION_CLIENT_URL}/help/buyer`} className="flex items-center gap-2">
                                <Image src={QuestionCircleIcon} alt="help" width={18} />
                                Help
                            </Link>
                            <AntdDivider type="vertical" />
                            <DropdownProfile profileName={props.profileName} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TopNavigation
