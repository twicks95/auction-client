import type { Metadata } from "next"
import { Roboto, Fira_Sans, Poppins } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from "@ant-design/nextjs-registry"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] })
const fira = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
    title: "Ruang Auction",
    description: "Real-time bidding application for e-procurement",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="antialiased">
            <body className={`${fira.className} flex`}>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    )
}
