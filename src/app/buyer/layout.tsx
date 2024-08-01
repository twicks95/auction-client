import type { Metadata } from "next"
import TopNavigation from "@/components/organisms/TopNavigation"
import SideNavigation from "@/components/organisms/SideNavigation"
import BuyerPageContainer from "@/components/atoms/container/BuyerPageContainer"

export default function BuyerLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className={`bg-white min-h-screen w-full flex`}>
            <SideNavigation />
            <div className="w-full">
                <TopNavigation profileName="Andrew Robertson" />
                <BuyerPageContainer>{children}</BuyerPageContainer>
            </div>
        </div>
    )
}
