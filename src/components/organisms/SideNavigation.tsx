"use client"
import { ConfigProvider, Menu } from "antd"
import Image from "next/image"
import React from "react"
import AuctionIcon from "@/assets/brand/auction-banner.png"
import AuctionLogoIcon from "@/assets/brand/auction-logo-only.png"
import useSideNavigation from "../../hooks/component/useSideNavigation"
import ToggleSidebar from "../atoms/button/ToggleSidebar"
import { theme } from "@/shared/constant"
import { usePathname } from "next/navigation"

function SideNavigation(): JSX.Element {
    const pathName = usePathname()
    const { collapsed, toggleCollapsed, onClick, items, selectedKey } = useSideNavigation()

    return (
        <>
            {pathName === "/buyer/onboarding" ? (
                null
            ) : (
                <div className="min-h-screen h-auto overflow-y-clip">
                    <div className="relative border-b-2 border-blue-deep-ocean">
                        <div
                            className={`relative w-full h-24 flex justify-center items-center bg-pristine-grey ${collapsed ? "px-1" : "px-6"} transition-all`}
                        >
                            <Image
                                src={collapsed ? AuctionLogoIcon : AuctionIcon}
                                alt="ruang-auction-logo"
                                height={collapsed ? 24 : 28}
                                priority
                            />
                            <ToggleSidebar collapsed={collapsed} onClick={toggleCollapsed} />
                        </div>
                    </div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Menu: {
                                    /* here is your component tokens */
                                    itemMarginBlock: 0,
                                    itemMarginInline: 0,
                                    itemBorderRadius: 0,
                                    itemHeight: 54,
                                    itemColor: theme.colors.whiteDarken30,
                                    itemActiveBg: theme.colors.pristineGrey,
                                    itemHoverColor: theme.colors.pristineGrey,
                                    itemSelectedColor: theme.colors.pristineGrey,
                                    itemHoverBg: theme.colors.blueDeepOcean,
                                    itemSelectedBg: theme.colors.blueDeepOcean,
                                },
                            },
                        }}
                    >
                        <Menu
                            className="min-h-screen h-full font-bold !text-xs !-mb-24"
                            onClick={onClick}
                            style={{
                                width: collapsed ? 56 : 200,
                                paddingTop: 20,
                                backgroundColor: theme.colors.pristineGrey,
                            }}
                            defaultSelectedKeys={[selectedKey]}
                            selectedKeys={[selectedKey]}
                            mode="inline"
                            items={items}
                            inlineCollapsed={collapsed}
                        />
                    </ConfigProvider>
                </div>
            )}
        </>
    )
}

export default SideNavigation
