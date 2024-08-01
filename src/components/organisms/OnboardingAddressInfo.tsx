import React, { useEffect, useRef, useState } from "react"
import CardShadow, { Shadow } from "../atoms/container/CardShadow"
import { Collapse, CollapseProps } from "antd"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import FormContainer from "../atoms/container/FormContainer"
import FormInputText from "../molecules/FormInputText"
import FormInputEmail from "../molecules/FormInputEmail"
import AntdButton from "../atoms/button/AntdButton"
import Image from "next/image"
import ChevronCircleIcon from "@/assets/icon/line/caret-circle-down.grey.svg"
import AntdInputTextArea from "../atoms/input/AntdInputTextArea"
import FormInput from "../molecules/FormInput"
import AntdSelect from "../atoms/select/AntdSelect"
import InputLabel from "../atoms/text/InputLabel"
import { AntdInputNumber, AntdInputText } from "../atoms/input/AntdInput"

interface Country {
    value: string
    label: string
}

interface FormAddress {
    address: string
    country: string
    state: string // province
    city: string
    district: string
    postalCode: string
}

function OnboardingAddressInfo() {
    const [containerShadow, setContainerShadow] = useState<Shadow>(Shadow.MEDIUM)
    const districtRef = useRef(null)
    const [countries, setCountries] = useState<Country[]>([])
    const [provinces, setProvinces] = useState<any[]>([])
    const [cities, setCities] = useState<any[]>([])
    const [districts, setDistricts] = useState<any[]>([])
    const [loadingProvinces, setLoadingProvinces] = useState<boolean>(false)
    const [loadingCities, setLoadingCities] = useState<boolean>(false)

    const [formAddress, setFormAddress] = useState<FormAddress>({
        address: "",
        country: "",
        state: "", // province
        city: "",
        district: "-",
        postalCode: "-",
    })

    useEffect(() => {
        if (countries.length > 0) return
        fetch("https://countriesnow.space/api/v0.1/countries/iso")
            .then((res) => res.json())
            .then((res) => {
                const mapCountries = () => {
                    return res.data.map((country: any) => ({
                        value: country.name,
                        label: country.name,
                        Iso2: country.Iso2,
                        Iso3: country.Iso3,
                    }))
                }
                setCountries(mapCountries())
            })
    }, [])

    useEffect(() => {
        // console.log(formAddress.country)
        if (!formAddress.country) return
        console.log("Invoke")
        setLoadingProvinces(true)
        fetch("https://countriesnow.space/api/v0.1/countries/states", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ country: formAddress.country }),
        })
            .then((res) => res.json())
            .then((res) => {
                const mapProvinces = res.data.states.map((state: any) => ({
                    value: state.name,
                    label: state.name,
                    stateCode: state.state_code,
                }))
                setProvinces(mapProvinces)
            })
            .finally(() => setLoadingProvinces(false))
    }, [formAddress.country])

    useEffect(() => {
        // console.log(formAddress.country)
        if (!formAddress.state) return
        setLoadingCities(true)
        fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ country: formAddress.country, state: formAddress.state }),
        })
            .then((res) => res.json())
            .then((res) => {
                const mapCities = res.data.map((city: string) => ({
                    value: city,
                    label: city,
                }))
                setCities(mapCities)
            })
            .finally(() => setLoadingCities(false))
    }, [formAddress.state])

    const onSearch = (value: string) => {
        console.log("search:", value)
    }

    const onSelect = (value: string) => {}

    const items: CollapseProps["items"] = [
        {
            key: "2",
            label: <TextGreyDarken className="text-base font-medium">Address Info</TextGreyDarken>,
            children: (
                <FormContainer className="border-t-[1px] border-white-darken-15 py-4">
                    <FormInput
                        label="Address Detail"
                        inputElement={
                            <AntdInputTextArea
                                placeholder="Type your address detail"
                                minLength={5}
                                autoSize={{ minRows: 4 }}
                            />
                        }
                    />
                    <FormInputText label="PIC Name" placeholder="PIC name" />
                    <FormInputEmail placeholder="Email address" />
                    <div className={`flex flex-col gap-2`}>
                        <InputLabel>Country</InputLabel>
                        <AntdSelect
                            // value={"indonesia"}
                            // defaultValue="indonesia"
                            allowClear
                            onSelect={(value) => {
                                setFormAddress((prev) => ({ ...prev, country: value }))
                            }}
                            optionFilterProp="label"
                            showSearch
                            onSearch={onSearch}
                            options={countries}
                            onClear={() => {
                                setProvinces([]), setCities([]), setDistricts([])
                            }}
                        />
                    </div>
                    {formAddress.country && (
                        <div className={`flex flex-col gap-2`}>
                            <InputLabel>Province</InputLabel>
                            <AntdSelect
                                // value={"indonesia"}
                                // defaultValue="indonesia"
                                allowClear
                                onSelect={(value) => {
                                    setFormAddress((prev) => ({ ...prev, state: value }))
                                }}
                                optionFilterProp="label"
                                showSearch
                                onSearch={onSearch}
                                options={provinces}
                                loading={loadingProvinces}
                            />
                        </div>
                    )}
                    {formAddress.state && (
                        <div className={`flex flex-col gap-2`}>
                            <InputLabel>City</InputLabel>
                            <AntdSelect
                                // value={"indonesia"}
                                // defaultValue="indonesia"
                                allowClear
                                onSelect={(value) => {
                                    setFormAddress((prev) => ({ ...prev, city: value }))
                                }}
                                optionFilterProp="label"
                                showSearch
                                onSearch={onSearch}
                                options={cities}
                                loading={loadingCities}
                            />
                        </div>
                    )}
                    {formAddress.city && formAddress.country.toLowerCase() === "indonesia" && (
                        <div className="grid grid-cols-12 gap-5">
                            <div className={`flex flex-col gap-2 col-span-9`}>
                                <InputLabel>District</InputLabel>
                                <AntdInputText passingref={districtRef} placeholder="Your district location" />
                            </div>
                            <div className={`flex flex-col gap-2 col-start-10 col-span-3`}>
                                <InputLabel>Zip Code</InputLabel>
                                <AntdInputNumber className="!w-full" placeholder="zip code" />
                            </div>
                        </div>
                    )}
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
                    defaultActiveKey={["2"]}
                    ghost
                    items={items}
                    expandIconPosition="end"
                    expandIcon={(panelProps) => {
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

export default OnboardingAddressInfo
