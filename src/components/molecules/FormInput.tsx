import { Props } from "@/interface/componentPropsInterface"
import React from "react"
import InputLabel from "../atoms/text/InputLabel"

interface FormInputProps extends Props {
    readonly label?: string
    readonly inputElement?: React.ReactNode
}

function FormInput(props: FormInputProps) {
    return (
        <div className={`${props.className} flex flex-col gap-2`}>
            <InputLabel>{props.label ?? "Label"}</InputLabel>
            {props.inputElement}
        </div>
    )
}

export default FormInput
