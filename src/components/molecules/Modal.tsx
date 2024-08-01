"use client"
import { forwardRef, RefObject, useEffect, useImperativeHandle, useState } from "react"
import AntdButton from "../atoms/button/AntdButton"
import { ButtonProps, ConfigProvider, Modal, ModalProps } from "antd"
import CloseIcon from "@/assets/icon/line/x-square-line-grey.svg"
import Image from "next/image"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AntdDivider from "../atoms/divider/AntdDivider"

interface AntdModalProps extends ModalProps {
    onButtonOK?: () => void
    onButtonCancel?: () => void
    okLabel?: string
    cancelLabel?: string
    isLoading?: ButtonProps["loading"]
    disabledButton?: ButtonProps["disabled"]
    showHeader?: boolean
    actionButtonToRender: "cancel" | "ok" | "cancel-ok" | "none"
    passingref?: RefObject<ModalRef>
    autoClose?: { duration: number; postAction?: () => void }
}

export interface ModalRef {
    open: (cb?: () => void) => void
    close: (cb?: () => void) => void
    setLoading: (loading: boolean) => void
}

const AntdModal = (props: AntdModalProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useImperativeHandle(props.passingref, () => ({
        open: (cb?: () => void) => handleOpenModal(cb),
        close: (cb?: () => void) => handleCloseModal(cb),
        setLoading: (loading: boolean) => setIsLoading(loading),
    }))

    const handleOpenModal = (callback?: () => void) => {
        props.autoClose && setTimeout(() => handleCloseModal(props.autoClose?.postAction), props.autoClose.duration)
        callback && callback()
        setOpen(true)
    }

    const handleCloseModal = (callback?: () => void) => {
        callback && callback()
        setOpen(false)
    }

    return (
        <Modal
            open={open}
            centered={props.centered ?? true}
            title={false} // [x] don't change this to keep hide title from default Antd Modal component. We costume itself
            closeIcon={false} // [x] don't change this to keep hide close icon from default Antd Modal component. We costume itself
            destroyOnClose={props.destroyOnClose ?? true}
            className="!w-fit"
            styles={{
                content: {
                    padding: "2rem", // 32px
                    paddingTop: props.showHeader || props.closeIcon ? "2rem" : "5.5rem", //32px, 88px
                    minWidth: "35.8125rem", // 573px
                },
                footer: { marginTop: "2rem" }, // 32px
            }}
            footer={
                props.actionButtonToRender === "cancel-ok" ? (
                    [
                        <AntdButton
                            disabled={isLoading ? true : false}
                            key="cancel"
                            size="large"
                            type="default"
                            onClick={() => handleCloseModal(props.onButtonCancel)}
                        >
                            {props.cancelLabel ?? "Cancel"}
                        </AntdButton>,
                        <AntdButton
                            key="ok"
                            size="large"
                            type="primary"
                            loading={isLoading}
                            disabled={props.disabledButton}
                            onClick={props.onButtonOK}
                            style={{ marginLeft: "1rem" }}
                        >
                            {props.okLabel ?? "OK"}
                        </AntdButton>,
                    ]
                ) : props.actionButtonToRender === "ok" ? (
                    [
                        <AntdButton
                            key="ok"
                            size="large"
                            type="primary"
                            loading={isLoading}
                            disabled={props.disabledButton}
                            onClick={props.onButtonOK}
                        >
                            {props.okLabel ?? "OK"}
                        </AntdButton>,
                    ]
                ) : props.actionButtonToRender === "cancel" ? (
                    [
                        <AntdButton key="cancel" size="large" type="default" onClick={props.onButtonCancel}>
                            {props.cancelLabel ?? "Cancel"}
                        </AntdButton>,
                    ]
                ) : (
                    <></>
                )
            }
        >
            {props.showHeader ? (
                <div>
                    <div className="flex justify-between items-center">
                        <TextGreyDarken className="text-lg font-medium">{props.title ?? "Modal Title"}</TextGreyDarken>
                        {props.closeIcon ? (
                            <AntdButton type="link" onClick={() => setOpen(false)} className="!p-0">
                                <Image src={CloseIcon} alt="close" height={0} width={0} priority />
                            </AntdButton>
                        ) : (
                            <></>
                        )}
                    </div>
                    <AntdDivider className="!my-4" />
                </div>
            ) : props.closeIcon ? (
                <div className="flex justify-end">
                    <AntdButton type="link" onClick={() => setOpen(false)} className="!p-0 mb-8">
                        <Image src={CloseIcon} alt="close" height={0} width={0} priority />
                    </AntdButton>
                </div>
            ) : (
                <></>
            )}
            {props.children}
        </Modal>
    )
}

export default AntdModal
