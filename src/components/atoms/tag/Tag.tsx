import { theme } from "@/shared/constant"
import { Tag } from "antd"
import React from "react"

type Props = Readonly<{
    children?: React.ReactNode
    status: string
}>

enum StatusDisplay {
    ATTEND = "Attend",
    CANCEL = "Cancel",
    CANCELED = "Canceled",
    CLOSED = "Closed",
    DONE = "Done",
    DRAFT = "Draft",
    END = "End",
    ON_GOING = "On Going",
    OPEN = "Open",
    PASSED = "Passed",
    NOT_ATTEND = "Not Attend",
    NOT_CONFIRMED = "Not Confirmed",
    NOT_PASSED = "Not Passed",
    NOT_STARTED = "Not Started",
}
enum StatusDB {
    ATTEND = "ATTEND",
    CANCEL = "CANCEL",
    CANCELED = "CANCELED",
    CLOSED = "CLOSED",
    DONE = "DONE",
    DRAFT = "DRAFT",
    END = "END",
    ON_GOING = "ON_GOING",
    OPEN = "OPEN",
    PASSED = "PASSED",
    NOT_ATTEND = "NOT_ATTEND",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    NOT_PASSED = "NOT_PASSED",
    NOT_STARTED = "NOT_STARTED",
}

function AntdTag(props: Props) {
    const setDisplayedStatus = (status: string) => {
        let statusLabel: string = ""
        switch (status) {
            case StatusDB.ATTEND:
                statusLabel = StatusDisplay.ATTEND
                break
            case StatusDB.CANCEL:
                statusLabel = StatusDisplay.CANCEL
                break
            case StatusDB.CANCELED:
                statusLabel = StatusDisplay.CANCELED
                break
            case StatusDB.CLOSED:
                statusLabel = StatusDisplay.CLOSED
                break
            case StatusDB.DONE:
                statusLabel = StatusDisplay.DONE
                break
            case StatusDB.DRAFT:
                statusLabel = StatusDisplay.DRAFT
                break
            case StatusDB.END:
                statusLabel = StatusDisplay.END
                break
            case StatusDB.NOT_ATTEND:
                statusLabel = StatusDisplay.NOT_ATTEND
                break
            case StatusDB.NOT_CONFIRMED:
                statusLabel = StatusDisplay.NOT_CONFIRMED
                break
            case StatusDB.NOT_PASSED:
                statusLabel = StatusDisplay.NOT_PASSED
                break
            case StatusDB.NOT_STARTED:
                statusLabel = StatusDisplay.NOT_STARTED
                break
            case StatusDB.ON_GOING:
                statusLabel = StatusDisplay.ON_GOING
                break
            case StatusDB.OPEN:
                statusLabel = StatusDisplay.OPEN
                break
            case StatusDB.PASSED:
                statusLabel = StatusDisplay.PASSED
                break
            default:
                break
        }

        return statusLabel
    }

    const setColor = (status: string) => {
        let colorHex: string = ""
        switch (status) {
            case StatusDB.ATTEND:
                colorHex = theme.colors.green
                break
            case StatusDB.CANCEL:
            case StatusDB.CANCELED:
            case StatusDB.CLOSED:
            case StatusDB.NOT_PASSED:
            case StatusDB.NOT_ATTEND:
            case StatusDB.END:
                colorHex = theme.colors.accentRed
                break
            case StatusDB.OPEN:
                colorHex = theme.colors.blue
                break
            case StatusDB.ON_GOING:
                colorHex = theme.colors.purple
                break
            case StatusDB.DRAFT:
            case StatusDB.NOT_STARTED:
                colorHex = theme.colors.whiteDarken30
                break
            default:
                break
        }

        return colorHex
    }

    return (
        <Tag color={`${setColor(props.status)}`} className="!text-[10px] !m-0 !rounded-3xl !px-3">
            {setDisplayedStatus(props.status)}
        </Tag>
    )
}

export default AntdTag
