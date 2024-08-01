import { AntdRadioConfigProvider } from "@/components/provider/AntdConfigProvider"
import { Radio, RadioProps } from "antd"
import { forwardRef } from "react"

interface AntdRadioProps extends RadioProps {
    label: string
}
export const AntdRadio = forwardRef<any, AntdRadioProps>((props, ref) => {
    return (
        <AntdRadioConfigProvider>
            <Radio ref={ref} {...props}>
                {props.label ?? "radio"}
            </Radio>
        </AntdRadioConfigProvider>
    )
})
AntdRadio.displayName = "AntdRadio"
