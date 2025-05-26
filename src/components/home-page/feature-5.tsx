import FeatureTitle from "@/components/home-page/feature-title";
import Image from "next/image";
import {feature_5_items, imageLinks} from "@/lib/definitions";
import StartLink from "@/components/home-page/start-link";
import Marquee from "react-fast-marquee";

const Feature5 = () => {
    return <div className={"w-full pt-[80px] pb-[80px] flex flex-col gap-y-2 items-center mb-20"}>
        <FeatureTitle
            title={"Publish & promote it, easy."}
            titleColor={"white"}
        />
        <div className={"flex w-full justify-between pl-[220px] pr-[220px] mt-6"}>
            {
                feature_5_items.map((item, i) => <div key={i} className={"flex justify-between bg-gray-12 rounded-lg"}>
                    <div className={"pt-12 pb-12 pl-6 pr-6 flex flex-col justify-between"}>
                        <div className={""}>
                            <p className={"text-white font-bold text-2xl"}>{item.title}</p>
                            <p className={"text-gray-7 max-w-[185px]"}>
                                {item.subTitle}
                            </p>
                        </div>
                        <div className="text-purple-500 line-[25px] cursor-pointer mt-2">
                            Learn More -&gt;
                        </div>
                    </div>
                    <Image
                        src={item.src}
                        alt={""} width={290} height={220} className={"rounded-lg p-2"}/>
                </div>)
            }
        </div>
        <div className={"w-full pl-[220px] pr-[220px]"}>

            <div className={"flex justify-between bg-gray-12 rounded-lg  mt-2"}>
                <div className={"pt-12 pb-12 pl-6 pr-6 flex flex-col justify-between"}>
                    <div className={""}>
                        <p className={"text-white font-bold text-2xl"}>Magic Clips</p>
                        <p className={"text-gray-7 max-w-[185px]"}>
                            Turn any recording into perfect, ready-to-share social clips. Use them as jumping-off points
                            for more tweaks or share them as they are.
                        </p>
                    </div>
                    <div className="text-purple-500 line-[25px] cursor-pointer mt-2">
                        Learn More -&gt;
                    </div>
                </div>
                <Image
                    src={"https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/666318b76fb62d0e0eb0cbd0_magic-clips_plugit.png"}
                    alt={""} width={900} height={737} className={"rounded-lg p-2"}/>
            </div>
        </div>
        <div className={"w-full pl-[220px] pr-[220px] mt-2 "}>
            <div
                className={"text-center rounded-lg flex flex-col gap-y-1 items-center justify-center pt-[68px] pb-[59px] font-[300] text-lg shadow-md bg-gray-12"}>
                <p className={"text-[30px] font-[400] line-[40px]"}>Record. Stream. Edit. All in one place.</p>
                <p className={"mb-[24px] text-[30px] font-[800] line-[40px]"}>Start creating with Riverside.</p>
                <StartLink/>
            </div>
        </div>
        <div className={"w-full mt-12 pt-[90px] pb-[23px] "} style={{backgroundImage : "url(https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/67d2e0da0fb1b64faa57f670_recording__bg.webp)"}}>
            <div className={"flex flex-col gap-y-2 pl-[220px] pr-[220px]"}>
                <h1 className={"font-bold text-5xl max-w-[380px]"}>Take one, for the team.</h1>
                <p className={"text-md text-gray-7 max-w-[431px]"}>Everything we have to offer, plus seamless
                    collaboration, advanced production controls, and all the security standards and support your
                    business requires.</p>

            </div>
            <Marquee speed={40} gradient={false} className="w-full py-4 mt-10">
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
        </div>
    </div>
}

export default Feature5