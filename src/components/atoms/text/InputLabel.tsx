import { Props } from "@/interface/componentPropsInterface"
import React from "react"

function InputLabel(props: Props) {
    return (
        <span className={`text-white-darken-30 text-sm ${props.className}`} {...props}>
            {props.children}  
        </span>
    )
}

export default InputLabel
