"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import Wave1 from "@/assets/illustration/landing/wave-white-1.svg"
import HeroImg from "@/assets/illustration/landing/header-img.svg"
import AntdButton from "../atoms/button/AntdButton"
import { motion, Variants } from "framer-motion"
const splitString = (inputString: string) => {
    const characters: string[] = []
    const regex = /[\s\S]/gu

    let match

    while ((match = regex.exec(inputString)) !== null) {
        characters.push(match[0])
    }

    return characters
}

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
}

const words: string[] = ["Efektif", "Aktual", "Transparan", "Mudah"]
let count = 0

function LandingHero() {
    const [word, setWord] = useState<string[]>(["E", "F", "E", "K", "T", "I", "F"])
    // const chars = splitString("Efektif")

    const MotionRender = (word: string[]): JSX.Element => {
        return (
            <motion.span initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.2 }}>
                {word.map((char, i) => {
                    return (
                        <motion.span key={i} transition={{ duration: 3 }} variants={charVariants}>
                            {char}
                        </motion.span>
                    )
                })}
            </motion.span>
        )
    }

    useEffect(() => {
        // do {
        const changeWordInterval = setInterval(() => {
            if (count === 4) {
                console.log("1", count)
                count = 0
            } else {
                console.log("2", count)
                const chars = splitString(words[count])
                setWord(chars)
                count = count + 1
            }
        }, 4500)
        // } while (count <= 3)

        return () => clearInterval(changeWordInterval)
    }, [])

    useEffect(() => {
        console.log(word)
    }, [word])

    return (
        <div className="relative w-full h-screen px-10 grid grid-cols-2 items-center bg-blue-deep-ocean">
            <div className="flex flex-col gap-6">
                <p className="text-white text-[2.5rem] font-bold">
                    Lakukan Proses Lelang Dengan <br />
                    {/* <MotionRender  /> */}
                </p>
                <p className="text-white text-sm">
                    Dapatkan pengalaman lelang terbaik anda dan raih best saving secara maksimal!
                </p>
                <AntdButton
                    type="primary"
                    size="large"
                    className="!bg-pristine-sat-40 hover:!bg-pristine-base !text-sm !font-bold tracking-wide w-[11.375rem]"
                >
                    Uji Coba Gratis
                </AntdButton>
            </div>
            <div>
                <Image
                    src={HeroImg}
                    alt="hero-image"
                    width={0}
                    height={0}
                    priority
                    style={{ width: "auto", height: "auto" }}
                />
            </div>
            <Image
                src={Wave1}
                alt="wave"
                width={0}
                height={0}
                priority
                style={{ width: "100vw", height: "auto" }}
                className="absolute left-0 -bottom-3"
            />
        </div>
    )
}

export default LandingHero
