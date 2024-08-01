import { routes } from "@/shared/constant"
import { useRouter } from "next/navigation"
import React, { MouseEvent, useEffect, useState } from "react"

interface State {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export function useRegistrationForm() {
    const router = useRouter()
    const [form, setForm] = useState<State>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleRegistration = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log({ form })
        setLoading(true)
        setTimeout(() => {
            router.push(routes.onboarding)
            setLoading(false)
        }, 5000)
    }

    return { registrationForm: form, handleChange, handleRegistration, loading }
}
