import type { Metadata } from "next"
import TopNavigation from "@/components/organisms/TopNavigation"
import BuyerPageContainer from "@/components/atoms/container/BuyerPageContainer"

export default function SellerLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className={`bg-white min-h-screen w-full flex`}>
            <div className="w-full">
                <TopNavigation profileName="Andrew Robertson" />
                <div className="border border-red-500 pt-1 px-40 pb-4">{children}</div>
            </div>
        </div>
    )
}
