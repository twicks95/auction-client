import React, { RefObject, useImperativeHandle, useRef } from "react"
import { AntdInputText } from "../atoms/input/AntdInput"
import { InputProps, InputRef } from "antd"
import InputLabel from "../atoms/text/InputLabel"

interface FormInputProps extends InputProps {
    readonly label?: string
    readonly passingforminputtextref?: RefObject<FormInputTextRef>
}

export interface FormInputTextRef {
    getInputTextRef: () => void
}

function FormInputText(props: FormInputProps) {
    const inputTextRef = useRef<InputRef>(null)

    useImperativeHandle(props.passingforminputtextref, () => ({
        getInputTextRef: () => inputTextRef.current?.input?.value,
    }))

    return (
        <div className={`${props.className} flex flex-col gap-2`}>
            <InputLabel>{props.label}</InputLabel>
            <AntdInputText passingref={inputTextRef} {...{ inputtype: "text", ...props }} />
        </div>
    )
}

export default FormInputText
