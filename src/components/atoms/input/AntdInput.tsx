import React, { forwardRef, Ref, RefObject, useImperativeHandle, useRef } from "react"
import { GetProps, Input, InputNumber, InputNumberProps, InputProps, InputRef } from "antd"
import { AntdInputConfigProvider } from "@/components/provider/AntdConfigProvider"
const { Password, OTP } = Input

export function AntdInputPassword(props: Readonly<InputProps> & { passingref: RefObject<InputRef> }) {
    return (
        <AntdInputConfigProvider>
            <Password ref={props.passingref} {...{ size: props.size ?? "middle", ...props }} />
        </AntdInputConfigProvider>
    )
}

export function AntdInputNumber(props: Readonly<InputNumberProps>) {
    return (
        <AntdInputConfigProvider>
            <InputNumber
                type="number"
                {...{ size: props.size ?? "middle", controls: props.controls ?? false, ...props }}
            />
        </AntdInputConfigProvider>
    )
}

type OTPProps = GetProps<typeof OTP>
const InputOTP = OTP // prevent SonarLint warning to use PascalCase for component
export function AntdInputOTP(props: Readonly<OTPProps>) {
    return (
        <AntdInputConfigProvider>
            <InputOTP {...{ size: props.size ?? "middle", ...props }} />
        </AntdInputConfigProvider>
    )
}

export const AntdInputText = (props: InputProps & { passingref: RefObject<InputRef> }) => {
    return (
        <AntdInputConfigProvider>
            <Input ref={props.passingref} {...{ size: props.size ?? "middle", ...props }} />
        </AntdInputConfigProvider>
    )
}
