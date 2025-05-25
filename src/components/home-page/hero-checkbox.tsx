"use client"

import {useState} from "react";

const HeroCheckbox = ({name} : {name : string}) => {

    const [isClicked, setIsClicked] = useState(false)

    return <div className={`cursor-pointer rounded-[36px] border text-[13px] line-1 pt-[8px] pb-[8px] pr-[11px] pl-[11px] flex items-center justify-start bg-transparent font-[300] ${isClicked ? "border-purple-500" : "border-gray-9"}  gap-x-2 hover:border-purple-500 transition duration-200}`} onClick={() => {
        setIsClicked(prevState => !prevState)
    }} >
        <input checked={isClicked} readOnly type={"checkbox"} className={`rounded-md border ${isClicked ? "border-purple-500" : "border-gray-9"}  cursor-pointer bg-transparent transition duration-200 accent-purple-500 checked:bg-purple-500 checked:border-purple-500`} />
        {name}
    </div>
}

export default HeroCheckbox