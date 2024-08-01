import { Props } from "@/interface/componentPropsInterface"
import React from "react"

interface ContainerGridProps extends Props {
    readonly children: React.ReactNode
    readonly className?: string
}

function ContainerGrid(props: ContainerGridProps) {
    return (
        <div key={props.key} id={props.id} className={`grid ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default ContainerGrid
