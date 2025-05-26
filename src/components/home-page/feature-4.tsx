import FeatureTitle from "@/components/home-page/feature-title";
import StartLink from "@/components/home-page/start-link";

const Feature4 = () => {
    return <div className={"w-full bg-[#f6f4f9] pt-[80px] pb-[80px] flex flex-col gap-y-2 items-center"}>
        <FeatureTitle
            title={"Go Live."}
            description={
                "Stream your events and webinars in full HD from your fully branded studio. Simulcasting, omnichat, and lots more included."
            }
            titleColor={"black"}
            descColor={"black"}
        />
        <StartLink/>
        <div className="text-purple-500 line-[25px] cursor-pointer mt-2">
            Learn More -&gt;
        </div>
        <video preload={"metadata"} playsInline muted loop autoPlay className={"pl-20 pr-20"}>
            <source src={"/livestream_desktop.mp4"} type={"video/mp4"} />
        </video>
    </div>
}

export default Feature4