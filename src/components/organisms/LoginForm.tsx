"use client"
import React, { useRef } from "react"
import FormInputEmail from "../molecules/FormInputEmail"
import FormInputPassword, { FormInputPasswordRef } from "../molecules/FormInputPassword"
import AntdButton from "../atoms/button/AntdButton"
import useLoginForm from "@/hooks/component/useLoginForm"
import AntdCheckbox from "../atoms/checkbox/AntdCheckbox"
import Link from "next/link"
import { routes } from "@/shared/constant"
import FormContainer from "../atoms/container/FormContainer"

function LoginForm() {
    const formInputPasswordRef = useRef<FormInputPasswordRef>(null)
    const { onCheckedRememberMe, handleLogin, loading } = useLoginForm(formInputPasswordRef)
    return (
        <form className="flex flex-col gap-6">
            <FormContainer>
                <FormInputEmail />
                <FormInputPassword passingforminputpasswordref={formInputPasswordRef} />
                <div className="flex justify-between items-center">
                    <AntdCheckbox onChange={onCheckedRememberMe}>Remember Me</AntdCheckbox>
                    <Link href={routes.forgotPassword}>
                        <AntdButton type="link" className="underline !font-medium">
                            Forgot Password
                        </AntdButton>
                    </Link>
                </div>
            </FormContainer>
            <AntdButton type="primary" size="large" onClick={handleLogin} loading={loading}>
                Log in
            </AntdButton>
        </form>
    )
}

export default LoginForm
