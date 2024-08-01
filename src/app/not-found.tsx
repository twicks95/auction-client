import Link from "next/link"
import React from "react"
import RsuiteButton from "../components/atoms/rsuite/Button/Button"

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-screen h-screen">
            <p>
                Sorry the page you are trying to visit is <span className="text-red-500 font-bold">NOT FOUND</span>
            </p>
            <div className="flex flex-col justify-center items-center">
                Click the button below if you are a buyer
                <Link href="/buyer/dashboard">
                    <RsuiteButton>Back to dashboard</RsuiteButton>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
