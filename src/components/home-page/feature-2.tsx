import FeatureTitle from "@/components/home-page/feature-title";
import StartLink from "@/components/home-page/start-link";
import Image from "next/image";
import Tracks from "@/components/home-page/tracks";

const Feature2 = () => {
    return (
        <div className="bg-white w-full flex flex-col gap-y-2 items-center justify-center pt-[80px] pb-[80px]">
            <FeatureTitle
                title={"Record it."}
                description={
                    "Studio-quality, separate audio and video tracks for each participant, thanks to our local recording technology."
                }
                titleColor={"black"}
                descColor={"black"}
            />
            <StartLink />
            <div className="text-purple-500 line-[25px] cursor-pointer mt-2">
                Learn More -&gt;
            </div>
            <div className="flex justify-start items-center w-full">
                <div
                    className="grid relative mt-12 w-[65.625vw] pt-[10px] pr-[10px] grid-cols-[1fr_32.75vw] grid-rows-auto gap-0 bg-[url('https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/666fcc404642477c7f31bc95_tablet-svg.svg')] bg-[length:cover] bg-[position:100%_0]"
                >
                    <Image
                        src={
                            "https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/67d2ce501261e59d2658a39c_rec-marsha.webp"
                        }
                        alt={""}
                        width={1520}
                        height={2550}
                        className="w-full"
                    />
                    <Image
                        src={
                            "https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/67d2cde1dfae2252b7c2d5ec_rec-steve_2.webp"
                        }
                        alt={""}
                        width={1520}
                        height={2550}
                        className="w-full"
                    />
                    <Image
                        src={
                            "https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/666fcc407e094a90be500a49_camera-svg.svg"
                        }
                        alt={""}
                        width={109}
                        height={32}
                        className="absolute left-[435px] top-[3px]"
                    />
                    <Image
                        src={
                            "https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/666fcc404b3322aa44ddec63_rec-svg.svg"
                        }
                        alt={""}
                        width={82}
                        height={53}
                        className="absolute top-[20px] right-[20px] rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-y-40 items-center ml-6 mr-6">
                    <Image src={"https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/67d2ca7dbc972f1d392ec398_rec-tab.png"} alt={""} width={954} height={554} className={"rounded-[1.12vw] w-[33vw]"} />
                    <Tracks/>
                </div>
            </div>
        </div>
    );
};

export default Feature2;
