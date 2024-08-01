"use client"

import React, { useEffect, useState } from "react"
import AntdDropdown from "../atoms/antd/Dropdown/Dropdown"
import Image from "next/image"
import KeyLineGrey from "@/assets/icon/line/key-line-grey-sm.svg"
import LogoutLineGrey from "@/assets/icon/line/logout-line-grey-sm.svg"
import { Avatar, MenuProps } from "antd"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/constant"

interface Props {
    readonly profileName: string
}

function DropdownProfile(props: Props) {
    const { profileName } = props
    const [avatarName, setAvatarName] = useState<string>("")
    const router = useRouter()

    useEffect(() => {
        let avaName: string = ""
        const slice: string[] = profileName.split(" ").slice(0, 2)
        slice.forEach((part) => {
            avaName = avaName.concat(part.slice(0, 1))
        })
        avaName && setAvatarName(avaName)
        console.log({ slice, avaName })
        return () => {}
    }, [profileName])

    const items: MenuProps["items"] = [
        {
            key: "1",
            type: "group",
            label: "Profile",
            children: [
                {
                    key: "1-1",
                    label: "Change password",
                    icon: <Image src={KeyLineGrey} alt="change-password" />,
                },
            ],
        },
        { type: "divider" },
        {
            key: "2",
            label: "Log Out",
            icon: <Image src={LogoutLineGrey} alt="logout" />,
            onClick: () => {
                window.localStorage.clear()
                router.push(routes.login)
            },
        },
    ]
    return (
        <div className="flex items-center gap-2">
            <AntdDropdown items={items} placement="bottomRight">
                <div className="flex items-center gap-2">
                    <Avatar size="default" gap={6} className="!bg-emerald-400">
                        {avatarName}
                    </Avatar>
                    <span>{profileName ?? "profile_name"}</span>
                </div>
            </AntdDropdown>
        </div>
    )
}

export default DropdownProfile
