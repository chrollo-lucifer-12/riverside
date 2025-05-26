import Image from "next/image";
import {ArrowDownToLineIcon} from "lucide-react";
import {tracks_items} from "@/lib/definitions";

const Tracks = () => {
    return <div
        className={"rounded-[1.12vw] w-[33vw] text-white bg-black pt-[1.66vw] pb-[1.66vw] pl-[0.76vw] pr-[0.76vw] font-[300] line-[22px]"}>
        <h1 className={"ml-[0.9vw] text-[1.25vw] line-[0.9vw] "}>Download separate tracks</h1>
        <div className={"mt-4 flex flex-col gap-y-2"}>
            {
                tracks_items.map((item,i) => <div key={i} className={"p-[0.76vw] text-[16px] line-[22px] flex justify-between bg-gray-11 rounded-[0.55vw]"}>
                    <div className={"flex gap-x-2 items-center"}>
                        <Image
                            src={item.src}
                            alt={""} width={40} height={40}/>
                        <div className={"flex flex-col justify-between gap-y-2"}>
                            <p>{item.name}</p>
                            <p className={"text-xs text-gray-7"}>{item.status}</p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-x-6"}>
                        <p className={"text-xs text-gray-7"}>3840 x 2160</p>
                        <div className={"flex items-center gap-x-2"}>
                            <ArrowDownToLineIcon/>
                            <p>WAV</p>
                        </div>
                        <div className={"flex items-center gap-x-2"}>
                            <ArrowDownToLineIcon/>
                            <p>MP4</p>
                        </div>
                    </div>
                </div>)
            }


        </div>
    </div>
}

export default Tracks