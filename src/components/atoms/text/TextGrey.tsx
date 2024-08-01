import { Props } from "@/interface/componentPropsInterface"
import React from "react"

function TextGrey(props: Props) {
    return <span {...props} className={`text-white-darken-30 ${props.className}`}>{props.children}</span>
}

export default TextGrey
