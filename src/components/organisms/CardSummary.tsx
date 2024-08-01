import Image from "next/image"
import React from "react"
import CardShadow from "../atoms/container/CardShadow"
import AnimatedCounter from "../atoms/animated/AnimatedCounter"

interface Props {
    readonly image: string
    readonly label: string
    readonly totalSummary: number
}

function CardSummary(props: Props): JSX.Element {
    return (
        <CardShadow className="p-6 bg-pristine-grey text-blue-deep-ocean">
            <div className="flex gap-4">
                <Image src={props.image} alt="icon" height={40} width={40} />
                <div className="flex flex-col gap-1 font-medium">
                    <p className="text-xs">{props.label}</p>
                    <p className="text-2xl">
                        <AnimatedCounter to={props.totalSummary} type="number" />
                        {/* {props.totalSummary} */}
                    </p>
                </div>
            </div>
        </CardShadow>
    )
}

export default CardSummary
