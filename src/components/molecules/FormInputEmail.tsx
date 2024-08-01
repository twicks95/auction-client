import React from "react"
import { AntdInputText } from "../atoms/input/AntdInput"
import { InputProps } from "antd"
import InputLabel from "../atoms/text/InputLabel"

interface FormInputProps extends InputProps {
    readonly label?: string
}

function FormInputEmail(props: FormInputProps) {
    return (
        <div className={`${props.className} flex flex-col gap-2`}>
            <InputLabel>{props.label ?? "Email"}</InputLabel>
            <AntdInputText {...{ name: "email", placeholder: props.placeholder ?? "Type email address", ...props }} />
        </div>
    )
}

export default FormInputEmail
