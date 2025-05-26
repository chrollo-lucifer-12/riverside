import React from 'react';
import {HeroCheckboxItems} from "@/lib/definitions";
import HeroCheckbox from "@/components/home-page/hero-checkbox";
import StartLink from "@/components/home-page/start-link";

const HeroVideo = () => {
    return (
        <div className='w-full sm:p-[150px] sm:pt-[20px] sm:pb-[20px] flex flex-col p-[50px] items-center sm:items-start'>
            <h1 className='sm:text-[80px] sm:font-[800] max-w-[625px] mt-10 text-[30px] font-[700] text-center sm:text-left'>
                Create your best content yet.
            </h1>
            <h1 className='max-w-[570px] mt-[8px] mb-[30px] sm:text-[20px] sm:line-[32px] font-[300] text-center sm:text-left'>
                Your online studio to record in high quality, edit in a flash, and go live with a bang. Not necessarily
                in that order.
            </h1>
            <h1 className={"sm:block hidden"}>What would you like to start creating?</h1>
            <div className={"mt-1 sm:flex items-center gap-x-4 hidden "}>
                {
                    HeroCheckboxItems.slice(0, 4).map((item) => (
                        <HeroCheckbox key={item.name} name={item.name}/>
                    ))
                }
            </div>
            <div className={"mt-4 sm:flex items-center gap-x-4 hidden "}>
                {
                    HeroCheckboxItems.slice(4).map((item) => (
                        <HeroCheckbox key={item.name} name={item.name}/>
                    ))
                }
            </div>
            <StartLink/>
            <p className={"mt-1 text-xs text-gray-7 text-center sm:text-left"}>* No credit card needed. Free plan available.</p>
        </div>
    );
}

export default HeroVideo;
