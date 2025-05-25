import Marquee from "react-fast-marquee";

import Image from "next/image";
import {feature_1_images, imageLinks} from "@/lib/definitions";
import VideoDisplay from "@/components/home-page/video-display";

const Feature1 = () => {
    return <div className={"p-[37px] w-full flex flex-col items-center justify-center bg-[#191919]"}>
        <h1 className={"mb-[30px] text-[18px] font-[400] line-[22px] text-gray-6"}>Trusted by individuals &
            businesses</h1>
        <div className={"flex gap-x-6 items-center mb-[39px]"}>
            <Image src={"/icon_LEADER.png"} alt={""} width={50} height={55}/>
            <div className={"border border-gray-7 h-8"} />
            <div className={"flex flex-col items-center gap-y-1"}>
                <div className={"flex items-center gap-x-2"}>
                    <p className={"text-white text-[23px] line-[20px] font-[800] "}>4.8</p>
                    <Image src={"/icon_STARS.png"} alt={""} width={92} height={20}/>
                </div>
                <p className={"text-gray-7 text-[12px] line-[9px] font-[300]"}>On G2 with 881 reviews</p>
            </div>
        </div>
        <Marquee speed={40} gradient={false} className="w-full py-4">
            {imageLinks.map((link, i) => (
                <Image
                    key={i}
                    src={link.src}
                    alt=""
                    width={link.size}
                    height={120}
                    className="mx-6 object-contain"
                />
            ))}
        </Marquee>
        <h1 className={"mb-[24px] text-[30px] font-[700] line-[34px]"}>Made with Riverside</h1>
        <div className={"flex gap-x-6"}>
            {
                feature_1_images.map((item,i) => <VideoDisplay key={i} src={item.src} title={item.title}/>)
            }
        </div>
    </div>
}

export default Feature1;