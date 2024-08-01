"use client"
import React, { useEffect, useRef, useState } from "react"
import CardShadow, { Shadow } from "../atoms/container/CardShadow"
import { Collapse, CollapseProps } from "antd"
import FormContainer from "../atoms/container/FormContainer"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import ChevronCircleIcon from "@/assets/icon/line/caret-circle-down.grey.svg"
import Image from "next/image"
import FormInputText, { FormInputTextRef } from "../molecules/FormInputText"
import FormInputEmail from "../molecules/FormInputEmail"
import AntdButton from "../atoms/button/AntdButton"
import FormInput from "../molecules/FormInput"
import { AntdInputNumber } from "../atoms/input/AntdInput"
import AntdSelect from "../atoms/select/AntdSelect"

function OnboardingGeneralInfo() {
    const companyNameRef = useRef<FormInputTextRef>(null)
    const [containerShadow, setContainerShadow] = useState<Shadow>(Shadow.MEDIUM)
    const [dialCodes, setDialCodes] = useState<object[]>([])
    const [loadingDialCodes, setLoadingDialCodes] = useState<boolean>(false)

    useEffect(() => {
        if (dialCodes.length > 0) return
        setLoadingDialCodes(true)
        fetch("https://countriesnow.space/api/v0.1/countries/codes")
            .then((res) => res.json())
            .then((res) => {
                const mapDialCode = () => {
                    return res.data.map((data: any, id: number) => ({
                        key: id,
                        value: data.dial_code,
                        label: data.dial_code,
                    }))
                }
                setDialCodes(mapDialCode())
            })
            .finally(() => setLoadingDialCodes(false))
    }, [])

    const onSearch = (value: string) => {
        console.log("search:", value)
    }

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: <TextGreyDarken className="text-base font-medium">General Info</TextGreyDarken>,
            children: (
                <FormContainer className="border-t-[1px] border-white-darken-15 py-4">
                    <div className="flex gap-5">
                        <FormInputText passingforminputtextref={companyNameRef} label="Company Name" placeholder="Company name" className="w-full" />
                        <div className="min-w-32 max-w-fit">
                            <FormInputText disabled label="Code" placeholder="Auto text" />
                        </div>
                    </div>
                    <FormInputText required label="PIC Name" placeholder="PIC name" />
                    <FormInputEmail placeholder="Email address" />
                    <FormInput
                        label="Phone Number"
                        inputElement={
                            <div className="flex gap-5">
                                <AntdSelect
                                    className="w-fit"
                                    allowClear
                                    showSearch
                                    onSearch={onSearch}
                                    optionFilterProp="label"
                                    options={dialCodes}
                                    optionRender={(option) => {
                                        return <div key={option.data.key}>{option.label}</div>
                                    }}
                                    loading={loadingDialCodes}
                                />
                                <AntdInputNumber placeholder="Phone number without 0" className="!w-full" />
                            </div>
                        }
                    />
                    <AntdButton type="primary" size="large" className="mt-7">
                        Continue
                    </AntdButton>
                </FormContainer>
            ),
        },
    ]
    return (
        <div className="">
            <CardShadow shadow={containerShadow}>
                <Collapse
                    defaultActiveKey={["1"]}
                    ghost
                    items={items}
                    expandIconPosition="end"
                    expandIcon={(panelProps) => {
                        console.log({ panelProps })
                        const { isActive } = panelProps
                        isActive ? setContainerShadow(Shadow.SMALL) : setContainerShadow(Shadow.MEDIUM)
                        return (
                            <Image
                                src={ChevronCircleIcon}
                                alt="collapse-btn"
                                height={24}
                                width={24}
                                priority
                                className={`${isActive ? "" : "-rotate-90"}`}
                            />
                        )
                    }}
                />
            </CardShadow>
        </div>
    )
}

export default OnboardingGeneralInfo
