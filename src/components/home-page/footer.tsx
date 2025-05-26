import Image from "next/image";
import {footerSections} from "@/lib/definitions";

const Footer = () => {
    return <div className={"w-full pt-[80px] pb-[80px] bg-white p-12"}>
        <Image
            src="https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/63c7db55c443b0eaaf0fe9c5_navbar-logo-updated-black.svg"
            alt=''
            width={133}
            height={20}
        />
        <div className={"mt-6 sm:flex grid grid-cols-2 gap-2 w-full justify-between"}>
            {
                footerSections.map((item,i) => <div key={i} className={"flex flex-col gap-y-1"}>
                    <p className={"lg:text-sm text-xs text-black font-semibold"}>{item.category}</p>
                    <div className={"flex flex-col gap-y-1"}>
                        {
                            item.links.map((l,i) => <p key={i} className={"lg:text-md text-sm text-gray-6 cursor-pointer"}>{l}</p>)
                        }
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Footer