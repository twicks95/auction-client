"use client"
import React from "react"
import CardShadow from "@/components/atoms/container/CardShadow"
import AntdDropdown from "@/components/atoms/antd/Dropdown/Dropdown"
import useCardTotalPotentialSaving from "@/hooks/component/useCardTotalPotentialSaving"
import AntdDivider from "../atoms/divider/AntdDivider"
import ContainerGrid from "../atoms/container/ContainerGrid"
import TotalPotentialSaving from "../atoms/text/TotalPotentialSaving"
import AnimatedCounter from "../atoms/animated/AnimatedCounter"
import BoxRoundedSmall from "../atoms/container/BoxRoundedSmall"

import { BarChart } from "@tremor/react"
import { theme } from "@/shared/constant"

interface CardTotalPotentialSavingProps {
    readonly totalPotentialSaving: number
}

function CardTotalPotentialSaving(props: CardTotalPotentialSavingProps) {
    const { items, data, dataFormatter } = useCardTotalPotentialSaving()
    const { totalPotentialSaving } = props
    type CustomTooltipTypeBar = {
        payload: any
        active: boolean | undefined
        label: any
    }
    const customTooltip = (props: CustomTooltipTypeBar) => {
        const { payload, active } = props
        if (!active || !payload) return null
        return (
            <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category: any, idx: number) => (
                    <div
                        key={idx}
                        className="flex flex-1 space-x-2.5"
                        style={{ marginBottom: idx !== payload.length - 1 ? "24px" : 0 }}
                    >
                        <div className={`flex w-1 flex-col bg-${category.color}-500 rounded`} />
                        <div className="space-y-1">
                            <p className="text-tremor-content">{category.dataKey}</p>
                            <p className="font-medium text-tremor-content-emphasis">
                                {
                                    new Intl.NumberFormat("ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        maximumFractionDigits: 0,
                                    })
                                        .format(category.value)
                                        .split(/\s+/)[1]
                                }{" "}
                                IDR
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <CardShadow className="w-full lg:w-[60%] p-4">
            <div className="flex justify-between items-end">
                <h6 className="font-bold text-sm tracking-wide text-grey-darken-30">Total Potential Saving</h6>
                <AntdDropdown
                    items={items}
                    // placeholder="Select year"
                    className="text-sm tracking-wide text-white-darken-30 w-24 justify-between"
                />
            </div>
            <AntdDivider type="horizontal" />
            <div className="flex flex-col justify-between">
                <BoxRoundedSmall className="bg-pristine-grey p-3">
                    <TotalPotentialSaving>
                        <AnimatedCounter to={totalPotentialSaving} type="currency" />
                        <span> IDR</span>
                    </TotalPotentialSaving>
                </BoxRoundedSmall>
                <div className="overflow-x-scroll">
                    <BarChart
                        className="my-6 !w-[180%]"
                        data={data}
                        index="month"
                        categories={["estimatedBudget", "finalPrice"]}
                        colors={["#03D4B4", "#0772B6"]}
                        valueFormatter={dataFormatter}
                        yAxisWidth={48}
                        showLegend={false}
                        showAnimation={true}
                        minValue={1000000}
                        customTooltip={customTooltip}
                        barCategoryGap="25%"
                    />
                </div>
                <BoxRoundedSmall className="bg-pristine-grey p-3 text-grey-darken-30 rounded-t-none rounded-r-none">
                    <ContainerGrid className="grid-cols-1 gap-2 md:gap-0 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
                        <div id="legend" className="flex gap-2">
                            <div className="h-4 w-4 rounded-sm bg-pristine-sat-40" />
                            <span className="text-xs">Estimated budget</span>
                        </div>
                        <div id="legend" className="flex gap-2">
                            <div className="h-4 w-4 rounded-sm bg-blue-ocean" />
                            <span className="text-xs">Final price</span>
                        </div>
                    </ContainerGrid>
                </BoxRoundedSmall>
            </div>
        </CardShadow>
    )
}

export default CardTotalPotentialSaving
