import React from 'react';
import {HeroCheckboxItems} from "@/lib/definitions";
import HeroCheckbox from "@/components/home-page/hero-checkbox";
import Link from "next/link";

const HeroVideo = () => {
    return (
        <div className='w-full p-[150px] pt-[20px] pb-[20px] flex flex-col'>

            <h1 className='text-[80px] font-[800] max-w-[625px]'>
                Create your best content yet.
            </h1>
            <h1 className='max-w-[570px] mt-[8px] mb-[30px] text-[20px] line-[32px] font-[300]'>
                Your online studio to record in high quality, edit in a flash, and go live with a bang. Not necessarily
                in that order.
            </h1>
            <h1>What would you like to start creating?</h1>
            <div className={"mt-1 flex items-center gap-x-4"}>
                {
                    HeroCheckboxItems.slice(0, 4).map((item) => (
                        <HeroCheckbox key={item.name} name={item.name}/>
                    ))
                }
            </div>
            <div className={"mt-4 flex items-center gap-x-4"}>
                {
                    HeroCheckboxItems.slice(4).map((item) => (
                        <HeroCheckbox key={item.name} name={item.name}/>
                    ))
                }
            </div>
            <Link href={"/"}
                  className={"bg-purple-500 text-white pt-[15px] pr-[30px] pb-[16px] pl-[30px] text-center rounded-[4px] text-[14px] font-[700] line-[17px] mt-6 w-[200px] hover:bg-purple-500 transition duration-200"}>
                Start for free
            </Link>
            <p className={"mt-1 text-xs text-gray-7"}>* No credit card needed. Free plan available.</p>
        </div>
    );
}

export default HeroVideo;
