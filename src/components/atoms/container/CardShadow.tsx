import React from "react"
import { Props } from "@/interface/componentPropsInterface"

interface CardShadowProps extends Props {
    readonly children: React.ReactNode
    readonly shadow?: Shadow
}

export enum Shadow {
    NONE = "shadow-none",
    SMALL = "shadow-auction-sm",
    MEDIUM = "shadow-auction-md",
}

function CardShadow(props: CardShadowProps) {
    return (
        <div className={`${props.shadow ?? "shadow-auction-md"} rounded-small-5px ${props.className}`} style={{ ...props.style }}>
            {props.children}
        </div>
    )
}

export default CardShadow
