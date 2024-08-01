import { MenuProps } from "antd"
import React, { useEffect, useState } from "react"
import { theme } from "@/shared/constant"
import { usePathname, useRouter } from "next/navigation"

type MenuItem = Required<MenuProps>["items"][number]
enum MenuKey {
    DASHBOARD = "dashboard",
    PROCUREMENT = "procurement",
}

export default function useSideNavigation() {
    const pathname = usePathname()
    const router = useRouter()

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [selectedKey, setSelectedKey] = useState<string>("")
    const [hoveredKey, setHoveredKey] = useState<string>("")

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 1280 // Replace with your desired breakpoint
            setCollapsed(isSmallScreen)
        }

        window.addEventListener("resize", handleResize)

        // Cleanup function to avoid memory leaks
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        pathname === "/buyer/dashboard"
            ? setSelectedKey(MenuKey.DASHBOARD)
            : pathname.split("/").includes("procurement") && setSelectedKey(MenuKey.PROCUREMENT)

        return () => {}
    }, [pathname]) // do on every url change

    const toggleCollapsed = (): void => {
        setCollapsed(!collapsed)
    }

    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e)
        setSelectedKey(e.key)
    }

    const items: MenuItem[] = [
        {
            onClick: () => router.push("/buyer/dashboard", { scroll: false }),
            onMouseEnter: (e) => setHoveredKey(e.key),
            onMouseLeave: () => setHoveredKey(""),
            key: "dashboard",
            label: "Dashboard",
            icon: (
                <svg
                    className="transition-all duration-300"
                    style={{
                        fill:
                            hoveredKey === MenuKey.DASHBOARD || selectedKey === MenuKey.DASHBOARD
                                ? theme.colors.pristineGrey
                                : theme.colors.whiteDarken30,
                    }}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.8125 1.375C0.8125 1.06434 1.06434 0.8125 1.375 0.8125H5.875C6.18566 0.8125 6.4375 1.06434 6.4375 1.375V5.875C6.4375 6.18566 6.18566 6.4375 5.875 6.4375H1.375C1.06434 6.4375 0.8125 6.18566 0.8125 5.875V1.375ZM1.9375 1.9375V5.3125H5.3125V1.9375H1.9375Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5625 1.375C7.5625 1.06434 7.81434 0.8125 8.125 0.8125H12.625C12.9357 0.8125 13.1875 1.06434 13.1875 1.375V5.875C13.1875 6.18566 12.9357 6.4375 12.625 6.4375H8.125C7.81434 6.4375 7.5625 6.18566 7.5625 5.875V1.375ZM8.6875 1.9375V5.3125H12.0625V1.9375H8.6875Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.8125 8.125C0.8125 7.81434 1.06434 7.5625 1.375 7.5625H5.875C6.18566 7.5625 6.4375 7.81434 6.4375 8.125V12.625C6.4375 12.9357 6.18566 13.1875 5.875 13.1875H1.375C1.06434 13.1875 0.8125 12.9357 0.8125 12.625V8.125ZM1.9375 8.6875V12.0625H5.3125V8.6875H1.9375Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5625 8.125C7.5625 7.81434 7.81434 7.5625 8.125 7.5625H12.625C12.9357 7.5625 13.1875 7.81434 13.1875 8.125V12.625C13.1875 12.9357 12.9357 13.1875 12.625 13.1875H8.125C7.81434 13.1875 7.5625 12.9357 7.5625 12.625V8.125ZM8.6875 8.6875V12.0625H12.0625V8.6875H8.6875Z"
                    />
                </svg>
            ),
        },
        {
            onClick: () => router.push("/buyer/procurement", { scroll: false }),
            onMouseEnter: (e) => setHoveredKey(e.key),
            onMouseLeave: () => setHoveredKey(""),
            key: MenuKey.PROCUREMENT,
            label: "Procurement",
            icon: (
                <svg
                    className="transition-all duration-300"
                    style={{
                        fill:
                            hoveredKey === MenuKey.PROCUREMENT || selectedKey === MenuKey.PROCUREMENT
                                ? theme.colors.pristineGrey
                                : theme.colors.whiteDarken30,
                    }}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.188 5.1875C13.1881 5.1122 13.1729 5.03765 13.1436 4.96832C13.1142 4.89899 13.0711 4.8363 13.0169 4.78398L9.08535 0.852383C9.07232 0.839352 9.05868 0.827 9.04443 0.815328C9.04112 0.812586 9.03754 0.810266 9.03416 0.807594C9.02313 0.79881 9.01178 0.790437 9.00013 0.782492C8.99704 0.780383 8.9938 0.778695 8.99071 0.776726C8.97838 0.768683 8.96574 0.76113 8.95281 0.754086C8.95056 0.752891 8.94824 0.751977 8.94599 0.750781C8.93199 0.743405 8.91768 0.736625 8.9031 0.730461C8.90148 0.729758 8.89987 0.729336 8.89825 0.728703C8.88287 0.722402 8.86723 0.716795 8.85135 0.711898L8.84608 0.710562C8.83028 0.705852 8.81428 0.70184 8.79812 0.698539C8.79362 0.697625 8.78898 0.697203 8.78448 0.69643C8.77098 0.694109 8.75748 0.691719 8.74363 0.690313C8.72496 0.688437 8.70621 0.687499 8.68745 0.6875H1.93689C1.63862 0.687835 1.35267 0.806469 1.14176 1.01737C0.930858 1.22828 0.812225 1.51423 0.81189 1.8125V14.1875C0.812225 14.4858 0.930858 14.7717 1.14176 14.9826C1.35267 15.1935 1.63862 15.3122 1.93689 15.3125H12.0625C12.3607 15.3122 12.6467 15.1935 12.8576 14.9826C13.0685 14.7717 13.1871 14.4858 13.1875 14.1875V5.19875C13.1875 5.19495 13.188 5.1913 13.188 5.1875ZM9.24995 2.60802L11.267 4.625H9.24995V2.60802ZM12.0625 14.1875H1.93689V1.8125H8.12495V5.1875C8.12495 5.33668 8.18421 5.47976 8.2897 5.58525C8.39519 5.69074 8.53827 5.75 8.68745 5.75H12.0625L12.0632 14.1875H12.0625ZM8.86126 10.7537C9.19244 10.227 9.31796 9.59667 9.21386 8.98324C9.10975 8.3698 8.78332 7.81621 8.29691 7.4282C7.8105 7.0402 7.1982 6.84497 6.57697 6.87982C5.95573 6.91467 5.36911 7.17714 4.92914 7.61711C4.48917 8.05708 4.2267 8.6437 4.19185 9.26494C4.157 9.88617 4.35223 10.4985 4.74023 10.9849C5.12824 11.4713 5.68183 11.7977 6.29527 11.9018C6.9087 12.0059 7.539 11.8804 8.06575 11.5492L8.83764 12.3211C8.88987 12.3734 8.95188 12.4148 9.02013 12.4431C9.08838 12.4713 9.16153 12.4859 9.2354 12.4859C9.30927 12.4859 9.38241 12.4713 9.45066 12.4431C9.51891 12.4148 9.58092 12.3734 9.63315 12.3211C9.68539 12.2689 9.72682 12.2069 9.75509 12.1386C9.78336 12.0704 9.79791 11.9972 9.79791 11.9234C9.79791 11.8495 9.78336 11.7764 9.75509 11.7081C9.72682 11.6399 9.68539 11.5778 9.63315 11.5256L8.86126 10.7537ZM5.72392 10.4006C5.49387 10.1706 5.3507 9.86785 5.31882 9.54407C5.28693 9.22029 5.3683 8.89548 5.54905 8.62497C5.72981 8.35445 5.99877 8.15499 6.3101 8.06055C6.62144 7.96611 6.95588 7.98254 7.25646 8.10705C7.55704 8.23156 7.80515 8.45643 7.95851 8.74336C8.11187 9.03029 8.161 9.36152 8.09752 9.68061C8.03405 9.9997 7.8619 10.2869 7.6104 10.4933C7.3589 10.6997 7.04362 10.8125 6.71828 10.8125C6.53354 10.813 6.35053 10.7769 6.17984 10.7062C6.00916 10.6354 5.8542 10.5316 5.72392 10.4006Z" />
                </svg>
            ),
        },
    ]

    return { collapsed, toggleCollapsed, items, selectedKey, onClick }
}
