import { AntdSelectConfigProvider } from "@/components/provider/AntdConfigProvider"
import { Select, SelectProps, Spin } from "antd"
import React from "react"
import ChevronDownIcon from "@/assets/icon/line/chevron-down-grey.svg"
import Image from "next/image"
function AntdSelect(props: Readonly<SelectProps>) {
    return (
        <AntdSelectConfigProvider>
            <Select
                // variant="borderless"
                suffixIcon={
                    props.loading ? (
                        <Spin size="small" />
                    ) : (
                        <Image src={ChevronDownIcon} width={12} height={12} alt="arrow" priority />
                    )
                }
                placeholder="Choose One"
                {...props}
            />
        </AntdSelectConfigProvider>
    )
}

export default AntdSelect
