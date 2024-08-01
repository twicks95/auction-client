"use client"

import { Button, ButtonProps } from "rsuite"
import "rsuite/dist/rsuite.min.css"

function RsuiteButton(props: ButtonProps) {
    return (
        <Button
            appearance={props.appearance}
            size={props.size}
            disabled={props.disabled}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default RsuiteButton
