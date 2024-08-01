"use client"
import { Props } from "@/interface/componentPropsInterface"
import React from "react"
import { usePathname } from "next/navigation"
function BuyerPageContainer(props: Props) {
    const pathName = usePathname()
    // return <div className={pathName === "/buyer/onboarding" ? "" : "px-9 py-9"}>{props.children}</div>
    return <div className={pathName === "/buyer/onboarding" ? "" : ""}>{props.children}</div>
}

export default BuyerPageContainer
