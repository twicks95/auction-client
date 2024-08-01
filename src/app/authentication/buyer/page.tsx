import React from "react"
import LoginForm from "@/components/organisms/LoginForm"
import TextGrey from "@/components/atoms/text/TextGrey"
import Link from "next/link"
import AntdButton from "@/components/atoms/button/AntdButton"
import DropdownLanguage from "@/components/molecules/DropdownLanguage"
import BuyerLoginRegisterTemplate from "@/components/templates/BuyerLoginRegisterTemplate"
import { routes } from "@/shared/constant"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ruang Auction | Buyer Login",
    description: "Authentication page for buyer of Ruang Auction",
}

function BuyerAuthentication() {
    return (
        <BuyerLoginRegisterTemplate>
            <LoginForm />
            <div className="flex flex-col gap-10">
                <div className="flex justify-center items-center gap-4">
                    <TextGrey className="text-sm">{"Do not have an account ?"}</TextGrey>
                    <Link href={routes.register}>
                        <AntdButton type="link" linktype="primary" className="underline !font-medium">
                            Register Now
                        </AntdButton>
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <TextGrey className="text-sm">Choose Language :</TextGrey>
                    <DropdownLanguage className="px-3 py-2 border border-white-darken-15 rounded-small-5px" />
                </div>
            </div>
        </BuyerLoginRegisterTemplate>
    )
}

export default BuyerAuthentication
