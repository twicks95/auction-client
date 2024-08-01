import { format } from "date-fns"
import React from "react"

function DateString() {
    const today: Date = new Date()
    const displayDate: string = format(today, "EEEE, dd MMMM yyyy")
    return <span className="tracking-wide">{displayDate}</span>
}

export default DateString
