"use client"
import {LucideIcon} from "lucide-react"

interface ButtonLayoutProps {
    heading : string
    description : string
    icon : LucideIcon
}

const ButtonLayout = ({description,heading,icon : Icon} : ButtonLayoutProps) => {
    return <div className={"w-[200px] rounded-md flex flex-col gap-y-1 pt-4 pb-4 pl-4 pr-4 bg-gray-11 hover:bg-gray-10 cursor-pointer transition duration-100"}>
        <Icon className={"w-4 h-4 mb-4 text-purple-500"} />
        <h1 className={"font-bold"}>{heading}</h1>
        <p className={"text-gray-7 text-xs"}>{description}</p>
    </div>
}

export default ButtonLayout