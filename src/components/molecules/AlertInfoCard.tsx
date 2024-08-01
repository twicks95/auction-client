import React from "react"
import InfoIcon from "@/assets/icon/solid/info-circle-fill-blue.svg"
import Image from "next/image"
import TextGreyDarken from "../atoms/text/TextGreyDarken"

interface AlertInfoCardProps {
    readonly alertMessage?: string
}

function AlertInfoCard(props: AlertInfoCardProps) {
    return (
        <div className="flex items-center gap-4 bg-blue-ocean-100 h-10 rounded-small-5px px-4 mb-7">
            <Image src={InfoIcon} alt="info" height={0} width={0} />
            <TextGreyDarken className="text-xs font-medium">{props.alertMessage ?? "Alert message"}</TextGreyDarken>
        </div>
    )
}

export default AlertInfoCard
