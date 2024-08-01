"use client"

import React from "react"
import { Divider, DividerProps } from "antd"

function AntdDivider(props: Readonly<DividerProps>) {
    const { type = "horizontal" } = props
    return <Divider type={type} className={`bg-white-darken-15 ${props.className}`} />
}

export default AntdDivider
