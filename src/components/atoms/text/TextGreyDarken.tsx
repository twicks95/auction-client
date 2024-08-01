import { Props } from "@/interface/componentPropsInterface"
import React from "react"

function TextGreyDarken(props: Props) {
    return <span className={`text-grey-darken-40 ${props.className}`}>{props.children}</span>
}

export default TextGreyDarken
