import React from "react"
import type { DropdownProps, MenuProps } from "antd"
import { Dropdown, Space } from "antd"
import ChevronDown from "@/assets/icon/line/chevron-down-grey.svg"
import Image from "next/image"

interface Props extends DropdownProps {
    readonly className?: string
    readonly items: MenuProps["items"]
    readonly onClick?: MenuProps["onClick"]
    readonly showIcon?: boolean
}

function AntdDropdown(props: Props) {
    return (
        <Dropdown
            className={`flex cursor-pointer !justify-between !items-center ${props.className}`}
            menu={{ items: props.items, onClick: props.onClick }}
            trigger={["click"]}
            arrow={props.arrow ?? true}
            placement={props.placement ?? "bottom"}
        >
            <div className="flex justify-between items-center gap-2">
                {props.children ?? "dropdown"}
                {props.showIcon ?? <Image src={ChevronDown} alt="chevron-down" width={9} />}
            </div>
        </Dropdown>
    )
}

export default AntdDropdown
