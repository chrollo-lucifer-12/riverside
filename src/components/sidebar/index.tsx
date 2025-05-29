import Image from "next/image";
import React from "react";
import Link from "next/link";
import DisplayRoutes from "@/components/sidebar/display-routes";
import UserAvatar from "@/components/sidebar/user-avatar";

const Sidebar = () => {
    return <aside className={"w-[17%] h-screen bg-gray-12 pt-6 pb-6 pl-4 pr-4 flex flex-col gap-y-2"}>
        <header>
            <Link href={"/dashboard"}>
                <Image
                    src="https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/63c7db55c443b0eaaf0fe9c5_navbar-logo-updated-black.svg"
                    alt=''
                    width={133}
                    height={20}

                />
            </Link>
        </header>
        <section className={"mt-4 flex flex-col justify-between h-full"}>
            <section>
                <DisplayRoutes/>
            </section>
            <section>
                <UserAvatar/>
            </section>
        </section>
    </aside>
}

export default Sidebar