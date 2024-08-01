"use client"
import { Avatar, Drawer } from "antd"
import React, { useEffect, useState } from "react"
import HamburgerButton from "../atoms/button/HamburgerButton"
import Image from "next/image"
import KeyLineGrey from "@/assets/icon/line/key-line-grey-sm.svg"
import GearLineGrey from "@/assets/icon/line/gear-line-grey-sm.svg"
import LogoutLineGrey from "@/assets/icon/line/logout-line-grey-sm.svg"
import QuestionCircleIcon from "@/assets/icon/line/question-circle-line-grey-sm.svg"
import Link from "next/link"
const AUCTION_CLIENT_URL = process.env.NEXT_PUBLIC_AUCTION_CLIENT_URL

interface Props {
    readonly profileName: string
}

function HiddenTopMenu(props: Props) {
    const [open, setOpen] = useState<boolean>(false)
    const [avatarName, setAvatarName] = useState<string>("")
    const showDrawer = (): void => {
        setOpen(true)
    }

    const onClose = (): void => {
        setOpen(false)
    }

    useEffect(() => {
        if (props.profileName) {
            setAvatarName(
                props.profileName
                    .split(" ")
                    .map((str) => str.slice(0, 1))
                    .join("")
                    .toUpperCase(),
            )
        }
    }, [props.profileName])

    return (
        <>
            <HamburgerButton onClick={showDrawer} />
            <Drawer
                title={
                    <div className="flex items-center gap-2">
                        <Avatar size="default" gap={6} className="!bg-emerald-400 !text-[11px]">
                            {avatarName ?? "DE"}
                        </Avatar>
                        <span className="text-grey-darken-30 text-[11px]">{props.profileName}</span>
                    </div>
                }
                footer={
                    <Link
                        href={`${AUCTION_CLIENT_URL}/help/buyer`}
                        className="flex items-center gap-1 text-[12px] text-white-darken-30 hover:text-grey-darken-30"
                    >
                        <Image src={QuestionCircleIcon} alt="help" height={16} priority />
                        Help
                    </Link>
                }
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
                width={240}
                styles={{ header: { padding: 12 }, body: { padding: 12 }, footer: { padding: 12 } }}
            >
                <div className="flex flex-col gap-3 tracking-wide">
                    <div>
                        <h6 className="text-[12px] font-medium text-blue-deep-ocean mb-2">Account</h6>
                        <div className="flex flex-col gap-1">
                            <button className="flex items-center gap-1 text-[10px] text-white-darken-30 hover:text-blue-deep-ocean ml-2 transition-all">
                                <Image src={GearLineGrey} height={12} priority alt="change-password" />
                                <span>Edit profile</span>
                            </button>
                            <button className="flex items-center gap-1 text-[10px] text-white-darken-30 hover:text-blue-deep-ocean ml-2 transition-all">
                                <Image src={KeyLineGrey} height={12} priority alt="change-password" />
                                <span>Change password</span>
                            </button>
                        </div>
                    </div>
                    <div className="h-[.2px] w-full bg-white-darken-15" />
                    <button className="flex items-center gap-1 text-[10px] text-white-darken-30 hover:text-blue-deep-ocean transition-all">
                        <Image src={LogoutLineGrey} height={12} priority alt="logout" />
                        <span>Logout</span>
                    </button>
                </div>
            </Drawer>
        </>
    )
}

export default HiddenTopMenu
