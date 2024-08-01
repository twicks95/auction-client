"use client"
import { theme } from "@/shared/constant"
import React, { useEffect, useState } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import AntdTag from "../atoms/tag/Tag"
import TimerDigits from "../atoms/text/TimerDigits"

interface Props {
    readonly children?: React.ReactNode
    readonly sessionStatus?: string
    readonly totalSessionDurationInSeconds?: number
    readonly remainingSessionDurationInSeconds?: number
}

function CircleCountdown(props: Props) {
    const {
        sessionStatus = "session_status",
        totalSessionDurationInSeconds = 120,
        remainingSessionDurationInSeconds = 120,
    } = props
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    useEffect(() => {
        !remainingSessionDurationInSeconds ? setIsPlaying(false) : setIsPlaying(true)
    }, [remainingSessionDurationInSeconds])

    return (
        <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={totalSessionDurationInSeconds}
            initialRemainingTime={remainingSessionDurationInSeconds}
            colors={[
                `#${theme.colors.green.slice(1)}`,
                `#${theme.colors.warning.slice(1)}`,
                `#${theme.colors.accentRed.slice(1)}`,
                `#${theme.colors.red.slice(1)}`,
            ]}
            colorsTime={[totalSessionDurationInSeconds, totalSessionDurationInSeconds / 3, 15, 0]}
            rotation="counterclockwise"
            strokeWidth={17}
            size={180}
            trailColor={`#${theme.colors.ultraLightGrey.slice(1)}`}
        >
            {({ remainingTime, color }) => {
                const hours = Math.floor(remainingTime / 3600)
                const minutes = Math.floor((remainingTime % 3600) / 60)
                const seconds = remainingTime % 60
                return (
                    <div className="flex flex-col justify-center items-center" role="timer" aria-live="assertive">
                        <span className="text-base" style={{ color: theme.colors.whiteDarken30 }}>
                            Timer
                        </span>
                        <TimerDigits color={color} hours={hours} minutes={minutes} seconds={seconds} />
                        <AntdTag status={sessionStatus} />
                        {props.children}
                    </div>
                )
            }}
        </CountdownCircleTimer>
    )
}

export default CircleCountdown
