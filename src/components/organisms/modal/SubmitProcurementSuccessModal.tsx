"use client"
import Image from "next/image"
import { RefObject, useImperativeHandle, useRef, useState } from "react"
import SuccessSubmitProcurementIcon from "@/assets/illustration/circle-check.svg"
import TextGreyDarken from "@/components/atoms/text/TextGreyDarken"
import AntdModal, { ModalRef } from "@/components/molecules/Modal"
import AntdButton from "@/components/atoms/button/AntdButton"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/constant"

export interface SubmitProcurementSuccessModalProps {
    passingref?: RefObject<SubmitProcurementSuccessModalRef>
}

export interface SubmitProcurementSuccessModalRef {
    open: (cb?: () => void) => void
    close: (cb?: () => void) => void
    setProcurementNumber: (procurementNumber: string) => void
}

function SubmitProcurementSuccessModal(props: SubmitProcurementSuccessModalProps) {
    const { push } = useRouter()
    const modalRef = useRef<ModalRef>(null)
    const [procurementNumber, setProcurementNumber] = useState<string>("")

    useImperativeHandle(props.passingref, () => ({
        open: (cb?: () => void) => modalRef.current?.open(cb),
        close: (cb?: () => void) => modalRef.current?.close(cb),
        setProcurementNumber: (procurementNumber: string) => setProcurementNumber(procurementNumber),
    }))

    return (
        <AntdModal
            passingref={modalRef}
            cancelLabel="Back to list"
            okLabel="Create auction session"
            closeIcon={true}
            actionButtonToRender="cancel-ok"
            onButtonCancel={() => modalRef.current?.close(() => push(routes.procurement))}
        >
            <div className="flex gap-[1.125rem] items-center w-fit">
                <Image src={SuccessSubmitProcurementIcon} alt="submit-procurement" height={0} width={0} />
                <div>
                    <TextGreyDarken>
                        <h4 className="text-2xl font-bold">Submit Success</h4>
                        <span>
                            Your procurement is successfully submitted with number{" "}
                            <AntdButton type="link" linktype="primary" className="underline !font-medium">
                                {procurementNumber}
                            </AntdButton>
                        </span>
                    </TextGreyDarken>
                </div>
            </div>
        </AntdModal>
    )
}

export default SubmitProcurementSuccessModal
