import LandingContent from "@/components/organisms/LandingContent"
import LandingFooterSection from "@/components/organisms/LandingFooterSection"
import LandingHero from "@/components/organisms/LandingHero"
import LandingTopNavbar from "@/components/organisms/LandingTopNavbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ruang Auction | Landing Page",
    description: "Real-time bidding application for e-procurement",
}

export default function Landing() {
    return (
        <div className="w-screen">
            <LandingTopNavbar />
            <LandingHero />
            <LandingContent />
            <LandingFooterSection />
        </div>
    )
}
