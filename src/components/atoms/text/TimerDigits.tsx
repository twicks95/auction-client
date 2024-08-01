import React from "react"
import { addZero } from "@/lib/generalUtils"

interface Props {
    readonly color?: string
    readonly hours: number
    readonly minutes: number
    readonly seconds: number
}

function TimerDigits(props: Props): JSX.Element {
    return (
        <span className="flex items-center my-4 text-2xl font-medium" style={{ color: props.color }}>
            {`${addZero(props.hours)} : ${addZero(props.minutes)} : ${addZero(props.seconds)}`}
        </span>
    )
}

export default TimerDigits
