import React from 'react'
import Navbar from './navbar'
import HeroVideo from './hero-video'
import Feature1 from "@/components/home-page/feature-1";
import Feature2 from "@/components/home-page/feature-2";
import Feature3 from "@/components/home-page/feature-3";
import Feature4 from "@/components/home-page/feature-4";
import Feature5 from "@/components/home-page/feature-5";
import Feature6 from "@/components/home-page/feature-6";

const HomePage = () => {
    return (
        <div className="w-full">
            <div className="relative w-full flex flex-col">
                {/* Background video */}
                <div className="relative w-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-wf-ignore="true"
                        className="w-full h-auto max-h-[800px] object-cover -z-10 absolute top-0 left-0 hidden sm:block"
                    >
                        <source src="https://cdn.prod.website-files.com/67bafcff360152c2d8be2546%2F67d04becc9cabf3459083d15__Hero-Mobile%20%28750X750%29-transcode.mp4" />
                        <source src="https://cdn.prod.website-files.com/67bafcff360152c2d8be2546%2F67d04becc9cabf3459083d15__Hero-Mobile%20%28750X750%29-transcode.webm" />
                    </video>

                    <div className="relative z-10">
                        <Navbar />
                        <HeroVideo />
                    </div>
                </div>
            </div>
            <Feature1/>
            <Feature2/>
            <Feature3/>
            <Feature4/>
            <Feature5/>
            <Feature6/>
        </div>
    )
}

export default HomePage
