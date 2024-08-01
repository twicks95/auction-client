import React from "react"

interface Props {
    readonly onClick?: () => void
}

function HamburgerButton(props: Props) {
    return (
        <div className="flex flex-col gap-1" onClick={props.onClick}>
            <div className="h-[2.5px] w-5 rounded-lg bg-blue-deep-ocean" />
            <div className="h-[2.5px] w-5 rounded-lg bg-blue-deep-ocean" />
            <div className="h-[2.5px] w-5 rounded-lg bg-blue-deep-ocean" />
        </div>
    )
}

export default HamburgerButton
