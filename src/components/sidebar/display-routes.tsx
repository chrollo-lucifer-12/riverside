"use client"

import {sidebar_links} from "@/lib/definitions";
import Link from "next/link";
import {usePathname} from "next/navigation";

const DisplayRoutes = () => {

    const pathname = usePathname();

    const isActiveRoute = (name : string) => {
        return pathname.split("/").includes(name.toLowerCase());
    }

    return <div className={"flex flex-col gap-y-2"}>
        {
            sidebar_links.map(({icon : Icon, href, name}) => (
                <Link key={name} href={href} className={`pt-2 pb-2 pl-5 pr-5 hover:bg-[#222222] rounded-lg flex gap-x-3 items-center transition duration-200 ${isActiveRoute(name) && "bg-[#222222]"} `}>
                    <Icon className={"w-6 h-6"} />
                    <p>{name}</p>
                </Link>
            ))
        }
    </div>
}

export default DisplayRoutes