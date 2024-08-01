import Image from "next/image"
import React from "react"
import InfoIcon from "@/assets/icon/solid/info-circle-fill-blue.svg"
import TextGrey from "../atoms/text/TextGrey"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AlertInfoCard from "./AlertInfoCard"

interface Props {
    readonly illustrationIcon: string
    readonly alertMessage?: string
    readonly illustrationMessage?: string
    readonly withAlert?: boolean
    readonly illustrationClassName?: string
    readonly withIllustrationMessage?: boolean
}

function EmptyCardNotification(props: Props) {
    return (
        <div>
            {props.withAlert ? (
                <AlertInfoCard alertMessage={props.alertMessage}/>
            ) : (
                <></>
            )}

            <div className="flex flex-col justify-center items-center gap-2 mt-5">
                <Image
                    src={props.illustrationIcon}
                    alt="illustration"
                    width={72}
                    height={72}
                    className={props.illustrationClassName}
                />
                {props.withIllustrationMessage ? (
                    <TextGrey className="text-xs font-medium">
                        {props.illustrationMessage ?? "No list available. Let’s try to add one!"}
                    </TextGrey>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default EmptyCardNotification
