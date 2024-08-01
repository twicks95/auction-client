import React from "react"
import { InputNumberProps } from "antd"
import InputLabel from "../atoms/text/InputLabel"
import { AntdInputNumber } from "../atoms/input/AntdInput"

interface FormInputNumberProps extends InputNumberProps {
    readonly formLabel?: string
    readonly containerClassName?: string
}

function FormInputNumber(props: FormInputNumberProps) {
    return (
        <div className={`${props.containerClassName} flex flex-col gap-2`}>
            <InputLabel>{props.formLabel}</InputLabel>
            <AntdInputNumber size="large" {...{ className: `w-full ${props.className}`, ...props }} />
        </div>
    )
}

export default FormInputNumber
