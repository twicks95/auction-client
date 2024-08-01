import { ModalRef } from "@/components/molecules/Modal"
import { InputRef } from "antd"
import { RefObject, useState } from "react"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/constant"

interface FormData {
    priceIncludeTax: boolean
}

export default function useNewProcurementFormModal(
    modalRef: RefObject<ModalRef>,
    procurementNameRef: RefObject<InputRef>,
    negotiationTypeRef: any,
) {
    const { push } = useRouter()
    const [form, setForm] = useState<FormData>()

    const handleSubmit = () => {
        console.log({ procurementName: procurementNameRef.current?.input?.value })
        modalRef.current?.setLoading(true)
        setTimeout(() => {
            modalRef.current?.setLoading(false)
            modalRef.current?.close()
            push(routes.procurement + `/${"2187d28271dw123770"}`)
        }, 5000)
    }
    return { form, setForm, handleSubmit }
}
