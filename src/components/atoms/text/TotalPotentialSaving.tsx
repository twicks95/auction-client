import React from "react"
import { Props } from "@/interface/componentPropsInterface"

interface TotalPotentialSavingProps extends Props {
    readonly children: React.ReactNode
}

function TotalPotentialSaving(props: TotalPotentialSavingProps): JSX.Element {
    return <span className="text-blue-deep-ocean font-medium">{props.children}</span>
}

export default React.memo(TotalPotentialSaving)
