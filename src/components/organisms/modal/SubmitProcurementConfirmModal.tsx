import AntdModal, { ModalRef } from "@/components/molecules/Modal"
import Image from "next/image"
import { forwardRef, RefObject, useImperativeHandle, useRef, useState } from "react"
import SubmitProcurementIcon from "@/assets/illustration/folder-alert.svg"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import SubmitProcurementSuccessModal, { SubmitProcurementSuccessModalRef } from "./SubmitProcurementSuccessModal"

export interface SubmitProcurementConfirmModalProps {
    passingref?: RefObject<SubmitProcurementConfirmModalRef>
}

export interface SubmitProcurementConfirmModalRef {
    open: (cb?: () => void) => void
    close: (cb?: () => void) => void
}

const SubmitProcurementConfirmModal = (props: SubmitProcurementConfirmModalProps) => {
    const thisModalRef = useRef<ModalRef>(null)
    const successModalRef = useRef<SubmitProcurementSuccessModalRef>(null)
    useImperativeHandle(props.passingref, () => ({
        open: (cb?: () => void) => thisModalRef.current?.open(cb),
        close: (cb?: () => void) => thisModalRef.current?.close(cb),
    }))

    return (
        <AntdModal
            passingref={thisModalRef}
            destroyOnClose={false} // set false because the success modal is also rendered in this modal. Preventing the success modal to be destroyed when this modal is closed
            okLabel="Submit"
            actionButtonToRender="cancel-ok"
            onButtonOK={() => {
                thisModalRef.current?.setLoading(true)
                setTimeout(() => {
                    thisModalRef.current?.setLoading(false)
                    thisModalRef.current?.close()
                    successModalRef.current?.open()
                    successModalRef.current?.setProcurementNumber("PROCINI/001/2020")
                }, 5000)
            }}
        >
            <div className="flex gap-[1.125rem] items-center">
                <Image src={SubmitProcurementIcon} alt="submit-procurement" height={0} width={0} />
                <div>
                    <TextGreyDarken>
                        <h4 className="text-2xl font-bold">Submit this procurement?</h4>
                        <span>This Procurement will be saved.</span>
                    </TextGreyDarken>
                </div>
            </div>
            <SubmitProcurementSuccessModal passingref={successModalRef} />
        </AntdModal>
    )
}

export default SubmitProcurementConfirmModal
