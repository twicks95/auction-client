import Image from "next/image"
import React from "react"

import RuangAuctionLogo from "@/assets/brand/auction-banner-2.svg"
import MailIcon from "@/assets/icon/line/mail-white-sm.svg"
import PhoneIcon from "@/assets/icon/line/phone-white-sm.svg"
import MapIcon from "@/assets/icon/line/location-white-sm.svg"
import InstagramIcon from "@/assets/icon/line/instagram-white-sm.svg"
import LinkedInIcon from "@/assets/icon/line/linkedin-white-sm.svg"
import YoutubeIcon from "@/assets/icon/line/youtube-white-sm.svg"
import CopyrightIcon from "@/assets/icon/line/copyright.svg"

function LandingFooterSection() {
    return (
        <>
            <div className="bg-blue-deep-ocean w-full px-10 py-16 grid grid-cols-3 items-end text-white text-xs">
                <div className="flex flex-col gap-4">
                    <div>
                        <Image
                            src={RuangAuctionLogo}
                            alt="RuangAuctionLogo"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "2rem" }}
                        />
                    </div>
                    <span className="text-sm">Tebet Timur Dalam Raya No 43 Jakarta, Indonesia</span>
                    <div className="flex items-center gap-2">
                        <Image
                            src={MailIcon}
                            alt="mail"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "1.4375rem" }}
                        />
                        <span>info@mmi.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={PhoneIcon}
                            alt="phone"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "1.4375rem" }}
                        />
                        <span>(021) 8357385</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={MapIcon}
                            alt="map"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "1.4375rem" }}
                        />
                        <a
                            href="https://maps.google.com/?cid=4705446568304153647"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline"
                        >
                            Tebet Timur Dalam Raya No 43, Jakarta, Indonesia
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 col-span-2">
                    <span className="text-sm font-bold">Kunjungi kami di</span>
                    <div className="flex items-center gap-2">
                        <Image
                            src={InstagramIcon}
                            alt="instagram"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "1.4375rem" }}
                        />
                        <a
                            href="https://www.instagram.com/mitra.mandiriinformatika/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:underline"
                        >
                            Mitra Mandiri Informatika
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={LinkedInIcon}
                            alt="linkedin"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "1.4375rem" }}
                        />
                        <a
                            href="https://www.linkedin.com/company/pt.-mitra-mandiri-informatika/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:underline"
                        >
                            PT. Mitra Mandiri Informatika
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={YoutubeIcon}
                            alt="youtube"
                            width={0}
                            height={0}
                            priority
                            style={{ width: "auto", height: "1.4375rem" }}
                        />
                        <a
                            href="https://www.youtube.com/channel/UCAfYA7ffiNNrvAqdcMaAaQw"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:underline"
                        >
                            Mitra Mandiri Informatika
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4"></div>
            </div>
            <div className="flex justify-center items-center gap-4 bg-blue-ocean h-14 text-sm text-white">
                <span>Copyright 2022</span>
                <div className="flex gap-2 items-center">
                    <Image
                        src={CopyrightIcon}
                        alt="copyright"
                        width={0}
                        height={0}
                        priority
                        style={{ width: "auto", height: "1.125rem" }}
                    />
                    <span>MITRA MANDIRI INFORMATIKA</span>
                </div>
            </div>
        </>
    )
}

export default LandingFooterSection
