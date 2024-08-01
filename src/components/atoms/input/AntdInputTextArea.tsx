import React from "react"

import { Input } from "antd"
import { TextAreaProps } from "antd/es/input"
import { AntdInputConfigProvider } from "@/components/provider/AntdConfigProvider"
const { TextArea } = Input

interface AntdInputTextAreaProps extends TextAreaProps {}

function AntdInputTextArea(props: AntdInputTextAreaProps) {
    return (
        <AntdInputConfigProvider>
            <TextArea {...props} />
        </AntdInputConfigProvider>
    )
}

export default AntdInputTextArea
