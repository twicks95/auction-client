"use client"
import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion"
import React, { useRef } from "react"

interface Props {
    readonly className?: string
    readonly from?: number
    readonly to: number
    readonly animationOptions?: KeyframeOptions
    readonly type: "currency" | "number"
}

function AnimatedCounter(props: Props): JSX.Element {
    const { from = 0, to = 0, className, type = "number" } = props
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true })

    useIsomorphicLayoutEffect(() => {
        const element = ref.current

        if (!element) return
        if (!inView) return

        // Set initial value
        element.textContent = String(from)

        // If reduced motion is enabled in system's preferences
        if (window.matchMedia("(prefers-reduced-motion)").matches) {
            element.textContent = String(to)
            return
        }

        const controls = animate(from, to, {
            duration: 2,
            ease: "easeInOut",
            ...props.animationOptions,
            onUpdate(value: number) {
                switch (type) {
                    case "number":
                        element.textContent = value.toFixed(0)
                        break
                    case "currency":
                        element.textContent = new Intl.NumberFormat("ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 2,
                        }).format(value).split(/\s+/)[1]
                        break
                    default:
                        break
                }
            },
        })

        // Cancel on unmount
        return () => {
            controls.stop()
        }
    }, [ref, inView, props.from, props.to])

    return <span ref={ref} className={className} />
}

export default AnimatedCounter
