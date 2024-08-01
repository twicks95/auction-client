import { theme } from "@/shared/constant"
import React from "react"
import { format } from "date-fns"
interface Props {
    readonly profileName?: string
    readonly lastLoginTime?: Date
}
function HeroTextDashboard(props: Props): JSX.Element {
    const { lastLoginTime = new Date() } = props
    return (
        <div className="flex flex-col gap-[6px] lg:gap-2" style={{ color: theme.colors.blueGreyLight }}>
            <p className="font-medium text-sm lg:text-base">{`Hi, ${props.profileName ?? "profile_name"}`}</p>
            <p className="font-bold text-xl lg:text-2xl">Welcome to Ruang Auction</p>
            <p className="text-[10px] lg:text-xs">{`Last login, ${format(lastLoginTime, "dd MMMM yyyy HH:mm:ss") ?? "last_login_time"}`}</p>
        </div>
    )
}

export default HeroTextDashboard
