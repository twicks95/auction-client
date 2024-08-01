"use client"
import React, { ReactElement, ReactNode } from "react"
import AntdButton from "../atoms/button/AntdButton"
import { useRouter } from "next/navigation"

function PageFooter(props: { className?: string; customFooter?: ReactNode; children?: ReactNode }) {
    const { back } = useRouter()
    return (
        <div className={`flex justify-center space-x-4 ${props.className}`}>
            {props.customFooter ?? (
                <>
                    <AntdButton type="default" size="large" onClick={() => back()}>
                        Back
                    </AntdButton>
                    <AntdButton type="primary" customtype="danger" size="large">
                        Cancel Auction
                    </AntdButton>
                </>
            )}
            {props.children}
        </div>
    )
}

export default PageFooter
