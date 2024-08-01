import { AntdButtonConfigProvider } from "@/components/provider/AntdConfigProvider"
import { Button, ButtonProps } from "antd"
import React from "react"

interface AntdButtonProps extends ButtonProps {
    customtype?: "danger" | "danger-secondary" | "success"
    linktype?: "primary" | "secondary"
}

function AntdButton(props: Readonly<AntdButtonProps>) {
    /**
     * "default" type means a secondary button
     * when customtype is provided either "danger" or "success" then it will be set as a primary button
     */
    const {
        type = props.customtype === "danger" ||
        props.customtype === "danger-secondary" ||
        props.customtype === "success"
            ? "primary"
            : "default",
    } = props
    return (
        <AntdButtonConfigProvider
            buttonSize={props.size}
            buttonType={type}
            linktype={props.linktype}
            buttonCustomType={props.customtype}
            // loading={props.loading}
        >
            {props.type === "link" ? (
                <Button {...{ className: "text-[14px]", ...props }} onClick={props.onClick}>
                    {props.children}
                </Button>
            ) : (
                <Button
                    {...{ type, ...props }}
                    onClick={props.onClick}
                    // disabled={props.loading || props.disabled ? true : false}
                >
                    {props.children}
                </Button>
            )}
        </AntdButtonConfigProvider>
    )
}

export default AntdButton
