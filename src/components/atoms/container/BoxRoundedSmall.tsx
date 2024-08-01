import React from "react"
import { Props } from "@/interface/componentPropsInterface"

function BoxRoundedSmall(props: Readonly<Props>) {
    return (
        <div className={`rounded-small-5px ${props.className}`} style={{ ...props.style }}>
            {props.children}
        </div>
    )
}

export default BoxRoundedSmall
