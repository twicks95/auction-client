"use client"
import React, { CSSProperties } from "react"
import CardShadow from "../atoms/container/CardShadow"
import Image from "next/image"
import BinocularIcon from "@/assets/illustration/landing/binocular.svg"
import CartIcon from "@/assets/illustration/landing/cart.svg"
import ChronoMeterIcon from "@/assets/illustration/landing/chronometer.svg"
import PageIcon from "@/assets/illustration/landing/page.svg"
import TextGreyDarken from "../atoms/text/TextGreyDarken"
import AuctionOnProgress from "@/assets/illustration/landing/auc-on-progress.svg"
import CircleCheckIcon from "@/assets/illustration/circle-check.svg"
import { Collapse, CollapseProps, ConfigProvider, theme } from "antd"
import {theme as constantTheme} from "@/shared/constant"

function LandingContent() {
    const { token } = theme.useToken()
    const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (panelStyle) => [
        {
            key: "1",
            label: <TextGreyDarken className="text-lg font-medium">Apa itu Ruang Auction?</TextGreyDarken>,
            children: (
                <TextGreyDarken className="text-sm leading-6">
                    Ruang Auction merupakan platform lelang online untuk membantu perusahaan anda mendapatkan penawaran
                    yang kompetitif secara aktual dari setiap vendor, sehingga target best saving perusahaan anda dapat
                    diperoleh secara maksimal. Ruang Auction juga memiliki beragam metode lelang sesuai dengan kebutuhan
                    anda seperti metode least cost system, passing grade atau merit point.
                </TextGreyDarken>
            ),
            style: panelStyle,
        },
        {
            key: "2",
            label: (
                <TextGreyDarken className="text-lg font-medium">
                    Siapa yang dapat menggunakan Ruang Auction?
                </TextGreyDarken>
            ),
            children: (
                <TextGreyDarken className="text-sm leading-6">
                    Seluruh perusahaan yang melakukan pengadaan pada semua kategori usaha.
                </TextGreyDarken>
            ),
            style: panelStyle,
        },
        {
            key: "3",
            label: (
                <TextGreyDarken className="text-lg font-medium">Bagaimana pricing pada Ruang Auction?</TextGreyDarken>
            ),
            children: (
                <TextGreyDarken className="text-sm leading-6">
                    Ruang Auction membebankan user-per-month dalam melakukan penagihan penggunaannya.
                </TextGreyDarken>
            ),
            style: panelStyle,
        },
        {
            key: "4",
            label: <TextGreyDarken className="text-lg font-medium">Apakah saya dapat mengajukan demo?</TextGreyDarken>,
            children: (
                <TextGreyDarken className="text-sm leading-6">
                    Ya, silakan kontak sales dan marketing kami.
                </TextGreyDarken>
            ),
            style: panelStyle,
        },
        {
            key: "5",
            label: (
                <TextGreyDarken className="text-lg font-medium">
                    Browser apa yang dapat digunakan untuk mengakses Ruang Auction?
                </TextGreyDarken>
            ),
            children: (
                <TextGreyDarken className="text-sm leading-6">
                    Disarankan menggunakan browser Google Chrome atau Mozila Firefox dengan versi terbaru.
                </TextGreyDarken>
            ),
            style: panelStyle,
        },
    ]

    const panelStyle: React.CSSProperties = {
        marginBottom: 24,
        background: constantTheme.colors.white,
        borderRadius: constantTheme.borderRadius.small,
        border: constantTheme.colors.ultraLightGrey,
    }

    const onChange = (key: string | string[]) => {
        console.log(key)
    }

    return (
        <div className="flex flex-col gap-[7.5rem] w-full px-10 py-24">
            <div id="feature" className="flex flex-col items-center gap-20">
                <h2 className="text-[2rem] font-medium text-blue-deep-ocean">Pengalaman Lelang Terbaik Untuk Anda</h2>
                <div className="grid grid-cols-4 gap-10">
                    <CardShadow className="rounded-medium-large-20px p-10 shadow-md">
                        <div className="bg-blue-ocean-100 mb-8 rounded-small-5px p-5 w-fit">
                            <Image
                                src={BinocularIcon}
                                alt="online-auction"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "3.5rem" }}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-medium text-blue-deep-ocean">Online Auction</h3>
                            <TextGreyDarken>
                                <p className="text-sm leading-6">
                                    Keamanan proses lelang yang terjaga sehingga tetap kredibel dan transparan.
                                </p>
                            </TextGreyDarken>
                        </div>
                    </CardShadow>
                    <CardShadow className="rounded-medium-large-20px p-10 shadow-md">
                        <div className="bg-blue-ocean-100 mb-8 rounded-small-5px p-5 w-fit">
                            <Image
                                src={CartIcon}
                                alt="negotiation"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "3.5rem" }}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-medium text-blue-deep-ocean">Negotiation</h3>
                            <TextGreyDarken>
                                <p className="text-sm leading-6">
                                    Dapatkan penawaran kompetitif dari setiap vendor dan lakukan negosiasi untuk
                                    mendapatkan harga termurah.
                                </p>
                            </TextGreyDarken>
                        </div>
                    </CardShadow>
                    <CardShadow className="rounded-medium-large-20px p-10 shadow-md">
                        <div className="bg-blue-ocean-100 mb-8 rounded-small-5px p-5 w-fit">
                            <Image
                                src={ChronoMeterIcon}
                                alt="realtime"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "3.5rem" }}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-medium text-blue-deep-ocean">Realtime</h3>
                            <TextGreyDarken>
                                <p className="text-sm leading-6">
                                    Pantau proses lelang secara aktual untuk menjaga anda dari penipuan yang terjadi
                                    selama proses lelang.
                                </p>
                            </TextGreyDarken>
                        </div>
                    </CardShadow>
                    <CardShadow className="rounded-medium-large-20px p-10 shadow-md">
                        <div className="bg-blue-ocean-100 mb-8 rounded-small-5px p-5 w-fit">
                            <Image
                                src={PageIcon}
                                alt="reporting"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "3.5rem" }}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-medium text-blue-deep-ocean">Reporting</h3>
                            <TextGreyDarken>
                                <p className="text-sm leading-6">
                                    Lihat dan cetak laporan riwayat proses lelang kapanpun dan dimanapun anda butuhkan.
                                </p>
                            </TextGreyDarken>
                        </div>
                    </CardShadow>
                </div>
            </div>
            <div id="benefit" className="flex gap-12">
                <Image
                    src={AuctionOnProgress}
                    alt="auction-on-progress"
                    width={0}
                    height={0}
                    priority
                    style={{ width: "auto", height: "auto" }}
                />
                <div className="flex flex-col gap-10">
                    <h2 className="text-[2rem] font-medium text-blue-deep-ocean">Mengapa Harus Ruang Auction?</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-6">
                            <Image
                                src={CircleCheckIcon}
                                alt="circle-icon"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "2rem" }}
                            />
                            <TextGreyDarken>
                                <p className="leading-[1.625rem]">
                                    Monitoring secara aktual, komprehensive dan aman untuk menjaga keadilan selama
                                    proses lelang berlangsung.
                                </p>
                            </TextGreyDarken>
                        </div>
                        <div className="flex gap-6 items-center">
                            <Image
                                src={CircleCheckIcon}
                                alt="circle-icon"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "2rem" }}
                            />
                            <TextGreyDarken>
                                <p className="leading-[1.625rem]">Tampilan yang lebih mudah digunakan.</p>
                            </TextGreyDarken>
                        </div>
                        <div className="flex gap-6">
                            <Image
                                src={CircleCheckIcon}
                                alt="circle-icon"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "2rem" }}
                            />
                            <TextGreyDarken>
                                <p className="leading-[1.625rem]">
                                    Beragam metode auction yang sesuai dengan kebutuhan organisasi anda seperti metode
                                    least cost system, passing grade atau merit point.
                                </p>
                            </TextGreyDarken>
                        </div>
                        <div className="flex gap-6">
                            <Image
                                src={CircleCheckIcon}
                                alt="circle-icon"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "2rem" }}
                            />
                            <TextGreyDarken>
                                <p className="leading-[1.625rem]">
                                    Membantu anda mendapatkan penawaran terendah sehingga mencapai target best saving
                                    yang maksimal.
                                </p>
                            </TextGreyDarken>
                        </div>
                        <div className="flex gap-6 items-center">
                            <Image
                                src={CircleCheckIcon}
                                alt="circle-icon"
                                width={0}
                                height={0}
                                priority
                                style={{ width: "auto", height: "2rem" }}
                            />
                            <TextGreyDarken>
                                <p className="leading-[1.625rem]">
                                    Lihat dan cetak riwayat auction kapanpun anda butuhkan.
                                </p>
                            </TextGreyDarken>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-6">
                <iframe
                    className="rounded-medium-large-20px w-full h-[30rem] shadow-auction-md"
                    // style={{ borderRadius: landingPage ? "20px" : "10px" }}
                    // width={"853"}
                    // width={"auto"}
                    // height={"480"}
                    // height={"auto"}
                    src={`https://www.youtube.com/embed/Ks4thBCYNzI`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <h2 className="text-[2rem] font-medium text-blue-deep-ocean pl-16">
                    Lelang Aman, Kredibel & Transparan Hanya Di Ruang Auction
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-20">
                <h2 className="text-[2rem] font-medium text-blue-deep-ocean">Pertanyaan Yang Sering Ditanyakan</h2>
                <div className="col-start-2 col-span-2">
                    <ConfigProvider
                        theme={{
                            token: {
                                /* here is your global tokens */
                                colorBorder: constantTheme.colors.ultraLightGrey,
                            },
                        }}
                    >
                        <Collapse
                            items={getItems(panelStyle)}
                            defaultActiveKey={["1"]}
                            onChange={onChange}
                            accordion
                            size="large"
                            expandIconPosition="end"
                            // bordered={false}
                            style={{ background: "transparent", borderLeft: "none", borderRight: "none", border: "none" }}
                        />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    )
}

export default LandingContent
