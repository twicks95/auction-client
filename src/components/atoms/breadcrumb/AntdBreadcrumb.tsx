"use client"
import { Breadcrumb } from "antd"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

function AntdBreadcrumb() {
    const pathName = usePathname()
    const [items, setItems] = useState([{title: ""}])

    useEffect(() => {
        if (pathName) {
            const pathItems = pathName.split("/").slice(1)
            const breadcrumb = pathItems
                .map((path) => {
                    if (path.toString() !== "buyer") {
                        return { title: path }
                    }
                    return null
                })
                .filter(Boolean)
            console.log({ pathItems, breadcrumb })
            setItems(breadcrumb)
        }
    }, [pathName])

    return <Breadcrumb className="!text-xs" items={items} />
}

export default AntdBreadcrumb
