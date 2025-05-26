"use client"
import { clsx } from "clsx";
import {ReactNode} from "react";

interface CustomButtonProps {
    children : ReactNode
    type : "submit" | "reset" | "button"
    onClick ?: () => void
    cn ?: string
}

const CustomButton = ({children, type, onClick,cn} : CustomButtonProps) => {
    return <button  type={type} onClick={onClick}   className={clsx("rounded-lg p-2 text-white  bg-[#222222] hover:bg-gray-9 flex items-center justify-center cursor-pointer transition duration-100",cn)}>
        {children}
    </button>
}

export default CustomButton