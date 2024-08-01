import AntdButton from "@/components/atoms/button/AntdButton"
import TextGrey from "@/components/atoms/text/TextGrey"
import RegistrationForm from "@/components/organisms/RegistrationForm"
import BuyerLoginRegisterTemplate from "@/components/templates/BuyerLoginRegisterTemplate"
import { routes } from "@/shared/constant"
import { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
    title: "Ruang Auction | Buyer Registration",
    description: "Registration page for buyer of Ruang Auction",
}

function BuyerRegistration() {
    return (
        <BuyerLoginRegisterTemplate>
            <RegistrationForm />
            <div className="flex justify-center items-center gap-4">
                <TextGrey className="text-sm">{"Already have an account ?"}</TextGrey>
                <Link href={routes.login}>
                    <AntdButton type="link" linktype="primary" className="underline !font-medium">
                        Log In
                    </AntdButton>
                </Link>
            </div>
        </BuyerLoginRegisterTemplate>
    )
}

export default BuyerRegistration
