"use client"

import React, { ReactElement, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface AnimatedListProps {
    className?: string
    children: React.ReactNode
    delay?: number
}

export const AnimatedList = React.memo(({ className, children, delay = 2000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = React.Children.toArray(children)

    /**
     * to cache previous offers for future checking if either new offer come or not.
     * This is used for determine the delaying time of rendering animation the offer bubble at first render
     */
    const childrenArrayRef = useRef(React.Children.toArray(children).length)

    useEffect(() => {
        const interval = setInterval(
            () => {
                setIndex((prevIndex) => {
                    return prevIndex + 1
                    // return (prevIndex + 1) % childrenArray.length
                })
            },
            childrenArrayRef.current === childrenArray.length ? 0 : delay, // render fast if there is no new offer inserted
        )

        return () => clearInterval(interval)
    }, [childrenArray.length, delay])

    const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray])

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            <AnimatePresence>
                {itemsToShow.map((item) => (
                    <AnimatedListItem key={(item as ReactElement).key}>{item}</AnimatedListItem>
                ))}
            </AnimatePresence>
        </div>
    )
})

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
    const animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
    }

    return (
        <motion.div {...animations} layout className="mx-auto w-full">
            {children}
        </motion.div>
    )
}
