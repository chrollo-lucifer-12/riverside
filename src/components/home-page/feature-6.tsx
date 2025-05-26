import FeatureTitle from "@/components/home-page/feature-title";
import StartLink from "@/components/home-page/start-link";

const Feature6 = () => {
    return <div className={"w-full pt-[80px] pb-[80px] flex flex-col gap-y-0.5 items-center bg-gray-12 rounded-b-[60px] mb-10"}>
        <FeatureTitle
            title={"Take it from here."}
            titleColor={"white"}
        />
        <FeatureTitle
            title={"Start creating with Riverside"}
            titleColor={"white"}
        />
        <StartLink/>
    </div>
}

export default Feature6