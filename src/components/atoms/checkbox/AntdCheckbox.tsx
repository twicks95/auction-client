import { AntdCheckBoxConfigProvider } from "@/components/provider/AntdConfigProvider"
import { Checkbox, CheckboxProps } from "antd"
import React from "react"

function AntdCheckbox(props: Readonly<CheckboxProps>) {
    return (
        <AntdCheckBoxConfigProvider>
            <Checkbox className="font-medium" {...props}>
                {props.children}
            </Checkbox>
        </AntdCheckBoxConfigProvider>
    )
}

export default AntdCheckbox
