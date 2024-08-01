"use client"

import React, { useEffect, useState } from "react"
import AntdDropdown from "../atoms/antd/Dropdown/Dropdown"
import Image from "next/image"
import FlagEN from "@/assets/lang/flag-en.svg"
import FlagID from "@/assets/lang/flag-id.svg"
import { Avatar, MenuProps } from "antd"
import { Props } from "@/interface/componentPropsInterface"

const items: MenuProps["items"] = [
    {
        key: "EN",
        label: "English",
        icon: <Image src={FlagEN} alt="flag-en" />,
    },
    {
        key: "ID",
        label: "Indonesia",
        icon: <Image src={FlagID} alt="flag-id" />,
    },
]

function DropdownLanguage(props: Props) {
    const [language, setLanguage] = useState<string>("EN")

    useEffect(() => {
        const lang = localStorage.getItem("lang")
        lang && setLanguage(lang)
    }, [language])

    const handleSelectLanguage: MenuProps["onClick"] = (e) => {
        console.log(e)
        setLanguage(e.key)
    }

    return (
        <div>
            <AntdDropdown
                items={items}
                placement="bottomRight"
                onClick={handleSelectLanguage}
                className={props.className}
            >
                <div className="flex items-center gap-2">
                    <Avatar
                        size="default"
                        src={<Image src={language === "EN" ? FlagEN : FlagID} alt="flag" fill={true} />}
                    />
                    <span>{language ?? "Language"}</span>
                </div>
            </AntdDropdown>
        </div>
    )
}

export default DropdownLanguage
