"use client"

import {user_menu_options} from "@/lib/definitions";
import {useActionState, useTransition} from "react";
import {LogoutAction} from "@/actions/auth";
import {LogOutIcon, UserIcon} from "lucide-react";

const UserMenu = () => {

    const [state, action, pending] = useActionState(LogoutAction, undefined);
    const [isPending, startTransition] = useTransition();

    return <div className={"bg-[#1d1d1d] rounded-lg border border-gray-10 w-[270px] p-2 absolute z-10 bottom-0 left-0"}>
        {
            user_menu_options[0].map(({icon: Icon, name}) => (
                <div key={name}
                     className={"pt-4 pb-4 pl-5 pr-5 hover:bg-[#222222] rounded-lg flex gap-x-3 items-center transition duration-200"}>
                    <Icon className={"h-4 w-4"}/>
                    <p className={"text-xs"}>{name}</p>
                </div>
            ))
        }
        <div className={"w-full border border-gray-10 mt-2 mb-2"}/>
        <div
            className={"pt-4 pb-4 pl-5 pr-5 hover:bg-[#222222] rounded-lg flex gap-x-3 items-center transition duration-200"}>
            <UserIcon className={"h-4 w-4"}/>
            <p className={"text-xs"}>My Account</p>
        </div>

        <div
             className={"pt-4 pb-4 pl-5 pr-5 hover:bg-[#222222] rounded-lg flex gap-x-3 items-center transition duration-200 text-red-500 cursor-pointer"} onClick={() => {
                 if (!isPending) {
                     startTransition(() => {
                         action();
                     })
                 }
        }}>
            <LogOutIcon className={"h-4 w-4"}/>
            <p className={"text-xs"}>{isPending ? "Logging out" : "Log out"}</p>
        </div>

    </div>
}

export default UserMenu