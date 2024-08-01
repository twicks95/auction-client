import { ValueFormatter } from "@tremor/react"
import { MenuProps } from "antd"
import { useEffect, useState } from "react"

interface ObjectData {
    readonly month: string
    readonly estimatedBudget: number
    readonly finalPrice: number
}
const mockupData: ObjectData[] = [
    { month: "January", estimatedBudget: 4250000, finalPrice: 4000000 },
    { month: "February", estimatedBudget: 3550000, finalPrice: 3200000 },
    { month: "March", estimatedBudget: 4250000, finalPrice: 4000000 },
    { month: "April", estimatedBudget: 2000000, finalPrice: 2000000 },
    { month: "May", estimatedBudget: 1000000, finalPrice: 980000 },
    { month: "June", estimatedBudget: 2000000, finalPrice: 2000000 },
    { month: "July", estimatedBudget: 2000000, finalPrice: 2000000 },
    { month: "August", estimatedBudget: 2000000, finalPrice: 2000000 },
    { month: "September", estimatedBudget: 2000000, finalPrice: 2000000 },
    { month: "October", estimatedBudget: 2150000, finalPrice: 2100000 },
    { month: "November", estimatedBudget: 5000000, finalPrice: 4960000 },
    { month: "December", estimatedBudget: 800000, finalPrice: 800000 },
]
export default function useCardTotalPotentialSaving() {
    const [data, setData] = useState<ObjectData[]>([])
    const items: MenuProps["items"] = [
        {
            key: "this-year",
            label: "This year",
        },
        {
            key: "last-year",
            label: "Last year",
        },
    ]

    useEffect(() => {
        setData(mockupData)
        return () => {}
    }, [])

    const dataFormatter: ValueFormatter = (number: number) => {
        const formattedNumber = new Intl.NumberFormat("ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        })
            .format(number)
            .split(/\s+/)[1]

        switch (number.toString().length) {
            case 6:
                return `${formattedNumber.split(/[.,]/)[0]} rb`
            case 7:
            case 8:
            case 9:
                return `${formattedNumber.split(/[.,]/)[0]} jt`
            case 10:
            case 11:
            case 12:
                return `${formattedNumber.split(/[.,]/)[0]} M`
            default:
                return formattedNumber
        }
    }

    return { data, dataFormatter, items }
}
