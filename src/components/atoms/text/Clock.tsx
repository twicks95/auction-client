"use client"
import { format } from "date-fns"
import { useEffect, useState } from "react"

interface State {
    hours: string
    minutes: string
    seconds: string
}

function Clock(): JSX.Element {
    const [time, setTime] = useState<State>({ hours: "00", minutes: "00", seconds: "00" })
    useEffect(() => {
        setInterval(() => {
            const today: Date = new Date()
            setTime((prev) => ({
                ...prev,
                hours: format(today, "HH"),
                minutes: format(today, "mm"),
                seconds: format(today, "ss"),
            }))
        }, 1000)
    }, [])

    return <span>{`${time.hours}:${time.minutes}:${time.seconds}`}</span>
}

export default Clock
