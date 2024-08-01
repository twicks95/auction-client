"use client"
import { theme } from "@/shared/constant"
import { ButtonProps, CheckboxProps, ConfigProvider, ConfigProviderProps } from "antd"
import React from "react"

export function AntdInputConfigProvider({ children }: Readonly<ConfigProviderProps>) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "inherit",
                    borderRadius: parseInt(theme.borderRadius.small),
                    controlHeight: 34,
                    colorBorder: theme.colors.lightGrey,
                    colorBgContainerDisabled: theme.colors.ultraLightGrey,
                    colorText: theme.colors.whiteDarken30,
                    colorError: theme.colors.error,
                    colorErrorBorderHover: theme.colors.error,
                    colorWarning: theme.colors.warning,
                    colorPrimary: theme.colors.blueOcean,
                },
                components: {
                    Input: {
                        /* here is your component tokens */
                        paddingInline: parseInt(theme.inputPadding["16px"]),
                        paddingBlock: parseInt(theme.inputPadding["12px"]),
                    },
                    InputNumber: {
                        paddingInline: parseInt(theme.inputPadding["16px"]),
                        paddingBlock: parseInt(theme.inputPadding["12px"]),
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export function AntdSelectConfigProvider({ children }: Readonly<ConfigProviderProps>) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "inherit",
                    colorPrimary: theme.colors.blueOcean,
                    controlHeight: 46,
                    controlHeightSM: 34,
                    controlHeightLG: 34,
                    controlPaddingHorizontal: parseInt(theme.inputPadding["16px"]),
                    controlPaddingHorizontalSM: parseInt(theme.inputPadding["16px"]),
                },
                components: {
                    Select: {
                        borderRadius: 5,
                        optionHeight: 34,
                        optionPadding: "12px 18px",
                        paddingLG: 16,
                        paddingMD: 16,
                        paddingSM: 16,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export function AntdRadioConfigProvider({ children }: Readonly<ConfigProviderProps>) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "inherit",
                    colorPrimary: theme.colors.blueOcean,
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

interface AntdButtonConfigProviderProps extends ConfigProviderProps {
    buttonSize: ButtonProps["size"]
    buttonType: ButtonProps["type"]
    buttonCustomType?: "danger" | "danger-secondary" | "success"
    linktype?: "primary" | "secondary"
    // loading?: boolean
}
export function AntdButtonConfigProvider(props: AntdButtonConfigProviderProps) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "inherit",
                    borderRadius: parseInt(theme.borderRadius.small),
                    colorPrimary:
                        props.buttonCustomType === "danger" || props.buttonCustomType === "danger-secondary"
                            ? theme.buttonColor.error.background.active
                            : props.buttonCustomType === "success"
                              ? theme.buttonColor.success.background.active
                              : theme.buttonColor.primary.background.active, // background for primary button
                    colorPrimaryHover:
                        props.buttonCustomType === "danger"
                            ? theme.buttonColor.error.background.hover
                            : props.buttonCustomType === "success"
                              ? theme.buttonColor.success.background.hover
                              : theme.buttonColor.primary.background.hover, // hover background for primary button
                    colorPrimaryBorder:
                        props.buttonCustomType === "danger"
                            ? theme.buttonColor.error.border.active
                            : props.buttonCustomType === "success"
                              ? theme.buttonColor.success.border.active
                              : theme.buttonColor.primary.border.active, // border for primary button
                    colorBgContainerDisabled:
                        props.buttonCustomType === "danger"
                            ? theme.buttonColor.error.background.active
                            : props.buttonCustomType === "success"
                              ? theme.buttonColor.success.background.active
                              : props.buttonType === "primary"
                                ? theme.buttonColor.primary.background.active
                                : theme.buttonColor.disabled.background, // background for disabled button
                    colorTextDisabled:
                        props.buttonCustomType === "danger"
                            ? theme.buttonColor.error.text.active
                            : props.buttonCustomType === "success"
                              ? theme.buttonColor.success.text.active
                              : props.buttonType === "primary"
                                ? theme.buttonColor.primary.text.active
                                : theme.buttonColor.disabled.text, // text color for disabled button
                    controlHeightSM: props.buttonType === "link" ? 21 : parseInt(theme.buttonHeight.small), // height for small size button
                    controlHeight: props.buttonType === "link" ? 21 : parseInt(theme.buttonHeight.medium), // height for middle size button
                    controlHeightLG: props.buttonType === "link" ? 21 : parseInt(theme.buttonHeight.large), // height for large size button
                    colorLink: props.linktype === "primary" ? theme.colors.blueOcean : theme.colors.whiteDarken30, // text color for link
                    colorLinkHover: props.linktype === "primary" ? theme.colors.blueDeepOcean : theme.colors.blueOcean, // text color for link when hover
                },
                components: {
                    Button: {
                        /* here is your component tokens */
                        defaultBg:
                            props.buttonCustomType === "danger-secondary"
                                ? theme.buttonColor.errorSecondary.background.active
                                : theme.buttonColor.secondary.background.active, // background for secondary button
                        defaultHoverBg:
                            props.buttonCustomType === "danger-secondary"
                                ? theme.buttonColor.errorSecondary.background.hover
                                : theme.buttonColor.secondary.background.hover, // hover background for secondary button
                        defaultColor:
                            props.buttonCustomType === "danger-secondary"
                                ? theme.buttonColor.errorSecondary.text.active
                                : theme.buttonColor.secondary.text.active, // text color for secondary button or link
                        defaultHoverColor:
                            props.buttonCustomType === "danger-secondary"
                                ? theme.buttonColor.errorSecondary.text.hover
                                : theme.buttonColor.secondary.text.hover, // text color for secondary button or link when hover
                        defaultBorderColor:
                            props.buttonCustomType === "danger-secondary"
                                ? theme.buttonColor.errorSecondary.border.active
                                : theme.buttonColor.secondary.border.active, // border color for secondary button
                        defaultHoverBorderColor:
                            props.buttonCustomType === "danger-secondary"
                                ? theme.buttonColor.errorSecondary.border.hover
                                : theme.buttonColor.secondary.border.hover, // border color for secondary button when hover
                        paddingInline:
                            props.buttonType === "link"
                                ? 0
                                : props.buttonSize === "small"
                                  ? parseInt(theme.buttonPadding.small.x)
                                  : props.buttonSize === "middle"
                                    ? parseInt(theme.buttonPadding.medium.x)
                                    : parseInt(theme.buttonPadding.large),
                        paddingBlock:
                            props.buttonType === "link"
                                ? 0
                                : props.buttonSize === "small"
                                  ? parseInt(theme.buttonPadding.small.y)
                                  : props.buttonSize === "middle"
                                    ? parseInt(theme.buttonPadding.medium.y)
                                    : parseInt(theme.buttonPadding.large),
                        borderColorDisabled: theme.buttonColor.disabled.border, // border color for disabled button
                        paddingContentHorizontal:
                            props.buttonType === "link"
                                ? 0
                                : props.buttonSize === "small"
                                  ? parseInt(theme.buttonPadding.small.x)
                                  : props.buttonSize === "middle"
                                    ? parseInt(theme.buttonPadding.medium.x)
                                    : parseInt(theme.buttonPadding.large),
                    },
                },
            }}
        >
            {props.children}
        </ConfigProvider>
    )
}

export function AntdCheckBoxConfigProvider(props: CheckboxProps) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    /* here is your global tokens */
                    fontFamily: "inherit",
                    colorPrimary: theme.colors.blueOcean,
                    colorText: theme.colors.whiteDarken30,
                    borderRadius: 2,
                    controlInteractiveSize: 21,
                    colorBorder: theme.colors.lightGrey,
                },
            }}
        >
            {props.children}
        </ConfigProvider>
    )
}
