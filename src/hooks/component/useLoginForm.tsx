import { CheckboxProps } from "antd"
import { MouseEvent, RefObject, useState } from "react"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/constant"
import { FormInputPasswordRef } from "@/components/molecules/FormInputPassword"

interface FormData {
    email: string
    password: string
}

export default function useLoginForm(passingforminputpasswordref: RefObject<FormInputPasswordRef>) {
    const router = useRouter()
    const [form, setForm] = useState<FormData>({ email: "", password: "" })
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const onCheckedRememberMe: CheckboxProps["onChange"] = (e) => {
        console.log(`checked = ${e.target.checked}`)
    }

    const handleLogin = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log({ form, passingforminputpasswordref: passingforminputpasswordref.current?.getInputPasswordRef() })
        const formLogin = {
            email: "",
            password: passingforminputpasswordref.current?.getInputPasswordRef(),
        }
        setLoading(true)
        setTimeout(() => {
            router.push(routes.dashboard)
            setLoading(false)
        }, 5000)
    }

    const handleForgotPassword = () => {}

    return {
        loginForm: form,
        onCheckedRememberMe,
        handleLogin,
        handleForgotPassword,
        loading,
    }
}
