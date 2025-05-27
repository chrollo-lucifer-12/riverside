"use client"

import {user_menu_options} from "@/lib/definitions";
import Link from "next/link";

const UserMenu = () => {
    return <div className={"bg-[#1d1d1d] rounded-lg border border-gray-10 w-[270px] p-2"}>
        {
            user_menu_options[0].map(({icon : Icon, name}) => (
                <Link key={name} href={"/"} className={"pt-4 pb-4 pl-5 pr-5 hover:bg-[#222222] rounded-lg flex gap-x-3 items-center transition duration-200"}>
                    <Icon className={"h-4 w-4"}/>
                    <p className={"text-xs"}>{name}</p>
                </Link>
            ))
        }
        <div className={"w-full border border-gray-10 mt-2 mb-2"  } />
        {
            user_menu_options[1].map(({icon : Icon, name}) => (
                <Link key={name} href={"/"} className={"pt-4 pb-4 pl-5 pr-5 hover:bg-[#222222] rounded-lg flex gap-x-3 items-center transition duration-200"}>
                    <Icon className={"h-4 w-4"}/>
                    <p className={"text-xs"}>{name}</p>
                </Link>
            ))
        }
    </div>
}

export default UserMenu