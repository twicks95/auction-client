import React, { useState } from "react"
import CardShadow, { Shadow } from "../atoms/container/CardShadow"
import { Collapse, CollapseProps } from "antd"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import FormContainer from "../atoms/container/FormContainer"
import Image from "next/image"
import ChevronCircleIcon from "@/assets/icon/line/caret-circle-down.grey.svg"
import FormInputNumber from "../molecules/FormInputNumber"
import AntdButton from "../atoms/button/AntdButton"

function OnBoardingLegalInfo() {
    const [containerShadow, setContainerShadow] = useState<Shadow>(Shadow.MEDIUM)
    const items: CollapseProps["items"] = [
        {
            key: "3",
            label: <TextGreyDarken className="text-base font-medium">Legal Info</TextGreyDarken>,
            children: (
                <FormContainer className="border-t-[1px] border-white-darken-15 py-4 w-full">
                    <FormInputNumber formLabel="NPWP" placeholder="Type the number" className="!w-full" />
                    <FormInputNumber formLabel="ID Number" placeholder="Type ID number" className="!w-full" />
                    <AntdButton type="primary" size="large" className="mt-7">
                        Save
                    </AntdButton>
                </FormContainer>
            ),
        },
    ]
    return (
        <div className="">
            <CardShadow shadow={containerShadow}>
                <Collapse
                    defaultActiveKey={["3"]}
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

export default OnBoardingLegalInfo
