"use client"
import { theme } from "@/shared/constant"
import { ConfigProvider, Menu, MenuProps } from "antd"
import React, { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

type MenuItem = Required<MenuProps>["items"][number]

function LandingNavbarMenu() {
    const { push } = useRouter()
    const pathName = usePathname()
    const [current, setCurrent] = useState("beranda")
    const items: MenuItem[] = [
        {
            label: "Beranda",
            key: "beranda",
            className: "!flex !items-center",
            onClick: () => {
                push(pathName + "#home")
            },
        },
        {
            label: "Keunggulan",
            key: "keunggulan",
            className: "!flex !items-center",
            onClick: () => {
                push(pathName + "#benefit")
            },
        },
        {
            label: "FAQ",
            key: "faq",
            className: "!flex !items-center",
            onClick: () => {
                push(pathName + "#faq")
            },
        },
    ]
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e)
        setCurrent(e.key)
    }
    return (
        <ConfigProvider
            theme={{
                token: {
                    lineWidth: 5,
                    colorText: theme.colors.white,
                },
                components: {
                    Menu: {
                        /* here is your component tokens */
                        itemSelectedColor: theme.colors.pristineSat40,
                        itemHoverColor: theme.colors.pristineSat40,
                        horizontalItemSelectedColor: theme.colors.pristineSat40,
                    },
                },
            }}
        >
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                activeKey={current}
                className="h-full w-full !bg-transparent text-base font-medium tracking-wider"
            />
        </ConfigProvider>
    )
}

export default LandingNavbarMenu
