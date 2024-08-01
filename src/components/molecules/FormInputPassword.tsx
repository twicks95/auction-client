import React, { RefObject, useImperativeHandle, useRef } from "react"
import { AntdInputPassword } from "../atoms/input/AntdInput"
import { InputProps, InputRef } from "antd"
import InputLabel from "../atoms/text/InputLabel"

interface FormInputPasswordProps extends InputProps {
    readonly label?: string
    readonly passingforminputpasswordref?: RefObject<FormInputPasswordRef>
}

export interface FormInputPasswordRef {
    getInputPasswordRef: () => void
}

function FormInputPassword(props: FormInputPasswordProps) {
    const inputPasswordRef = useRef<InputRef>(null)

    useImperativeHandle(props.passingforminputpasswordref, () => ({
        getInputPasswordRef: () => inputPasswordRef.current?.input?.value,
    }))

    return (
        <div className="flex flex-col gap-2">
            <InputLabel>{props.label ?? "Password"}</InputLabel>
            <AntdInputPassword
                passingref={inputPasswordRef}
                {...{ name: "password", placeholder: props.placeholder ?? "Enter your password", ...props }}
            />
        </div>
    )
}

export default FormInputPassword
