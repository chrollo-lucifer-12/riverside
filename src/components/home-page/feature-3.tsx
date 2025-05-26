import FeatureTitle from "@/components/home-page/feature-title";
import StartLink from "@/components/home-page/start-link";
import Image from "next/image";
import {feature_3_items} from "@/lib/definitions";

const Feature3 = () => {
    return <div className={"w-full pt-[80px] pb-[80px] flex flex-col gap-y-2 items-center"}>
        <FeatureTitle
            title={"Edit it."}
            description={
                "Cut down on editing time, without losing out on editing capabilities. No learning curve needed, and zero file transfer required."
            }
            titleColor={"white"}
            descColor={"white"}
        />
        <StartLink/>
        <div className="text-purple-500 line-[25px] cursor-pointer mt-2">
            Learn More -&gt;
        </div>
        <div className={"flex flex-col gap-y-6 items-center justify-center mt-10 lg:pl-[220px] lg:pr-[220px] p-2"}>
            <Image
                src={"https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/6662a9974a19239119c676ec_edit_it.webp"}
                alt={""} width={1716} height={1076} className={"border-10 rounded-lg border-gray-10"}/>
            <div className={"flex flex-col justify-between w-full sm:flex-row gap-y-6 gpa-x-6"}>
                <div className={"bg-gray-10 rounded-lg text-white font-[300] line-[22px]"}>
                    <div className={"flex flex-col gap-y-2 pt-[35px] pb-[45px] pl-[24px] pr-[24px]"}>
                        <h3 className={"text-[30px] font-[700] line-[34px] "}>Text-based editing</h3>
                        <p className={"text-gray-7 max-w-[340px]"}>Search, delete, copy, and paste in the transcript to
                            edit
                            your recording just like a doc.</p>
                    </div>
                    <Image
                        src={"https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/6662a99731ab4babf275cb8a_text-based.webp"}
                        alt={""} width={522} height={203} className={"p-2 rounded-md"}/>
                </div>
                <div className={"bg-gray-10 rounded-lg text-white font-[300] line-[22px]"}>
                    <div className={"flex flex-col gap-y-2 pt-[35px] pb-[45px] pl-[24px] pr-[24px]"}>
                        <h3 className={"text-[30px] font-[700] line-[34px] "}>Multi-track editing</h3>
                        <p className={"text-gray-7 max-w-[340px]"}>Remove crosstalk, change up video layouts, and control audio track volume in a whole new way.</p>
                    </div>
                    <Image
                        src={"https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/6662a99731ab4babf275cb8a_text-based.webp"}
                        alt={""} width={522} height={203} className={"p-2 rounded-md"}/>
                </div>
            </div>
        </div>
        <span className={"flex mt-10 gap-x-2 sm:text-5xl text-lg flex-col"}>
            <p>Editing simplified,</p>
            <p className={"font-semibold"}>in the blink of AI</p>
        </span>
        <div className={"flex w-full gap-y-6 flex-col sm:flex-row justify-between mt-10 lg:pl-[120px] lg:pr-[120px] p-2"}>
            {
                feature_3_items.slice(0,3).map((item,i) => (
                    <div key={i} className={"bg-gray-10 rounded-lg sm:ml-10 w-full flex flex-col"}>
                        <p className={"text-white font-bold text-2xl pt-12 pl-6 pr-6"}>{item.title}</p>
                        <p className={"text-gray-7 max-w-[310px] pl-6 pr-6"}>{item.subTitle}</p>
                        <Image src={item.src} alt={""} width={563} height={257} className={"mt-8 rounded-b-lg"} />
                    </div>
                ))
            }
        </div>
        <div className={"flex flex-col gap-y-6 sm:flex-row w-full justify-between lg:pl-[320px] lg:pr-[320px] mt-2 p-2"}>
            {
                feature_3_items.slice(3).map((item,i) => (
                    <div key={i} className={"bg-gray-10 rounded-lg sm:ml-10 w-full flex flex-col"}>
                        <p className={"text-white font-bold text-2xl pt-12 pl-6 pr-6"}>{item.title}</p>
                        <p className={"text-gray-7 max-w-[310px] pl-6 pr-6"}>{item.subTitle}</p>
                        <Image src={item.src} alt={""} width={563} height={257} className={"mt-8 rounded-b-lg"} />
                    </div>
                ))
            }
        </div>
        <div className={"rounded-[16px] sm:w-[70%] w-[90%] mt-10 flex items-center justify-center flex-col pt-[68px] pb-[59px]"} style={{backgroundImage : "url(https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/666ad4a7717f0849e8ed75dc_cta-gradient.svg)"}} >
            <p className={"text-[30px] font-[400] line-[40px] text-center"}>Record. Stream. Edit. All in one place.</p>
            <p className={"mb-[24px] text-[30px] font-[800] line-[40px] text-center"}>Start creating with Riverside.</p>
            <StartLink/>
        </div>
    </div>
}

export default Feature3