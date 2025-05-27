"use client"
import { clsx } from "clsx";
import {ReactNode} from "react";
import { Loader } from 'rsuite';

interface CustomButtonProps {
    children : ReactNode
    type : "submit" | "reset" | "button"
    disabled ?: boolean
    onClick ?: () => void
    cn ?: string
}

const CustomButton = ({children, type, onClick,cn,disabled} : CustomButtonProps) => {
    return <button disabled={disabled} type={type} onClick={onClick}   className={clsx("rounded-lg p-2 text-white  bg-[#222222] hover:bg-gray-9 flex items-center justify-center cursor-pointer transition duration-100",cn)}>
        {
            disabled ? (<Loader/>) : (children)
        }
    </button>
}

export default CustomButton