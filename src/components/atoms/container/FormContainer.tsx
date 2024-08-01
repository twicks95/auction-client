import { Props } from "@/interface/componentPropsInterface"
import React from "react"

function FormContainer(props: Props) {
    return (
        <div key={props.key} id={props.id} className={`grid grid-cols-1 gap-4 ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default FormContainer
