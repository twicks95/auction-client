import React from "react"
import { theme } from "@/shared/constant"
import ChevronIcon from "@/assets/icon/line/chevron-up-blue-deep-ocean.svg"
import Image from "next/image"

interface Props {
    readonly collapsed: boolean
    readonly onClick: () => void
}

function ToggleSidebar(props: Props) {
    return (
        <button
            className={`absolute -bottom-3 -right-3 flex justify-center items-center h-6 w-6 rounded-full border-2 z-50`}
            style={{
                backgroundColor: theme.colors.pristineGrey,
                borderColor: theme.colors.blueDeepOcean,
            }}
            onClick={props.onClick}
        >
            <Image
                src={ChevronIcon}
                alt="hide-expand"
                width={9}
                priority
                className={`transition-all ${!props.collapsed ? "-rotate-90" : "rotate-90"} text-blue-800`}
            />
        </button>
    )
}

export default React.memo(ToggleSidebar)
