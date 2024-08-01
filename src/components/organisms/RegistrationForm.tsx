"use client"
import React from "react"
import FormInputText from "../molecules/FormInputText"
import FormInputEmail from "../molecules/FormInputEmail"
import FormInputPassword from "../molecules/FormInputPassword"
import { useRegistrationForm } from "@/hooks/component/useRegistrationForm"
import AntdCheckbox from "../atoms/checkbox/AntdCheckbox"
import AntdButton from "../atoms/button/AntdButton"

function RegistrationForm() {
    const { registrationForm, handleChange, handleRegistration, loading } = useRegistrationForm()
    return (
        <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <FormInputText label="First Name" placeholder="Type your first name" />
                <FormInputText label="Last Name" placeholder="Type your last name" />
                <FormInputEmail />
                <FormInputPassword value={registrationForm.password} onChange={handleChange} />
                <FormInputPassword label="Confirm Password" placeholder="Confirm your password" />
                <AntdCheckbox className="font-normal">
                    Saya setuju untuk dihubungi oleh pihak Ruang Auction untuk proses pengajuan uji coba gratis
                </AntdCheckbox>
                <AntdButton type="primary" size="large" onClick={handleRegistration} loading={loading}>
                    Register
                </AntdButton>
            </div>
        </form>
    )
}

export default RegistrationForm
